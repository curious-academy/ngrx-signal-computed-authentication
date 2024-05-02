import { effect, inject, Injectable } from "@angular/core";
import { AuthenticationStore } from "../store";
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root'})
export class AuthenticationApplication {
  private readonly store = inject(AuthenticationStore);
  private readonly router = inject(Router);

  private redirectToLoginEffect = effect(() => {
    // Si je suis authentifié, je pars vers la page d'accueil
    if(this.store.isAuthenticated()) {
      this.router.navigate(['home']);
    }
  });

  login(login: string, password: string) {
    this.store.logIn({ login, password });
  }
}
