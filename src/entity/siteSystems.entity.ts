import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../sequelize/connection";
import dotenv from "dotenv";

dotenv.config();

const siteSystemsTableName = process.env.DB_TABLE_NAME_SITE_SYSTEMS;

if (!siteSystemsTableName) {
    throw new Error("Missing environment variable: DB_TABLE_NAME_SITE_SYSTEMS");
}

interface SiteSystemsAttributes {
    id: number;
    site_id: number;
    system_id: number;
    enabled: boolean;
    created_at: Date;
    updated_at: Date;
}

type SiteSystemsCreationAttributes = Optional<
    SiteSystemsAttributes,
    | "id"
    | "enabled"
    | "created_at"
    | "updated_at"
>;

export class SiteSystemsEntity
    extends Model<SiteSystemsAttributes, SiteSystemsCreationAttributes>
    implements SiteSystemsAttributes
{
    public id!: number;
    public site_id!: number;
    public system_id!: number;
    public enabled!: boolean;

    public readonly created_at!: Date;
    public readonly updated_at!: Date;
}

SiteSystemsEntity.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },

        site_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },

        system_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },

        enabled: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },

        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },

        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,

        tableName: siteSystemsTableName,
        modelName: "SiteSystemsEntity",

        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",

        indexes: [
            {
                name: "uq_site_system",
                unique: true,
                fields: ["site_id", "system_id"],
            },
            {
                name: "idx_site_systems_site_id",
                fields: ["site_id"],
            },
            {
                name: "idx_site_systems_system_id",
                fields: ["system_id"],
            },
        ],
    }
);