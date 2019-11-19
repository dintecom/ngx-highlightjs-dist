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
var HighlightJS = /** @class */ (function () {
    function HighlightJS(_loader, options) {
        var _this = this;
        this._loader = _loader;
        // Load highlight.js library on init
        _loader.ready.pipe().subscribe((/**
         * @param {?} hljs
         * @return {?}
         */
        function (hljs) {
            _this._hljs = hljs;
            if (options && options.config) {
                // Set global config if present
                hljs.configure(options.config);
                if (hljs.listLanguages().length < 1) {
                    console.error('[HighlightJS]: No languages were registered!');
                }
            }
        }));
    }
    Object.defineProperty(HighlightJS.prototype, "hljs", {
        // A reference for hljs library
        get: 
        // A reference for hljs library
        /**
         * @return {?}
         */
        function () {
            return this._hljs;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Core highlighting function.
     * @param name Accepts a language name, or an alias
     * @param value A string with the code to highlight.
     * @param ignore_illegals When present and evaluates to a true value, forces highlighting to finish
     * even in case of detecting illegal syntax for the language instead of throwing an exception.
     * @param continuation An optional mode stack representing unfinished parsing.
     * When present, the function will restart parsing from this state instead of initializing a new one
     */
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
    HighlightJS.prototype.highlight = /**
     * Core highlighting function.
     * @param {?} name Accepts a language name, or an alias
     * @param {?} value A string with the code to highlight.
     * @param {?} ignore_illegals When present and evaluates to a true value, forces highlighting to finish
     * even in case of detecting illegal syntax for the language instead of throwing an exception.
     * @param {?=} continuation An optional mode stack representing unfinished parsing.
     * When present, the function will restart parsing from this state instead of initializing a new one
     * @return {?}
     */
    function (name, value, ignore_illegals, continuation) {
        return this._loader.ready.pipe(map((/**
         * @param {?} hljs
         * @return {?}
         */
        function (hljs) { return hljs.highlight(name, value, ignore_illegals, continuation); })));
    };
    /**
     * Highlighting with language detection.
     * @param value Accepts a string with the code to highlight
     * @param languageSubset An optional array of language names and aliases restricting detection to only those languages.
     * The subset can also be set with configure, but the local parameter overrides the option if set.
     */
    /**
     * Highlighting with language detection.
     * @param {?} value Accepts a string with the code to highlight
     * @param {?} languageSubset An optional array of language names and aliases restricting detection to only those languages.
     * The subset can also be set with configure, but the local parameter overrides the option if set.
     * @return {?}
     */
    HighlightJS.prototype.highlightAuto = /**
     * Highlighting with language detection.
     * @param {?} value Accepts a string with the code to highlight
     * @param {?} languageSubset An optional array of language names and aliases restricting detection to only those languages.
     * The subset can also be set with configure, but the local parameter overrides the option if set.
     * @return {?}
     */
    function (value, languageSubset) {
        return this._loader.ready.pipe(map((/**
         * @param {?} hljs
         * @return {?}
         */
        function (hljs) { return hljs.highlightAuto(value, languageSubset); })));
    };
    /**
     * Post-processing of the highlighted markup.
     * Currently consists of replacing indentation TAB characters and using <br> tags instead of new-line characters.
     * Options are set globally with configure.
     * @param value Accepts a string with the highlighted markup
     */
    /**
     * Post-processing of the highlighted markup.
     * Currently consists of replacing indentation TAB characters and using <br> tags instead of new-line characters.
     * Options are set globally with configure.
     * @param {?} value Accepts a string with the highlighted markup
     * @return {?}
     */
    HighlightJS.prototype.fixMarkup = /**
     * Post-processing of the highlighted markup.
     * Currently consists of replacing indentation TAB characters and using <br> tags instead of new-line characters.
     * Options are set globally with configure.
     * @param {?} value Accepts a string with the highlighted markup
     * @return {?}
     */
    function (value) {
        return this._loader.ready.pipe(map((/**
         * @param {?} hljs
         * @return {?}
         */
        function (hljs) { return hljs.fixMarkup(value); })));
    };
    /**
     * Applies highlighting to a DOM node containing code.
     * The function uses language detection by default but you can specify the language in the class attribute of the DOM node.
     * See the class reference for all available language names and aliases.
     * @param block The element to apply highlight on.
     */
    /**
     * Applies highlighting to a DOM node containing code.
     * The function uses language detection by default but you can specify the language in the class attribute of the DOM node.
     * See the class reference for all available language names and aliases.
     * @param {?} block The element to apply highlight on.
     * @return {?}
     */
    HighlightJS.prototype.highlightBlock = /**
     * Applies highlighting to a DOM node containing code.
     * The function uses language detection by default but you can specify the language in the class attribute of the DOM node.
     * See the class reference for all available language names and aliases.
     * @param {?} block The element to apply highlight on.
     * @return {?}
     */
    function (block) {
        return this._loader.ready.pipe(map((/**
         * @param {?} hljs
         * @return {?}
         */
        function (hljs) { return hljs.highlightBlock(block); })));
    };
    /**
     * Configures global options:
     * @param config HighlightJs configuration argument
     */
    /**
     * Configures global options:
     * @param {?} config HighlightJs configuration argument
     * @return {?}
     */
    HighlightJS.prototype.configure = /**
     * Configures global options:
     * @param {?} config HighlightJs configuration argument
     * @return {?}
     */
    function (config) {
        return this._loader.ready.pipe(map((/**
         * @param {?} hljs
         * @return {?}
         */
        function (hljs) { return hljs.configure(config); })));
    };
    /**
     * Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
     */
    /**
     * Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
     * @return {?}
     */
    HighlightJS.prototype.initHighlighting = /**
     * Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
     * @return {?}
     */
    function () {
        return this._loader.ready.pipe(map((/**
         * @param {?} hljs
         * @return {?}
         */
        function (hljs) { return hljs.initHighlighting(); })));
    };
    /**
     * Adds new language to the library under the specified name. Used mostly internally.
     * @param name A string with the name of the language being registered
     * @param language A function that returns an object which represents the language definition.
     * The function is passed the hljs object to be able to use common regular expressions defined within it.
     */
    /**
     * Adds new language to the library under the specified name. Used mostly internally.
     * @param {?} name A string with the name of the language being registered
     * @param {?} language A function that returns an object which represents the language definition.
     * The function is passed the hljs object to be able to use common regular expressions defined within it.
     * @return {?}
     */
    HighlightJS.prototype.registerLanguage = /**
     * Adds new language to the library under the specified name. Used mostly internally.
     * @param {?} name A string with the name of the language being registered
     * @param {?} language A function that returns an object which represents the language definition.
     * The function is passed the hljs object to be able to use common regular expressions defined within it.
     * @return {?}
     */
    function (name, language) {
        return this._loader.ready.pipe(tap((/**
         * @param {?} hljs
         * @return {?}
         */
        function (hljs) { return hljs.registerLanguage(name, language); })));
    };
    /**
     * @return The languages names list.
     */
    /**
     * @return {?} The languages names list.
     */
    HighlightJS.prototype.listLanguages = /**
     * @return {?} The languages names list.
     */
    function () {
        return this._loader.ready.pipe(map((/**
         * @param {?} hljs
         * @return {?}
         */
        function (hljs) { return hljs.listLanguages(); })));
    };
    /**
     * Looks up a language by name or alias.
     * @param name Language name
     * @return The language object if found, undefined otherwise.
     */
    /**
     * Looks up a language by name or alias.
     * @param {?} name Language name
     * @return {?} The language object if found, undefined otherwise.
     */
    HighlightJS.prototype.getLanguage = /**
     * Looks up a language by name or alias.
     * @param {?} name Language name
     * @return {?} The language object if found, undefined otherwise.
     */
    function (name) {
        return this._loader.ready.pipe(map((/**
         * @param {?} hljs
         * @return {?}
         */
        function (hljs) { return hljs.getLanguage(name); })));
    };
    /**
     * Display line numbers
     * @param el Code element
     */
    /**
     * Display line numbers
     * @param {?} el Code element
     * @return {?}
     */
    HighlightJS.prototype.lineNumbersBlock = /**
     * Display line numbers
     * @param {?} el Code element
     * @return {?}
     */
    function (el) {
        return this._loader.ready.pipe(filter((/**
         * @param {?} hljs
         * @return {?}
         */
        function (hljs) { return !!hljs.lineNumbersBlock; })), tap((/**
         * @param {?} hljs
         * @return {?}
         */
        function (hljs) { return hljs.lineNumbersBlock(el); })));
    };
    HighlightJS.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    HighlightJS.ctorParameters = function () { return [
        { type: HighlightLoader },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [HIGHLIGHT_OPTIONS,] }] }
    ]; };
    /** @nocollapse */ HighlightJS.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function HighlightJS_Factory() { return new HighlightJS(i0.ɵɵinject(i1.HighlightLoader), i0.ɵɵinject(i2.HIGHLIGHT_OPTIONS, 8)); }, token: HighlightJS, providedIn: "root" });
    return HighlightJS;
}());
export { HighlightJS };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtaGlnaGxpZ2h0anMvIiwic291cmNlcyI6WyJsaWIvaGlnaGxpZ2h0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQXdFLGlCQUFpQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDNUgsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7O0FBRXJEO0lBWUUscUJBQW9CLE9BQXdCLEVBQXlDLE9BQXlCO1FBQTlHLGlCQVlDO1FBWm1CLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQzFDLG9DQUFvQztRQUNwQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLElBQXNCO1lBQ3BELEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7Z0JBQzdCLCtCQUErQjtnQkFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQy9CLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ25DLE9BQU8sQ0FBQyxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQztpQkFDL0Q7YUFDRjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQztJQWhCRCxzQkFBSSw2QkFBSTtRQURSLCtCQUErQjs7Ozs7O1FBQy9CO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBZ0JEOzs7Ozs7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QixHQUFHOzs7O1FBQUMsVUFBQyxJQUFzQixJQUFLLE9BQUEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBdEIsQ0FBc0IsRUFBQyxDQUN4RCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsc0NBQWdCOzs7OztJQUFoQixVQUFpQixFQUFlO1FBQzlCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUM1QixNQUFNOzs7O1FBQUMsVUFBQyxJQUFzQixJQUFLLE9BQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBdkIsQ0FBdUIsRUFBQyxFQUMzRCxHQUFHOzs7O1FBQUMsVUFBQyxJQUFzQixJQUFLLE9BQUEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxFQUF6QixDQUF5QixFQUFDLENBQzNELENBQUM7SUFDSixDQUFDOztnQkF6SUYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKUSxlQUFlO2dEQWN5QixRQUFRLFlBQUksTUFBTSxTQUFDLGlCQUFpQjs7O3NCQWxCckY7Q0FnSkMsQUExSUQsSUEwSUM7U0F2SVksV0FBVzs7Ozs7O0lBRXRCLDRCQUFpQzs7Ozs7SUFPckIsOEJBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEhpZ2hsaWdodENvbmZpZywgSGlnaGxpZ2h0UmVzdWx0LCBIaWdobGlnaHRMaWJyYXJ5LCBIaWdobGlnaHRPcHRpb25zLCBISUdITElHSFRfT1BUSU9OUyB9IGZyb20gJy4vaGlnaGxpZ2h0Lm1vZGVsJztcbmltcG9ydCB7IEhpZ2hsaWdodExvYWRlciB9IGZyb20gJy4vaGlnaGxpZ2h0LmxvYWRlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEhpZ2hsaWdodEpTIHtcblxuICBwcml2YXRlIF9obGpzITogSGlnaGxpZ2h0TGlicmFyeTtcblxuICAvLyBBIHJlZmVyZW5jZSBmb3IgaGxqcyBsaWJyYXJ5XG4gIGdldCBobGpzKCk6IEhpZ2hsaWdodExpYnJhcnkgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5faGxqcztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvYWRlcjogSGlnaGxpZ2h0TG9hZGVyLCBAT3B0aW9uYWwoKSBASW5qZWN0KEhJR0hMSUdIVF9PUFRJT05TKSBvcHRpb25zOiBIaWdobGlnaHRPcHRpb25zKSB7XG4gICAgLy8gTG9hZCBoaWdobGlnaHQuanMgbGlicmFyeSBvbiBpbml0XG4gICAgX2xvYWRlci5yZWFkeS5waXBlKCkuc3Vic2NyaWJlKChobGpzOiBIaWdobGlnaHRMaWJyYXJ5KSA9PiB7XG4gICAgICB0aGlzLl9obGpzID0gaGxqcztcbiAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuY29uZmlnKSB7XG4gICAgICAgIC8vIFNldCBnbG9iYWwgY29uZmlnIGlmIHByZXNlbnRcbiAgICAgICAgaGxqcy5jb25maWd1cmUob3B0aW9ucy5jb25maWcpO1xuICAgICAgICBpZiAoaGxqcy5saXN0TGFuZ3VhZ2VzKCkubGVuZ3RoIDwgMSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tIaWdobGlnaHRKU106IE5vIGxhbmd1YWdlcyB3ZXJlIHJlZ2lzdGVyZWQhJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb3JlIGhpZ2hsaWdodGluZyBmdW5jdGlvbi5cbiAgICogQHBhcmFtIG5hbWUgQWNjZXB0cyBhIGxhbmd1YWdlIG5hbWUsIG9yIGFuIGFsaWFzXG4gICAqIEBwYXJhbSB2YWx1ZSBBIHN0cmluZyB3aXRoIHRoZSBjb2RlIHRvIGhpZ2hsaWdodC5cbiAgICogQHBhcmFtIGlnbm9yZV9pbGxlZ2FscyBXaGVuIHByZXNlbnQgYW5kIGV2YWx1YXRlcyB0byBhIHRydWUgdmFsdWUsIGZvcmNlcyBoaWdobGlnaHRpbmcgdG8gZmluaXNoXG4gICAqIGV2ZW4gaW4gY2FzZSBvZiBkZXRlY3RpbmcgaWxsZWdhbCBzeW50YXggZm9yIHRoZSBsYW5ndWFnZSBpbnN0ZWFkIG9mIHRocm93aW5nIGFuIGV4Y2VwdGlvbi5cbiAgICogQHBhcmFtIGNvbnRpbnVhdGlvbiBBbiBvcHRpb25hbCBtb2RlIHN0YWNrIHJlcHJlc2VudGluZyB1bmZpbmlzaGVkIHBhcnNpbmcuXG4gICAqIFdoZW4gcHJlc2VudCwgdGhlIGZ1bmN0aW9uIHdpbGwgcmVzdGFydCBwYXJzaW5nIGZyb20gdGhpcyBzdGF0ZSBpbnN0ZWFkIG9mIGluaXRpYWxpemluZyBhIG5ldyBvbmVcbiAgICovXG4gIGhpZ2hsaWdodChuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGlnbm9yZV9pbGxlZ2FsczogYm9vbGVhbiwgY29udGludWF0aW9uPzogYW55KTogT2JzZXJ2YWJsZTxIaWdobGlnaHRSZXN1bHQ+IHtcbiAgICByZXR1cm4gdGhpcy5fbG9hZGVyLnJlYWR5LnBpcGUoXG4gICAgICBtYXAoKGhsanM6IEhpZ2hsaWdodExpYnJhcnkpID0+IGhsanMuaGlnaGxpZ2h0KG5hbWUsIHZhbHVlLCBpZ25vcmVfaWxsZWdhbHMsIGNvbnRpbnVhdGlvbikpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWdobGlnaHRpbmcgd2l0aCBsYW5ndWFnZSBkZXRlY3Rpb24uXG4gICAqIEBwYXJhbSB2YWx1ZSBBY2NlcHRzIGEgc3RyaW5nIHdpdGggdGhlIGNvZGUgdG8gaGlnaGxpZ2h0XG4gICAqIEBwYXJhbSBsYW5ndWFnZVN1YnNldCBBbiBvcHRpb25hbCBhcnJheSBvZiBsYW5ndWFnZSBuYW1lcyBhbmQgYWxpYXNlcyByZXN0cmljdGluZyBkZXRlY3Rpb24gdG8gb25seSB0aG9zZSBsYW5ndWFnZXMuXG4gICAqIFRoZSBzdWJzZXQgY2FuIGFsc28gYmUgc2V0IHdpdGggY29uZmlndXJlLCBidXQgdGhlIGxvY2FsIHBhcmFtZXRlciBvdmVycmlkZXMgdGhlIG9wdGlvbiBpZiBzZXQuXG4gICAqL1xuICBoaWdobGlnaHRBdXRvKHZhbHVlOiBzdHJpbmcsIGxhbmd1YWdlU3Vic2V0OiBzdHJpbmdbXSk6IE9ic2VydmFibGU8SGlnaGxpZ2h0UmVzdWx0PiB7XG4gICAgcmV0dXJuIHRoaXMuX2xvYWRlci5yZWFkeS5waXBlKFxuICAgICAgbWFwKChobGpzOiBIaWdobGlnaHRMaWJyYXJ5KSA9PiBobGpzLmhpZ2hsaWdodEF1dG8odmFsdWUsIGxhbmd1YWdlU3Vic2V0KSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFBvc3QtcHJvY2Vzc2luZyBvZiB0aGUgaGlnaGxpZ2h0ZWQgbWFya3VwLlxuICAgKiBDdXJyZW50bHkgY29uc2lzdHMgb2YgcmVwbGFjaW5nIGluZGVudGF0aW9uIFRBQiBjaGFyYWN0ZXJzIGFuZCB1c2luZyA8YnI+IHRhZ3MgaW5zdGVhZCBvZiBuZXctbGluZSBjaGFyYWN0ZXJzLlxuICAgKiBPcHRpb25zIGFyZSBzZXQgZ2xvYmFsbHkgd2l0aCBjb25maWd1cmUuXG4gICAqIEBwYXJhbSB2YWx1ZSBBY2NlcHRzIGEgc3RyaW5nIHdpdGggdGhlIGhpZ2hsaWdodGVkIG1hcmt1cFxuICAgKi9cbiAgZml4TWFya3VwKHZhbHVlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl9sb2FkZXIucmVhZHkucGlwZShcbiAgICAgIG1hcCgoaGxqczogSGlnaGxpZ2h0TGlicmFyeSkgPT4gaGxqcy5maXhNYXJrdXAodmFsdWUpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQXBwbGllcyBoaWdobGlnaHRpbmcgdG8gYSBET00gbm9kZSBjb250YWluaW5nIGNvZGUuXG4gICAqIFRoZSBmdW5jdGlvbiB1c2VzIGxhbmd1YWdlIGRldGVjdGlvbiBieSBkZWZhdWx0IGJ1dCB5b3UgY2FuIHNwZWNpZnkgdGhlIGxhbmd1YWdlIGluIHRoZSBjbGFzcyBhdHRyaWJ1dGUgb2YgdGhlIERPTSBub2RlLlxuICAgKiBTZWUgdGhlIGNsYXNzIHJlZmVyZW5jZSBmb3IgYWxsIGF2YWlsYWJsZSBsYW5ndWFnZSBuYW1lcyBhbmQgYWxpYXNlcy5cbiAgICogQHBhcmFtIGJsb2NrIFRoZSBlbGVtZW50IHRvIGFwcGx5IGhpZ2hsaWdodCBvbi5cbiAgICovXG4gIGhpZ2hsaWdodEJsb2NrKGJsb2NrOiBIVE1MRWxlbWVudCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9sb2FkZXIucmVhZHkucGlwZShcbiAgICAgIG1hcCgoaGxqczogSGlnaGxpZ2h0TGlicmFyeSkgPT4gaGxqcy5oaWdobGlnaHRCbG9jayhibG9jaykpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb25maWd1cmVzIGdsb2JhbCBvcHRpb25zOlxuICAgKiBAcGFyYW0gY29uZmlnIEhpZ2hsaWdodEpzIGNvbmZpZ3VyYXRpb24gYXJndW1lbnRcbiAgICovXG4gIGNvbmZpZ3VyZShjb25maWc6IEhpZ2hsaWdodENvbmZpZyk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9sb2FkZXIucmVhZHkucGlwZShcbiAgICAgIG1hcCgoaGxqczogSGlnaGxpZ2h0TGlicmFyeSkgPT4gaGxqcy5jb25maWd1cmUoY29uZmlnKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGxpZXMgaGlnaGxpZ2h0aW5nIHRvIGFsbCA8cHJlPjxjb2RlPi4uPC9jb2RlPjwvcHJlPiBibG9ja3Mgb24gYSBwYWdlLlxuICAgKi9cbiAgaW5pdEhpZ2hsaWdodGluZygpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fbG9hZGVyLnJlYWR5LnBpcGUoXG4gICAgICBtYXAoKGhsanM6IEhpZ2hsaWdodExpYnJhcnkpID0+IGhsanMuaW5pdEhpZ2hsaWdodGluZygpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBuZXcgbGFuZ3VhZ2UgdG8gdGhlIGxpYnJhcnkgdW5kZXIgdGhlIHNwZWNpZmllZCBuYW1lLiBVc2VkIG1vc3RseSBpbnRlcm5hbGx5LlxuICAgKiBAcGFyYW0gbmFtZSBBIHN0cmluZyB3aXRoIHRoZSBuYW1lIG9mIHRoZSBsYW5ndWFnZSBiZWluZyByZWdpc3RlcmVkXG4gICAqIEBwYXJhbSBsYW5ndWFnZSBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBvYmplY3Qgd2hpY2ggcmVwcmVzZW50cyB0aGUgbGFuZ3VhZ2UgZGVmaW5pdGlvbi5cbiAgICogVGhlIGZ1bmN0aW9uIGlzIHBhc3NlZCB0aGUgaGxqcyBvYmplY3QgdG8gYmUgYWJsZSB0byB1c2UgY29tbW9uIHJlZ3VsYXIgZXhwcmVzc2lvbnMgZGVmaW5lZCB3aXRoaW4gaXQuXG4gICAqL1xuICByZWdpc3Rlckxhbmd1YWdlKG5hbWU6IHN0cmluZywgbGFuZ3VhZ2U6ICgpID0+IGFueSk6IE9ic2VydmFibGU8SGlnaGxpZ2h0TGlicmFyeT4ge1xuICAgIHJldHVybiB0aGlzLl9sb2FkZXIucmVhZHkucGlwZShcbiAgICAgIHRhcCgoaGxqczogSGlnaGxpZ2h0TGlicmFyeSkgPT4gaGxqcy5yZWdpc3Rlckxhbmd1YWdlKG5hbWUsIGxhbmd1YWdlKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm4gVGhlIGxhbmd1YWdlcyBuYW1lcyBsaXN0LlxuICAgKi9cbiAgbGlzdExhbmd1YWdlcygpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuX2xvYWRlci5yZWFkeS5waXBlKFxuICAgICAgbWFwKChobGpzOiBIaWdobGlnaHRMaWJyYXJ5KSA9PiBobGpzLmxpc3RMYW5ndWFnZXMoKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIExvb2tzIHVwIGEgbGFuZ3VhZ2UgYnkgbmFtZSBvciBhbGlhcy5cbiAgICogQHBhcmFtIG5hbWUgTGFuZ3VhZ2UgbmFtZVxuICAgKiBAcmV0dXJuIFRoZSBsYW5ndWFnZSBvYmplY3QgaWYgZm91bmQsIHVuZGVmaW5lZCBvdGhlcndpc2UuXG4gICAqL1xuICBnZXRMYW5ndWFnZShuYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9sb2FkZXIucmVhZHkucGlwZShcbiAgICAgIG1hcCgoaGxqczogSGlnaGxpZ2h0TGlicmFyeSkgPT4gaGxqcy5nZXRMYW5ndWFnZShuYW1lKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIERpc3BsYXkgbGluZSBudW1iZXJzXG4gICAqIEBwYXJhbSBlbCBDb2RlIGVsZW1lbnRcbiAgICovXG4gIGxpbmVOdW1iZXJzQmxvY2soZWw6IEhUTUxFbGVtZW50KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fbG9hZGVyLnJlYWR5LnBpcGUoXG4gICAgICBmaWx0ZXIoKGhsanM6IEhpZ2hsaWdodExpYnJhcnkpID0+ICEhaGxqcy5saW5lTnVtYmVyc0Jsb2NrKSxcbiAgICAgIHRhcCgoaGxqczogSGlnaGxpZ2h0TGlicmFyeSkgPT4gaGxqcy5saW5lTnVtYmVyc0Jsb2NrKGVsKSlcbiAgICApO1xuICB9XG59XG4iXX0=