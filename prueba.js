class Contador{
    static cuentaGlobal = 0; // pertenece directamente a la clase
    constructor(){
        this.nombreResponsable = "Belu"; 
        this.cuenta = 0;  
    }
    /* entonces cada vez que cree un contador va a tener 
    un nombreResponsable y cuenta
*/
    getResponsable(){
        console.log(this.nombreResponsable);
        return this.nombreResponsable; // el this indica de donde sale ese dato
    }
    getCuentaIndividual(){
        console.log(this.cuenta);
        return this.cuenta; 
    }
    sumarCuenta(){
        this.cuenta++;
        Contador.cuentaGlobal++;
    }
    
}

const belu = new Contador("belu");
const flor = new Contador("flor");
const agus = new Contador("agus");

belu.sumarCuenta();
belu.sumarCuenta();
flor.sumarCuenta();
agus.sumarCuenta();


console.log(belu.cuenta);
console.log(Contador.cuentaGlobal);


//belu.getResponsable();
//belu.getCuentaIndividual();



