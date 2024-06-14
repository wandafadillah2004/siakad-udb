var express = require("express");
var router = express.Router();
var JenjangPendidikan = require("../models/JenjangPendidikanModel");

router.get("/", function (req, res, next) {
    JenjangPendidikan.findAll()
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
    JenjangPendidikan.create(req.body)
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
    JenjangPendidikan.update(req.body, {
      where: { id_jenj_didik: req.body.id_jenj_didik },
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
    JenjangPendidikan.destroy({
      where: { id_jenj_didik: req.body.id_jenj_didik },
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