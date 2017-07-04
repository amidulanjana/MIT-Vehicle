var mongoose=require("mongoose");
var Schema=mongoose.Schema;

var VehicleSchema=new Schema({
    manufacturer:String,
    model:String,
    color:String,
    year:String,
    img:String

});

module.exports=mongoose.model("Vehicle",VehicleSchema);