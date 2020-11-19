import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgisterAdminComponent } from './resgister-admin.component';

describe('ResgisterAdminComponent', () => {
  let component: ResgisterAdminComponent;
  let fixture: ComponentFixture<ResgisterAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResgisterAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResgisterAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
