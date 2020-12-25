/**
 * Faculties Collection
 * A Faculty has a number of academic staff associated with it
 * A Faculty has a number of departments associated with it
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schemas
const Faculty_Schema = new Schema({ 
    name: {type: String, required: true, unique: true},
    academic_staff: [{profile_name: String, profile_id: mongoose.Types.ObjectId}],
    department: [{department_name: String, department_id: mongoose.Types.ObjectId}]
}, {
    timestamps: true,
    collection: 'Faculty'
});


// Models
const Faculty_Model = mongoose.model('Faculty', Faculty_Schema);

module.exports = Faculty_Model;
