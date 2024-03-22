import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BasicObservablesComponent } from './basic-observables/basic-observables.component';
import { ErrorExperimentsComponent } from './error-experiments/error-experiments.component';
import { MapComponent } from './operator-components/map.component';
import { ConcatMapComponent } from './operator-components/concat-map.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            { 
                path: 'rxjs',
                children: [
                    { path: '', redirectTo: 'map', pathMatch: 'full' },
                    { path: 'basic-observables',  component: BasicObservablesComponent },
                    { path: 'error-experiments',  component: ErrorExperimentsComponent },
                    { path: 'map',  component: MapComponent },
                    { path: 'concat-map',  component: ConcatMapComponent },
                ]
            }
        ]),
    ],
    exports: [RouterModule],
    declarations: [
        BasicObservablesComponent,
        ErrorExperimentsComponent,
        MapComponent,
        ConcatMapComponent
    ],
})
export class RxjsModule {}