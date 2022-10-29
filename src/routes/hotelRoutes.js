import express from "express";
import HotelController from "../controllers/hotelController.js";

const router = express.Router();

router
  .get("/hoteis", HotelController.buscarHotel)
  .get("/hoteis/:id", HotelController.buscarHotelPorId)
  .post("/hoteis", HotelController.cadastrarHotel)
  .put("/hoteis/:id", HotelController.atualizarHotel)
  .delete("/hoteis/:id", HotelController.deletarHotel);
export default router;
