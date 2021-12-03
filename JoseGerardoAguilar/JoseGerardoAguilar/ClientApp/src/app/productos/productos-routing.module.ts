import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  { path: 'productos', redirectTo: 'players/list', pathMatch: 'full' },
  { path: 'productos/list', component: ListComponent },
  { path: 'productos/:id/details', component: DetailsComponent },
  { path: 'productos/create', component: CreateComponent },
  { path: 'productos/:id/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
