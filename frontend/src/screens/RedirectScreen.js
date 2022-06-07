import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { urlDetails } from '../actions/urlActions'

const RedirectScreen = ({ match }) => {
  const code = match.params.code
  const dispatch = useDispatch()
  const urlInfo = useSelector((state) => state.urlDetail)
  const { loading, error, url } = urlInfo

  useEffect(() => {
    if (!error) {
      if (url.longUrl) {
        window.location.href = url.longUrl
      } else {
        dispatch(urlDetails(code))
      }
    }
  }, [dispatch, code, url, error])

  return (
    <>
      <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Redirect Url</h1>
        {loading && <Loader />}
        {error && <Message variant='danger'>{error}</Message>}
      </FormContainer>
    </>
  )
}

export default RedirectScreen
