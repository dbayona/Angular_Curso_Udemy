"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function consola(constructor) {
    console.log(constructor);
}
var Villano = /** @class */ (function () {
    function Villano(nombre) {
        this.nombre = nombre;
    }
    Villano = __decorate([
        consola
    ], Villano);
    return Villano;
}());
