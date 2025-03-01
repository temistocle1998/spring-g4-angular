import { Component } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  password: string = '';
  confirmPassword: string = '';
  isSuccess: boolean = false;
  passwordStrength: number = 0;

  checkPasswordStrength(value: string): void {
    let strength = 0;
    if (value.length >= 8) strength += 1;
    if (/[A-Z]/.test(value)) strength += 1;
    if (/[0-9]/.test(value)) strength += 1;
    if (/[^A-Za-z0-9]/.test(value)) strength += 1;
    this.passwordStrength = strength;
  }

  hasUpperCase(value: string): boolean {
    return /[A-Z]/.test(value);
  }
  
  hasNumber(value: string): boolean {
    return /[0-9]/.test(value);
  }
  
  hasSpecialChar(value: string): boolean {
    return /[^A-Za-z0-9]/.test(value);
  }

  handleSubmit(event: Event): void {
    event.preventDefault();
    if (this.password === this.confirmPassword && this.passwordStrength >= 3) {
      this.isSuccess = true;
    }
  }

  getProgressBarClass(): string {
    if (this.passwordStrength === 0) return 'bg-danger';
    if (this.passwordStrength === 1) return 'bg-danger';
    if (this.passwordStrength === 2) return 'bg-warning';
    if (this.passwordStrength === 3) return 'bg-info';
    return 'bg-success';
  }

  getProgressBarWidth(): string {
    return `${(this.passwordStrength / 4) * 100}%`;
  }
}
