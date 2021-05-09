import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [
    { id: 1, nombre: 'Kallfu', apellido: 'Chan', email:'kallfu@mail.cl', createAt:'2020-05-08'},
    { id: 2, nombre: 'Fidel', apellido: 'Sama', email:'fidel@mail.cl', createAt:'2020-05-08'},
     { id: 3, nombre: 'Domi', apellido: 'Kun', email:'kallfu@mail.cl', createAt:'2020-05-08'},
      { id: 4, nombre: 'Ayilen', apellido: 'Chan', email:'kallfu@mail.cl', createAt:'2020-05-08'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
