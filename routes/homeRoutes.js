const express = require('express')
const router = express.Router();

router.get('/home' , (req , res)=>{
   res.render('./app/index.ejs')
})

router.get('/projects' , (req , res)=>{
   res.render('./app/projects.ejs')
})

router.get('/equipments' , (req , res)=>{
   res.render('./app/equipments.ejs')
})

router.get('/contactInfo' , (req , res)=>{
   res.render('./app/contactInfo.ejs')
})
router.get('/services' , (req, res)=>{
   res.render('./app/services.ejs')
})
router.get('/staffInfo' , (req , res)=>{
   res.render('./app/staffInfo.ejs')
})

module.exports = router;