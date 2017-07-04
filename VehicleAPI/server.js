var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var mongoose=require("mongoose");
var Vehicle=require("./app/models/vehicle");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port=process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017/VehicleAPI");

var router=express.Router();

app.use(function (req, res, next) {
        // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    console.log("security");
    next();
});

app.use('/api',router);


//middleware
router.use(function(res,req,next){
   
    console.log("something happenning");
    next();
})

router.get('/',function(req,res){
    res.json({message:'welcome'});
});

router.route('/vehicles')
    .post(function(req,res){
        var vehicle=new Vehicle();
        vehicle.manufacturer=req.body.manufacturer;
        vehicle.model=req.body.model;
        vehicle.color=req.body.color;
        vehicle.year=req.body.year;
        vehicle.img=req.body.img;

        vehicle.save(function(err){
            if(err){
                res.send(err);
            }
            res.json({message:"ok"});
        });

    })
    .get(function(req,res){
        Vehicle.find(function(err,vehicles){
            if(err){
                res.send(err)
            }
            res.json(vehicles)
        });
        
    });

router.route("/vehicles/:vehicle_id")
    .get(function(req,res){
        Vehicle.findById(req.params.vehicle_id,function(err,vehicle){
            if(err){
                res.send(err);
            }
            res.json(vehicle);
        })
    });

router.route("/vehicles/make/:make").
    get(function(req,res){
        Vehicle.find({make:req.params.make},function(err,vehicle){
            if(err){
                res.send(err)
            }
            res.send(vehicle);
        });
    });


app.listen(port);
console.log("port is " + port);
