module.exports = (sequelize, DataTypes) =>{
    const Comments = sequelize.define('Comments', {
        id_comment:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_post: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Posts',
                key: 'id_post'
            }
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
        }
    },{ timestamps: false },);

    
    return Comments;
}