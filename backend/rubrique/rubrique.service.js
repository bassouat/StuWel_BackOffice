const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const Rubrique = db.Rubrique;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await Rubrique.find();
}

async function getById(id) {
    return await Rubrique.findById(id);
}

async function create(rubriqueParam) {
    let rubrique = new Rubrique({ name: rubriqueParam.name, data: rubriqueParam.data });
    // save rubrique
    await rubrique.save();
}

async function update(id, userParam) {
    const rubrique = await Rubrique.findById(id);

    // validate
    if (!rubrique) throw 'User not found';
    if (rubrique.username !== userParam.username && await Rubrique.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    // hash password if it was entered
    if (userParam.password) {
        userParam.hash = bcrypt.hashSync(userParam.password, 10);
    }

    // copy userParam properties to user
    Object.assign(rubrique, userParam);

    await rubrique.save();
}

async function _delete(id) {
    await Rubrique.findByIdAndRemove(id);
}