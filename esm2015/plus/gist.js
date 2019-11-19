/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Pipe, Input, Output, EventEmitter } from '@angular/core';
import { CodeLoader } from './code-loader';
export class GistDirective {
    /**
     * @param {?} _loader
     */
    constructor(_loader) {
        this._loader = _loader;
        this.gistLoad = new EventEmitter();
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    set gist(value) {
        if (value) {
            this._loader.getCodeFromGist(value).subscribe((/**
             * @param {?} gist
             * @return {?}
             */
            (gist) => this.gistLoad.emit(gist)));
        }
    }
}
GistDirective.decorators = [
    { type: Directive, args: [{
                selector: '[gist]'
            },] }
];
/** @nocollapse */
GistDirective.ctorParameters = () => [
    { type: CodeLoader }
];
GistDirective.propDecorators = {
    gist: [{ type: Input }],
    gistLoad: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    GistDirective.prototype.gistLoad;
    /**
     * @type {?}
     * @private
     */
    GistDirective.prototype._loader;
}
export class GistFilePipe {
    /**
     * @param {?} gist
     * @param {?} fileName
     * @return {?}
     */
    transform(gist, fileName) {
        return (gist && gist.files && gist.files[fileName]) ? gist.files[fileName].content : null;
    }
}
GistFilePipe.decorators = [
    { type: Pipe, args: [{
                name: 'gistFile'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2lzdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1oaWdobGlnaHRqcy9wbHVzLyIsInNvdXJjZXMiOlsiZ2lzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBaUIsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNM0MsTUFBTSxPQUFPLGFBQWE7Ozs7SUFFeEIsWUFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQVU3QixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQVQ5QyxDQUFDOzs7Ozs7SUFFRCxJQUNZLElBQUksQ0FBQyxLQUFhO1FBQzVCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUzs7OztZQUFDLENBQUMsSUFBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDO1NBQ3pGO0lBQ0gsQ0FBQzs7O1lBYkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxRQUFRO2FBQ25COzs7O1lBTFEsVUFBVTs7O21CQVdoQixLQUFLO3VCQU9MLE1BQU07Ozs7SUFBUCxpQ0FBOEM7Ozs7O0lBVmxDLGdDQUEyQjs7QUFnQnpDLE1BQU0sT0FBTyxZQUFZOzs7Ozs7SUFDdkIsU0FBUyxDQUFDLElBQVUsRUFBRSxRQUFnQjtRQUNwQyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzVGLENBQUM7OztZQU5GLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsVUFBVTthQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgUGlwZSwgSW5wdXQsIE91dHB1dCwgUGlwZVRyYW5zZm9ybSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb2RlTG9hZGVyIH0gZnJvbSAnLi9jb2RlLWxvYWRlcic7XG5pbXBvcnQgeyBHaXN0IH0gZnJvbSAnLi9naXN0Lm1vZGVsJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2dpc3RdJ1xufSlcbmV4cG9ydCBjbGFzcyBHaXN0RGlyZWN0aXZlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9sb2FkZXI6IENvZGVMb2FkZXIpIHtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHByaXZhdGUgc2V0IGdpc3QodmFsdWU6IHN0cmluZykge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5fbG9hZGVyLmdldENvZGVGcm9tR2lzdCh2YWx1ZSkuc3Vic2NyaWJlKChnaXN0OiBHaXN0KSA9PiB0aGlzLmdpc3RMb2FkLmVtaXQoZ2lzdCkpO1xuICAgIH1cbiAgfVxuXG4gIEBPdXRwdXQoKSBnaXN0TG9hZCA9IG5ldyBFdmVudEVtaXR0ZXI8R2lzdD4oKTtcbn1cblxuQFBpcGUoe1xuICBuYW1lOiAnZ2lzdEZpbGUnXG59KVxuZXhwb3J0IGNsYXNzIEdpc3RGaWxlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0oZ2lzdDogR2lzdCwgZmlsZU5hbWU6IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiAoZ2lzdCAmJiBnaXN0LmZpbGVzICYmIGdpc3QuZmlsZXNbZmlsZU5hbWVdKSA/IGdpc3QuZmlsZXNbZmlsZU5hbWVdLmNvbnRlbnQgOiBudWxsO1xuICB9XG59XG4iXX0=