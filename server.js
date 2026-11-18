import {app} from './src/app.js';
import mongoosedb from './src/database/dbconnection.js';


app.listen(process.env.PORT,async ()=>{
    await console.log(process.env.PORT); 
    await console.log("server started ..!!");
})

mongoosedb();
