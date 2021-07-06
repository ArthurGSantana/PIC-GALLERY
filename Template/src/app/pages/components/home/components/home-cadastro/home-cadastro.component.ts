import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pic-home-cadastro',
  templateUrl: './home-cadastro.component.html',
  styleUrls: ['./home-cadastro.component.scss']
})
export class HomeCadastroComponent implements OnInit {

  cadastroUsuario: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.cadastroUsuario = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }

  onSubmit(): void {
    console.log(this.cadastroUsuario.value);

  }

}
