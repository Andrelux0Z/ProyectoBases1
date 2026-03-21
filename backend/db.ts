import sql from 'mssql';


/**
 * Módulo de configuración para la conexión a SQL Server
 * 
 * Este archivo define la configuración necesaria para establecer
 * una conexión con la base de datos SQL Server usando la librería 'mssql'
 * 
 * 
 */

const config: sql.config = {
    server: 'localhost',
    database: 'Proyecto1',
    options: {
        encrypt: false,
        trustServerCertificate: true,
    },
    authentication: {
        type: 'default',
        options: {
            userName: 'ErikLogin',
            password:  '1234admin',
        }

    }
};

export default config;