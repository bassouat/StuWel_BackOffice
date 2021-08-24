const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Temoignage = db.Temoignage;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await Temoignage.find();
}

async function getById(id) {
    return await Temoignage.findById(id);
}

async function create(temoignageParam) {
    console.log('temoignageParam ', temoignageParam);
    const temoignage = new Temoignage({ data: temoignageParam.dataTemoignage });
    // save temoignage
    await temoignage.save();
}

async function update(id, userParam) {
    const temoignage = await Temoignage.findById(id);

    // validate
    if (!temoignage) throw 'User not found';
    if (temoignage.username !== userParam.username && await Temoignage.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    // hash password if it was entered
    if (userParam.password) {
        userParam.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // copy userParam properties to user
    Object.assign(temoignage, userParam);

    await temoignage.save();
}

async function _delete(id) {
    await Temoignage.findByIdAndRemove(id);
}