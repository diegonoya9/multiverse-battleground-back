module.exports = (sequelize, dataTypes) => {
    let alias = "MoveActions";

    let cols = {
        action_move_id: {
            type: dataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },
        move_id: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        attack_type: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        field: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        inflicted_on: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        value: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        }
        // createdDate: {
        //     type: dataTypes.DATE,
        //      allowNull: false

        // },

    };
    let config = {
        tableName: "actionmoves",
        timestamps: false
    };

    const MoveActions = sequelize.define(alias, cols, config);
    MoveActions.associate = function (models) {
        // Moves.belongsTo(models.SubCategories, {
        //     as: "SubCategories",
        //     foreignKey: "subcategory_id"
        // }) //esta podria ser para la tabla de moves
        MoveActions.belongsTo(models.Moves, {
            as: "moves",
            foreignKey: "move_id"
        })
    }
    return MoveActions
}
