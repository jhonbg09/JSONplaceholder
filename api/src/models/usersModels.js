//modelos de sequelize. min 34 repaso

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
    "users",
    {
    
        id: {
        type: DataTypes.UUID, // ejemplo: jhas4-kjlksafj-lkjlkj
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, //esto nos verifica que el correo que se esta ingresando sea unico
    },

    phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    },
    { timestamps: true }
);
};
