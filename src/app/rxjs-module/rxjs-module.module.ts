import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MapComponent } from './operator-components/map.component';
import { ConcatMapComponent } from './operator-components/concat-map.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            { 
                path: 'rxjs',
                children: [
                    { path: '', redirectTo: 'map', pathMatch: 'full' },
                    { path: 'map',  component: MapComponent },
                    { path: 'concat-map',  component: ConcatMapComponent },
                ]
            }
        ]),
    ],
    exports: [RouterModule],
    declarations: [
        MapComponent,
        ConcatMapComponent
    ],
})
export class RxjsModule {}