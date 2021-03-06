import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../Home'
import Books from '../Books'
import BookStores from '../BookStores'

import './index.scss'

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/books" component={Books} />
      <Route path="/bookstores" component={BookStores} />
    </Switch>
  </main>
)

export default Main
