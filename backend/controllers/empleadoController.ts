import { Request, Response } from 'express';
import { obtenerEmpleados, insertarEmpleado } from '../models/empleadoModel';
 
export async function getEmpleados(req: Request, res: Response ) {
	try {
		const empleados = await obtenerEmpleados();
		res.json(empleados);
	} catch (error) {
        console.error(error);
        res.status(500).json({ mensaje: 'ERROR: No se pudo obtener los empleados' });
        }

}


export async function postEmpleado (req: Request, res: Response) {
	try {
		const { nombre, salario } = req.body;

		if (typeof nombre !== 'string' || nombre.trim().length === 0) {
			return res.status(400).json({ mensaje: 'Nombre es requerido y debe ser texto.' });
		}

		// Validar que el nombre solo contenga letras, espacios, puntos o guiones
		const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s\.\-]+$/;
		if (!regexNombre.test(nombre.trim())) {
			return res.status(400).json({ mensaje: 'El nombre solo puede contener letras, espacios, puntos o guiones.' });
		}

		let salarioNumber: number;
		if (typeof salario === 'number') {
			salarioNumber = salario;
		} else {
			salarioNumber = Number(salario);
		}
		if (!Number.isFinite(salarioNumber)) {
			return res.status(400).json({ mensaje: 'Salario debe ser un número válido.' });
		}
		if (salarioNumber < 0) {
			return res.status(400).json({ mensaje: 'El salario no puede ser negativo.' });
		}

		const resultado = await insertarEmpleado(nombre.trim(), salarioNumber);
		if (resultado === 1) {
			res.json( {mensaje: 'Inserción exitosa'});
		} else{
			res.status(400).json({ mensaje: 'Nombre de Empleado ya existe.'});
	
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ mensaje: 'ERROR: No se pudo insertar al empleado'});
	}

}