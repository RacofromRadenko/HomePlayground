import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainLayoutComponent } from "./components/main-layout/main-layout.component";
import {BasicThingsComponent} from "./components/basic-things/basic-things.component";

const routes: Routes = [{ path: "", component: MainLayoutComponent }];
// const routes: Routes = [{ path: "", component: BasicThingsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
