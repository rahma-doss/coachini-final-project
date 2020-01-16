const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')

const Coach = require('../modules/Coach')


// GET = get all coachs

router.get('/', (req, res) => {
    Coach.find()
        .then(coachs => res.send( coachs ))
        .catch(err => console.log(err.message))
})

// GET = get one coach

router.get('/:id', (req, res) => {
    Coach.findById(req.params.id)
        .then(coach => res.json({ coach }))
        .catch(err => console.log(err.message))
})

// POST = add new coach

router.post('/', (req, res) => {
    const { FirstName, LastName, Age, Email, PhoneNumber, Specialite, presentation, Ville, Image, Video, Tarifs } = req.body
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.json({ error: errors.array() })
    }
    const newCoach = new Coach({
        FirstName,
        LastName,
        Age,
        Email,
        PhoneNumber,
        Specialite,
        presentation,
        Ville,
        Image,
        Video,
        Tarifs
    })
   
    newCoach.save()
    .then(trainer => res.send(trainer))
    .catch(err => console.log(err.message))

})

// DELETE = delete one coach

router.delete('/:id', (req, res) => {
    Coach.findByIdAndDelete(req.params.id)
    Coach.find()
        .then(coachs => res.json({ coachs }))
        .catch(err => console.log(err.message))
})

// PUT = update one coach
router.put('/:id', (req, res) => {
    let updatedCoach = req.body
    Coach.findByIdAndUpdate(req.params.id, {$set: {...updatedCoach}}, (err, data)=> {
        Coach.findById(req.params.id)
        .then(coachs => res.json({coachs}))
        .catch(err => console.log(err.message))
    })
    
})

module.exports = router