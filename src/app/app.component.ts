import { Component, OnInit } from '@angular/core';
import { Stagiaire } from './core/models/stagiaire';
import { StagiaireService } from './core/services/stagiaire.service';
import { UserService } from './user/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'Suivi des stagaires';
  
  public hasUser: boolean = false;

  public constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
      this.userService.hasUser()
        .subscribe((hasUser: boolean) => {
          this.hasUser = hasUser;
        })
  }

  public onLogout(): void {
    this.userService.logout();
  }
}
