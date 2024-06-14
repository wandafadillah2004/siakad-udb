var koneksi = require("../app/database");
const Sequelize = require("sequelize");

const MataKuliah = koneksi.define("mata_kuliah",
  {
    kode_mata_kuliah: {
      type: Sequelize.STRING(10),
      primaryKey: true,
    },
    nama_mata_kuliah: {
      type: Sequelize.STRING(255),
    },
    kode_prodi: {
      type: Sequelize.STRING(10),
      allowNull: true,
    },
    id_jenis_mata_kuliah: {
      type: Sequelize.CHAR(1),
    },
    id_kelompok_mata_kuliah: {
      type: Sequelize.CHAR(1),
    },
    sks_mata_kuliah: {
      type: Sequelize.DECIMAL(5, 2),
    },
    sks_tatap_muka: {
      type: Sequelize.DECIMAL(5, 2),
    },
    sks_praktik: {
      type: Sequelize.DECIMAL(5, 2),
    },
    sks_praktik_lapangan: {
      type: Sequelize.DECIMAL(5, 2),
    },
    sks_simulasi: {
      type: Sequelize.DECIMAL(5, 2),
    },
    ada_sap: {
      type: Sequelize.INTEGER(1),
    },
    ada_silabus: {
      type: Sequelize.INTEGER(1),
    },
    ada_bahan_ajar: {
      type: Sequelize.INTEGER(1),
    },
    ada_bahan_praktik: {
      type: Sequelize.INTEGER(1),
    },
    ada_diktat: {
      type: Sequelize.INTEGER(1),
    },
    tanggal_mulai_efektif: {
      type: Sequelize.INTEGER(1),
    },
    tanggal_akhir_efektif: {
      type: Sequelize.INTEGER(1),
    },
    id_neofeeder: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
  },
);

module.exports = MataKuliah;
