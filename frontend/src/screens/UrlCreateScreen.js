import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { createProduct } from '../actions/urlActions'
import { URL_CREATE_RESET } from '../constants/urlConstants'

const UrlCreateScreen = ({ history }) => {
  const [url, setUrl] = useState('')
  const dispatch = useDispatch()
  const urlCreate = useSelector((state) => state.urlCreate)
  const { loading, error, success } = urlCreate

  useEffect(() => {
    if (success) {
      dispatch({ type: URL_CREATE_RESET })
      history.push('/')
    }
  }, [history, dispatch, success])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createProduct({
        longUrl: url,
        host: window.location.protocol + '//' + window.location.host,
      })
    )
  }

  return (
    <>
      <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Create Url</h1>
        {loading && <Loader />}
        {error && <Message variant='danger'>{error}</Message>}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='name'
              placeholder='Enter name'
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type='submit' variant='primary'>
            Create
          </Button>
        </Form>
      </FormContainer>
    </>
  )
}

export default UrlCreateScreen
