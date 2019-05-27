// Un archivo simple de TypeScript
/******class Avenger
{
  nombre:string = "Sin Nombre";
  equipo:string = undefined;
  nombreReal:string = undefined;

  puedePelear:boolean = false;
  peleasGanadas:number = 0;

  constructor(nombre:string, equipo:string, nombreReal:string)
  {
    this.nombre = nombre;
    this.equipo = equipo;
    this.nombreReal = nombreReal;
    console.log("Se ejecuto el constructor");
  }
}

let antman:Avenger = new Avenger("Antman", "Cap", "Scott Lang");
console.log(antman);******/

function consola( constructor:Function)
{
  console.log(constructor);
}

@consola
class Villano
{
  constructor (public nombre:string)
  {

  }
}
