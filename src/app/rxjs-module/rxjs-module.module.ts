import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BasicObservablesComponent } from './components/basic-observables.component';
import { ErrorExperimentsComponent } from './components/error-experiments.component';
import { MapComponent } from './components/map.component';
import { ConcatMapComponent } from './components/concat-map.component';


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