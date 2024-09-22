import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaServicioclienteComponent } from './lista-serviciocliente.component';

describe('ListaServicioclienteComponent', () => {
  let component: ListaServicioclienteComponent;
  let fixture: ComponentFixture<ListaServicioclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaServicioclienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaServicioclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
