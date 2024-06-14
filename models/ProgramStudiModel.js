var koneksi = require("../app/database");
const Sequelize = require("sequelize");
const prodi = koneksi.define("program_studi",
  {
    kode_prodoi: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },
    nama_prodi: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    id_jenj_didik: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    id_neofeeder: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  },
  {
    freezeTableName: true,
  },
);
module.exports = prodi;
