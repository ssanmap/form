import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {
  nombre: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  guardar() {
    console.log('peo');
  }

}
