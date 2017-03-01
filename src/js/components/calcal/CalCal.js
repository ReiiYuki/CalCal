import React, { Component } from 'react'
import service from '../../firebase'
import {Link} from 'react-router'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount(){
    service.getFood((data)=>{
      this.setState({
        menu : data
      })
    })
  }

  render(){
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>CalCal Calories Calculator</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            
          </div>
          <div className="col">

          </div>
        </div>
        {/*<Link  className="btn btn-info"  to={{ pathname:'/admin' }}>Admin</Link>*/}
      </div>
    )
  }
}
