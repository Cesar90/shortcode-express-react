import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import RedirectScreen from './screens/RedirectScreen'
import UrlScreen from './screens/UrlScreen'
import LoginScreen from './screens/LoginScreen'
import UrlCreateScreen from './screens/UrlCreateScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/admin/register' component={RegisterScreen} />
          <Route path='/admin/profile' component={ProfileScreen} />
          <Route path='/:code' component={RedirectScreen} exact />
          <Route path='/page/:pageNumber' component={UrlScreen} exact />
          <Route path='/admin/login' component={LoginScreen} />
          <Route path='/admin/create' component={UrlCreateScreen} exact />
          <Route path='/' component={UrlScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
