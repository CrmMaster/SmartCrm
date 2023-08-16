import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { CadastroClienteComponent } from './modules/cadastro-cliente/cadastro-cliente.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { LoginIndexComponent } from './modules/login/components/login-index/login-index.component';
import { PostsComponent } from './modules/posts/posts.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DefaultComponent,
    children: [
      {
        path: '',
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
    path: 'login',
    component: LoginIndexComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
