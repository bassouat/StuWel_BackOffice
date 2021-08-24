const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Acteur = db.Acteur;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await Acteur.find();
}

async function getById(id) {
    return await Acteur.findById(id);
}

async function create(acteurParam) {
    const acteur = new Acteur({
        data: acteurParam.dataActeur,
        pays: acteurParam.paysActeur
    });
    // save acteur
    await acteur.save();
}

async function update(id, userParam) {
    const acteur = await Acteur.findById(id);

    // validate
    if (!acteur) throw 'User not found';
    if (acteur.username !== userParam.username && await Acteur.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    // hash password if it was entered
    if (userParam.password) {
        userParam.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // copy userParam properties to user
    Object.assign(acteur, userParam);

    await acteur.save();
}

async function _delete(id) {
    await Acteur.findByIdAndRemove(id);
}