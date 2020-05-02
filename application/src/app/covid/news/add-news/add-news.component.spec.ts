import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddNewsComponent } from './add-news.component';
import { By } from "@angular/platform-browser";

describe('AddNewsComponent', () => {
  let component: AddNewsComponent;
  let fixture: ComponentFixture<AddNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule, ToastrModule.forRoot()],
      providers: [ToastrService],
      declarations: [AddNewsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('News Form initiazed', () => {
    expect(component.newsForm).toBeDefined();
    expect(component).toBeTruthy();
  });

  it('Heading News to be present', () => {
    const formText = "News";
    const newsText = fixture.debugElement.query(By.css('.card'));

    expect(newsText.nativeElement.textContent).toContain(formText);
  })
});
