import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PromiseError } from 'src/app/shared/classes/promise-error';
import { AuthService } from 'src/app/shared/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  error = '';
  loading = false
  stateUser: any
  registerForm: UntypedFormGroup

  constructor(
    public router: Router,
    private formBuilder: UntypedFormBuilder,
    private authSrv: AuthService) { }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      first_name: ['',
        [
          Validators.required,
          Validators.maxLength(100)
        ]
      ],
      last_name: ['',
        [
          Validators.required,
          Validators.maxLength(100)
        ]
      ],
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(6),
        ]
      ],
      role: ['',
        [
          Validators.required,
          Validators.minLength(6),
        ]
      ],
      address: ['', [Validators.required]],
      telephone: ['', [Validators.required]]
    })
  }

  setRole(roleSelected: string) {
    this.registerForm.patchValue({
      role: roleSelected
    })
  }

  register(): void {
    this.loading = true
    this.authSrv.http.post('auth/register', this.registerForm.value)
      .then((data: any) => {
        Swal.fire('Compte crée', 'Votre compte a été crée avec succès', 'success')
      }).catch((err: PromiseError) => {
          if (err.validationError) {
            this.error = err.data;
          }
          Swal.fire('Erreur', err.data.data.error, 'error')

      })
  }
}
