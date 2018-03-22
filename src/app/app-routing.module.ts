import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { BlogComponent} from './blog/blog.component';
import { AdminAboutComponent } from './admin-about/admin-about.component';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { AdminHomeComponent } from './admin-home/admin-home.component'; 
import { ArtComponent } from './art/art.component';
import { CodeComponent } from './code/code.component';
import { DesignComponent } from './design/design.component';
import { GamingComponent } from './gaming/gaming.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'admin/login',
    component: AdminComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'admin/about',
    component: AdminAboutComponent
  },
  {
    path: 'admin/home',
    component: AdminHomeComponent
  },
  {
    path: 'admin/contact',
    component: AdminContactComponent
  },
  {
    path: 'admin/blog',
    component: AdminBlogComponent
  },
  {
    path: 'code',
    component: CodeComponent
  },
  {
    path: 'about/art',
    component: ArtComponent
  },
  {
    path: 'about/design',
    component: DesignComponent
  },
  {
    path: 'about/gaming',
    component: GamingComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
