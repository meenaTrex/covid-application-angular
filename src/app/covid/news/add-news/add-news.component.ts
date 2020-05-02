import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LatestNewsService } from '../../services/latest-news.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  newsForm: FormGroup;
  constructor(private router: Router, private toastrService: ToastrService, private formBuilder: FormBuilder,
    private latestNewsService: LatestNewsService) { }

  ngOnInit(): void {
    this.newsForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      fullContent: ['', Validators.required],
      summary: ['', Validators.required],

    });
  }
  add() {
    this.latestNewsService.addLatestNews(this.newsForm.value);
    this.toastrService.success('News added Successfully');
    this.router.navigateByUrl('/covid/news');
  }

}
