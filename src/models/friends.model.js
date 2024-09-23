module.exports = (sequelize, DataTypes) => {
    const Friends = sequelize.define('Friends', {
        id_post: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_pet: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Pets',
                key: 'id_pet'
            }
        }
    })

    return Friends
}