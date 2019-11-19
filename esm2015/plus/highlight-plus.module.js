/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HighlightModule } from 'ngx-highlightjs';
// Uncomment the following line for development
// import { HighlightModule } from '../../src/public-api';
import { GistFilePipe, GistDirective } from './gist';
import { CodeFromUrlPipe } from './code-from-url';
export class HighlightPlusModule {
}
HighlightPlusModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    HighlightModule,
                    HttpClientModule
                ],
                declarations: [
                    GistDirective,
                    GistFilePipe,
                    CodeFromUrlPipe
                ],
                exports: [
                    HighlightModule,
                    GistDirective,
                    GistFilePipe,
                    CodeFromUrlPipe
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0LXBsdXMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWhpZ2hsaWdodGpzL3BsdXMvIiwic291cmNlcyI6WyJoaWdobGlnaHQtcGx1cy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFHbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBbUJsRCxNQUFNLE9BQU8sbUJBQW1COzs7WUFqQi9CLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsZUFBZTtvQkFDZixnQkFBZ0I7aUJBQ2pCO2dCQUNELFlBQVksRUFBRTtvQkFDWixhQUFhO29CQUNiLFlBQVk7b0JBQ1osZUFBZTtpQkFDaEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixZQUFZO29CQUNaLGVBQWU7aUJBQ2hCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEhpZ2hsaWdodE1vZHVsZSB9IGZyb20gJ25neC1oaWdobGlnaHRqcyc7XG4vLyBVbmNvbW1lbnQgdGhlIGZvbGxvd2luZyBsaW5lIGZvciBkZXZlbG9wbWVudFxuLy8gaW1wb3J0IHsgSGlnaGxpZ2h0TW9kdWxlIH0gZnJvbSAnLi4vLi4vc3JjL3B1YmxpYy1hcGknO1xuaW1wb3J0IHsgR2lzdEZpbGVQaXBlLCBHaXN0RGlyZWN0aXZlIH0gZnJvbSAnLi9naXN0JztcbmltcG9ydCB7IENvZGVGcm9tVXJsUGlwZSB9IGZyb20gJy4vY29kZS1mcm9tLXVybCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBIaWdobGlnaHRNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBHaXN0RGlyZWN0aXZlLFxuICAgIEdpc3RGaWxlUGlwZSxcbiAgICBDb2RlRnJvbVVybFBpcGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEhpZ2hsaWdodE1vZHVsZSxcbiAgICBHaXN0RGlyZWN0aXZlLFxuICAgIEdpc3RGaWxlUGlwZSxcbiAgICBDb2RlRnJvbVVybFBpcGVcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBIaWdobGlnaHRQbHVzTW9kdWxlIHtcbn1cbiJdfQ==