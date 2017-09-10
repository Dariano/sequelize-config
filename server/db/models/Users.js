module.exports = (sequelize, DataType) => {
    const User = sequelize.define('Users', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataType.STRING,
            allNull: false,
            validate: {
                notEmpty: true,
            },
        }
    });

    return User;
};