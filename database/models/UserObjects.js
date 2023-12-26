module.exports = (sequelize, dataTypes) => {
    let alias = "UserObjects";

    let cols = {
        user_object_id: {
            type: dataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        object_id: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        quantity: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },


    };
    let config = {
        tableName: "userobjects",
        timestamps: false
    };

    const UserObjects = sequelize.define(alias, cols, config);

    UserObjects.associate = function (models) {
        UserObjects.belongsTo(models.Objects, {
            as: "objects",
            foreignKey: "object_id"
        })
        UserObjects.belongsTo(models.Users, {
            as: "users",
            foreignKey: "user_id"
        })
    }


    return UserObjects
}
