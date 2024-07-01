import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomBlagueComponent } from './random-blague.component';

describe('RandomBlagueComponent', () => {
  let component: RandomBlagueComponent;
  let fixture: ComponentFixture<RandomBlagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomBlagueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomBlagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
