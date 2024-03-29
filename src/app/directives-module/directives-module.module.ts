import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HighlightDirective } from './directives/highlight.directive';
import { DummyDirective1 } from './directives/dummy1.directive';
import { DummyDirective2 } from './directives/dummy2.directive';
import { HighlightDemoComponent } from './components/highlight-demo.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { 
                path: 'directives',
                children: [
                    { path: '', redirectTo: 'highlight', pathMatch: 'full' },
                    { path: 'highlight',  component: HighlightDemoComponent },
                ]
            }
        ]),

        CommonModule
    ],
    exports: [RouterModule],
    declarations: [
        HighlightDirective,
        DummyDirective1,
        DummyDirective2,
        HighlightDemoComponent,
    ],
})
export class DirectivesModule {}