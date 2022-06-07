
import React from 'react';
import renderConnected from '../renderConnected';
import UrlScreen  from '../screens/UrlScreen'
import LoginScreen from '../screens/LoginScreen'
import '@testing-library/jest-dom'

describe('App', () => {
  let wrapper, getByText;
  const initialState = {
    userLogin: { userInfo: {
        email: "test@test.test",
        name: "test",
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjQwY2RjYTkyNDNkMWI2Y2FlZDg1NSIsImlhdCI6MTY1NDYyNjc2NiwiZXhwIjoxNjU3MjE4NzY2fQ.pfv2Vw1u9aUDSsaXjjIbsv4PMVLFZUC2avo6qA-ZRo4",
        _id: "61240cdca9243d1b6caed855"
    } }
  };

  it('renders if user is login', () => {
    const utils = renderConnected(<UrlScreen match={ {params: ''} } />, { initialState });
    wrapper = utils.container;
    getByText = utils.getByText;
    const linkElement = getByText(/List Shortcode/i)
    expect(linkElement).toBeInTheDocument();
  });

  it('renders if not login', () => {
    const initialState = {
        userLogin:{}
    }
    const utils = renderConnected(<LoginScreen match={ {params: ''} } location={ {search: ''} } />, { initialState });
    wrapper = utils.container;
    getByText = utils.getByText;
    const linkElement = getByText(/Password/i)
    expect(linkElement).toBeInTheDocument();
  });
});