import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from 'src/app/modelo/egreso';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //para recibir los elementos de la clase padre
  @Input() egresos : Egreso[] = [];
  

  constructor() { }

  ngOnInit(): void {
  }




}
