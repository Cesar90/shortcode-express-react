import asyncHandler from 'express-async-handler'
import Url from '../models/urlModel.js'
import shortid from 'shortid'
import validUrl from 'valid-url'

const getUrls = asyncHandler(async (req, res) => {
  const pageSize = 20
  const page = Number(req.query.pageNumber) || 1

  const count = await Url.countDocuments({})
  const urls = await Url.find({})
    .sort('-visitsCount')
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ urls, page, pages: Math.ceil(count / pageSize) })
})

const createUrl = asyncHandler(async (req, res) => {
  const { longUrl, host } = req.body

  if (!validUrl.isUri(longUrl)) {
    throw new Error('This url is invalid')
  }

  if (!validUrl.isUri(host)) {
    throw new Error('This url is invalid')
  }

  const urlExist = await Url.findOne({ longUrl: longUrl })
  if (urlExist) {
    throw new Error('This URL already exits')
  }

  const urlCode = shortid.generate()
  const shortUrl = host + '/' + urlCode

  const url = new Url({
    longUrl,
    shortUrl,
    urlCode,
    visitsCount: 0,
    date: new Date(),
  })

  const newUrl = await url.save()
  if (newUrl) {
    res.json(newUrl)
  } else {
    res.status(404)
    throw new Error('There was a error')
  }
})

const getUrlByCode = asyncHandler(async (req, res) => {
  const url = await Url.findOne({ urlCode: req.params.code })
  if (url) {
    let visitsCount = 0
    if (!Number.isInteger(url.visitsCount)) {
      visitsCount = 1
    } else {
      visitsCount = url.visitsCount + 1
    }

    await Url.findOneAndUpdate(
      { _id: url._id },
      { visitsCount: visitsCount },
      { new: true }
    )

    res.json(url)
  } else {
    res.status(404)
    throw new Error('Url not found')
  }
})

export { getUrls, createUrl, getUrlByCode }
