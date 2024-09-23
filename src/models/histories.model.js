module.exports = (sequelize, DataTypes) =>{
    const Histories = sequelize.define('Histories', {
        id_history:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_profile: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Profiles',
                key: 'id_profile'
            }
        },
        content: {
            type: DataTypes.BLOB,
            allowNull: false
        }
    },{ timestamps: false },);

    
    return Histories;
}