const mongoose =require('mongoose')
 const schema=mongoose.Schema
const newContact= new schema({
  name:
  {
    type:String,
}  ,
  email:
  {
      type:String
    },
  phone:
  {
      type:Number
    }
}
)
module.exports=Contact=mongoose.model("contacts",newContact)