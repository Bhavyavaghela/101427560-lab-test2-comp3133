import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';


// Angular Material Modules
import { importProvidersFrom } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
   
    provideAnimations(),
    provideRouter(routes, withEnabledBlockingInitialNavigation()),

    // Angular Material modules
    importProvidersFrom(
      BrowserModule,
      MatCardModule,
      MatFormFieldModule,
      MatSelectModule,
      MatInputModule
    ),
  ],
};
