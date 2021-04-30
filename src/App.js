import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteMap from './route/index'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
export default class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <RouteMap />
        </BrowserRouter>
      </div>
    )
  }
}


