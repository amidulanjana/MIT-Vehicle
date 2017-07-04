import React from 'react';

import VehicleListItem from './vehicle_list_item';


const VehicleList=(props)=>{

    const vehiclesItems=props.vehicles.map((vehicle) => {
        return (
            <VehicleListItem 
                onVehicleSelect={props.onVehicleSelect}
                key={vehicle._id} 
                vehicle={vehicle}/>

        )
    })

    return(
        <div className="col-md-5">
            <ul>
                {vehiclesItems}
            </ul>
        </div>
    );
}

export default VehicleList;