// ================
// puerto
// ================

process.env.PORT = process.env.PORT || 3000;

// ================
// Entorno
// ================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ================
// vencimiento del token
// ================

process.env.CADUCIDAD_TOKEN = '48h';

// ================
// seed de autenticacion
// ================

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// ================
// Base de datos
// ================

let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';

} else {
    //urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;


// ===================
// Google Clien ID
// ===================

process.env.CLIENT_ID  = process.env.CLIENT_ID || '651779756203-dadf097vumh80l9s07iun0vc081huc7q.apps.googleusercontent.com';