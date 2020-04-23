const mongoose =require('mongoose')
const proSchema=mongoose.Schema({
  pname:String,
  price:String,
  image:{data: Buffer, type: String}
})

module.exports=mongoose.model('Product',proSchema);