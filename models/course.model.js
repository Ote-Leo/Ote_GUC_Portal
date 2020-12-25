/**
 * Courses collection
 * A course might related to multiple departments
 * A course has a number of instructors associated with it
 * A course has a number of teaching assistants associated with it
 * A course has a single of coordinator that belongs to the teaching assistants
 * 
 * A course has a specific number of teaching slots
 * 
 * Course coverage = (number of assigned slots) / (Total number of slots)
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schemas
const Course_Slot_Schema = new Schema({
    _id: {type: Number},
    type: {type: String, required: true},
    staff_name: {type: String},
    staff_id: {type: mongoose.Types.ObjectId, required: true}
}, {
    timestamps: true
});

const Course_Schema = new Schema({
    name: {type: String, required: true, unique: true},
    department: [{department_name: String, department_id: mongoose.Types.ObjectId}],
    instructors: [{instructor_name: String, instructor_id: mongoose.Types.ObjectId}],
    coordinator_id: {type: mongoose.Types.ObjectId},
    assistants: [{assistant_name: String, assistant_id: mongoose.Types.ObjectId}],

    number_slots: {type: Number, required: true},
    assigned_slots: [Course_Slot_Schema] 
}, {
    timestamps: true,
    collection: 'Course'
});
// Schema methods
Course_Schema.methods.Calculate_Course_Coverage = function() {
    return this.assigned_slots.length / this.number_slots;
};

Course_Schema.methods.Is_Fully_Covered = function() {
    return (this.assigned_slots / this.number_slots) === 1;
};


// Model
const Course_Model = mongoose.model('Course', Course_Schema);


module.exports = Course_Model;
