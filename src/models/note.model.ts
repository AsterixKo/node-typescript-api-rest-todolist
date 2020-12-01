import { Model, Sequelize, DataTypes } from 'sequelize';
import { database } from '../database';

export class Note extends Model {
    public id!: number;
    public description!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
}

Note.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    },
    createdAt :{
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
},{
    tableName: 'Notes',
    sequelize: database // Es donde decimos como conectanros a la base de datos
})