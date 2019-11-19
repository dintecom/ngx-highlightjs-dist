/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { CodeLoader } from './code-loader';
var CodeFromUrlPipe = /** @class */ (function () {
    function CodeFromUrlPipe(_loader) {
        this._loader = _loader;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    CodeFromUrlPipe.prototype.transform = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return this._loader.getCodeFromUrl(url);
    };
    CodeFromUrlPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'codeFromUrl'
                },] }
    ];
    /** @nocollapse */
    CodeFromUrlPipe.ctorParameters = function () { return [
        { type: CodeLoader }
    ]; };
    return CodeFromUrlPipe;
}());
export { CodeFromUrlPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CodeFromUrlPipe.prototype._loader;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS1mcm9tLXVybC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1oaWdobGlnaHRqcy9wbHVzLyIsInNvdXJjZXMiOlsiY29kZS1mcm9tLXVybC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFcEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQztJQUtFLHlCQUFvQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO0lBQ3ZDLENBQUM7Ozs7O0lBRUQsbUNBQVM7Ozs7SUFBVCxVQUFVLEdBQVc7UUFDbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQyxDQUFDOztnQkFWRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLGFBQWE7aUJBQ3BCOzs7O2dCQUpRLFVBQVU7O0lBYW5CLHNCQUFDO0NBQUEsQUFYRCxJQVdDO1NBUlksZUFBZTs7Ozs7O0lBRWQsa0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29kZUxvYWRlciB9IGZyb20gJy4vY29kZS1sb2FkZXInO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdjb2RlRnJvbVVybCdcbn0pXG5leHBvcnQgY2xhc3MgQ29kZUZyb21VcmxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbG9hZGVyOiBDb2RlTG9hZGVyKSB7XG4gIH1cblxuICB0cmFuc2Zvcm0odXJsOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl9sb2FkZXIuZ2V0Q29kZUZyb21VcmwodXJsKTtcbiAgfVxufVxuIl19