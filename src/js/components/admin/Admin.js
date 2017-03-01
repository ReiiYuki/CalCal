import React, { Component } from 'react'
import service from '../../firebase'

export default class Admin extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  authentication(e){
    e.preventDefault()
    let self = this
    service.auth((token,name)=>{
      self.setState({
        token : token,
        name : name
      })
    })
  }

  render(){
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>CalCal Administrator Panel</h1>
            </div>
          </div>
        </div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            {!this.state.token?
              <div className="row">
                <div className="col-12 text-center">
                  <button type="button" className="btn btn-primary text-center" onClick={(e)=>this.authentication(e)}>Login With Facebook</button>
                </div>
              </div>:
              <div className="row">
                <div className="col-12 text-center">
                  <h2 className="display4">Welcome, {this.state.name}</h2>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}
