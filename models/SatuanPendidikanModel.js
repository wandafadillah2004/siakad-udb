var koneksi = require("../app/database");
const Sequelize = require("sequelize");

const SatuanPendidikan = koneksi.define("satuan_pendidikan",
  {
    kode_perguruan_tinggi: {
      type: Sequelize.STRING(10),
      primaryKey: true,
    },
    nama_perguruan_tinggi: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    id_neofeeder: {
      type: Sequelize.STRING(255),
      allowNull: true,
    }
  },
  {
    freezeTableName: true,
  }
);

module.exports = SatuanPendidikan;
