import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent {
  nombreE: string = '';
  descripcionE: string = '';
  periodoE: string = '';


  constructor(private educacionS:EducacionService, private router:Router) { }

  ngOnInit(): void {
  }
  onCreate():void{
    const educacion = new Educacion(this.nombreE, this.descripcionE, this.periodoE);
    this.educacionS.save(educacion).subscribe(
      data => {
        alert('Educacion creada con exito');
        this.router.navigate(['']);
      },err => {
        alert('No se pudo crear la educacion');
      }
    );
  }
}