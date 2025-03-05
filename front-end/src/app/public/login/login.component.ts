import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PromiseError } from 'src/app/shared/classes/promise-error';
import { User } from 'src/app/shared/classes/user';
import { AuthService } from 'src/app/shared/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error = '';
  loading = false
  stateUser: any
  loginForm: UntypedFormGroup
  currentYear = new Date().getFullYear()
  currentUser: { user: User, token: string }
  constructor(public authSrv: AuthService,
    public router: Router,
    private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.stateUser = history.state;
    this.loginForm = this.formBuilder.group({
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
      ]
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  /**
   * @author Mamadou lamine BEYE
   * @since 22.01.2025
   * @description Gérer le processus de connexion de l'utilisateur
   * @returns void
   */

  login(): void {
    this.loading = true
    this.authSrv.login(this.loginForm.value)
      .then((data: any) => {
        this.loading = false
        this.currentUser = data
        this.authSrv.setToken(data.token);
        this.authSrv.setCurrentUser(data.user);
        this.stateUser.isLogin = true;
        this.router.navigate(['/dashboard'], { state: this.stateUser })
      }).catch((err: PromiseError) => {
        if (err.validationError) {
          this.error = err.data;
        }
        Swal.fire('Identifiants incorrectes', err.data.data.error, 'error')
      })
      .finally(() => {
        this.loading = false;
      });
  }
}
