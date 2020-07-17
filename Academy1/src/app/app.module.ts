import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

/* Modules */
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select'; 

/* Services */
import { HttpService } from './services/http.service';
import { StorageService } from './services/storage.service';

/* Components */
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { SongsComponent } from './components/songs/songs.component';
import { HeaderComponent } from './components/header/header.component';
import { LikeDirective } from './directives/like.directive';
import { AddSongComponent } from './components/add-song/add-song.component';
import { MymodalComponent } from './components/mymodal/mymodal.component';
import { CreateArtistComponent } from './components/create-artist/create-artist.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { SortByPipe } from './pipes/sort-by.pipe';

/* Guards */
import { AuthGuard } from './guards/auth.guard';
import { AuthLoginGuard } from './guards/auth-login.guard';


// Rutas
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'songs'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthLoginGuard]
  },
  {
    path: 'songs',
    component: SongsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'songs/addsong',
    component: AddSongComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'songs/addsong/addArtist',
    component: CreateArtistComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'albums',
    component: AlbumsComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({

  /* Componentes */
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    SongsComponent,
    HeaderComponent,
    LikeDirective,
    AddSongComponent,
    MymodalComponent,
    CreateArtistComponent,
    AlbumsComponent,
    SortByPipe,
    
  ],
  /* Modulos */
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule
    
  ],
  /* Servicios */
  providers: [
    HttpService,
    StorageService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

