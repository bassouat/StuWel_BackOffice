﻿import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, retryWhen } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { Article } from '../_models/article';
import { Rubrique } from '../_models/rubrique';

@Injectable({ providedIn: 'root' })
export class ClientHttpService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    constructor(private router: Router,
        private http: HttpClient) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    login(username, password) {
        return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user 
                // logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/account/login']);
    }

    register(user: User) {
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getById(id: string) {
        return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
    }

    update(id, params) {
        return this.http.put(`${environment.apiUrl}/users/${id}`, params)
            .pipe(map(x => {
                // update stored user if the logged in user updated their own record
                if (id == this.userValue.id) {
                    // update local storage
                    const user = { ...this.userValue, ...params };
                    localStorage.setItem('user', JSON.stringify(user));

                    // publish updated user to subscribers
                    this.userSubject.next(user);
                }
                return x;
            }));
    }

    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/users/${id}`)
            .pipe(map(x => {
                // auto logout if the logged in user deleted their own record
                if (id == this.userValue.id) {
                    this.logout();
                }
                return x;
            }));
    }

    // ################################### Article services ################################### //
    createArticle(dataArticle) {
        console.log('data received in client service ', dataArticle);
        return this.http.post<Article>(`${environment.apiUrl}/article/create`, { dataArticle });
    }

    getAllArticle() {
        return this.http.get<Article[]>(`${environment.apiUrl}/article`).pipe(
            map(val => {
                return val.map(v => v.data)
            })
        )
    }

    // ################################### Rubriques services  ################################### //
    createRubrique(dataRubrique) {
        return this.http.post<Rubrique>(`${environment.apiUrl}/rubrique/create`, dataRubrique);
    }

    getAllRubrique() {
        return this.http.get<Rubrique[]>(`${environment.apiUrl}/rubrique`);
    }

    createSousRubrique(dataSRubrique) {
        console.log("dataSRubrique ", dataSRubrique);
        return this.http.post<any>(`${environment.apiUrl}/sous-rubrique/create`, { dataSRubrique });
    }

    getAllSousRubrique() {
        return this.http.get<any[]>(`${environment.apiUrl}/sous-rubrique`);
    }

    // ################################### Témoignages services  ################################### //
    createTemoignage(dataTemoignage) {
        return this.http.post<any>(`${environment.apiUrl}/temoignage/create`, dataTemoignage);
    }

    getAllTemoignage() {
        return this.http.get<any[]>(`${environment.apiUrl}/temoignage`);
    }

    // ################################### Acteurs services  ################################### //
    createActeur(dataActeur) {
        return this.http.post<any>(`${environment.apiUrl}/acteur/create`, dataActeur);
    }

    getAllActeur() {
        return this.http.get<any[]>(`${environment.apiUrl}/acteur`);
    }
}