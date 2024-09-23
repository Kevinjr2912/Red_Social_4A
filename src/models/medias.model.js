module.exports = (sequelize, DataTypes) =>{
    const Medias = sequelize.define('Medias', {
        id_media:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_album: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Albums',
                key: 'id_album'
            }
        },
        content: {
            type: DataTypes.BLOB,
            allowNull: false
        }
    },{ timestamps: false },);

    
    return Medias;
}