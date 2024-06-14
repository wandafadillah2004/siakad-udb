const koneksi = require("../app/database");
const Sequelize = require("sequelize");

const MataKuliahKurikulum = koneksi.define(
  "mata_kuliah_kurikulum",
  {
    id_mata_kuliah_kurikulum: {
      type: Sequelize.BIGINT(20),
      primaryKey: true,
      autoIncrement: true,
    },
    id_kurikulum: {
      type: Sequelize.BIGINT(20),
      // references: {
      //     model: 'kurikulum',
      //     key: 'id_kurikulum'
      // }
    },
    kode_mata_kuliah: {
      type: Sequelize.STRING(10),
      // references: {
      //     model: 'mata_kuliah',
      //     key: 'kode_mata_kuliah'
      // }
    },
    semester: {
      type: Sequelize.INTEGER(1),
    },
    apakah_wajib: {
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

module.exports = MataKuliahKurikulum;
