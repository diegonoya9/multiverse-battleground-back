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
                    { association: "userfighters", where: whereCondition },
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
    buy: async (req, res) => {
        const user_id = req.body[0].user_id
        const object_id = req.body[0].object_id
        const userObject = await db.UserObjects.findOne({
            where: { user_id, object_id },
        });
        if (userObject) {
            // Si existe, actualizar la cantidad
            userObject.quantity += 1;
            await userObject.save(); // Guardar los cambios en la base de datos
            console.log(userObject.quantity);
        } else {
            // Si no existe, crear un nuevo UserObject
            await db.UserObjects.create({
                object_id,
                user_id,
                quantity: 1,
            });
        }
        /*
          await db.UserObjects.findAll({ include: [{ association: "users" }, { association: "objects" }], where: { user_id: user_id, object_id }, })
              .then((userObjects) => {
                  if (userObjects[0]) {
                      let updatedData = userObjects[0]
                      updatedData.quantity += 1
                      db.UserObjects.update(updatedData, {
                          where: { user_id: user_id, object_id },
                      });
                      console.log(updatedData.quantity)
                  } else {
                      db.UserObjects.create({
                          "object_id": object_id,
                          "user_id": user_id,
                          "quantity": 1
                      })
                  }
              })*/

        return res.send("ok")
        /*const [updatedRowCount] = await db.Users.update(updatedData, {
            where: { user_id: userId },
          });*/
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