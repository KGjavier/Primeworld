const mongoose = require('mongoose');


const PrimejobSchema = new mongoose.Schema({
    position: {
        type: String, 
        required: [true, "Position is required."], 
    }, 
    
    employer: {
        type: String,
        required: [true, "Company is required."]
    },
    
    country: {
        type: String,
        required: [true,"Country is required."],
    },

    qualification: {
        type: String, 
        required: [true, "Qualification is required."], 
        maxLength: [300, "Please put required number of characters."]
    },
    

}, {timestamps: true});


module.exports = mongoose.model('Primejob', PrimejobSchema);
