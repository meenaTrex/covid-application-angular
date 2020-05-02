import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminLoginComponent } from './admin-login.component';
import { By } from "@angular/platform-browser";

describe('AdminLoginComponent', () => {
  let component: AdminLoginComponent;
  let fixture: ComponentFixture<AdminLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule, ToastrModule.forRoot()],
      providers: [ToastrService],
      declarations: [AdminLoginComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check login form to be initiliazed', () => {
    expect(component.loginForm).toBeDefined();
  });

  it('When admin-login component is loaded, loginForm should be defined', () => {
    component.ngOnInit();
    fixture.whenStable()
      .then(() => {
        expect(component.loginForm).toBeDefined();

      })
  });

});
