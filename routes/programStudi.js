var express = require("express");
var router = express.Router();
var ProgramStudi = require("../models/ProgramStudiModel");

router.get("/", function (req, res, next) {
    ProgramStudi.findAll()
      .then((data) => {
        res.json({
          status: true,
          pesan: "Berhasil Tampil",
          data: data,
        });
      })
      .catch((err) => {
        res.json({
          status: false,
          pesan: "Gagal Tampil: " + err.message,
          data: [],
        });
      });
  });
  /* TAMBAH DATA */
  router.post("/", function (req, res, next) {
    ProgramStudi.create(req.body)
      .then((data) => {
        res.json({
          status: true,
          pesan: "Berhasil Tambah",
          data: data,
        });
      })
      .catch((err) => {
        res.json({
          status: false,
          pesan: "Gagal Tambah: " + err.message,
          data: [],
        });
      });
  });
  /* UBAH DATA */
  router.put("/", function (req, res, next) {
    ProgramStudi.update(req.body, {
      where: { kode_prodi: req.body.kode_prodi },
    })
      .then(() => {
        res.json({
          status: true,
          pesan: "Berhasil Ubah",
          data: [],
        });
      })
      .catch((err) => {
        res.json({
          status: false,
          pesan: "Gagal Ubah: " + err.message,
          data: [],
        });
      });
  });
  /* HAPUS DATA */
  router.delete("/", function (req, res, next) {
    ProgramStudi.destroy({
      where: { kode_prodi: req.body.kode_prodi },
    })
      .then(() => {
        res.json({
          status: true,
          pesan: "Berhasil Hapus",
          data: [],
        });
      })
      .catch((err) => {
        res.json({
          status: false,
          pesan: "Gagal Hapus: " + err.message,
          data: [],
        });
      });
  });
  module.exports = router;