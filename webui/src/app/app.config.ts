import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

export const routeUrls = {
    empty: '',
    unknown: '**',
    dashboard: 'dashboard'
};

@Injectable()
export class AppConfig {
    public config = {
        pageUrls: {
            dashboard: '/' + routeUrls.dashboard,
        },
        constants: {
        },
        /*
        serviceUrls: {
            'base': environment.serviceUrl,
            'movies': '/movies',
            'getMovie': (id) => '/movies/' + id,
            'deleteMovie': (id) => '/movies/' + id,
            'updateMovie': (id) => '/movies/' + id
        },
        */
        serviceUrls: {
            'base': environment.serviceUrl,
            'pets': '/pets/',
            'getPets': (id) => '/pets/' + id,
            'deletePet': (id) => '/pets/' + id,
            'updatePet': (id) => '/pets/' + id
        }
    };
    getConfig(): Object {
        return this.config;
    }
}
