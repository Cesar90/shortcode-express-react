import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Table } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import { URL_CREATE_RESET } from '../constants/urlConstants'
// import Meta from '../components/Meta'
import { listUrls } from '../actions/urlActions'

const UrlScreen = ({ match, history }) => {
  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const urlList = useSelector((state) => state.urlList)
  const { loading, error, urls, page, pages } = urlList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (!userInfo) {
      history.push('/admin/login')
    } else {
      dispatch(listUrls(pageNumber))
      dispatch({ type: URL_CREATE_RESET })
    }
  }, [history, dispatch, pageNumber, userInfo])

  const redirectPage = (code) => {
    window.open(
      window.location.origin + `/${code}`,
      '_blank',
      'toolbar=0,location=0,menubar=0'
    )
  }

  return (
    <>
      {/* <Meta /> */}
      <h1 className="mainTitle">List Shortcode</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>URL</th>
                <th>visits</th>
                <th>shortcode</th>
              </tr>
            </thead>
            <tbody>
              {urls.map((url) => (
                <tr key={url._id}>
                  <td>{url.longUrl}</td>
                  <td>{url.visitsCount ? url.visitsCount : 0}</td>
                  <td>
                    <Link to='' onClick={() => redirectPage(url.urlCode)}>
                      {url.urlCode}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Paginate pages={pages} page={page} />
        </>
      )}
    </>
  )
}

export default UrlScreen
