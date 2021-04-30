import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../page/home/index'
function RouteMap() {
  return (
    <div>
      <Route exact path="/" component={Home} />
    </div>
  )
}
export default RouteMap