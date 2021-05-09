import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

  ngOnInit() {
  }

  listaCursos: String[] = ['Typescript', 'Javascript', 'Java', 'C#'];
  habilitar: boolean = true;
  constructor(){}

}
