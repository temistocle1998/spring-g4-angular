import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { BookingHttpService } from './retrouve-all-http.service';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<any> {

  public constructor(public override http: BookingHttpService) {
    super(http);
    this.prefix = 'users';
   }

   verifyCode(data: {code: string, email: string}){
    return this.http.post('verify-code', data)
   }
   verifyEmail(email: string ){
    return this.http.post('verify-email', {email: email})
   }

    /**
   * @author Mamadou lamine BEYE
   * since 25.10.22
   * @param user
   * @returns Promise
   */
  uploadPhoto(user: User) {
    return this.http.put(`${this.prefix}/update-photo/${user.uuid}`, user);
  }

  changePassword(data: any) {
    return this.http.post('reset-password', data);
  }
}
