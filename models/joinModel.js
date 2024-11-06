import User  from "./UserModel.js";
import kelasName from "./namaKelasModel.js";

const assoModel=()=>{
    kelasName.hasMany(User,{
        onDelete:"CASCADE",
        onUpdate:"CASCADE",
        foreignKey:"idKelas",
        as:"users"
    });

    User.belongsTo(kelasName,{
        foreignKey : "idKelas",
        as:"kelas"
    });
}

export default assoModel;