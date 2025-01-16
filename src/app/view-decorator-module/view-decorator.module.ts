import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BaseComponent } from './components/base-component.component';
import { SubComponent } from './components/sub-component.component';

@NgModule({
    imports: [
        CommonModule,

        RouterModule.forChild([
            { 
                path: 'view-decorator',
                children: [
                    { path: '', redirectTo: 'base-component', pathMatch: 'full' },
                    { path: 'base-component',  component: BaseComponent }
                ]
            }
        ]),

    ],
    exports: [RouterModule],
    declarations: [
        BaseComponent,
        SubComponent
    ],
})
export class ViewDecoratorModule {}