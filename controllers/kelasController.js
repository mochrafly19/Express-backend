import kelasName from "../models/namaKelasModel.js";
import User from "../models/UserModel.js";
 
export const getKelas = async(req, res) =>{
    try {
        const datakelas = await kelasName.findAll({
        include:{
            model:User,
            as:"users"
        },
    });
        return res.status(201).json(datakelas);
    } catch (error) {
        console.log(error.message);
    }
}
 
export const createKelas = async(req, res) =>{
    try {
        const{namaKelas,waliKelas,angkatan}=req.body;
        if(!namaKelas || !waliKelas || !angkatan)
        return res.status(400).json({msg:"data tidak boleh kosong"});
    const kelasBaru=await kelasName.create({namaKelas,waliKelas,angkatan});
    return res.status(200).json({msg:"data berhasil di simpan" ,kelas:kelasBaru});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const updateKelas = async(req, res) =>{
    try {
        await kelasName.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Kelas Updated"});
    } catch (error) {
        console.log(error.message);
    }
}
 
export const deleteKelas = async(req, res) =>{
    try {
        await kelasName.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Kelas Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}