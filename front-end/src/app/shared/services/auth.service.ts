import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RetrouveAllHttpService } from './retrouve-all-http.service';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
/**
 * @author Mamadou lamine BEYE
 * @since 22.02.25
 * @description Cette classe définit les mécanismes de connexion et de déconnexion
 * des utilisateurs, les tokens, l'utilisateur connecté
 * @class AuthService
 */
export class AuthService {

  private tokenName = 'Bearer';
  private token: string | null = null;
  private currentUserManager: BehaviorSubject<any> = new BehaviorSubject(null);
  public currentUserProvider = this.currentUserManager.asObservable();

  constructor(public http: RetrouveAllHttpService) { }

  public get currentUserValue(): User {
    return this.currentUserManager.value;
  }

  /**
   * @author Mamadou lamine BEYE
   * @since 22.02.25
   * @description Cette méthode retourne le nom du token
   * qui sera envoyé dans le Authorization Header des requêtes
   * @returns string
   */
  public getTokenName() {
    return this.tokenName;
  }

  /**
   * @author Mamadou lamine BEYE
   * @description Retourne le token de l'utilisateur, le token est retourné si
   * défini sinon le token est récupéré du localStorage
   * @since 22.02.25
   * @returns token
   */
  public getToken() {
    if (this.token == null) {
      return this.token = localStorage.getItem(this.tokenName);
    }
    return this.token;
  }

  /**
   * @author Mamadou lamine BEYE
   * @description Retourne le token de l'utilisateur, le token est retourné si
   * défini sinon le token est récupéré du localStorage
   * @since 22.02.25
   * @returns token
   */
  public removeAllConnexionData() {
    this.token == null
    localStorage.removeItem(this.tokenName);
    this.currentUserManager.next(null);
  }

  /**
   * @author Mamadou lamine BEYE
   * @description Recupére le token venu du serveur
   * puis stocke le token dans la variable token
   * puis stocke le token dans le localStorage pour récupération ultérieure
   * @since 21.02.25
   * @param token
   */
  public setToken(token: string) {
    this.token = token;
    localStorage.setItem(this.tokenName, token);
  }

  /**
   * @author Mamadou lamine BEYE
   * @description Définit l'utilisateur dans le subject afin de le propager
   * à tous les programmes qui souhaitent récuperer l'utilisateur connecté
   * @param user
   
   * @since 21.02.25
   */
  setCurrentUser(user: any) {
    this.currentUserManager.next(user);
  }

  /**
   * @author Mamadou lamine BEYE
   * @description Recupere l'utilisateur connecté
   * Cette fonction est surtout appelée pendant l'initialisation
   * du projet pour récuperer le user à partir du Token
   * @since 21.02.25
   * @returns Promise
   */
  getCurrentUser() {
    return new Promise((resolve) => {
      this.http.get('auth/current-user')
        .then((data: any) => {
          this.setCurrentUser(data?.user);
          resolve(data?.any);
        }).catch(() => {
          resolve(null);
        });
    });
  }

  /**
   * @author Mamadou lamine BEYE
   * @since 21.02.25
   * @description Connecte l'utilisateur grace à ses identifiants
   * @param loginData
   * @returns Promise
   */
  login(loginData: { email: string, password: string }) {
    return this.http.post('auth/login', loginData);
  }

  /**
   * @author Mamadou lamine BEYE
   * @since 21.02.25
   * @description Envoie le token courant au serveur
   * pour déconnecter l'utilisateur
   * @returns Promise
   */
  logout() {
    return null;
  }

  /**
   * @author MAMADOU LAMINE BEYE
   * @since 30.02.25
   * @update 16.02.2025
   * @description Envoie un lien de reinitialisation du mot de passe à l'utilisateur
   * @returns Promise
   */
  sendLinkPassword(email: { email: string }) {
    return this.http.post('auth/send-reset-link', email);
  }

  /**
   * @author MAMADOU LAMINE BEYE
   * @since 30.02.25
   * @update 16.02.2025
   * @link https://isep-thies-app.atlassian.net/browse/PAD-2
   * @description Envoie un le token généré avec l'email au serveur pour verifier
   * la validite
   * @returns Promise
   */
  verifyToken(token: string, email: string) {
    return this.http.post('auth/verify-token', { token, email });
  }
  /**
   * @author MAMADOU LAMINE BEYE
   * @since 30.02.25
   * @description met à jour le mot de passe de l'utilisateur
   * la validite
   * @returns Promise
   */
  updatePassword(loginData: { email: string, password: string, password_confirmation: string }) {
    return this.http.post('change-password', loginData);
  }

  /**
   * @author MAMADOU LAMINE BEYE
   * @since 19.02.25
   * @description met à jour le mot de passe de l'utilisateur
   * la validite
   * @params token
   * @params email
   * @params password  
   * @params password_confirmation
   * @returns Promise
  */
  resetPassword(loginData: { token: string, email: string, password: string, password_confirmation: string }) {
    return this.http.post('auth/reset-password', loginData);
  }

  /**
   * @author MAMADOU LAMINE BEYE
   * @since 19.02.25
   * @description met à jour le mot de passe de l'utilisateur lorsqu'il se connecte 
   * pour la première fois
   * @params token
   * @params email
   * @params password  
   * @params password_confirmation
   * @returns Promise
  */
  resetPasswordAtFirstLogin(loginData: { email: string, password: string, password_confirmation: string, device: string }) {
    return this.http.post('auth/resetPasswordAtFirstLogin', loginData);
  }

  /**
   * @author MAMADOU LAMINE BEYE
   * @since 20.02.25
   * @description met à jour le mot de passe de l'utilisateur
   * la validite
   * @params email
   * @params password  
   * @returns Promise
  */
  resetPasswordOptions(resetData: any) {
    return this.http.post('auth/reset-options', resetData);
  }
}
