const { Model, DataType } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("")

class User extends Model {
    checkPwd(loginPw){
      return bcrypt.compareSync(loginPw, this.password);
    }  
}

User.init (
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataType.STRING,
            allownull: false,
            unique: true,
            validate:{
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },
        },
    },
    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            beforeUpdate: async (updatedUserData) => {
                updatedUserData.password = await bcrypt.hast(
                    updatedUserData.password,
                    10
                );
                return updatedUserData;
            },
        },
        sequilize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "user",
    }
);

module.exports = User;