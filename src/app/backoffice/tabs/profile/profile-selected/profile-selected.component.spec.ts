import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSelectedComponent } from './profile-selected.component';

describe('ProfileSelectedComponent', () => {
  let component: ProfileSelectedComponent;
  let fixture: ComponentFixture<ProfileSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileSelectedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
