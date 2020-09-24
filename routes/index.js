const express = require('express')
const router = express.Router()
const fileUploader = require('../configs/cloudinary')
const Travel = require('../models/Travel')

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index')
})

router.post('/add/travel', fileUploader.single('image'), (req, res) => {
  const { location } = req.body

  console.log(req.file)

  Travel.create({ location, imageUrl: req.file.path })
    .then(() => {
      res.redirect('/travels')
    })
    .catch(err => {
      console.log(err)
    })
})

router.get('/travels', (req, res) => {
  Travel.find()
    .then(travels => {
      res.render('travels', { travels })
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router
