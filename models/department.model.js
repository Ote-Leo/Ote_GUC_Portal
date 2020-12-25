/**
 * Departements Collection
 * A Department is associated with a single faculty
 * A Department has a 'Head Of Department' (HOD), who belongs to it's faculty staff members
 * A Department has a number of course associated with it
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Schemas
const Department_Schema = new Schema({
    name: {type: String, unique: true, required: true},
    faculty: [{faculty_name: String, faculty_id: mongoose.Types.ObjectId}],
    hod: {profile_name: String, profile_id: mongoose.Types.ObjectId},
    courses: [{course_name: String, course_id: mongoose.Types.ObjectId}]
}, {
    timestamps: true,
    collection: 'Department'
});


// Models
const Department_Model = mongoose.model('Department', Department_Schema);


module.exports = Department_Model;
