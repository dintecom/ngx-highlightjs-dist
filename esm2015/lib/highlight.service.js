/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Inject, Optional } from '@angular/core';
import { filter, map, tap } from 'rxjs/operators';
import { HIGHLIGHT_OPTIONS } from './highlight.model';
import { HighlightLoader } from './highlight.loader';
import * as i0 from "@angular/core";
import * as i1 from "./highlight.loader";
import * as i2 from "./highlight.model";
export class HighlightJS {
    /**
     * @param {?} _loader
     * @param {?} options
     */
    constructor(_loader, options) {
        this._loader = _loader;
        // Load highlight.js library on init
        _loader.ready.pipe().subscribe((/**
         * @param {?} hljs
         * @return {?}
         */
        (hljs) => {
            this._hljs = hljs;
            if (options && options.config) {
                // Set global config if present
                hljs.configure(options.config);
                if (hljs.listLanguages().length < 1) {
                    console.error('[HighlightJS]: No languages were registered!');
                }
            }
        }));
    }
    // A reference for hljs library
    /**
     * @return {?}
     */
    get hljs() {
        return this._hljs;
    }
    /**
     * Core highlighting function.
     * @param {?} name Accepts a language name, or an alias
     * @param {?} value A string with the code to highlight.
     * @param {?} ignore_illegals When present and evaluates to a true value, forces highlighting to finish
     * even in case of detecting illegal syntax for the language instead of throwing an exception.
     * @param {?=} continuation An optional mode stack representing unfinished parsing.
     * When present, the function will restart parsing from this state instead of initializing a new one
     * @return {?}
     */
    highlight(name, value, ignore_illegals, continuation) {
        return this._loader.ready.pipe(map((/**
         * @param {?} hljs
         * @return {?}
         */
        (hljs) => hljs.highlight(name, value, ignore_illegals, continuation))));
    }
    /**
     * Highlighting with language detection.
     * @param {?} value Accepts a string with the code to highlight
     * @param {?} languageSubset An optional array of language names and aliases restricting detection to only those languages.
     * The subset can also be set with configure, but the local parameter overrides the option if set.
     * @return {?}
     */
    highlightAuto(value, languageSubset) {
        return this._loader.ready.pipe(map((/**
         * @param {?} hljs
         * @return {?}
         */
        (hljs) => hljs.highlightAuto(value, languageSubset))));
    }
    /**
     * Post-processing of the highlighted markup.
     * Currently consists of replacing indentation TAB characters and using <br> tags instead of new-line characters.
     * Options are set globally with configure.
     * @param {?} value Accepts a string with the highlighted markup
     * @return {?}
     */
    fixMarkup(value) {
        return this._loader.ready.pipe(map((/**
         * @param {?} hljs
         * @return {?}
         */
        (hljs) => hljs.fixMarkup(value))));
    }
    /**
     * Applies highlighting to a DOM node containing code.
     * The function uses language detection by default but you can specify the language in the class attribute of the DOM node.
     * See the class reference for all available language names and aliases.
     * @param {?} block The element to apply highlight on.
     * @return {?}
     */
    highlightBlock(block) {
        return this._loader.ready.pipe(map((/**
         * @param {?} hljs
         * @return {?}
         */
        (hljs) => hljs.highlightBlock(block))));
    }
    /**
     * Configures global options:
     * @param {?} config HighlightJs configuration argument
     * @return {?}
     */
    configure(config) {
        return this._loader.ready.pipe(map((/**
         * @param {?} hljs
         * @return {?}
         */
        (hljs) => hljs.configure(config))));
    }
    /**
     * Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
     * @return {?}
     */
    initHighlighting() {
        return this._loader.ready.pipe(map((/**
         * @param {?} hljs
         * @return {?}
         */
        (hljs) => hljs.initHighlighting())));
    }
    /**
     * Adds new language to the library under the specified name. Used mostly internally.
     * @param {?} name A string with the name of the language being registered
     * @param {?} language A function that returns an object which represents the language definition.
     * The function is passed the hljs object to be able to use common regular expressions defined within it.
     * @return {?}
     */
    registerLanguage(name, language) {
        return this._loader.ready.pipe(tap((/**
         * @param {?} hljs
         * @return {?}
         */
        (hljs) => hljs.registerLanguage(name, language))));
    }
    /**
     * @return {?} The languages names list.
     */
    listLanguages() {
        return this._loader.ready.pipe(map((/**
         * @param {?} hljs
         * @return {?}
         */
        (hljs) => hljs.listLanguages())));
    }
    /**
     * Looks up a language by name or alias.
     * @param {?} name Language name
     * @return {?} The language object if found, undefined otherwise.
     */
    getLanguage(name) {
        return this._loader.ready.pipe(map((/**
         * @param {?} hljs
         * @return {?}
         */
        (hljs) => hljs.getLanguage(name))));
    }
    /**
     * Display line numbers
     * @param {?} el Code element
     * @return {?}
     */
    lineNumbersBlock(el) {
        return this._loader.ready.pipe(filter((/**
         * @param {?} hljs
         * @return {?}
         */
        (hljs) => !!hljs.lineNumbersBlock)), tap((/**
         * @param {?} hljs
         * @return {?}
         */
        (hljs) => hljs.lineNumbersBlock(el))));
    }
}
HighlightJS.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
HighlightJS.ctorParameters = () => [
    { type: HighlightLoader },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [HIGHLIGHT_OPTIONS,] }] }
];
/** @nocollapse */ HighlightJS.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function HighlightJS_Factory() { return new HighlightJS(i0.ɵɵinject(i1.HighlightLoader), i0.ɵɵinject(i2.HIGHLIGHT_OPTIONS, 8)); }, token: HighlightJS, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    HighlightJS.prototype._hljs;
    /**
     * @type {?}
     * @private
     */
    HighlightJS.prototype._loader;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtaGlnaGxpZ2h0anMvIiwic291cmNlcyI6WyJsaWIvaGlnaGxpZ2h0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQXdFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDNUgsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBS3JELE1BQU0sT0FBTyxXQUFXOzs7OztJQVN0QixZQUFvQixPQUF3QixFQUF5QyxPQUF5QjtRQUExRixZQUFPLEdBQVAsT0FBTyxDQUFpQjtRQUMxQyxvQ0FBb0M7UUFDcEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxJQUFzQixFQUFFLEVBQUU7WUFDeEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtnQkFDN0IsK0JBQStCO2dCQUMvQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDbkMsT0FBTyxDQUFDLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO2lCQUMvRDthQUNGO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQWhCRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7Ozs7Ozs7Ozs7SUF5QkQsU0FBUyxD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QUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUMzRCxDQUFDO0lBQ0osQ0FBQzs7O1lBeklGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUpRLGVBQWU7NENBY3lCLFFBQVEsWUFBSSxNQUFNLFNBQUMsaUJBQWlCOzs7Ozs7OztJQVBuRiw0QkFBaUM7Ozs7O0lBT3JCLDhCQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBIaWdobGlnaHRDb25maWcsIEhpZ2hsaWdodFJlc3VsdCwgSGlnaGxpZ2h0TGlicmFyeSwgSGlnaGxpZ2h0T3B0aW9ucywgSElHSExJR0hUX09QVElPTlMgfSBmcm9tICcuL2hpZ2hsaWdodC5tb2RlbCc7XG5pbXBvcnQgeyBIaWdobGlnaHRMb2FkZXIgfSBmcm9tICcuL2hpZ2hsaWdodC5sb2FkZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBIaWdobGlnaHRKUyB7XG5cbiAgcHJpdmF0ZSBfaGxqcyE6IEhpZ2hsaWdodExpYnJhcnk7XG5cbiAgLy8gQSByZWZlcmVuY2UgZm9yIGhsanMgbGlicmFyeVxuICBnZXQgaGxqcygpOiBIaWdobGlnaHRMaWJyYXJ5IHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX2hsanM7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2FkZXI6IEhpZ2hsaWdodExvYWRlciwgQE9wdGlvbmFsKCkgQEluamVjdChISUdITElHSFRfT1BUSU9OUykgb3B0aW9uczogSGlnaGxpZ2h0T3B0aW9ucykge1xuICAgIC8vIExvYWQgaGlnaGxpZ2h0LmpzIGxpYnJhcnkgb24gaW5pdFxuICAgIF9sb2FkZXIucmVhZHkucGlwZSgpLnN1YnNjcmliZSgoaGxqczogSGlnaGxpZ2h0TGlicmFyeSkgPT4ge1xuICAgICAgdGhpcy5faGxqcyA9IGhsanM7XG4gICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmNvbmZpZykge1xuICAgICAgICAvLyBTZXQgZ2xvYmFsIGNvbmZpZyBpZiBwcmVzZW50XG4gICAgICAgIGhsanMuY29uZmlndXJlKG9wdGlvbnMuY29uZmlnKTtcbiAgICAgICAgaWYgKGhsanMubGlzdExhbmd1YWdlcygpLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdbSGlnaGxpZ2h0SlNdOiBObyBsYW5ndWFnZXMgd2VyZSByZWdpc3RlcmVkIScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29yZSBoaWdobGlnaHRpbmcgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSBuYW1lIEFjY2VwdHMgYSBsYW5ndWFnZSBuYW1lLCBvciBhbiBhbGlhc1xuICAgKiBAcGFyYW0gdmFsdWUgQSBzdHJpbmcgd2l0aCB0aGUgY29kZSB0byBoaWdobGlnaHQuXG4gICAqIEBwYXJhbSBpZ25vcmVfaWxsZWdhbHMgV2hlbiBwcmVzZW50IGFuZCBldmFsdWF0ZXMgdG8gYSB0cnVlIHZhbHVlLCBmb3JjZXMgaGlnaGxpZ2h0aW5nIHRvIGZpbmlzaFxuICAgKiBldmVuIGluIGNhc2Ugb2YgZGV0ZWN0aW5nIGlsbGVnYWwgc3ludGF4IGZvciB0aGUgbGFuZ3VhZ2UgaW5zdGVhZCBvZiB0aHJvd2luZyBhbiBleGNlcHRpb24uXG4gICAqIEBwYXJhbSBjb250aW51YXRpb24gQW4gb3B0aW9uYWwgbW9kZSBzdGFjayByZXByZXNlbnRpbmcgdW5maW5pc2hlZCBwYXJzaW5nLlxuICAgKiBXaGVuIHByZXNlbnQsIHRoZSBmdW5jdGlvbiB3aWxsIHJlc3RhcnQgcGFyc2luZyBmcm9tIHRoaXMgc3RhdGUgaW5zdGVhZCBvZiBpbml0aWFsaXppbmcgYSBuZXcgb25lXG4gICAqL1xuICBoaWdobGlnaHQobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBpZ25vcmVfaWxsZWdhbHM6IGJvb2xlYW4sIGNvbnRpbnVhdGlvbj86IGFueSk6IE9ic2VydmFibGU8SGlnaGxpZ2h0UmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuX2xvYWRlci5yZWFkeS5waXBlKFxuICAgICAgbWFwKChobGpzOiBIaWdobGlnaHRMaWJyYXJ5KSA9PiBobGpzLmhpZ2hsaWdodChuYW1lLCB2YWx1ZSwgaWdub3JlX2lsbGVnYWxzLCBjb250aW51YXRpb24pKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSGlnaGxpZ2h0aW5nIHdpdGggbGFuZ3VhZ2UgZGV0ZWN0aW9uLlxuICAgKiBAcGFyYW0gdmFsdWUgQWNjZXB0cyBhIHN0cmluZyB3aXRoIHRoZSBjb2RlIHRvIGhpZ2hsaWdodFxuICAgKiBAcGFyYW0gbGFuZ3VhZ2VTdWJzZXQgQW4gb3B0aW9uYWwgYXJyYXkgb2YgbGFuZ3VhZ2UgbmFtZXMgYW5kIGFsaWFzZXMgcmVzdHJpY3RpbmcgZGV0ZWN0aW9uIHRvIG9ubHkgdGhvc2UgbGFuZ3VhZ2VzLlxuICAgKiBUaGUgc3Vic2V0IGNhbiBhbHNvIGJlIHNldCB3aXRoIGNvbmZpZ3VyZSwgYnV0IHRoZSBsb2NhbCBwYXJhbWV0ZXIgb3ZlcnJpZGVzIHRoZSBvcHRpb24gaWYgc2V0LlxuICAgKi9cbiAgaGlnaGxpZ2h0QXV0byh2YWx1ZTogc3RyaW5nLCBsYW5ndWFnZVN1YnNldDogc3RyaW5nW10pOiBPYnNlcnZhYmxlPEhpZ2hsaWdodFJlc3VsdD4ge1xuICAgIHJldHVybiB0aGlzLl9sb2FkZXIucmVhZHkucGlwZShcbiAgICAgIG1hcCgoaGxqczogSGlnaGxpZ2h0TGlicmFyeSkgPT4gaGxqcy5oaWdobGlnaHRBdXRvKHZhbHVlLCBsYW5ndWFnZVN1YnNldCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQb3N0LXByb2Nlc3Npbmcgb2YgdGhlIGhpZ2hsaWdodGVkIG1hcmt1cC5cbiAgICogQ3VycmVudGx5IGNvbnNpc3RzIG9mIHJlcGxhY2luZyBpbmRlbnRhdGlvbiBUQUIgY2hhcmFjdGVycyBhbmQgdXNpbmcgPGJyPiB0YWdzIGluc3RlYWQgb2YgbmV3LWxpbmUgY2hhcmFjdGVycy5cbiAgICogT3B0aW9ucyBhcmUgc2V0IGdsb2JhbGx5IHdpdGggY29uZmlndXJlLlxuICAgKiBAcGFyYW0gdmFsdWUgQWNjZXB0cyBhIHN0cmluZyB3aXRoIHRoZSBoaWdobGlnaHRlZCBtYXJrdXBcbiAgICovXG4gIGZpeE1hcmt1cCh2YWx1ZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5fbG9hZGVyLnJlYWR5LnBpcGUoXG4gICAgICBtYXAoKGhsanM6IEhpZ2hsaWdodExpYnJhcnkpID0+IGhsanMuZml4TWFya3VwKHZhbHVlKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGxpZXMgaGlnaGxpZ2h0aW5nIHRvIGEgRE9NIG5vZGUgY29udGFpbmluZyBjb2RlLlxuICAgKiBUaGUgZnVuY3Rpb24gdXNlcyBsYW5ndWFnZSBkZXRlY3Rpb24gYnkgZGVmYXVsdCBidXQgeW91IGNhbiBzcGVjaWZ5IHRoZSBsYW5ndWFnZSBpbiB0aGUgY2xhc3MgYXR0cmlidXRlIG9mIHRoZSBET00gbm9kZS5cbiAgICogU2VlIHRoZSBjbGFzcyByZWZlcmVuY2UgZm9yIGFsbCBhdmFpbGFibGUgbGFuZ3VhZ2UgbmFtZXMgYW5kIGFsaWFzZXMuXG4gICAqIEBwYXJhbSBibG9jayBUaGUgZWxlbWVudCB0byBhcHBseSBoaWdobGlnaHQgb24uXG4gICAqL1xuICBoaWdobGlnaHRCbG9jayhibG9jazogSFRNTEVsZW1lbnQpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fbG9hZGVyLnJlYWR5LnBpcGUoXG4gICAgICBtYXAoKGhsanM6IEhpZ2hsaWdodExpYnJhcnkpID0+IGhsanMuaGlnaGxpZ2h0QmxvY2soYmxvY2spKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlndXJlcyBnbG9iYWwgb3B0aW9uczpcbiAgICogQHBhcmFtIGNvbmZpZyBIaWdobGlnaHRKcyBjb25maWd1cmF0aW9uIGFyZ3VtZW50XG4gICAqL1xuICBjb25maWd1cmUoY29uZmlnOiBIaWdobGlnaHRDb25maWcpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fbG9hZGVyLnJlYWR5LnBpcGUoXG4gICAgICBtYXAoKGhsanM6IEhpZ2hsaWdodExpYnJhcnkpID0+IGhsanMuY29uZmlndXJlKGNvbmZpZykpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBsaWVzIGhpZ2hsaWdodGluZyB0byBhbGwgPHByZT48Y29kZT4uLjwvY29kZT48L3ByZT4gYmxvY2tzIG9uIGEgcGFnZS5cbiAgICovXG4gIGluaXRIaWdobGlnaHRpbmcoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX2xvYWRlci5yZWFkeS5waXBlKFxuICAgICAgbWFwKChobGpzOiBIaWdobGlnaHRMaWJyYXJ5KSA9PiBobGpzLmluaXRIaWdobGlnaHRpbmcoKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgbmV3IGxhbmd1YWdlIHRvIHRoZSBsaWJyYXJ5IHVuZGVyIHRoZSBzcGVjaWZpZWQgbmFtZS4gVXNlZCBtb3N0bHkgaW50ZXJuYWxseS5cbiAgICogQHBhcmFtIG5hbWUgQSBzdHJpbmcgd2l0aCB0aGUgbmFtZSBvZiB0aGUgbGFuZ3VhZ2UgYmVpbmcgcmVnaXN0ZXJlZFxuICAgKiBAcGFyYW0gbGFuZ3VhZ2UgQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYW4gb2JqZWN0IHdoaWNoIHJlcHJlc2VudHMgdGhlIGxhbmd1YWdlIGRlZmluaXRpb24uXG4gICAqIFRoZSBmdW5jdGlvbiBpcyBwYXNzZWQgdGhlIGhsanMgb2JqZWN0IHRvIGJlIGFibGUgdG8gdXNlIGNvbW1vbiByZWd1bGFyIGV4cHJlc3Npb25zIGRlZmluZWQgd2l0aGluIGl0LlxuICAgKi9cbiAgcmVnaXN0ZXJMYW5ndWFnZShuYW1lOiBzdHJpbmcsIGxhbmd1YWdlOiAoKSA9PiBhbnkpOiBPYnNlcnZhYmxlPEhpZ2hsaWdodExpYnJhcnk+IHtcbiAgICByZXR1cm4gdGhpcy5fbG9hZGVyLnJlYWR5LnBpcGUoXG4gICAgICB0YXAoKGhsanM6IEhpZ2hsaWdodExpYnJhcnkpID0+IGhsanMucmVnaXN0ZXJMYW5ndWFnZShuYW1lLCBsYW5ndWFnZSkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIFRoZSBsYW5ndWFnZXMgbmFtZXMgbGlzdC5cbiAgICovXG4gIGxpc3RMYW5ndWFnZXMoKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiB0aGlzLl9sb2FkZXIucmVhZHkucGlwZShcbiAgICAgIG1hcCgoaGxqczogSGlnaGxpZ2h0TGlicmFyeSkgPT4gaGxqcy5saXN0TGFuZ3VhZ2VzKCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb29rcyB1cCBhIGxhbmd1YWdlIGJ5IG5hbWUgb3IgYWxpYXMuXG4gICAqIEBwYXJhbSBuYW1lIExhbmd1YWdlIG5hbWVcbiAgICogQHJldHVybiBUaGUgbGFuZ3VhZ2Ugb2JqZWN0IGlmIGZvdW5kLCB1bmRlZmluZWQgb3RoZXJ3aXNlLlxuICAgKi9cbiAgZ2V0TGFuZ3VhZ2UobmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fbG9hZGVyLnJlYWR5LnBpcGUoXG4gICAgICBtYXAoKGhsanM6IEhpZ2hsaWdodExpYnJhcnkpID0+IGhsanMuZ2V0TGFuZ3VhZ2UobmFtZSkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwbGF5IGxpbmUgbnVtYmVyc1xuICAgKiBAcGFyYW0gZWwgQ29kZSBlbGVtZW50XG4gICAqL1xuICBsaW5lTnVtYmVyc0Jsb2NrKGVsOiBIVE1MRWxlbWVudCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2xvYWRlci5yZWFkeS5waXBlKFxuICAgICAgZmlsdGVyKChobGpzOiBIaWdobGlnaHRMaWJyYXJ5KSA9PiAhIWhsanMubGluZU51bWJlcnNCbG9jayksXG4gICAgICB0YXAoKGhsanM6IEhpZ2hsaWdodExpYnJhcnkpID0+IGhsanMubGluZU51bWJlcnNCbG9jayhlbCkpXG4gICAgKTtcbiAgfVxufVxuIl19