const koneksi = require("../app/database");
const Sequelize = require("sequelize");

const Kurikulum = koneksi.define(
  "kurikulum",
  {
    id_kurikulum: {
      type: Sequelize.BIGINT(20),
      primaryKey: true,
      autoIncrement: true,
    },
    nama_kurikulum: {
      type: Sequelize.STRING(255),
    },
    kode_prodi: {
      type: Sequelize.STRING(10),
      allowNull: true,
    },
    id_semester: {
      type: Sequelize.INTEGER(5),
    },
    jumlah_sks_lulus: {
      type: Sequelize.DECIMAL(5, 2),
    },
    jumlah_sks_wajib: {
      type: Sequelize.DECIMAL(5, 2),
    },
    jumlah_sks_pilihan: {
      type: Sequelize.DECIMAL(5, 2),
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

module.exports = Kurikulum;
