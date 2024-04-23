import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Date1Component } from './components/date1.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            { 
                path: 'date',
                children: [
                    { path: '', redirectTo: 'date1', pathMatch: 'full' },
                    { path: 'date1',  component: Date1Component },
                ]
            }
        ]),
    ],
    exports: [RouterModule],
    declarations: [
        Date1Component,
    ],
})
export class DateModule {}