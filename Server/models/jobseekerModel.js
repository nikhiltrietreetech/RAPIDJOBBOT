import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const JobSeeker = sequelize.define('JobSeeker', {
    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    middleName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mobileNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    workStatus: {
        type: DataTypes.ENUM('fresher', 'experienced'),
        allowNull: false,
    },
    promotions: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    tableName: "job-seekers",
    timestamps: true,
});

export default JobSeeker;
