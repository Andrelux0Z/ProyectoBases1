import { Router } from 'express';
import { getEmpleados, postEmpleado } from '../controllers/empleadoController' ;

const router = Router();

router.get('/empleados', getEmpleados);
router.post('/empleados', postEmpleado);

export default router;