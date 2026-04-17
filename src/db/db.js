const mongoose =require("mongoose");

async function connectDB(){
    await mongoose.connect("mongodb://yt:Zley7f4G7Hzze4w4@ac-sbirgdl-shard-00-00.snljk2x.mongodb.net:27017,ac-sbirgdl-shard-00-01.snljk2x.mongodb.net:27017,ac-sbirgdl-shard-00-02.snljk2x.mongodb.net:27017/?ssl=true&replicaSet=atlas-bfzpv6-shard-0&authSource=admin&appName=yt-complete-backend/halley")

    console.log("connected to DB")
}

module.exports=connectDB