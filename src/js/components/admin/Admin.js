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

  updateFood(e){
    e.preventDefault()
    const name = this.refs.form.name.value
    const cal = this.refs.form.cal.value
    service.updateFood(name,cal,this.state.name,(data)=>{
      console.log(data);
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
                  <button type="button" className="btn btn-primary" onClick={(e)=>this.authentication(e)}>Login With Facebook</button>
                </div>
              </div>:
              <div>
                <div className="row">
                  <div className="col text-center">
                    <h3>Welcome, {this.state.name}</h3>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <h4>Insert New Food</h4>
                  </div>
                </div>
                <form className="row" ref="form">
                    <div className="col-md-5">
                      <div className="row">
                        <div className="col">
                          <label for="food-name">Food Name</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <input type="text" className="form-control" id="food-name" placeholder="Enter Food Name" name="name"/>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="row">
                        <div className="col">
                          <label for="food-cal">Food Calories</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <input type="number" className="form-control" id="food-cal" placeholder="Enter Food Calories" name="cal"/>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <button type="button" className="btn btn-success" onClick={(e)=>this.updateFood(e)}>Add</button>
                    </div>
                </form>
              </div>
            }
          </div>
        </div>
      </div>
    )
  }
}
