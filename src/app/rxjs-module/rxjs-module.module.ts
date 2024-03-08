import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MapComponent } from './map-component/map.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            { 
                path: 'rxjs',
                children: [
                    { path: '', redirectTo: 'map', pathMatch: 'full' },
                    { path: 'map',  component: MapComponent },
                ]
            }
        ]),
    ],
    exports: [RouterModule],
    declarations: [
        MapComponent,
    ],
})
export class RxjsModule {}