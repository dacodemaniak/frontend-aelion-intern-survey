import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { SignupDto } from '../dto/signup-dto';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public signupForm!: FormGroup;

  constructor(
    private _userService: UserService,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.signupForm = this._formBuilder.group({
      login: [
        '',
        [
          Validators.required
        ]
      ],
      password: [
        '',
        [
          Validators.required
        ]
      ],
      confirmPassword: [
        '',
        [
          Validators.required
        ]
      ]
    })
  }

  public get c(): {[key: string]: AbstractControl} {
    return this.signupForm.controls;
  }

  public onSubmit(): void {
    this._userService.signup(SignupDto.fromSignupForm(this.signupForm.value))
      .pipe(
        take(1)
      )
      .subscribe((response: any) => {
        this._router.navigate(['/', 'login'])
      });
  }

}
