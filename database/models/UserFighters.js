module.exports = (sequelize, dataTypes) => {
    let alias = "UserFighters";

    let cols = {
        user_fighter_id: {
            type: dataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        fighter_id: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        level: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        active: {
            type: dataTypes.STRING(5),
            allowNull: false
        },
        in_party: {
            type: dataTypes.STRING(5),
            allowNull: false
        },
        extra_accuracy: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        extra_max_hp: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        extra_attack: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        extra_special_attack: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        extra_defense: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        extra_special_defense: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        current_xp: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },


    };
    let config = {
        tableName: "userfighters",
        timestamps: false
    };

    const UserFighters = sequelize.define(alias, cols, config);

    UserFighters.associate = function (models) {
        UserFighters.belongsTo(models.Fighters, {
            as: "fighters",
            foreignKey: "fighter_id"
        })
        UserFighters.belongsTo(models.Users, {
            as: "users",
            foreignKey: "user_id"
        })
        UserFighters.hasMany(models.UserFighterMoves, {
            as: "userfightermoves",
            foreignKey: "user_fighter_move_id"
        })
    }


    return UserFighters
}
