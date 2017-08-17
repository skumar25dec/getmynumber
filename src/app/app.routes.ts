import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CompareComponent } from './components/compare/compare.component';
import { RegisterationComponent } from './components/registeration/registeration.component';
import { SearchComponent } from './components/search/search.component';

// Route Configuration
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'compare', component: CompareComponent },
    { path: 'register', component: RegisterationComponent },
    { path: 'search', component: SearchComponent }

];

export const appRoutingProvider: ModuleWithProviders = RouterModule.forRoot(routes);
