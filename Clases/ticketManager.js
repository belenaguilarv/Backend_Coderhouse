class TicketManager {
    #precioBaseDeGanancia = 10;
    constructor(){
        this.eventos = [];
    }

    getEventos(){
        console.log(this.eventos);
        return this.eventos;
    }

    buscarEventos(id){
        const encontrado = this.eventos.find(ev.id == id);
        if(encontrado){
            return encontrado;
        }else{
            return undefined;
        }
    }
    agregarEvento(
        nombre,
        lugar,
        precio,
        capacidad, 
        fecha
        ){
        precio = precio + this.#precioBaseDeGanancia;
        capacidad = capacidad ?? 50;
        fecha = fecha || Date.now(); 
        const eventoNuevo = {nombre, lugar, precio, capacidad, fecha}
        this.eventos = [...this.eventos, eventoNuevo];
        return true;
    }

}