const express = require('express')
const router = express.Router();

const images = [
   "image1.jpeg",
   "image2.jpeg",
   "image3.jpeg",
   "image4.jpeg",
   "image5.jpeg",
   "image6.jpeg",
   "image7.jpeg",
   "image8.jpeg",
   "image9.jpeg",
   "image10.jpeg",
   "image11.jpeg",
   "image12.jpeg",
   "image13.jpeg",
   "image14.jpeg",
   "image15.jpeg",
   "image16.jpeg",
   "image17.jpeg",
   "image18.jpeg",
   "image19.jpeg",
   "image20.jpeg",
   "image21.jpeg",
   "image22.jpeg",
   "image23.jpeg",
   "image24.jpeg",
   "image25.jpeg",
   "image26.jpeg",
   "image27.jpeg",
   "image28.jpeg",
   "image29.jpeg",
   "image30.jpeg",
   "image31.jpeg",
   "image32.jpeg",
   "image33.jpeg",
   "image34.jpeg",
   "image35.jpeg",
   "image36.jpeg",
   "image37.jpeg",
   "image38.jpeg",
   "image39.jpeg",
   "image40.jpeg",
   "image41.jpeg",
   "image42.jpeg",
   "image43.jpeg",
   "image44.jpeg"
];



router.get('/home' , (req , res)=>{
   res.render('./app/index.ejs')
})

router.get('/projects' , (req , res)=>{
   res.render('./app/projects.ejs' , {images})
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