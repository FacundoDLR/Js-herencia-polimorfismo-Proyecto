/*Importación de clases*/
import {Cliente} from './Cliente.js'
import { Director } from './Empleados/Director.js';
import { Empleado } from './Empleados/Empleado.js';
import { Gerentes } from './Empleados/Gerente.js';
import { SistemaAutenticacion } from './SistemaAutenticacion.js';

const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');
/* 
const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002');

const cuentaAhorroLeonardo = new CuentaAhorro(cliente, '9985', '001', 0)

const cuentaNominaLeonardo = new CuentaNomina(cliente,'9854','001',100); */

const empleado = new Empleado('Juan', '12319834', 10000);
const gerente = new Gerentes('Pepe', '1123434', 12000);
const director = new Director('Matias', '43200239', 15000);

empleado.asignarCLave('12345');
gerente.asignarCLave('22222');
director.asignarCLave('33333');


console.log(SistemaAutenticacion.login(empleado, 12345));
console.log(SistemaAutenticacion.login(gerente, 123444));
console.log(SistemaAutenticacion.login(director, 33333));
