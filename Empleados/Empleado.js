export class Empleado{
    #Nombre;
    #Dni;
    #Salario
    #clave;

    constructor(Nombre, Dni, Salario){
        this.#Nombre = Nombre;
        this.#Dni = Dni;
        this.#Salario = Salario;
        this.#clave = '';
    }

    asignarCLave(clave){
        this.#clave = clave;
    }

    autenticable(clave){
        return clave == this.#clave;
    }

    verBonificacion(){
        return this.#Salario;
    }

    _verBonificacion(bono){
        return this.#Salario + this.#Salario*bono/100;
    }
}