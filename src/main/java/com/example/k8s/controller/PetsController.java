package com.example.k8s.controller;

import com.example.k8s.model.Pets;
import com.example.k8s.repository.PetsRepository;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.Assert;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import javax.validation.Valid;
import java.util.List;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/pets")
public class PetsController {
  @Autowired
  private PetsRepository repository;
  /*
  @Autowired
  public PetsController(PetsRepository petsRepository) {
    Assert.notNull(repository, "Repository must not be null!");
    repository = petsRepository;
  }
  */
  
  @RequestMapping(value = "/", method = RequestMethod.GET)
  public List<Pets> getAllPets() {
    return repository.findAll();
  }
  @RequestMapping(value = "/{id}", method = RequestMethod.GET)
  public Pets getPetById(@PathVariable("id") ObjectId id) {
    return repository.findBy_id(id);
  }
 
  @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
  public void modifyPetById(@PathVariable("id") ObjectId id, @Valid @RequestBody Pets pets) {
    pets.set_id(id);
    repository.save(pets);
  }
 
  @RequestMapping(value = "/", method = RequestMethod.POST)
  public Pets createPet(@Valid @RequestBody Pets pets) {
    pets.set_id(ObjectId.get());
    repository.save(pets);
    return pets;
  }
 
  @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
  public void deletePet(@PathVariable ObjectId id) {
    repository.delete(repository.findBy_id(id));
  }
}
