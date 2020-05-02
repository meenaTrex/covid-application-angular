import { Injectable } from '@angular/core';
import newsData from '../../../assets/latest-news.json';
import { INews } from '../../shared/interfaces/news';

@Injectable({
  providedIn: 'root'
})
export class LatestNewsService {
  latestNewsArray: Array<INews> = new Array<INews>();
  storageNews: Array<INews> = new Array<INews>();
  constructor() {
    // if (localStorage.getItem('news')) {
    //   this.latestNewsArray = JSON.parse(localStorage.getItem('news'));

    // }
    // else {
    //   this.latestNewsArray = newsData.news;
    //   localStorage.setItem('news', JSON.stringify(this.latestNewsArray));
    // }
    this.latestNewsArray = newsData.news;
  }

  getlatestNews(): Array<INews> {
    //return JSON.parse(localStorage.getItem('news'));
    return this.latestNewsArray;
  }

  addLatestNews(newNews: INews): Array<INews> {
    this.latestNewsArray.push(newNews);
    // localStorage.setItem('news', JSON.stringify(this.latestNewsArray));
    // // if(localStorage.getItem('news')){
    // //   this.storageNews = JSON.parse(localStorage.getItem('news'));
    // //   this.storageNews.push(newNews);
    // //   localStorage.setItem('news',JSON.stringify(this.storageNews))
    // // }
    // // localStorage.setItem('news',JSON.stringify(this.latestNewsArray));
    // return JSON.parse(localStorage.getItem('news'));
    return this.latestNewsArray;
  }
}
