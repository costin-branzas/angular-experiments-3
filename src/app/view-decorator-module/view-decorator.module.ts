import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ViewChildExperiment1 } from './components/view-child-experiment1.component';
import { SubComponent1 } from './components/sub-component1.component';
import { SubComponent2 } from './components/sub-component2.component';

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
        SubComponent1,
        SubComponent2
    ],
})
export class ViewDecoratorModule {}