import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
        /*children: [
            {
                path: '',
                component: DefaultRouteComponent,
            },
            {
                path: 'projects-detail/:brandId/:projectId',
                component: DashboardComponent,
                children: [
                    { path: '', component: ProjectsDetailComponent }
                ]
            },
            {
                path: 'projects/:brandId',
                component: DashboardComponent,
                children: [
                    { path: '', component: ProjectsComponent }
                ]
            },
        ]*/
    }
];

export const routedComponents: any[] = [
    
];