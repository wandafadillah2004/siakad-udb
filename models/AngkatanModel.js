var koneksi = require("../app/database");
const Sequelize = require("sequelize");
const angkatan = koneksi.define("angkatan",
  {
    tahun: {
      type: Sequelize.STRING(4),
      allowNull: false,
      primaryKey: true,
    },
  },
  {
    freezeTableName: true,
  },
);
module.exports = angkatan;
