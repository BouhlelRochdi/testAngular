import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditListPostComponent } from './edit-list-post.component';

describe('EditListPostComponent', () => {
  let component: EditListPostComponent;
  let fixture: ComponentFixture<EditListPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditListPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditListPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
