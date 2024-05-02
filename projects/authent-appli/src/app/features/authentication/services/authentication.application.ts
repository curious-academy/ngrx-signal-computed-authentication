import { inject, Injectable } from "@angular/core";
import { AuthenticationStore } from "../store";

@Injectable({ providedIn: 'root'})
export class AuthenticationApplication {
  private readonly store = inject(AuthenticationStore);

  login(login: string, password: string) {
    this.store.logIn({ login, password });
  }
}
