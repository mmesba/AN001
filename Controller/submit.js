const DemoModel = require('../Models/Num');

// main functions
const submit = (req, res)=>{
        const myData = new DemoModel({
            num: req.body.num
        })

        myData.save((err)=>{
            if (err) {
                res.status(500).send(err.message); 
              } else {
                 res.send({data:req.body})
             }
        })
}

module.exports = submit;