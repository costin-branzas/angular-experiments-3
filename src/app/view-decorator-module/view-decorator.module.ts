import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ViewChildExperiment1 } from './components/view-child-experiment1.component';
import { SubComponent1 } from './components/sub-component1.component';

@NgModule({
    imports: [
        CommonModule,

        RouterModule.forChild([
            { 
                path: 'view-decorator',
                children: [
                    { path: '', redirectTo: 'view-child-experiment1', pathMatch: 'full' },
                    { path: 'view-child-experiment1',  component: ViewChildExperiment1 }
                ]
            }
        ]),

    ],
    exports: [RouterModule],
    declarations: [
        ViewChildExperiment1,
        SubComponent1
    ],
})
export class ViewDecoratorModule {}