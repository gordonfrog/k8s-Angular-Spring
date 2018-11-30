import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';
import { AppConfig } from '../app.config';
import Pet from '../beans/pet.bean';

@Injectable()
export class PetService {
    public config: any;
    constructor(private http: Http, private _config: AppConfig) {
        this.config = _config.getConfig();
    }

    setHeaders(){
        let header = new Headers();
        // let idToken = this.cookieService.get('id-token');
        // header.append('Authorization', idToken);
        return header;
    }

    getPets(): Observable<Pet[]> {
        return this.http.get(this.config.serviceUrls.base + this.config.serviceUrls.pets, { headers: this.setHeaders()})
            .pipe(
                map((res: Response) => res.json()),
                catchError(() => of({ 'error': 'Service call failed' }))
            );
    }

    getPetDetails(id): Observable<Pet> {
        return this.http.get(this.config.serviceUrls.base + this.config.serviceUrls.getPet(id), {headers: this.setHeaders()})
        .pipe(
            map((res: Response) => res.json()),
            catchError(() => of({'error' : 'Service call failed'}))
        );
    }
    deletePet(id): Observable<Pet> {
        console.log('deleteing '+id);
        return this.http.delete(this.config.serviceUrls.base + this.config.serviceUrls.deletePet(id), {headers: this.setHeaders()})
        .pipe(
            map((res: Response) => res.json()),
            catchError(() => of({'error' : 'Service call failed'}))
        );
    }

    createPet(pet: Pet): Observable<Pet> {
        return this.http.post(this.config.serviceUrls.base + this.config.serviceUrls.pets, pet, {headers: this.setHeaders()})
        .pipe(
            map((res: Response) => res.json()),
            catchError(() => of({'error' : 'Service call failed'}))
        );
    }

    updatePet(pet: Pet): Observable<Pet> {
        return this.http.put(this.config.serviceUrls.base + this.config.serviceUrls.updatePet(pet._id), pet, {headers: this.setHeaders()})
        .pipe(
            map((res: Response) => res.json()),
            catchError(() => of({'error' : 'Service call failed'}))
        );
    }
}
