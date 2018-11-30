import { Component, OnInit, Input, OnChanges, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import Pet from '../beans/pet.bean';
import {PetService} from '../services/pet.service';

@Component({
  selector: 'app-petform',
  templateUrl: './petform.component.html',
  styleUrls: ['./petform.component.css'],
  providers: [PetService]
})
export class PetformComponent implements OnInit, OnChanges {
  @ViewChild('addPetcloseBtn') addPetcloseBtn: ElementRef;
  @Input() newPet: Pet = new Pet();
  @Input() update: boolean;
  @Output() petUpdated: EventEmitter<Pet> = new EventEmitter<Pet>();
  @Output() petCreated:EventEmitter<Pet> = new EventEmitter<Pet>();

  constructor(private petService: PetService) { }

  ngOnInit() {

  }

  ngOnChanges() {

  }


  onSubmit() {
    if(this.update) {
      //update pet.
      this.petService.updatePet(this.newPet).subscribe((pet: Pet) => {
        this.petUpdated.emit(pet);
        this.newPet = pet;
        this.addPetcloseBtn.nativeElement.click();
      });
    } else {
      //create pet.
      this.petService.createPet(this.newPet).subscribe((pet: Pet) => {
        this.petCreated.emit(pet);
        this.newPet = new Pet();
        this.addPetcloseBtn.nativeElement.click();
      });
    }
  }
}
