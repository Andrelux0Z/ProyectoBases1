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
    server: '25.34.166.162',
    port: 1433,
    database: 'Proyecto1',
    options: {
        encrypt: true,
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