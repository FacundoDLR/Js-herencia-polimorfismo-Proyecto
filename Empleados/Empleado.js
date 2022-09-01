export class Empleado{
    #Nombre;
    #Dni;
    #Salario
    constructor(Nombre, Dni, Salario){
        this.#Nombre = Nombre;
        this.#Dni = Dni;
        this.#Salario = Salario;
    }

    verBonificacion(){
        return this.#Salario;
    }

    _verBonificacion(bono){
        return this.#Salario + this.#Salario*bono/100;
    }
}