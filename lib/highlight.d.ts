import { OnChanges, SimpleChanges, EventEmitter, ElementRef } from '@angular/core';
import { HighlightJS } from './highlight.service';
import { HighlightOptions, HighlightResult } from './highlight.model';
export declare class Highlight implements OnChanges {
    private _hljs;
    private _options;
    private readonly _nativeElement;
    private _lineNumbersObs;
    code: string;
    languages: string[];
    lineNumbers: boolean;
    highlighted: EventEmitter<HighlightResult>;
    constructor(el: ElementRef, _hljs: HighlightJS, _options: HighlightOptions);
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Highlighting with language detection and fix markup.
     * @param code Accepts a string with the code to highlight
     * @param languages An optional array of language names and aliases restricting detection to only those languages.
     * The subset can also be set with configure, but the local parameter overrides the option if set.
     */
    highlightElement(code: string, languages?: string[]): void;
    private addLineNumbers;
    private destroyLineNumbersObserver;
    private setCode;
    private escapeHtml;
}
