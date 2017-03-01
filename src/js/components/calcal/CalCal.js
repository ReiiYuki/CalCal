import React, { Component } from 'react'
import service from '../../firebase'
import {Link} from 'react-router'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      order : []
    }
  }

  addFoodToOrder(e,food){
    e.preventDefault()
    let order = this.state.order
    order.push(food)
    this.setState({
      order : order
    })
  }

  calculate(){
    let totalCal = 0
    this.state.order.forEach((food)=>{
      totalCal += parseInt(food.cal)
    })
    return totalCal
  }

  componentDidMount(){
    self = this
    service.getFood((data)=>{
      self.setState({
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
        <div className="container">
          <div className="row">
            <div className="col jumbotron">
              <div className="row">
                <div className="col">
                  {this.state.menu?
                    <div>
                      <button type="button" className="btn btn-success" data-toggle="modal" data-target="#menu-modal">Add Menu</button>
                      <div className="modal fade" id="menu-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="exampleModalLongTitle">Menu</h5>
                              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <div className="row">
                                {
                                  this.state.menu.map((food)=>(
                                    <div className="col">
                                      <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={(e)=>this.addFoodToOrder(e,food)}>{food.name} ({food.cal} Cal.)</button>
                                    </div>
                                  ))
                                }
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    :<div></div>
                  }
                </div>
              </div>
              <div className="row">
                <div className="col">
                  {
                    this.state.order.map((food)=>(
                      <div className="row">
                        <div className="col">
                          {food.name} ({food.cal} Cal.)
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-block">
                  <h4 className="card-title">Total Calories</h4>
                  <h5>{this.calculate()}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<Link  className="btn btn-info"  to={{ pathname:'/admin' }}>Admin</Link>*/}
      </div>
    )
  }
}
