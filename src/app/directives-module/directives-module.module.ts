import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HighlightDirective } from './directives/highlight.directive';
import { DummyDirective1 } from './directives/dummy1.directive';
import { DummyDirective2 } from './directives/dummy2.directive';

import { DirectivesAndChangeDetectionComponent } from './components/directives-and-change-detection.component';
import { HighlightDirectiveComponent } from './components/highlight-directive.component';

@NgModule({
    imports: [
        CommonModule,

        RouterModule.forChild([
            { 
                path: 'directives',
                children: [
                    { path: '', redirectTo: 'highlight', pathMatch: 'full' },
                    { path: 'highlight',  component: HighlightDirectiveComponent },
                    { path: 'directives-and-change-detection',  component: DirectivesAndChangeDetectionComponent },
                ]
            }
        ]),

    ],
    exports: [RouterModule],
    declarations: [
        HighlightDirective,
        DummyDirective1,
        DummyDirective2,
        HighlightDirectiveComponent,
        DirectivesAndChangeDetectionComponent,
    ],
})
export class DirectivesModule {}