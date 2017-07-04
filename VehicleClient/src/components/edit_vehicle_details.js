import React, { Component } from 'react';

import Request from 'superagent';
import VehicleDetail from './vehicle_detail'

class EditVehicleDetails extends Component{

    constructor(props) {
        super(props);
        this.state = {
            Model:'',
            Color:'',
            Manufacturer:'',
            Year:'',
            Image:''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    addVehicleDetails(e) {
        e.preventDefault();
        console.log(this.state.Model)
        //console.log(this.state.Color)

        const object={
            manufacturer:this.state.Manufacturer,
            model:this.state.Model,
            color:this.state.Color,
            year:this.state.Year,
            img:this.state.Image,
        }

        Request
            .post('http://localhost:3000/api/vehicles/')
            .send(object)
            .set('Accept', 'application/json')
            .end(function(err, res){
                if (err || !res.ok) {
                    alert('Oh no! error');
                } else {
                    alert('yay got ' + JSON.stringify(res.body));
                    
                }
            });
            

    }

     handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        this.setState({
            [name]: value
        });
    }

    render(){
        return(
        <div className="card">
            <div className="card-block">
                <form>
                    
                    <div className="form-group row">
                        <label  className="col-sm-2 col-form-label col-form-label-sm">Model</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control form-control-sm" id="Model" name="Model" onChange={this.handleInputChange}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label  className="col-sm-2 col-form-label col-form-label-sm">Color</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control form-control-sm" name="Color" onChange={this.handleInputChange}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label  className="col-sm-2 col-form-label col-form-label-sm">Manufacturer</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control form-control-sm" name="Manufacturer" onChange={this.handleInputChange}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label  className="col-sm-2 col-form-label col-form-label-sm">Year</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control form-control-sm" name="Year" onChange={this.handleInputChange}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label  className="col-sm-2 col-form-label col-form-label-sm">Image</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control form-control-sm" name="Image" onChange={this.handleInputChange}/>
                        </div>
                    </div>
                    <button className="btn btn-warning" onClick={this.addVehicleDetails.bind(this)}>Submit</button>
                </form>
            </div>
        </div>
    )
    }

}

export default EditVehicleDetails;