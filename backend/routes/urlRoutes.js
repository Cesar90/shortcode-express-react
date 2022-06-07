import express from 'express'
const router = express.Router()
import {
  getUrls,
  createUrl,
  getUrlByCode,
} from '../controllers/urlController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getUrls).post(protect, admin, createUrl)
router.route('/:code').get(getUrlByCode)

export default router
