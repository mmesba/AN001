/*
 * Title: Simple schema for testing
 * Description: 
 * Author: Mohammad Mesbaul Haque
 * Github link: https://github.com/mmesba
 * Date: 19/01/2022
 */
 
// Dependencies.
const mongoose = require('mongoose');

 

// main functions or objects.
const demoSchema = mongoose.Schema({
    num: {
        type: Number,
        required: true
    }
}) 
 
// Creating model 
const DemoModel = mongoose.model('Contact', demoSchema);
 
 
// export the module.
    module.exports = DemoModel;