module.exports = (sequelize, dataTypes) => {
    let alias = "Objects";

    let cols = {
        object_id: {
            type: dataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },
        category: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        img: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        price: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        quantity: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        type: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        // createdDate: {
        //     type: dataTypes.DATE,
        //      allowNull: false

        // },

    };
    let config = {
        tableName: "objects",
        timestamps: false
    };

    const Objects = sequelize.define(alias, cols, config);
    Objects.associate = function (models) {
        Objects.hasMany(models.UserObjects, {
            as: "userobjects",
            foreignKey: "user_object_id"
        })
    }


    return Objects
}
