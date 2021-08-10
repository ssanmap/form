import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;
  producto: string = '';
  precio: number = 0;
  existencia: string = '';
  

  constructor() { }

  ngOnInit(): void {
  }

  guardar(): void {
    console.log(this.miFormulario);
  }

}
