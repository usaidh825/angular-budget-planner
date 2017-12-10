import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../core/services/authentication/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
