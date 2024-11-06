import express from "express";
import {
    getKelas, 
    createKelas,
    updateKelas,
    deleteKelas
} from "../controllers/kelasController.js";
 
const router = express.Router();
 
router.get('/kelas', getKelas);
router.post('/kelas', createKelas);
router.patch('/kelas/:id', updateKelas);
router.delete('/kelas/:id', deleteKelas);
 
export default router;