module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        comment: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW,
        },
    }, {
        timestamps: false,
    });
};