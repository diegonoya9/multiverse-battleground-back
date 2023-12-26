module.exports = (sequelize, dataTypes) => {
    let alias = "Moves";

    let cols = {
        move_id: {
            type: dataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },
        fighter_id: {
            type: dataTypes.BIGINT(11),
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
        mp: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        }
        // createdDate: {
        //     type: dataTypes.DATE,
        //      allowNull: false

        // },

    };
    let config = {
        tableName: "moves",
        timestamps: false
    };

    const Moves = sequelize.define(alias, cols, config);
    Moves.associate = function (models) {
        // Moves.belongsTo(models.SubCategories, {
        //     as: "SubCategories",
        //     foreignKey: "subcategory_id"
        // }) //esta podria ser para la tabla de moves
        Moves.hasMany(models.Fighters, {
            as: "fighters",
            foreignKey: "fighter_id"
        })
        Moves.hasMany(models.MoveActions, {
            as: "actionmoves",
            foreignKey: "action_move_id"
        })
        Moves.hasMany(models.UserFighterMoves, {
            as: "userfightermoves",
            foreignKey: "user_fighter_move_id"
        })
    }
    return Moves
}
