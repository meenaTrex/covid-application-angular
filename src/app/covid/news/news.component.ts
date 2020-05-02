import { Component, OnInit } from '@angular/core';
import { INews } from '../../shared/interfaces/news';
import { LatestNewsService } from '../services/latest-news.service';
import { LoginService } from '../../core/services/login.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  latestNewsArray: Array<INews> = new Array<INews>();
  isLoggedIn: boolean;
  constructor(private latestNews: LatestNewsService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.latestNewsArray = this.latestNews.getlatestNews();
    this.subsForLogin();
  }

  private subsForLogin() {

    this.loginService.loggedIn.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
      this.isLoggedIn = this.loginService.isLoggedIn();
    });
  }
}
