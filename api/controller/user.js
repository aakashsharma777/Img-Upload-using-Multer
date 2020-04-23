var Product=require('../model/ImageModel') // schema
var fs = require('fs');
var multer=require('multer');
//var   moment = require('moment')

var storage = multer.diskStorage({
    destination: function(req, file, cd) {
        cd(null, 'upload/')
    },
    filename: function(req, file, cd) {        
        cd(null,file.originalname) 
    }
})

var uploads = multer({
    storage: storage
}).any('');

//////////////////////////////////////////////////////////

module.exports.register=(req, res) => {
    uploads(req, res, (err) => {
        if (err) {
            console.warn(err)
        } else {
            var imagename = req.files;
            var x;       
          console.log(imagename)
          console.log(req.path)
          var newArr=imagename.map((data)=>{
            x=data.path; 
            //return data.path;
          })
          console.log(x)
        
          var pname=req.query.pname;
          var price=req.query.price;
          var image=x;
          new Product({
              pname:pname,
              price:price,
              image:image
          }).save().then((data)=>{
              console.log(data)
             // response.json({'msg':'Data Inserted'})
          })          
          
        }
        })
    }