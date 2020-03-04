import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {SunMovieComponent} from './sun-movie.component';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {MainComponent} from './main/main.component';
import {FooterComponent} from './footer/footer.component';
import {MoviesComponent} from './main/movies/movies.component';
import {PeopleComponent} from './main/people/people.component';
import {LandingComponent} from './main/landing/landing.component';
import {MovieComponent} from './main/movies/movie/movie.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { IconComponent } from './icon/icon.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full',
        data: {title: 'LandingComponent'}
    },
    {
        path: 'main',
        component: LandingComponent,
        data: {title: 'LandingComponent'}
    },
    {
        path: 'movies',
        component: MoviesComponent,
        data: {title: 'MoviesComponent'}
    },
    {
        path: 'movie/:id',
        component: MovieComponent,
        data: {title: 'MovieComponent'}
    },
    {
        path: 'people',
        component: PeopleComponent,
        data: {title: 'PeopleComponent'}
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    declarations: [
        SunMovieComponent,
        HeaderComponent,
        MainComponent,
        FooterComponent,
        MoviesComponent,
        PeopleComponent,
        LandingComponent,
        MovieComponent,
        NotFoundComponent,
        IconComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true}
        )
    ],
    providers: [],
    bootstrap: [SunMovieComponent]
})
export class AppModule {
}
