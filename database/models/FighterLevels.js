module.exports = (sequelize, dataTypes) => {
    let alias = "FighterLevels";

    let cols = {
        fighter_level_id: {
            type: dataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },
        fighter_id: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        accuracy: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        defense: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        level: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        max_hp: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        max_xp: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        special_attack: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        special_defense: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        // createdDate: {
        //     type: dataTypes.DATE,
        //      allowNull: false

        // },

    };
    let config = {
        tableName: "fighterlevels",
        timestamps: false
    };

    const FighterLevels = sequelize.define(alias, cols, config);
    FighterLevels.associate = function (models) {
        FighterLevels.hasMany(models.Fighters, {
            as: "fighters",
            foreignKey: "fighter_id"
        })
    }


    return FighterLevels
}
