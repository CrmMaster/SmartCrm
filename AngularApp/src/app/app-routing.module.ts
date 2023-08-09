import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { CadastroClienteComponent } from './modules/cadastro-cliente/cadastro-cliente.component';

const routes: Routes = [{
    path: '',
    component: DefaultComponent,
    children:[{
      path:'',
      component:DashboardComponent
    },{
      path:'posts',
      component:PostsComponent
    },{
      path:'cadastroCliente',
      component:CadastroClienteComponent
    }]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
