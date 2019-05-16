import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGridHolderComponent } from './table-grid-holder.component';

describe('TableGridHolderComponent', () => {
  let component: TableGridHolderComponent;
  let fixture: ComponentFixture<TableGridHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableGridHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableGridHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
