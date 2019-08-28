/**
 * 
 
 module.exports = app => {
     return {
         findAll: (params, callback) => {
             return callback([
                 {title: "Fazer compras"},
                 {title: "Consertar o pc"},
                ]);
            }
        };
    };
*/

module.exports = (sequelize, DataType) => {
    /**
     * A função sequelize.define("Tasks") é responsável por criar ou alterar uma tabela no banco de dados.
     */
    const Tasks = sequelize.define("Tasks", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        done: {
            type: DataType.BOOLEAN, 
            allowNull:false, 
            defaultValue: false
       },
    } ,{ 
        classMethods: {
            associate: (models) => {
                /**
                 * Tasks.belongsTo(models.Users) . Esse é um relacionamento do tipo Tasks 1-N Users .
                 */
                Tasks.belongsTo(models.Users);
            }
        }
        
    });
    return Tasks;
}
