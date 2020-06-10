import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ShowPage} from '../interfaces/movie-interface';

@Injectable({
    providedIn: 'root'
})
export class RestService {

    constructor(private httpClient: HttpClient) {
    }

    getLatestMovies(): Observable<any> {
        return this.httpClient.get(`${environment.apiUrl}movie/latest?api_key=${environment.apiKey}`);
    }

    getTvOnTheAir(language?: string, page?: number): Observable<ShowPage> {
        return this.httpClient.get<ShowPage>(`${environment.apiUrl}tv/on_the_air?api_key=${environment.apiKey}${language ? ('&language=' + language) : '&language=en-US'}${page ? ('&page=' + page) : '&page=1'}`);
    }

    getTvInTheaters(language?: string, page?: number): Observable<any> {
        return this.httpClient.get<ShowPage>(`${environment.apiUrl}movie/popular?api_key=${environment.apiKey}${language ? ('&language=' + language) : '&language=en-US'}${page ? ('&page=' + page) : '&page=1'}`);
    }
}

