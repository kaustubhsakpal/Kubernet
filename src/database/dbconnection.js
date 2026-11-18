import mongoose from 'mongoose';
 const mongoosedb= async()=>{
try{
await mongoose.connect(process.env.Mongoose_url)
.then(()=>{
    console.log("database connected succesfully..!!");
 
})
}
catch(err){
console.log("error connecting database ",err);
}
}

export default mongoosedb;