import React from 'react';

const VehicleDetail = ({vehicle}) => {

    const divStyle={
        width:'40rem',
        height:'420px',
        marginBottom:'30px'
    };

    const imgStyle={
        height:'20rem'
    }

    if(vehicle){
        return(
            <div className="card" style={divStyle}>
                <img className="card-img-top" src={vehicle.img} alt="Car" style={imgStyle}/>
                <div className="card-block">
                    <h4 className="card-title">{vehicle.model}</h4>
                    <p className="card-text">Year is {vehicle.year} . Color is {vehicle.color} . Manufacturer is {vehicle.manufacturer}</p>
                </div>
            </div>
        )
    }
    return <p>Loading .....</p>
}

export default VehicleDetail;

