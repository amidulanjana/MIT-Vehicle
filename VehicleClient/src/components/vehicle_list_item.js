import React from 'react';


const VehicleListItem = ({vehicle,onVehicleSelect}) => {

    const liStyle={
        cursor:'pointer'
    }

    return (

        <li onClick={()=>onVehicleSelect(vehicle)} className="list-group-item" style={liStyle}>
            <div className="media">
                <div className="media-left">
                    <img className="media-object " src={vehicle.img} width="420"/>
                </div>
                <div className="media-body">
                    <h4  className="media-heading">{vehicle.model}</h4 >
                    <div>
                        <p>{vehicle.color}</p>
                        <p>{vehicle.year}</p>
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default VehicleListItem;