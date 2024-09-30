import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestableComponent } from './components/testable.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            { 
                path: 'testable',
                children: [
                    { path: '', redirectTo: 'testable1', pathMatch: 'full' },
                    { path: 'testable1',  component: TestableComponent }
                ]
            }
        ]),
    ],
    exports: [RouterModule],
    declarations: [
        TestableComponent
    ],
})
export class TestableModule {}