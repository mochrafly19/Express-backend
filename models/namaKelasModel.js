import db from "../config/database.js";
import { Sequelize } from "sequelize";

const {DataTypes}=Sequelize;

const kelasName=db.define("kelas",{
    namaKelas:DataTypes.STRING,
    waliKelas:DataTypes.STRING,
    angkatan:DataTypes.STRING,
},{
    freezeTableName:true
});

export default kelasName;
