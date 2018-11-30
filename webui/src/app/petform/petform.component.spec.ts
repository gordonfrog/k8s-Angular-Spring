import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppConfig} from '../app.config';

import { PetformComponent } from './petform.component';
import {PetService} from '../services/pet.service'

describe('PetformComponent', () => {
  let component: PetformComponent;
  let fixture: ComponentFixture<PetformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpModule
      ],
      declarations: [ PetformComponent ],
      providers: [PetService,
        AppConfig]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
