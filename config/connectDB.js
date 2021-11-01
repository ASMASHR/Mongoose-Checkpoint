const mongoose=require('mongoose')
const config=require('config')

const connectDB=()=>{
try{
    mongoose.connect(config.get("MONGO_URI",   {useNewurlParser: true,useCreateIndex: true,useUnifiedTopology: true,useFindAndModify: true}))
    console.log('the database is already connected')
}
catch(err){console.log(err)}
}
module.exports=connectDB