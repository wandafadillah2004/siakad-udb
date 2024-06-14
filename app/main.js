var express = require('express');
var cookieParser = require("cookie-parser");
var angkatan = require('../routes/angkatan');
var jenjangpendidikan = require('../routes/jenjangPendidikan');
var kurikulum = require('../routes/kurikulum');
var matakuliahkurikulum = require('../routes/mataKuliahKurikulum');
var mataKuliah = require('../routes/mataKuliah');
var ProgramStudi = require('../routes/programStudi');
var satuanPendidikan = require('../routes/satuanPendidikan');
var app = express();

app.use(cookieParser());
app.use(express.json());

app.locals.token_neo = "";
app.use('/angkatan', angkatan);
app.use('/jenjangpendidikan', jenjangpendidikan);
app.use('/kurikulum', kurikulum);
app.use('/matakuliahkurikulum', matakuliahkurikulum);
app.use('/matakuliah', mataKuliah);
app.use('/programstudi', ProgramStudi);
app.use('/satuanPendidikan', satuanPendidikan);

app.listen(3000, function () {
    console.info("Server running on port 3000");
})