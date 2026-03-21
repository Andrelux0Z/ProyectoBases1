import sql from 'mssql';
import config from '../db';


/**
 * Obtiene todos los empleados
 */
export async function obtenerEmpleados(){
    const pool = await sql.connect(config);
    const result = await pool.request()
        .execute('sp_ObtenerEmpleados');
    return result.recordset;
}

/**
 * Inserta un nuevo empleado
 * parametro: Nombre del empleado
 * parametro: Salario del empleado
 */
export async function insertarEmpleado(nombre: string, salario: number){
    const pool = await sql.connect(config);
    const result = await pool.request()
        .input('inNombre', sql.VarChar(128), nombre)
        .input('inSalario', sql.Money, salario)
        .output('outResultado', sql.Int)
        .execute('sp_InsertarEmpleado');
    return result.output.outResultado;

}