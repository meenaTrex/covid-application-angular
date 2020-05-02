import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { CovidComponent } from './covid.component';

describe('CovidComponent', () => {
  let component: CovidComponent;
  let fixture: ComponentFixture<CovidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot()],
      providers: [ToastrService],
      declarations: [CovidComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have isLoggedProperty initialized', () => {
    expect(component.isLoggedIn).toBeDefined();
  });

  it('expectisLOggedIn property to be deifined after function have been called ', () => {
    component.ngOnInit();
    fixture.whenStable()
      .then(() => {
        expect(component.subsForLogin).toHaveBeenCalled();
        expect(component.isLoggedIn).toBeDefined();
        return fixture.whenStable();
      })

  });
});
