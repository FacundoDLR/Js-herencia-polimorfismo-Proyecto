import { Empleado } from "./Empleado.js";

export class Gerentes extends Empleado{
    constructor(Nombre, Dni, Salario){
        super(Nombre, Dni, Salario)
    }

    verBonificacion(){
        const bono = 5;
        return super._verBonificacion(bono);
    }
}