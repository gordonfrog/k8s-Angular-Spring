import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { PetService } from './pet.service';
import {AppConfig} from '../app.config';

describe('PetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            HttpModule
        ],
      providers: [PetService, AppConfig]
    });
  });

  it('should be created', inject([PetService], (service: PetService) => {
    expect(service).toBeTruthy();
  }));
});
