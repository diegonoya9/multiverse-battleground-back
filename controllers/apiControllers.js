const fs = require('fs');
const path = require('path');
const db = require('../database/models')
const sequelize = db.sequelize
const { Op } = require('sequelize')


const apiControllers = {
    getAllUsers: async (req, res) => {
        try {
            // Verificar si se proporciona el user_id en la solicitud
            const user_id = req.params.user_id ? req.params.user_id : null;

            // Construir la condición de búsqueda
            const whereCondition = user_id ? { user_id: user_id } : {};

            // Realizar la consulta a la base de datos
            const users = await db.Users.findAll({
                include: [
                    { association: "userfighters", where: whereCondition, include: [{ model: db.Fighters, as: 'fighters' }] },
                    { association: "userobjects", where: whereCondition, include: [{ model: db.Objects, as: 'objects', attributes: ['name'] }] },
                ],
            });

            // Enviar los datos como respuesta
            res.send(users);
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al obtener usuarios.');
        }
    },
    getAllFighters: async (req, res) => {
        await db.Fighters.findAll()
            .then((fighters) => {
                return res.send(fighters)
            })
    },
    getAllObjects: async (req, res) => {
        await db.Objects.findAll()
            .then((objects) => {
                return res.send(objects)
            })
    },
    getAllUserFighters: async (req, res) => {
        await db.UserFighters.findAll({ include: [{ association: "users" }, { association: "fighters" }] })
            .then((userFighters) => {
                return res.send(userFighters)
            })
    },
    getAllUserObjects: async (req, res) => {
        const user_id = req.params.user_id;
        await db.UserObjects.findAll({ include: [{ association: "users" }, { association: "objects" }], where: { user_id: user_id }, })
            .then((userObjects) => {
                return res.send(userObjects)
            })
    },
    getAllFighterLevels: async (req, res) => {
        await db.FighterLevels.findAll({ include: [{ association: "fighters" }] })
            .then((fighterLevel) => {
                return res.send(fighterLevel)
            })
    },
    buyObject: async (req, res) => {
        const user_id = req.body[0].user_id
        const object_id = req.body[0].object_id
        const object = await db.Objects.findOne({ where: { object_id } })
        const userMoney = await db.UserObjects.findOne({
            where: { object_id: 7 } //7 es Money
        });
        if (userMoney.quantity > object.price) {
            userMoney.quantity -= object.price //poner el precio del objeto comprado
            await userMoney.save();
            const userObject = await db.UserObjects.findOne({
                where: { user_id, object_id },
            });
            /*falta ver si en esta funcion restamos la plata tabmién o si se hace por otro lado*/
            if (userObject) {
                // Si existe, actualizar la cantidad
                userObject.quantity += 1;
                await userObject.save(); // Guardar los cambios en la base de datos
            } else {
                // Si no existe, crear un nuevo UserObject
                await db.UserObjects.create({
                    object_id,
                    user_id,
                    quantity: 1,
                });
            }
        } else {
            return res.send("no money")
        }
        return res.send("ok")
    },
    buyFighter: async (req, res) => {
        const user_id = req.body[0].user_id
        const fighter_id = req.body[0].fighter_id
        const fighter = await db.Fighters.findOne({ where: { fighter_id } })
        const userMoney = await db.UserObjects.findOne({
            where: { object_id: 7 } //7 es Money
        });
        if (userMoney.quantity > fighter.price) {
            userMoney.quantity -= fighter.price //poner el precio del objeto comprado
            await userMoney.save();
            await db.UserFighters.create({
                fighter_id,
                user_id,
                active: "false",
                in_party: "false",
                extra_accuracy: 0,
                extra_max_hp: 0,
                extra_attack: 0,
                extra_special_attack: 0,
                extra_defense: 0,
                extra_special_defense: 0,
                current_xp: 0,
                level: 1
            });
        } else {
            return res.send("no money")
        }
        return res.send("ok")
    },
    createUser: async (req, res) => {
        await db.Users.create({
            "name": "Ameo",
            "email": "ameo@gmail.com",
            "password": "123456",
            "avatar": "Ameo.jpg",
            "profile": "Admin",
            "money": 5000,
        })
        db.Users.findAll()
            .then((users) => {
                return res.send(users)
            })
    },
    createFighterLevels: async (req, res) => {
        await db.FighterLevels.create({
            "name": "Ameo",
            "email": "ameo@gmail.com",
            "password": "123456",
            "avatar": "Ameo.jpg",
            "profile": "Admin",
            "money": 5000,
        })
        db.Users.findAll()
            .then((users) => {
                return res.send(users)
            })
    }
}

module.exports = apiControllers