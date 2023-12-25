module.exports = (sequelize, dataTypes) => {
    let alias = "Fighters";

    let cols = {
        fighter_id: {
            type: dataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },
        img_back: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        img_front: {
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
        }
        // createdDate: {
        //     type: dataTypes.DATE,
        //      allowNull: false

        // },

    };
    let config = {
        tableName: "fighters",
        timestamps: false
    };

    const Fighters = sequelize.define(alias, cols, config);
    Fighters.associate = function (models) {
        // Fighters.belongsTo(models.SubCategories, {
        //     as: "SubCategories",
        //     foreignKey: "subcategory_id"
        // }) //esta podria ser para la tabla de moves
        Fighters.hasMany(models.UserFighters, {
            as: "userfighters",
            foreignKey: "user_fighter_id"
        })
    }


    return Fighters
}
