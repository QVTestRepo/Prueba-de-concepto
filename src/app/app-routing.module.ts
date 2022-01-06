import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolaNundoComponent } from './hola-nundo/hola-nundo.component';
import { InfoDesalComponent } from './info-desal/info-desal.component';
import { ConfigModuleComponent } from './config-module/config-module.component';

const routes: Routes = [
    { path: '', component: HolaNundoComponent },
    { path: 'infodesaltest', component: InfoDesalComponent},
    { path: 'config', component: ConfigModuleComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
