import React, { Component } from 'react'
import {Link} from 'react-router'

export default class App extends Component {
  render(){
    return (
      <Link  className="btn btn-info"  to={{ pathname:'/admin' }}>Admin</Link>
    )
  }
}
