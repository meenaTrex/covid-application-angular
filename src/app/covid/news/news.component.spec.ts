import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { NewsComponent } from './news.component';
import { LatestNewsService } from '../services/latest-news.service';

describe('NewsComponent', () => {

  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsComponent],
      providers: [LatestNewsService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check idLoggedIn property initialization for enabling/disabling Add news button', () => {
    expect(component.isLoggedIn).toBeDefined();

  });


});