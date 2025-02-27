const mongoose=require('mongoose');

const connectToDB=async()=>{
    try {
        await mongoose.connect('mongodb+srv://varmagollapalli:book12345@cluster0.vcdpk.mongodb.net/')
        console.log('mongodb is connected');
    } catch (error) {
        console.log('Mongodb connection failed',error);
        process.exit(1)
        
    }

}
module.exports=connectToDB;