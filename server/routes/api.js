const express = require('express');
const multer = require('multer');
const router = express.Router();
const Cars = require('../models/EVCars')

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, './uploads/');
    },
    filename: function(req,file,cb) {
        cb(null, new Date().toISOString() + file.originalname)
    }
})
const upload = multer({storage: storage})


// GET BACK ALL THE CARS
router.get("/", async (req,res) => {
    try{
        const cars = await Cars.find();
        res.json(cars);
    }catch(err){
        res.json({message:err})
    }
});

router.get("/hi", (req,res) => res.status(200).json("hey there!"));

//CREATE A NEW CAR
router.post("/", upload.single('carImage'), async (req,res) => {
    console.log(req.file)
    const car = new Cars({
        model: req.body.model,
        brand: req.body.brand,
        year: req.body.year,
        carImage: req.file.path
    });

    try {
        const savedCar = await car.save();
        res.json(savedCar)
        console.log(savedCar)
    }catch(err) {
        res.json({message: 'this a error'})
    }


});

//GET SPECIFIC CAR
router.get('/:postId', async (req,res) => {
    try{
        const car = await Cars.findById(req.params.postId);
        res.json(car)
    }catch (err){
        res.json({message:err})
    }
})

//REMOVE SPECIFIC CAR
router.delete('/:postId', async (req,res) => {
    try{
        const removedCar = await Cars.remove({_id: req.params.postId});
        res.json(removedCar)
    }catch (err){
        res.json({message:err})
    }
})

//UPDATE SPECIFIC POST
router.patch('/:postId', async (req,res) => {
    try{
        const updatedCar = await Cars.updateOne(
            {_id: req.params.postId}, 
            {$set: {model: req.body.model}}
            );
        res.json(removedCar)
    }catch (err){
        res.json({message:err})
    }
})

module.exports = router;