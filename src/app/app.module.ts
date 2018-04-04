import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { AuthService } from "./_services/auth/auth.service";
import { BlogComponent } from './blog/blog.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { AdminAboutComponent } from './admin-about/admin-about.component';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';
import { CodeComponent } from './code/code.component';
import { ArtComponent } from './art/art.component';
import { DesignComponent } from './design/design.component';
import { GamingComponent } from './gaming/gaming.component'
import { CommentService } from './_services/comment/comment.service';
import { AuthGuard } from './_services/authGuard/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    AdminComponent,
    BlogComponent,
    AdminHomeComponent,
    AdminContactComponent,
    AdminAboutComponent,
    AdminBlogComponent,
    CodeComponent,
    ArtComponent,
    DesignComponent,
    GamingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    CommentService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
