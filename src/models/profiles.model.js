module.exports = (sequelize, DataTypes) => {
    const Profiles = sequelize.define('Profiles', {
        id_profile:{
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
        },
        id_album: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Albums',
                key: 'id_album'
            }
        }
    },{ timestamps: false },);

    return Profiles;
}