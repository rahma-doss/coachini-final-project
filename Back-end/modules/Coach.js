const mongoose = require('mongoose')

const CoachSchema = mongoose.Schema({
    FirstName :{
        type: String,
        required: true
    },
    LastName:{
        type: String,
        required: true
    },
    Age:{
        type: Number,
        required: true
    },
    Email:{
        type: String,
        required: true
    },
    PhoneNumber:{
        type: Number,
        required: true
    },
    Specialite:{
        type: String,
        required: true
    },
    presentation:{
        type: String,
        required: true
    },
    Ville:{
        type: String,
        required: true
    },
    Image:{
        type: String,
        required: true
    },
    Video:{
        type: String,
        required: true
    },
    Tarifs:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }

})

// exporter coach.js 


module.exports = mongoose.model('coach', CoachSchema)
