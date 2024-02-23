const mongoose= require('mongoose');

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/sehat-ai');
  }
main().catch(err => console.log(err));

const db=mongoose.connection;
db.on('error', console.error.bind(console,'Error in connecting to the MongoDB'));
db.once('open', ()=>{
    console.log('Connected to the Database: : MongoDB')
})

module.exports=db;

