import { Empleado } from "./Empleado.js";

export class Director extends Empleado{
    constructor(Nombre, Dni, Salario){
        super(Nombre, Dni, Salario)
    }

    verBonificacion(){
        const bono = 10;
        return super._verBonificacion(bono);
    }
}