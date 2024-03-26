import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RequestsComponent } from './components/requests.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            { 
                path: 'http-experiments',
                children: [
                    { path: '', redirectTo: 'requests', pathMatch: 'full' },
                    { path: 'requests',  component: RequestsComponent },
                ]
            }
        ]),
    ],
    exports: [RouterModule],
    declarations: [
        RequestsComponent,
    ],
})
export class HttpExperimentsModule {}