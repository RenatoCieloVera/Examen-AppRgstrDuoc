import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
  {
    path: 'login-alumno',
    loadChildren: () => import('./login-alumno/login-alumno.module').then( m => m.LoginAlumnoPageModule)
  },
  {
    path: 'login-profe',
    loadChildren: () => import('./login-profe/login-profe.module').then( m => m.LoginProfePageModule)
  },
  {
    path: 'clase-matematicas-alumno',
    loadChildren: () => import('./clase-matematicas-alumno/clase-matematicas-alumno.module').then( m => m.ClaseMatematicasAlumnoPageModule)
  },
  {
    path: 'clase-matematicas-profesor',
    loadChildren: () => import('./clase-matematicas-profesor/clase-matematicas-profesor.module').then( m => m.ClaseMatematicasProfesorPageModule)
  },
  {
    path: 'restaurar-pass',
    loadChildren: () => import('./restaurar-pass/restaurar-pass.module').then( m => m.RestaurarPassPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'error-404',
    loadChildren: () => import('./error-404/error-404.module').then( m => m.Error404PageModule)
  },
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
