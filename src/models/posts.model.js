module.exports = (sequelize, DataTypes) =>{
    const Posts = sequelize.define('Posts', {
        id_post:{
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
        content_text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        picture: {
            type: DataTypes.BLOB,
            allowNull: false
        }
    },{ timestamps: false },);

    
    return Posts;
}