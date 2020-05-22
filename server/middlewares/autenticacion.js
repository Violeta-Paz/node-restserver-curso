

const Jwt = require('jsonwebtoken');


// =====================
// Verificar Token
// =====================
let verificaToken = (req, res, next) => {

    let token = req.get('token');

    Jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no válido'
                }
            });
        }

        req.usuario = decoded.usuario;
        next();

    });

};


// ===================
// verifica adminRole
// ===================

let verificaAdmin_Role = (req, res, next) => {

    let usuario = req.usuario;

    if (usuario.role === 'ADMIN_ROLE') {
        next();

    } else {
        return res.json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        });
    };


};

// =====================
// Verificar Token
// =====================
let verificaTokenImg = (req, res, next) => {

    let token = req.query.token;

    Jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no válido'
                }
            });
        }

        req.usuario = decoded.usuario;
        next();

    });

    

};





module.exports = {
    verificaToken,
    verificaAdmin_Role,
    verificaTokenImg
};