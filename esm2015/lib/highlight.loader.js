/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject, PLATFORM_ID, Optional } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, from, EMPTY, zip } from 'rxjs';
import { catchError, tap, map, switchMap, filter, take } from 'rxjs/operators';
import { HIGHLIGHT_OPTIONS } from './highlight.model';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./highlight.model";
// @dynamic
export class HighlightLoader {
    /**
     * @param {?} doc
     * @param {?} platformId
     * @param {?} _options
     */
    constructor(doc, platformId, _options) {
        this._options = _options;
        // Stream that emits when hljs library is loaded and ready to use
        this._ready = new BehaviorSubject(null);
        this.ready = this._ready.asObservable().pipe(filter((/**
         * @param {?} hljs
         * @return {?}
         */
        (hljs) => !!hljs)), take(1));
        // Check if hljs is already available
        if (isPlatformBrowser(platformId) && doc.defaultView.hljs) {
            this._ready.next(doc.defaultView.hljs);
        }
        else {
            // Load hljs library
            this._loadLibrary().pipe(switchMap((/**
             * @param {?} hljs
             * @return {?}
             */
            (hljs) => {
                if (this._options && this._options.lineNumbers) {
                    // Make hljs available on window object (required for the line numbers library)
                    doc.defaultView.hljs = hljs;
                    // Load line numbers library
                    return loadLineNumbers().pipe(tap((/**
                     * @return {?}
                     */
                    () => this._ready.next(hljs))));
                }
                else {
                    this._ready.next(hljs);
                    return EMPTY;
                }
            })), catchError((/**
             * @param {?} e
             * @return {?}
             */
            (e) => {
                console.error('Unable to load hljs library', e);
                return EMPTY;
            }))).subscribe();
        }
    }
    /**
     * Lazy-Load highlight.js library
     * @private
     * @return {?}
     */
    _loadLibrary() {
        return (this._options && this._options.languages && Object.keys(this._options.languages).length)
            ? from(loadCoreLibrary()).pipe(switchMap((/**
             * @param {?} hljs
             * @return {?}
             */
            (hljs) => this._loadLanguages(hljs))))
            : from(loadAllLibrary());
    }
    /**
     * Lazy-load highlight.js languages
     * @private
     * @param {?} hljs
     * @return {?}
     */
    _loadLanguages(hljs) {
        /** @type {?} */
        const languages = Object.entries(this._options.languages).map((/**
         * @param {?} __0
         * @return {?}
         */
        ([langName, langLoader]) => importModule(langLoader()).pipe(tap((/**
         * @param {?} langFunc
         * @return {?}
         */
        (langFunc) => hljs.registerLanguage(langName, langFunc))))));
        return zip(...languages).pipe(map((/**
         * @return {?}
         */
        () => hljs)));
    }
}
HighlightLoader.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
HighlightLoader.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [HIGHLIGHT_OPTIONS,] }] }
];
/** @nocollapse */ HighlightLoader.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function HighlightLoader_Factory() { return new HighlightLoader(i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(i0.PLATFORM_ID), i0.ɵɵinject(i2.HIGHLIGHT_OPTIONS, 8)); }, token: HighlightLoader, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    HighlightLoader.prototype._ready;
    /** @type {?} */
    HighlightLoader.prototype.ready;
    /**
     * @type {?}
     * @private
     */
    HighlightLoader.prototype._options;
}
/**
 * Import highlight.js core library
 * @return {?}
 */
function loadCoreLibrary() {
    return importModule(import('highlight.js/lib/highlight'));
}
/**
 * Import highlight.js library with all languages
 * @return {?}
 */
function loadAllLibrary() {
    return importModule(import('highlight.js'));
}
/**
 * Import line numbers library
 * @return {?}
 */
function loadLineNumbers() {
    return importModule(import('highlightjs-line-numbers.js'));
}
/**
 * Map loader response to module object
 * @type {?}
 */
const importModule = (/**
 * @param {?} moduleLoader
 * @return {?}
 */
(moduleLoader) => {
    return from(moduleLoader).pipe(filter((/**
     * @param {?} module
     * @return {?}
     */
    (module) => !!module && !!module.default)), map((/**
     * @param {?} module
     * @return {?}
     */
    (module) => module.default)));
});
const ɵ0 = importModule;
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0LmxvYWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1oaWdobGlnaHRqcy8iLCJzb3VyY2VzIjpbImxpYi9oaWdobGlnaHQubG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFjLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxpQkFBaUIsRUFBc0MsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7QUFNMUYsTUFBTSxPQUFPLGVBQWU7Ozs7OztJQVExQixZQUE4QixHQUFRLEVBQ0wsVUFBa0IsRUFDUSxRQUEwQjtRQUExQixhQUFRLEdBQVIsUUFBUSxDQUFrQjs7UUFScEUsV0FBTSxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLFVBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDOUMsTUFBTTs7OztRQUFDLENBQUMsSUFBc0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBQyxFQUMxQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1IsQ0FBQztRQUtBLHFDQUFxQztRQUNyQyxJQUFJLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFO1lBQ3pELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcs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Q0FBQyxDQUFDLENBQUM7QUFDN0QsQ0FBQzs7Ozs7TUFLSyxZQUFZOzs7O0FBQUcsQ0FBQyxZQUEwQixFQUFtQixFQUFFO0lBQ25FLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FDNUIsTUFBTTs7OztJQUFDLENBQUMsTUFBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFDLEVBQ3JELEdBQUc7Ozs7SUFBQyxDQUFDLE1BQVcsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxDQUNyQyxDQUFDO0FBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBQTEFURk9STV9JRCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERPQ1VNRU5ULCBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIGZyb20sIEVNUFRZLCB6aXAgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIHRhcCwgbWFwLCBzd2l0Y2hNYXAsIGZpbHRlciwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEhJR0hMSUdIVF9PUFRJT05TLCBIaWdobGlnaHRMaWJyYXJ5LCBIaWdobGlnaHRPcHRpb25zIH0gZnJvbSAnLi9oaWdobGlnaHQubW9kZWwnO1xuXG4vLyBAZHluYW1pY1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSGlnaGxpZ2h0TG9hZGVyIHtcbiAgLy8gU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiBobGpzIGxpYnJhcnkgaXMgbG9hZGVkIGFuZCByZWFkeSB0byB1c2VcbiAgcHJpdmF0ZSByZWFkb25seSBfcmVhZHkgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICByZWFkb25seSByZWFkeSA9IHRoaXMuX3JlYWR5LmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgZmlsdGVyKChobGpzOiBIaWdobGlnaHRMaWJyYXJ5KSA9PiAhIWhsanMpLFxuICAgIHRha2UoMSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBkb2M6IGFueSxcbiAgICAgICAgICAgICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogb2JqZWN0LFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEhJR0hMSUdIVF9PUFRJT05TKSBwcml2YXRlIF9vcHRpb25zOiBIaWdobGlnaHRPcHRpb25zKSB7XG4gICAgLy8gQ2hlY2sgaWYgaGxqcyBpcyBhbHJlYWR5IGF2YWlsYWJsZVxuICAgIGlmIChpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKSAmJiBkb2MuZGVmYXVsdFZpZXcuaGxqcykge1xuICAgICAgdGhpcy5fcmVhZHkubmV4dChkb2MuZGVmYXVsdFZpZXcuaGxqcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIExvYWQgaGxqcyBsaWJyYXJ5XG4gICAgICB0aGlzLl9sb2FkTGlicmFyeSgpLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcCgoaGxqczogSGlnaGxpZ2h0TGlicmFyeSkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLl9vcHRpb25zICYmIHRoaXMuX29wdGlvbnMubGluZU51bWJlcnMpIHtcbiAgICAgICAgICAgIC8vIE1ha2UgaGxqcyBhdmFpbGFibGUgb24gd2luZG93IG9iamVjdCAocmVxdWlyZWQgZm9yIHRoZSBsaW5lIG51bWJlcnMgbGlicmFyeSlcbiAgICAgICAgICAgIGRvYy5kZWZhdWx0Vmlldy5obGpzID0gaGxqcztcbiAgICAgICAgICAgIC8vIExvYWQgbGluZSBudW1iZXJzIGxpYnJhcnlcbiAgICAgICAgICAgIHJldHVybiBsb2FkTGluZU51bWJlcnMoKS5waXBlKHRhcCgoKSA9PiB0aGlzLl9yZWFkeS5uZXh0KGhsanMpKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3JlYWR5Lm5leHQoaGxqcyk7XG4gICAgICAgICAgICByZXR1cm4gRU1QVFk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcigoZTogYW55KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5hYmxlIHRvIGxvYWQgaGxqcyBsaWJyYXJ5JywgZSk7XG4gICAgICAgICAgcmV0dXJuIEVNUFRZO1xuICAgICAgICB9KVxuICAgICAgKS5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTGF6eS1Mb2FkIGhpZ2hsaWdodC5qcyBsaWJyYXJ5XG4gICAqL1xuICBwcml2YXRlIF9sb2FkTGlicmFyeSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiAodGhpcy5fb3B0aW9ucyAmJiB0aGlzLl9vcHRpb25zLmxhbmd1YWdlcyAmJiBPYmplY3Qua2V5cyh0aGlzLl9vcHRpb25zLmxhbmd1YWdlcykubGVuZ3RoKVxuICAgICAgPyBmcm9tKGxvYWRDb3JlTGlicmFyeSgpKS5waXBlKHN3aXRjaE1hcCgoaGxqczogSGlnaGxpZ2h0TGlicmFyeSkgPT4gdGhpcy5fbG9hZExhbmd1YWdlcyhobGpzKSkpXG4gICAgICA6IGZyb20obG9hZEFsbExpYnJhcnkoKSk7XG4gIH1cblxuICAvKipcbiAgICogTGF6eS1sb2FkIGhpZ2hsaWdodC5qcyBsYW5ndWFnZXNcbiAgICovXG4gIHByaXZhdGUgX2xvYWRMYW5ndWFnZXMoaGxqczogSGlnaGxpZ2h0TGlicmFyeSk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgbGFuZ3VhZ2VzID0gT2JqZWN0LmVudHJpZXModGhpcy5fb3B0aW9ucy5sYW5ndWFnZXMpLm1hcCgoW2xhbmdOYW1lLCBsYW5nTG9hZGVyXSkgPT5cbiAgICAgIGltcG9ydE1vZHVsZShsYW5nTG9hZGVyKCkpLnBpcGUoXG4gICAgICAgIHRhcCgobGFuZ0Z1bmM6IGFueSkgPT4gaGxqcy5yZWdpc3Rlckxhbmd1YWdlKGxhbmdOYW1lLCBsYW5nRnVuYykpXG4gICAgICApXG4gICAgKTtcbiAgICByZXR1cm4gemlwKC4uLmxhbmd1YWdlcykucGlwZShtYXAoKCkgPT4gaGxqcykpO1xuICB9XG59XG5cbi8qKlxuICogSW1wb3J0IGhpZ2hsaWdodC5qcyBjb3JlIGxpYnJhcnlcbiAqL1xuZnVuY3Rpb24gbG9hZENvcmVMaWJyYXJ5KCk6IE9ic2VydmFibGU8SGlnaGxpZ2h0TGlicmFyeT4ge1xuICByZXR1cm4gaW1wb3J0TW9kdWxlKGltcG9ydCgnaGlnaGxpZ2h0LmpzL2xpYi9oaWdobGlnaHQnKSk7XG59XG5cbi8qKlxuICogSW1wb3J0IGhpZ2hsaWdodC5qcyBsaWJyYXJ5IHdpdGggYWxsIGxhbmd1YWdlc1xuICovXG5mdW5jdGlvbiBsb2FkQWxsTGlicmFyeSgpOiBPYnNlcnZhYmxlPEhpZ2hsaWdodExpYnJhcnk+IHtcbiAgcmV0dXJuIGltcG9ydE1vZHVsZShpbXBvcnQoJ2hpZ2hsaWdodC5qcycpKTtcbn1cblxuLyoqXG4gKiBJbXBvcnQgbGluZSBudW1iZXJzIGxpYnJhcnlcbiAqL1xuZnVuY3Rpb24gbG9hZExpbmVOdW1iZXJzKCk6IE9ic2VydmFibGU8YW55PiB7XG4gIHJldHVybiBpbXBvcnRNb2R1bGUoaW1wb3J0KCdoaWdobGlnaHRqcy1saW5lLW51bWJlcnMuanMnKSk7XG59XG5cbi8qKlxuICogTWFwIGxvYWRlciByZXNwb25zZSB0byBtb2R1bGUgb2JqZWN0XG4gKi9cbmNvbnN0IGltcG9ydE1vZHVsZSA9IChtb2R1bGVMb2FkZXI6IFByb21pc2U8YW55Pik6IE9ic2VydmFibGU8YW55PiA9PiB7XG4gIHJldHVybiBmcm9tKG1vZHVsZUxvYWRlcikucGlwZShcbiAgICBmaWx0ZXIoKG1vZHVsZTogYW55KSA9PiAhIW1vZHVsZSAmJiAhIW1vZHVsZS5kZWZhdWx0KSxcbiAgICBtYXAoKG1vZHVsZTogYW55KSA9PiBtb2R1bGUuZGVmYXVsdClcbiAgKTtcbn07XG4iXX0=