/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Pipe, Input, Output, EventEmitter } from '@angular/core';
import { CodeLoader } from './code-loader';
var GistDirective = /** @class */ (function () {
    function GistDirective(_loader) {
        this._loader = _loader;
        this.gistLoad = new EventEmitter();
    }
    Object.defineProperty(GistDirective.prototype, "gist", {
        set: /**
         * @private
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            if (value) {
                this._loader.getCodeFromGist(value).subscribe((/**
                 * @param {?} gist
                 * @return {?}
                 */
                function (gist) { return _this.gistLoad.emit(gist); }));
            }
        },
        enumerable: true,
        configurable: true
    });
    GistDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[gist]'
                },] }
    ];
    /** @nocollapse */
    GistDirective.ctorParameters = function () { return [
        { type: CodeLoader }
    ]; };
    GistDirective.propDecorators = {
        gist: [{ type: Input }],
        gistLoad: [{ type: Output }]
    };
    return GistDirective;
}());
export { GistDirective };
if (false) {
    /** @type {?} */
    GistDirective.prototype.gistLoad;
    /**
     * @type {?}
     * @private
     */
    GistDirective.prototype._loader;
}
var GistFilePipe = /** @class */ (function () {
    function GistFilePipe() {
    }
    /**
     * @param {?} gist
     * @param {?} fileName
     * @return {?}
     */
    GistFilePipe.prototype.transform = /**
     * @param {?} gist
     * @param {?} fileName
     * @return {?}
     */
    function (gist, fileName) {
        return (gist && gist.files && gist.files[fileName]) ? gist.files[fileName].content : null;
    };
    GistFilePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'gistFile'
                },] }
    ];
    return GistFilePipe;
}());
export { GistFilePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2lzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1oaWdobGlnaHRqcy9wbHVzLyIsInNvdXJjZXMiOlsiZ2lzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBaUIsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0M7SUFLRSx1QkFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQVU3QixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQVQ5QyxDQUFDO0lBRUQsc0JBQ1ksK0JBQUk7Ozs7OztRQURoQixVQUNpQixLQUFhO1lBRDlCLGlCQUtDO1lBSEMsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUzs7OztnQkFBQyxVQUFDLElBQVUsSUFBSyxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUF4QixDQUF3QixFQUFDLENBQUM7YUFDekY7UUFDSCxDQUFDOzs7T0FBQTs7Z0JBYkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxRQUFRO2lCQUNuQjs7OztnQkFMUSxVQUFVOzs7dUJBV2hCLEtBQUs7MkJBT0wsTUFBTTs7SUFDVCxvQkFBQztDQUFBLEFBaEJELElBZ0JDO1NBYlksYUFBYTs7O0lBWXhCLGlDQUE4Qzs7Ozs7SUFWbEMsZ0NBQTJCOztBQWF6QztJQUFBO0lBT0EsQ0FBQzs7Ozs7O0lBSEMsZ0NBQVM7Ozs7O0lBQVQsVUFBVSxJQUFVLEVBQUUsUUFBZ0I7UUFDcEMsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM1RixDQUFDOztnQkFORixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLFVBQVU7aUJBQ2pCOztJQUtELG1CQUFDO0NBQUEsQUFQRCxJQU9DO1NBSlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgUGlwZSwgSW5wdXQsIE91dHB1dCwgUGlwZVRyYW5zZm9ybSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb2RlTG9hZGVyIH0gZnJvbSAnLi9jb2RlLWxvYWRlcic7XG5pbXBvcnQgeyBHaXN0IH0gZnJvbSAnLi9naXN0Lm1vZGVsJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2dpc3RdJ1xufSlcbmV4cG9ydCBjbGFzcyBHaXN0RGlyZWN0aXZlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2FkZXI6IENvZGVMb2FkZXIpIHtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHByaXZhdGUgc2V0IGdpc3QodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5fbG9hZGVyLmdldENvZGVGcm9tR2lzdCh2YWx1ZSkuc3Vic2NyaWJlKChnaXN0OiBHaXN0KSA9PiB0aGlzLmdpc3RMb2FkLmVtaXQoZ2lzdCkpO1xuICAgIH1cbiAgfVxuXG4gIEBPdXRwdXQoKSBnaXN0TG9hZCA9IG5ldyBFdmVudEVtaXR0ZXI8R2lzdD4oKTtcbn1cblxuQFBpcGUoe1xuICBuYW1lOiAnZ2lzdEZpbGUnXG59KVxuZXhwb3J0IGNsYXNzIEdpc3RGaWxlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oZ2lzdDogR2lzdCwgZmlsZU5hbWU6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiAoZ2lzdCAmJiBnaXN0LmZpbGVzICYmIGdpc3QuZmlsZXNbZmlsZU5hbWVdKSA/IGdpc3QuZmlsZXNbZmlsZU5hbWVdLmNvbnRlbnQgOiBudWxsO1xuICB9XG59XG4iXX0=