import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, take } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit, OnDestroy {

  public loginForm!: FormGroup;
  private _subscription!: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userLogin: [
        '',
        [
          Validators.required
        ]
      ],
      userPassword: [
        '',
        [
          Validators.required
        ]
      ],
      stayConnected: [
        false
      ]
    });
  }

  ngOnDestroy(): void {
      if (this._subscription !== undefined) {
        this._subscription.unsubscribe();
      }
  }

  public onLogin(): void {
    this._subscription = this.userService.login(this.loginForm.value)
      .subscribe((authenticated: boolean) => {
        if (authenticated) {
          this.router.navigate(['/', 'home']);
        } else {
          this.loginForm.reset();
        }
      })
  }
}
