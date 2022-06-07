import mongoose from 'mongoose'

const URLSchema = new mongoose.Schema(
  {
    urlCode: {
      type: String,
      required: true,
    },
    longUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      required: true,
    },
    visitsCount: {
      type: Number,
      required: true,
    },
    date: { type: String, default: Date.now },
  },
  {
    timestamps: true,
  }
)

const Url = mongoose.model('Url', URLSchema)
export default Url
