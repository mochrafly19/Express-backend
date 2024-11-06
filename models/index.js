import db from "../config/database.js";
import User from "./UserModel.js";
import kelasName from "./namaKelasModel.js";
import assoModel from "./joinModel.js";

const syncUserKelas=async()=>{
    try{
        assoModel();
        await db.sync({alter:true,force:true});
        console.log("database and model synced succesfully");
    } catch (error){
        console.log(error.messege);
    }
}

export{User, kelasName, syncUserKelas};