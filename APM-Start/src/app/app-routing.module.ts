import { WelcomeComponent } from './home/welcome.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
    imports:[
        RouterModule.forRoot(
            [{path:"welcome", component:WelcomeComponent},
            {path:'',redirectTo:"welcome", pathMatch:"full"},
            { path:"**", component:PageNotFoundComponent}]
        )
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{}