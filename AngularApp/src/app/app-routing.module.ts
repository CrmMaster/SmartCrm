import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { CadastroClienteComponent } from './modules/cadastro-cliente/cadastro-cliente.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { LoginComponent } from './modules/user/login/login.component';
import { CadastroComponent } from './modules/user/cadastro/cadastro.component';
import { ContatosComponent } from './modules/contatos/contatos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'smart',
    component: DefaultComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'posts',
        component: PostsComponent,
      },
      {
        path: 'cadastroCliente',
        component: CadastroClienteComponent,
      },
      {
        path: 'contatos',
        children:[
          {
            path: '',
            component: ContatosComponent
          }
        ]
      }
    ],
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home-smart-crm/home-smart-crm.module').then(
        (m) => m.HomeSmartCrmModule
      ),
  },
  {
    path: 'user',
    children:[
      {
        path: '',
        component: LoginComponent,
      },
      {path:'login',
      component: LoginComponent
      },
      {path:'cadastro',
      component: CadastroComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
