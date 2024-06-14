var koneksi = require("../app/database");
const Sequelize = require("sequelize");
const jenjangPendidikan = koneksi.define("jenjang_pendidikan",
  {
    id_jenj_didik: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },
    nama_jenj_didik: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  },
);
module.exports = jenjangPendidikan;
