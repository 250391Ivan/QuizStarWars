import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  constructor( public _fb:FormBuilder) { }
  banderaNombre:boolean = false;
fecha:any='2021-08-05'
  formRegister:FormGroup = this._fb.group({
    'nombre':['', Validators.required],
    'apellido':['', Validators.required],
    'fecha':['', Validators.required],

  })

  ngOnInit(): void {
  
  }
  guardar(){
    console.log('datos Formulario',  this.formRegister.value);
    this.calcularEdad()
  }

  Validar(campo:any){
    if (this.formRegister.get(campo)?.invalid) {
      this.banderaNombre = true
      
    }else{
      this.banderaNombre = false
    }
  }

   calcularEdad() {
    let fechaselect = this.formRegister.get('fecha')?.value
    console.log('edad',this.formRegister.get('fecha')?.value);
    
    var hoy = new Date();
    var cumpleanos = new Date(this.formRegister.get('fecha')?.value);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();


    if (edad < 18) {
      alert('tu edad es:'+ edad + '    Eres Menos de edad, No puedes acceder')
      
    }

  
}

}
