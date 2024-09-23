module.exports = (sequelize, DataTypes) =>{
    const Albums = sequelize.define('Albums', {
        id_album:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    },{ timestamps: false },);

    return Albums;
}