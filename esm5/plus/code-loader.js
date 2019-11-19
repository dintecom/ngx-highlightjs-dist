/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable, Optional } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EMPTY } from 'rxjs';
import { catchError, publishReplay, refCount } from 'rxjs/operators';
import { GIST_OPTIONS } from './gist.model';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./gist.model";
var CodeLoader = /** @class */ (function () {
    function CodeLoader(_http, _options) {
        this._http = _http;
        this._options = _options;
    }
    /**
     * Get plus code
     * @param id Gist ID
     */
    /**
     * Get plus code
     * @param {?} id Gist ID
     * @return {?}
     */
    CodeLoader.prototype.getCodeFromGist = /**
     * Get plus code
     * @param {?} id Gist ID
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var params;
        if (this.isOAuthProvided()) {
            params = new HttpParams().set('client_id', this._options.clientId).set('client_secret', this._options.clientSecret);
        }
        return this.fetchFile("https://api.github.com/gists/" + id, { params: params, responseType: 'json' });
    };
    /**
     * Get code by URL
     * @param url File raw link
     */
    /**
     * Get code by URL
     * @param {?} url File raw link
     * @return {?}
     */
    CodeLoader.prototype.getCodeFromUrl = /**
     * Get code by URL
     * @param {?} url File raw link
     * @return {?}
     */
    function (url) {
        return this.fetchFile(url, { responseType: 'text' });
    };
    /**
     * Check if OAuth option is provided
     */
    /**
     * Check if OAuth option is provided
     * @private
     * @return {?}
     */
    CodeLoader.prototype.isOAuthProvided = /**
     * Check if OAuth option is provided
     * @private
     * @return {?}
     */
    function () {
        return !!this._options && !!this._options.clientId && !!this._options.clientSecret;
    };
    /**
     * @private
     * @param {?} url
     * @param {?} options
     * @return {?}
     */
    CodeLoader.prototype.fetchFile = /**
     * @private
     * @param {?} url
     * @param {?} options
     * @return {?}
     */
    function (url, options) {
        // Check if URL is valid
        if (isUrl(url)) {
            return this._http.get(url, options).pipe(
            // Catch response
            publishReplay(1), refCount(), catchError((/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                console.error('[NgxHighlight]: Unable to fetch the URL!', err.message);
                return EMPTY;
            })));
        }
        return EMPTY;
    };
    CodeLoader.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    CodeLoader.ctorParameters = function () { return [
        { type: HttpClient },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GIST_OPTIONS,] }] }
    ]; };
    /** @nocollapse */ CodeLoader.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CodeLoader_Factory() { return new CodeLoader(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.GIST_OPTIONS, 8)); }, token: CodeLoader, providedIn: "root" });
    return CodeLoader;
}());
export { CodeLoader };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CodeLoader.prototype._http;
    /**
     * @type {?}
     * @private
     */
    CodeLoader.prototype._options;
}
/**
 * @param {?} url
 * @return {?}
 */
function isUrl(url) {
    /** @type {?} */
    var regExp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regExp.test(url);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS1sb2FkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtaGlnaGxpZ2h0anMvcGx1cy8iLCJzb3VyY2VzIjpbImNvZGUtbG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM5RCxPQUFPLEVBQWMsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JFLE9BQU8sRUFBUSxZQUFZLEVBQWUsTUFBTSxjQUFjLENBQUM7Ozs7QUFFL0Q7SUFJRSxvQkFBb0IsS0FBaUIsRUFBNEMsUUFBcUI7UUFBbEYsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUE0QyxhQUFRLEdBQVIsUUFBUSxDQUFhO0lBQ3RHLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILG9DQUFlOzs7OztJQUFmLFVBQWdCLEVBQVU7O1lBQ3BCLE1BQWtCO1FBQ3RCLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFO1lBQzFCLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDckg7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsa0NBQWdDLEVBQUksRUFBRSxFQUFFLE1BQU0sUUFBQSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILG1DQUFjOzs7OztJQUFkLFVBQWUsR0FBVztRQUN4QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSyxvQ0FBZTs7Ozs7SUFBdkI7UUFDRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUM7SUFDckYsQ0FBQzs7Ozs7OztJQUVPLDhCQUFTOzs7Ozs7SUFBakIsVUFBa0IsR0FBVyxFQUFFLE9BQVk7UUFDekMsd0JBQXdCO1FBQ3hCLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSTtZQUN0QyxpQkFBaUI7WUFDakIsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUNoQixRQUFRLEVBQUUsRUFDVixVQUFVOzs7O1lBQUMsVUFBQyxHQUFVO2dCQUNwQixPQUFPLENBQUMsS0FBSyxDQUFDLDBDQUEwQyxFQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdkUsT0FBTyxLQUFLLENBQUM7WUFDZixDQUFDLEVBQUMsQ0FDSCxDQUFDO1NBQ0g7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7O2dCQWhERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVBRLFVBQVU7Z0RBU3VCLFFBQVEsWUFBSSxNQUFNLFNBQUMsWUFBWTs7O3FCQVZ6RTtDQXdEQyxBQWxERCxJQWtEQztTQS9DWSxVQUFVOzs7Ozs7SUFDVCwyQkFBeUI7Ozs7O0lBQUUsOEJBQStEOzs7Ozs7QUFnRHhHLFNBQVMsS0FBSyxDQUFDLEdBQVc7O1FBQ2xCLE1BQU0sR0FBRyxtRkFBbUY7SUFDbEcsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgRU1QVFkgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIHB1Ymxpc2hSZXBsYXksIHJlZkNvdW50IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgR2lzdCwgR0lTVF9PUFRJT05TLCBHaXN0T3B0aW9ucyB9IGZyb20gJy4vZ2lzdC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvZGVMb2FkZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50LCBAT3B0aW9uYWwoKSBASW5qZWN0KEdJU1RfT1BUSU9OUykgcHJpdmF0ZSBfb3B0aW9uczogR2lzdE9wdGlvbnMpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcGx1cyBjb2RlXG4gICAqIEBwYXJhbSBpZCBHaXN0IElEXG4gICAqL1xuICBnZXRDb2RlRnJvbUdpc3QoaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8R2lzdD4ge1xuICAgIGxldCBwYXJhbXM6IEh0dHBQYXJhbXM7XG4gICAgaWYgKHRoaXMuaXNPQXV0aFByb3ZpZGVkKCkpIHtcbiAgICAgIHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCkuc2V0KCdjbGllbnRfaWQnLCB0aGlzLl9vcHRpb25zLmNsaWVudElkKS5zZXQoJ2NsaWVudF9zZWNyZXQnLCB0aGlzLl9vcHRpb25zLmNsaWVudFNlY3JldCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZldGNoRmlsZShgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9naXN0cy8ke2lkfWAsIHsgcGFyYW1zLCByZXNwb25zZVR5cGU6ICdqc29uJyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY29kZSBieSBVUkxcbiAgICogQHBhcmFtIHVybCBGaWxlIHJhdyBsaW5rXG4gICAqL1xuICBnZXRDb2RlRnJvbVVybCh1cmw6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuZmV0Y2hGaWxlKHVybCwgeyByZXNwb25zZVR5cGU6ICd0ZXh0JyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBPQXV0aCBvcHRpb24gaXMgcHJvdmlkZWRcbiAgICovXG4gIHByaXZhdGUgaXNPQXV0aFByb3ZpZGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuX29wdGlvbnMgJiYgISF0aGlzLl9vcHRpb25zLmNsaWVudElkICYmICEhdGhpcy5fb3B0aW9ucy5jbGllbnRTZWNyZXQ7XG4gIH1cblxuICBwcml2YXRlIGZldGNoRmlsZSh1cmw6IHN0cmluZywgb3B0aW9uczogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAvLyBDaGVjayBpZiBVUkwgaXMgdmFsaWRcbiAgICBpZiAoaXNVcmwodXJsKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KHVybCwgb3B0aW9ucykucGlwZShcbiAgICAgICAgLy8gQ2F0Y2ggcmVzcG9uc2VcbiAgICAgICAgcHVibGlzaFJlcGxheSgxKSxcbiAgICAgICAgcmVmQ291bnQoKSxcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyOiBFcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1tOZ3hIaWdobGlnaHRdOiBVbmFibGUgdG8gZmV0Y2ggdGhlIFVSTCEnLCBlcnIubWVzc2FnZSk7XG4gICAgICAgICAgcmV0dXJuIEVNUFRZO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIEVNUFRZO1xuICB9XG5cbn1cblxuZnVuY3Rpb24gaXNVcmwodXJsOiBzdHJpbmcpIHtcbiAgY29uc3QgcmVnRXhwID0gLyhmdHB8aHR0cHxodHRwcyk6XFwvXFwvKFxcdys6ezAsMX1cXHcqQCk/KFxcUyspKDpbMC05XSspPyhcXC98XFwvKFtcXHcjITouPys9JiVAIVxcLVxcL10pKT8vO1xuICByZXR1cm4gcmVnRXhwLnRlc3QodXJsKTtcbn1cbiJdfQ==