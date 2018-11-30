import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {PetService} from '../services/pet.service';
import Pet from '../beans/pet.bean';
import * as _ from 'lodash';
import {NgForm} from '@angular/forms';



@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [PetService]
})
export class DashboardComponent implements OnInit {
  @ViewChild('deletePetModalCloseBtn') deletePetModalCloseBtn: ElementRef;
  title = 'dashboard';
  pets: Pet[] = [];
  newPet: Pet = new Pet();
  createPet:boolean = false;
  submitted = false;
  showPet:boolean = false;
  currentPet:Pet = new Pet();
  constructor(private petService: PetService) {
  }

  ngOnInit() {
    this.getAllPets();
  }

  getAllPets() {
    this.petService.getPets().subscribe((pets: Pet[]) => {
      this.pets = pets;
    });
  }

  petCreated(pet:Pet) {
    this.pets.push(pet);
  }

  petUpdated(pet: Pet) {
    console.log('pet updated');
  }

  showModal(pet:Pet) {
    this.currentPet = pet;
  }

  deletePet() {
    this.petService.deletePet(this.currentPet._id).subscribe((data: any) => {
      //show deleted modal.
      this.getAllPets();
      this.deletePetModalCloseBtn.nativeElement.click();
    });
  }
}
