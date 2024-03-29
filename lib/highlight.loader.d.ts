import { Observable } from 'rxjs';
import { HighlightLibrary, HighlightOptions } from './highlight.model';
export declare class HighlightLoader {
    private _options;
    private readonly _ready;
    readonly ready: Observable<HighlightLibrary>;
    constructor(doc: any, platformId: object, _options: HighlightOptions);
    /**
     * Lazy-Load highlight.js library
     */
    private _loadLibrary;
    /**
     * Lazy-load highlight.js languages
     */
    private _loadLanguages;
}
