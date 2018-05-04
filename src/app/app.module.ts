import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialdesignModule } from './modules/materialdesign/materialdesign.module'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostsComponent } from './components/posts/posts.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { AuthGuard } from './gaurds/auth.guard';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { PostService } from './services/post/post.service';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostsComponent,
    LoginComponent,
    RegisterComponent,
    CreatePostComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialdesignModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    UserService,
    PostService,
    {provide : HTTP_INTERCEPTORS, useClass : AuthGuard, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
