import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'

const Url = ({ url }) => {
  return (
    <Card>
      <ListGroup variant='flush'>
        <ListGroup.Item>
          <Row>
            <Col>Long Url:</Col>
            <Col>
              <strong>${url.longUrl}</strong>
            </Col>
          </Row>
        </ListGroup.Item>

        <ListGroup.Item>
          <Row>
            <Col>Short Url:</Col>
            <Col>{url.shortUrl}</Col>
          </Row>
        </ListGroup.Item>

        {/* {product.countInStock > 0 && (
          <ListGroup.Item>
            <Row>
              <Col>Qty</Col>
              <Col>
                <Form.Control
                  as='select'
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                >
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            </Row>
          </ListGroup.Item>
        )} */}

        {/* <ListGroup.Item>
          <Button
            onClick={addToCartHandler}
            className='btn-block'
            type='button'
            disabled={product.countInStock === 0}
          >
            Add To Cart
          </Button>
        </ListGroup.Item> */}
      </ListGroup>
    </Card>
  )
}

export default Url
