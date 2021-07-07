import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { IndexMovieTheatersComponent } from './movie-theaters/index-movie-theaters/index-movie-theaters.component';
import { CreateMovieTheaterComponent } from './movie-theaters/create-movie-theater/create-movie-theater.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';

const routes: Routes = [
  {path: '', component:HomeComponent},

  {path: 'genres', component:IndexGenresComponent},
  {path: 'genres/create', component:CreateGenreComponent},
  
  {path: 'actors', component:IndexActorsComponent},
  {path: 'actors/create', component:CreateActorComponent},
  {path: 'actors/edit/:id', component:EditActorComponent},
  
  {path: 'movietheaters', component:IndexMovieTheatersComponent},
  {path: 'movietheaters/create', component:CreateMovieTheaterComponent},

  {path: 'movies/create', component:CreateMovieComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
