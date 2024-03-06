import { Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { AboutMeComponent } from './body/about-me/about-me.component';
import { EducationComponent } from './body/education/education.component';
import { ContactComponent } from './body/contact/contact.component';
import { AppComponent } from './app.component';



export const routes: Routes = [
    {
      path: '',
      redirectTo: 'about-me',
      pathMatch: 'full'
    },
    {
      path: 'about-me',
      
      children: [
        { path: '', component: AboutMeComponent },
      ]
    },
    {
      path: 'education',
      children: [
        { path: '', component: EducationComponent },
      ] 
    },
    {
      path: 'contact',
      children: [
        { path: '', component: ContactComponent },
      ]
    }
];
