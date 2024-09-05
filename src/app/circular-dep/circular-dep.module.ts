import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CircularDep1 } from './components/circular-dep1.component';
import { CircularDep2 } from './components/circular-dep2.component';

@NgModule({
    imports: [
        CommonModule,

        RouterModule.forChild([
            { 
                path: 'circular-dep',
                children: [
                    { path: '', redirectTo: 'circular-dep1', pathMatch: 'full' },
                    { path: 'circular-dep1',  component: CircularDep1 },
                    { path: 'circular-dep2',  component: CircularDep2 },
                ]
            }
        ]),

    ],
    exports: [RouterModule],
    declarations: [
        CircularDep1,
        CircularDep2,
    ],
})
export class CircularDepModule {}