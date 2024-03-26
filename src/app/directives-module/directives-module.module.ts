import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HighlightDirective } from './directives/highlight.directive';
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
    ],
    exports: [RouterModule],
    declarations: [
        HighlightDirective,
        HighlightDemoComponent,
    ],
})
export class DirectivesModule {}