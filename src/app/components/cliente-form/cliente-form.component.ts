import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {
  clienteForm: FormGroup;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuild: FormBuilder,
    private clienteService: ClienteService,
  ) {
  }
  ngOnInit() {
    this.clienteForm = this.formBuild.group({
      id: [''],
      codi: ['', [Validators.required]],
      ap_paterno: ['', [Validators.required]],
      ap_materno: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      dni: ['', [Validators.required]],
      facultad: ['', [Validators.required]],
      carrera: ['', [Validators.required]],
      an_egreso: ['', [Validators.required]],
      an_egreso_an: ['', [Validators.required]],
      an_ingreso: ['', [Validators.required]],
     
    });
    //get data
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.clienteService.getById(id).subscribe(response => {
        this.clienteForm.setValue(response);
        console.log(response);
      });
    }

  }
  save() {
    console.log(this.clienteForm.value);
    let id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.clienteService.update(id, this.clienteForm.value).subscribe(response => {
        console.log("UPDATE ",response);
      });
    }else{
      this.clienteService.add(this.clienteForm.value).subscribe(response => {
        console.log("ADD ",response);
      });
    }
    this.router.navigate(['/clienteindex']);
  }

}
