/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Inject, PLATFORM_ID, Optional } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, from, EMPTY, zip } from 'rxjs';
import { catchError, tap, map, switchMap, filter, take } from 'rxjs/operators';
import { HIGHLIGHT_OPTIONS } from './highlight.model';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./highlight.model";
// @dynamic
var HighlightLoader = /** @class */ (function () {
    function HighlightLoader(doc, platformId, _options) {
        var _this = this;
        this._options = _options;
        // Stream that emits when hljs library is loaded and ready to use
        this._ready = new BehaviorSubject(null);
        this.ready = this._ready.asObservable().pipe(filter((/**
         * @param {?} hljs
         * @return {?}
         */
        function (hljs) { return !!hljs; })), take(1));
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
            function (hljs) {
                if (_this._options && _this._options.lineNumbers) {
                    // Make hljs available on window object (required for the line numbers library)
                    doc.defaultView.hljs = hljs;
                    // Load line numbers library
                    return loadLineNumbers().pipe(tap((/**
                     * @return {?}
                     */
                    function () { return _this._ready.next(hljs); })));
                }
                else {
                    _this._ready.next(hljs);
                    return EMPTY;
                }
            })), catchError((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                console.error('Unable to load hljs library', e);
                return EMPTY;
            }))).subscribe();
        }
    }
    /**
     * Lazy-Load highlight.js library
     */
    /**
     * Lazy-Load highlight.js library
     * @private
     * @return {?}
     */
    HighlightLoader.prototype._loadLibrary = /**
     * Lazy-Load highlight.js library
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return (this._options && this._options.languages && Object.keys(this._options.languages).length)
            ? from(loadCoreLibrary()).pipe(switchMap((/**
             * @param {?} hljs
             * @return {?}
             */
            function (hljs) { return _this._loadLanguages(hljs); })))
            : from(loadAllLibrary());
    };
    /**
     * Lazy-load highlight.js languages
     */
    /**
     * Lazy-load highlight.js languages
     * @private
     * @param {?} hljs
     * @return {?}
     */
    HighlightLoader.prototype._loadLanguages = /**
     * Lazy-load highlight.js languages
     * @private
     * @param {?} hljs
     * @return {?}
     */
    function (hljs) {
        /** @type {?} */
        var languages = Object.entries(this._options.languages).map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), langName = _b[0], langLoader = _b[1];
            return importModule(langLoader()).pipe(tap((/**
             * @param {?} langFunc
             * @return {?}
             */
            function (langFunc) { return hljs.registerLanguage(langName, langFunc); })));
        }));
        return zip.apply(void 0, tslib_1.__spread(languages)).pipe(map((/**
         * @return {?}
         */
        function () { return hljs; })));
    };
    HighlightLoader.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    HighlightLoader.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [HIGHLIGHT_OPTIONS,] }] }
    ]; };
    /** @nocollapse */ HighlightLoader.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function HighlightLoader_Factory() { return new HighlightLoader(i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(i0.PLATFORM_ID), i0.ɵɵinject(i2.HIGHLIGHT_OPTIONS, 8)); }, token: HighlightLoader, providedIn: "root" });
    return HighlightLoader;
}());
export { HighlightLoader };
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
var importModule = (/**
 * @param {?} moduleLoader
 * @return {?}
 */
function (moduleLoader) {
    return from(moduleLoader).pipe(filter((/**
     * @param {?} module
     * @return {?}
     */
    function (module) { return !!module && !!module.default; })), map((/**
     * @param {?} module
     * @return {?}
     */
    function (module) { return module.default; })));
});
var ɵ0 = importModule;
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0LmxvYWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1oaWdobGlnaHRqcy8iLCJzb3VyY2VzIjpbImxpYi9oaWdobGlnaHQubG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGVBQWUsRUFBYyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRSxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQXNDLE1BQU0sbUJBQW1CLENBQUM7Ozs7O0FBRzFGO0lBV0UseUJBQThCLEdBQVEsRUFDTCxVQUFrQixFQUNRLFFBQTBCO1FBRnJGLGlCQTBCQztRQXhCMEQsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7O1FBUnBFLFdBQU0sR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxVQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQzlDLE1BQU07Ozs7UUFBQyxVQUFDLElBQXNCLElBQUssT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFOLENBQU0sRUFBQyxFQUMxQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1IsQ0FBQztRQUtBLHFDQUFxQztRQUNyQyxJQUFJLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFO1lBQ3pELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcs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LE9BQU8sWUFBWSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0FBQzlDLENBQUM7Ozs7O0FBS0QsU0FBUyxlQUFlO0lBQ3RCLE9BQU8sWUFBWSxDQUFDLE1BQU0sQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7QUFDN0QsQ0FBQzs7Ozs7SUFLSyxZQUFZOzs7O0FBQUcsVUFBQyxZQUEwQjtJQUM5QyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQzVCLE1BQU07Ozs7SUFBQyxVQUFDLE1BQVcsSUFBSyxPQUFBLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQTVCLENBQTRCLEVBQUMsRUFDckQsR0FBRzs7OztJQUFDLFVBQUMsTUFBVyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLEVBQUMsQ0FDckMsQ0FBQztBQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgUExBVEZPUk1fSUQsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBmcm9tLCBFTVBUWSwgemlwIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCB0YXAsIG1hcCwgc3dpdGNoTWFwLCBmaWx0ZXIsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBISUdITElHSFRfT1BUSU9OUywgSGlnaGxpZ2h0TGlicmFyeSwgSGlnaGxpZ2h0T3B0aW9ucyB9IGZyb20gJy4vaGlnaGxpZ2h0Lm1vZGVsJztcblxuLy8gQGR5bmFtaWNcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEhpZ2hsaWdodExvYWRlciB7XG4gIC8vIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gaGxqcyBsaWJyYXJ5IGlzIGxvYWRlZCBhbmQgcmVhZHkgdG8gdXNlXG4gIHByaXZhdGUgcmVhZG9ubHkgX3JlYWR5ID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcbiAgcmVhZG9ubHkgcmVhZHkgPSB0aGlzLl9yZWFkeS5hc09ic2VydmFibGUoKS5waXBlKFxuICAgIGZpbHRlcigoaGxqczogSGlnaGxpZ2h0TGlicmFyeSkgPT4gISFobGpzKSxcbiAgICB0YWtlKDEpXG4gICk7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgZG9jOiBhbnksXG4gICAgICAgICAgICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IG9iamVjdCxcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChISUdITElHSFRfT1BUSU9OUykgcHJpdmF0ZSBfb3B0aW9uczogSGlnaGxpZ2h0T3B0aW9ucykge1xuICAgIC8vIENoZWNrIGlmIGhsanMgaXMgYWxyZWFkeSBhdmFpbGFibGVcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCkgJiYgZG9jLmRlZmF1bHRWaWV3LmhsanMpIHtcbiAgICAgIHRoaXMuX3JlYWR5Lm5leHQoZG9jLmRlZmF1bHRWaWV3LmhsanMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBMb2FkIGhsanMgbGlicmFyeVxuICAgICAgdGhpcy5fbG9hZExpYnJhcnkoKS5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoKGhsanM6IEhpZ2hsaWdodExpYnJhcnkpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5fb3B0aW9ucyAmJiB0aGlzLl9vcHRpb25zLmxpbmVOdW1iZXJzKSB7XG4gICAgICAgICAgICAvLyBNYWtlIGhsanMgYXZhaWxhYmxlIG9uIHdpbmRvdyBvYmplY3QgKHJlcXVpcmVkIGZvciB0aGUgbGluZSBudW1iZXJzIGxpYnJhcnkpXG4gICAgICAgICAgICBkb2MuZGVmYXVsdFZpZXcuaGxqcyA9IGhsanM7XG4gICAgICAgICAgICAvLyBMb2FkIGxpbmUgbnVtYmVycyBsaWJyYXJ5XG4gICAgICAgICAgICByZXR1cm4gbG9hZExpbmVOdW1iZXJzKCkucGlwZSh0YXAoKCkgPT4gdGhpcy5fcmVhZHkubmV4dChobGpzKSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yZWFkeS5uZXh0KGhsanMpO1xuICAgICAgICAgICAgcmV0dXJuIEVNUFRZO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoKGU6IGFueSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byBsb2FkIGhsanMgbGlicmFyeScsIGUpO1xuICAgICAgICAgIHJldHVybiBFTVBUWTtcbiAgICAgICAgfSlcbiAgICAgICkuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExhenktTG9hZCBoaWdobGlnaHQuanMgbGlicmFyeVxuICAgKi9cbiAgcHJpdmF0ZSBfbG9hZExpYnJhcnkoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gKHRoaXMuX29wdGlvbnMgJiYgdGhpcy5fb3B0aW9ucy5sYW5ndWFnZXMgJiYgT2JqZWN0LmtleXModGhpcy5fb3B0aW9ucy5sYW5ndWFnZXMpLmxlbmd0aClcbiAgICAgID8gZnJvbShsb2FkQ29yZUxpYnJhcnkoKSkucGlwZShzd2l0Y2hNYXAoKGhsanM6IEhpZ2hsaWdodExpYnJhcnkpID0+IHRoaXMuX2xvYWRMYW5ndWFnZXMoaGxqcykpKVxuICAgICAgOiBmcm9tKGxvYWRBbGxMaWJyYXJ5KCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIExhenktbG9hZCBoaWdobGlnaHQuanMgbGFuZ3VhZ2VzXG4gICAqL1xuICBwcml2YXRlIF9sb2FkTGFuZ3VhZ2VzKGhsanM6IEhpZ2hsaWdodExpYnJhcnkpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IGxhbmd1YWdlcyA9IE9iamVjdC5lbnRyaWVzKHRoaXMuX29wdGlvbnMubGFuZ3VhZ2VzKS5tYXAoKFtsYW5nTmFtZSwgbGFuZ0xvYWRlcl0pID0+XG4gICAgICBpbXBvcnRNb2R1bGUobGFuZ0xvYWRlcigpKS5waXBlKFxuICAgICAgICB0YXAoKGxhbmdGdW5jOiBhbnkpID0+IGhsanMucmVnaXN0ZXJMYW5ndWFnZShsYW5nTmFtZSwgbGFuZ0Z1bmMpKVxuICAgICAgKVxuICAgICk7XG4gICAgcmV0dXJuIHppcCguLi5sYW5ndWFnZXMpLnBpcGUobWFwKCgpID0+IGhsanMpKTtcbiAgfVxufVxuXG4vKipcbiAqIEltcG9ydCBoaWdobGlnaHQuanMgY29yZSBsaWJyYXJ5XG4gKi9cbmZ1bmN0aW9uIGxvYWRDb3JlTGlicmFyeSgpOiBPYnNlcnZhYmxlPEhpZ2hsaWdodExpYnJhcnk+IHtcbiAgcmV0dXJuIGltcG9ydE1vZHVsZShpbXBvcnQoJ2hpZ2hsaWdodC5qcy9saWIvaGlnaGxpZ2h0JykpO1xufVxuXG4vKipcbiAqIEltcG9ydCBoaWdobGlnaHQuanMgbGlicmFyeSB3aXRoIGFsbCBsYW5ndWFnZXNcbiAqL1xuZnVuY3Rpb24gbG9hZEFsbExpYnJhcnkoKTogT2JzZXJ2YWJsZTxIaWdobGlnaHRMaWJyYXJ5PiB7XG4gIHJldHVybiBpbXBvcnRNb2R1bGUoaW1wb3J0KCdoaWdobGlnaHQuanMnKSk7XG59XG5cbi8qKlxuICogSW1wb3J0IGxpbmUgbnVtYmVycyBsaWJyYXJ5XG4gKi9cbmZ1bmN0aW9uIGxvYWRMaW5lTnVtYmVycygpOiBPYnNlcnZhYmxlPGFueT4ge1xuICByZXR1cm4gaW1wb3J0TW9kdWxlKGltcG9ydCgnaGlnaGxpZ2h0anMtbGluZS1udW1iZXJzLmpzJykpO1xufVxuXG4vKipcbiAqIE1hcCBsb2FkZXIgcmVzcG9uc2UgdG8gbW9kdWxlIG9iamVjdFxuICovXG5jb25zdCBpbXBvcnRNb2R1bGUgPSAobW9kdWxlTG9hZGVyOiBQcm9taXNlPGFueT4pOiBPYnNlcnZhYmxlPGFueT4gPT4ge1xuICByZXR1cm4gZnJvbShtb2R1bGVMb2FkZXIpLnBpcGUoXG4gICAgZmlsdGVyKChtb2R1bGU6IGFueSkgPT4gISFtb2R1bGUgJiYgISFtb2R1bGUuZGVmYXVsdCksXG4gICAgbWFwKChtb2R1bGU6IGFueSkgPT4gbW9kdWxlLmRlZmF1bHQpXG4gICk7XG59O1xuIl19