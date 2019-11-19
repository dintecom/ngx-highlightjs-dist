/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Output, Inject, Optional, EventEmitter, ElementRef } from '@angular/core';
import { animationFrameScheduler } from 'rxjs';
import { HighlightJS } from './highlight.service';
import { HIGHLIGHT_OPTIONS } from './highlight.model';
var Highlight = /** @class */ (function () {
    function Highlight(el, _hljs, _options) {
        this._hljs = _hljs;
        this._options = _options;
        // Stream that emits when code string is highlighted
        this.highlighted = new EventEmitter();
        this._nativeElement = el.nativeElement;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    Highlight.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.code &&
            changes.code.currentValue &&
            changes.code.currentValue !== changes.code.previousValue) {
            this.highlightElement(this.code, this.languages);
        }
    };
    /**
     * Highlighting with language detection and fix markup.
     * @param code Accepts a string with the code to highlight
     * @param languages An optional array of language names and aliases restricting detection to only those languages.
     * The subset can also be set with configure, but the local parameter overrides the option if set.
     */
    /**
     * Highlighting with language detection and fix markup.
     * @param {?} code Accepts a string with the code to highlight
     * @param {?=} languages An optional array of language names and aliases restricting detection to only those languages.
     * The subset can also be set with configure, but the local parameter overrides the option if set.
     * @return {?}
     */
    Highlight.prototype.highlightElement = /**
     * Highlighting with language detection and fix markup.
     * @param {?} code Accepts a string with the code to highlight
     * @param {?=} languages An optional array of language names and aliases restricting detection to only those languages.
     * The subset can also be set with configure, but the local parameter overrides the option if set.
     * @return {?}
     */
    function (code, languages) {
        var _this = this;
        // Set code text before highlighting
        this.setCode(code);
        this._hljs.highlightAuto(code, languages).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            // Set highlighted code
            _this.setCode(res.value);
            // Check if user want to show line numbers
            if (_this.lineNumbers && _this._options && _this._options.lineNumbers) {
                _this.addLineNumbers();
            }
            // Forward highlight response to the highlighted output
            _this.highlighted.emit(res);
        }));
    };
    /**
     * @private
     * @return {?}
     */
    Highlight.prototype.addLineNumbers = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        // Clean up line numbers observer
        this.destroyLineNumbersObserver();
        animationFrameScheduler.schedule((/**
         * @return {?}
         */
        function () {
            // Add line numbers
            _this._hljs.lineNumbersBlock(_this._nativeElement).subscribe();
            // If lines count is 1, the line numbers library will not add numbers
            // Observe changes to add 'hljs-line-numbers' class only when line numbers is added to the code element
            _this._lineNumbersObs = new MutationObserver((/**
             * @return {?}
             */
            function () {
                if (_this._nativeElement.firstElementChild.tagName.toUpperCase() === 'TABLE') {
                    _this._nativeElement.classList.add('hljs-line-numbers');
                }
                _this.destroyLineNumbersObserver();
            }));
            _this._lineNumbersObs.observe(_this._nativeElement, { childList: true });
        }));
    };
    /**
     * @private
     * @return {?}
     */
    Highlight.prototype.destroyLineNumbersObserver = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._lineNumbersObs) {
            this._lineNumbersObs.disconnect();
            this._lineNumbersObs = null;
        }
    };
    /**
     * @private
     * @param {?} content
     * @return {?}
     */
    Highlight.prototype.setCode = /**
     * @private
     * @param {?} content
     * @return {?}
     */
    function (content) {
        var _this = this;
        animationFrameScheduler.schedule((/**
         * @return {?}
         */
        function () { return _this._nativeElement.innerHTML = content; }));
    };
    Highlight.decorators = [
        { type: Directive, args: [{
                    host: {
                        '[class.hljs]': 'true'
                    },
                    selector: '[highlight]'
                },] }
    ];
    /** @nocollapse */
    Highlight.ctorParameters = function () { return [
        { type: ElementRef },
        { type: HighlightJS },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [HIGHLIGHT_OPTIONS,] }] }
    ]; };
    Highlight.propDecorators = {
        code: [{ type: Input, args: ['highlight',] }],
        languages: [{ type: Input }],
        lineNumbers: [{ type: Input }],
        highlighted: [{ type: Output }]
    };
    return Highlight;
}());
export { Highlight };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Highlight.prototype._nativeElement;
    /**
     * @type {?}
     * @private
     */
    Highlight.prototype._lineNumbersObs;
    /** @type {?} */
    Highlight.prototype.code;
    /** @type {?} */
    Highlight.prototype.languages;
    /** @type {?} */
    Highlight.prototype.lineNumbers;
    /** @type {?} */
    Highlight.prototype.highlighted;
    /**
     * @type {?}
     * @private
     */
    Highlight.prototype._hljs;
    /**
     * @type {?}
     * @private
     */
    Highlight.prototype._options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWhpZ2hsaWdodGpzLyIsInNvdXJjZXMiOlsibGliL2hpZ2hsaWdodC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLE1BQU0sRUFDTixRQUFRLEVBR1IsWUFBWSxFQUNaLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxpQkFBaUIsRUFBcUMsTUFBTSxtQkFBbUIsQ0FBQztBQUV6RjtJQTJCRSxtQkFBWSxFQUFjLEVBQ04sS0FBa0IsRUFDcUIsUUFBMEI7UUFEakUsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQUNxQixhQUFRLEdBQVIsUUFBUSxDQUFrQjs7UUFKM0UsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUsxRCxJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFRCwrQkFBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFDRSxPQUFPLENBQUMsSUFBSTtZQUNaLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWTtZQUN6QixPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksS0FBSyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFDeEQ7WUFDQSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbEQ7SUFDSCxDQUFDO0lBRUQ7Ozs7O09BS0c7Ozs7Ozs7O0lBQ0gsb0NBQWdCOzs7Ozs7O0lBQWhCLFVBQWlCLElBQVksRUFBRSxTQUFvQjtRQUFuRCxpQkFhQztRQVpDLG9DQUFvQztRQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxHQUFRO1lBQzNELHVCQUF1QjtZQUN2QixLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN4QiwwQ0FBMEM7WUFDMUMsSUFBSSxLQUFJLENBQUMsV0FBVyxJQUFJLEtBQUksQ0FBQyxRQUFRLElBQUksS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUU7Z0JBQ2xFLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN2QjtZQUNELHVEQUF1RDtZQUN2RCxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU8sa0NBQWM7Ozs7SUFBdEI7UUFBQSxpQkFnQkM7UUFmQyxpQ0FBaUM7UUFDakMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7UUFDbEMsdUJBQXVCLENBQUMsUUFBUTs7O1FBQUM7WUFDL0IsbUJBQW1CO1lBQ25CLEtBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzdELHFFQUFxRTtZQUNyRSx1R0FBdUc7WUFDdkcsS0FBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGdCQUFnQjs7O1lBQUM7Z0JBQzFDLElBQUksS0FBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssT0FBTyxFQUFFO29CQUMzRSxLQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztpQkFDeEQ7Z0JBQ0QsS0FBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7WUFDcEMsQ0FBQyxFQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDekUsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVPLDhDQUEwQjs7OztJQUFsQztRQUNFLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sMkJBQU87Ozs7O0lBQWYsVUFBZ0IsT0FBZTtRQUEvQixpQkFFQztRQURDLHVCQUF1QixDQUFDLFFBQVE7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsR0FBRyxPQUFPLEVBQXZDLENBQXVDLEVBQUMsQ0FBQztJQUNsRixDQUFDOztnQkEzRkYsU0FBUyxTQUFDO29CQUNULElBQUksRUFBRTt3QkFDSixjQUFjLEVBQUUsTUFBTTtxQkFDdkI7b0JBQ0QsUUFBUSxFQUFFLGFBQWE7aUJBQ3hCOzs7O2dCQVhDLFVBQVU7Z0JBR0gsV0FBVztnREFnQ0wsUUFBUSxZQUFJLE1BQU0sU0FBQyxpQkFBaUI7Ozt1QkFkaEQsS0FBSyxTQUFDLFdBQVc7NEJBSWpCLEtBQUs7OEJBR0wsS0FBSzs4QkFHTCxNQUFNOztJQW1FVCxnQkFBQztDQUFBLEFBNUZELElBNEZDO1NBdEZZLFNBQVM7Ozs7OztJQUdwQixtQ0FBNkM7Ozs7O0lBRzdDLG9DQUE2Qjs7SUFHN0IseUJBQWtDOztJQUlsQyw4QkFBOEI7O0lBRzlCLGdDQUErQjs7SUFHL0IsZ0NBQTREOzs7OztJQUdoRCwwQkFBMEI7Ozs7O0lBQzFCLDZCQUF5RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgSW5qZWN0LFxuICBPcHRpb25hbCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBFdmVudEVtaXR0ZXIsXG4gIEVsZW1lbnRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhbmltYXRpb25GcmFtZVNjaGVkdWxlciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSGlnaGxpZ2h0SlMgfSBmcm9tICcuL2hpZ2hsaWdodC5zZXJ2aWNlJztcbmltcG9ydCB7IEhJR0hMSUdIVF9PUFRJT05TLCBIaWdobGlnaHRPcHRpb25zLCBIaWdobGlnaHRSZXN1bHQgfSBmcm9tICcuL2hpZ2hsaWdodC5tb2RlbCc7XG5cbkBEaXJlY3RpdmUoe1xuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5obGpzXSc6ICd0cnVlJ1xuICB9LFxuICBzZWxlY3RvcjogJ1toaWdobGlnaHRdJ1xufSlcbmV4cG9ydCBjbGFzcyBIaWdobGlnaHQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gIC8vIEhpZ2hsaWdodGVkIENvZGVcbiAgcHJpdmF0ZSByZWFkb25seSBfbmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQ7XG5cbiAgLy8gVGVtcCBvYnNlcnZlciB0byBvYnNlcnZlIHdoZW4gbGluZSBudW1iZXJzIGhhcyBiZWVuIGFkZGVkIHRvIGNvZGUgZWxlbWVudFxuICBwcml2YXRlIF9saW5lTnVtYmVyc09iczogYW55O1xuXG4gIC8vIEhpZ2hsaWdodCBjb2RlIGlucHV0XG4gIEBJbnB1dCgnaGlnaGxpZ2h0JykgY29kZSE6IHN0cmluZztcblxuICAvLyBBbiBvcHRpb25hbCBhcnJheSBvZiBsYW5ndWFnZSBuYW1lcyBhbmQgYWxpYXNlcyByZXN0cmljdGluZyBkZXRlY3Rpb24gdG8gb25seSB0aG9zZSBsYW5ndWFnZXMuXG4gIC8vIFRoZSBzdWJzZXQgY2FuIGFsc28gYmUgc2V0IHdpdGggY29uZmlndXJlLCBidXQgdGhlIGxvY2FsIHBhcmFtZXRlciBvdmVycmlkZXMgdGhlIG9wdGlvbiBpZiBzZXQuXG4gIEBJbnB1dCgpIGxhbmd1YWdlcyE6IHN0cmluZ1tdO1xuXG4gIC8vIFNob3cgbGluZSBudW1iZXJzXG4gIEBJbnB1dCgpIGxpbmVOdW1iZXJzITogYm9vbGVhbjtcblxuICAvLyBTdHJlYW0gdGhhdCBlbWl0cyB3aGVuIGNvZGUgc3RyaW5nIGlzIGhpZ2hsaWdodGVkXG4gIEBPdXRwdXQoKSBoaWdobGlnaHRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SGlnaGxpZ2h0UmVzdWx0PigpO1xuXG4gIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9obGpzOiBIaWdobGlnaHRKUyxcbiAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgQEluamVjdChISUdITElHSFRfT1BUSU9OUykgcHJpdmF0ZSBfb3B0aW9uczogSGlnaGxpZ2h0T3B0aW9ucykge1xuICAgIHRoaXMuX25hdGl2ZUVsZW1lbnQgPSBlbC5uYXRpdmVFbGVtZW50O1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChcbiAgICAgIGNoYW5nZXMuY29kZSAmJlxuICAgICAgY2hhbmdlcy5jb2RlLmN1cnJlbnRWYWx1ZSAmJlxuICAgICAgY2hhbmdlcy5jb2RlLmN1cnJlbnRWYWx1ZSAhPT0gY2hhbmdlcy5jb2RlLnByZXZpb3VzVmFsdWVcbiAgICApIHtcbiAgICAgIHRoaXMuaGlnaGxpZ2h0RWxlbWVudCh0aGlzLmNvZGUsIHRoaXMubGFuZ3VhZ2VzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSGlnaGxpZ2h0aW5nIHdpdGggbGFuZ3VhZ2UgZGV0ZWN0aW9uIGFuZCBmaXggbWFya3VwLlxuICAgKiBAcGFyYW0gY29kZSBBY2NlcHRzIGEgc3RyaW5nIHdpdGggdGhlIGNvZGUgdG8gaGlnaGxpZ2h0XG4gICAqIEBwYXJhbSBsYW5ndWFnZXMgQW4gb3B0aW9uYWwgYXJyYXkgb2YgbGFuZ3VhZ2UgbmFtZXMgYW5kIGFsaWFzZXMgcmVzdHJpY3RpbmcgZGV0ZWN0aW9uIHRvIG9ubHkgdGhvc2UgbGFuZ3VhZ2VzLlxuICAgKiBUaGUgc3Vic2V0IGNhbiBhbHNvIGJlIHNldCB3aXRoIGNvbmZpZ3VyZSwgYnV0IHRoZSBsb2NhbCBwYXJhbWV0ZXIgb3ZlcnJpZGVzIHRoZSBvcHRpb24gaWYgc2V0LlxuICAgKi9cbiAgaGlnaGxpZ2h0RWxlbWVudChjb2RlOiBzdHJpbmcsIGxhbmd1YWdlcz86IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgLy8gU2V0IGNvZGUgdGV4dCBiZWZvcmUgaGlnaGxpZ2h0aW5nXG4gICAgdGhpcy5zZXRDb2RlKGNvZGUpO1xuICAgIHRoaXMuX2hsanMuaGlnaGxpZ2h0QXV0byhjb2RlLCBsYW5ndWFnZXMpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcbiAgICAgIC8vIFNldCBoaWdobGlnaHRlZCBjb2RlXG4gICAgICB0aGlzLnNldENvZGUocmVzLnZhbHVlKTtcbiAgICAgIC8vIENoZWNrIGlmIHVzZXIgd2FudCB0byBzaG93IGxpbmUgbnVtYmVyc1xuICAgICAgaWYgKHRoaXMubGluZU51bWJlcnMgJiYgdGhpcy5fb3B0aW9ucyAmJiB0aGlzLl9vcHRpb25zLmxpbmVOdW1iZXJzKSB7XG4gICAgICAgIHRoaXMuYWRkTGluZU51bWJlcnMoKTtcbiAgICAgIH1cbiAgICAgIC8vIEZvcndhcmQgaGlnaGxpZ2h0IHJlc3BvbnNlIHRvIHRoZSBoaWdobGlnaHRlZCBvdXRwdXRcbiAgICAgIHRoaXMuaGlnaGxpZ2h0ZWQuZW1pdChyZXMpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRMaW5lTnVtYmVycygpIHtcbiAgICAvLyBDbGVhbiB1cCBsaW5lIG51bWJlcnMgb2JzZXJ2ZXJcbiAgICB0aGlzLmRlc3Ryb3lMaW5lTnVtYmVyc09ic2VydmVyKCk7XG4gICAgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgLy8gQWRkIGxpbmUgbnVtYmVyc1xuICAgICAgdGhpcy5faGxqcy5saW5lTnVtYmVyc0Jsb2NrKHRoaXMuX25hdGl2ZUVsZW1lbnQpLnN1YnNjcmliZSgpO1xuICAgICAgLy8gSWYgbGluZXMgY291bnQgaXMgMSwgdGhlIGxpbmUgbnVtYmVycyBsaWJyYXJ5IHdpbGwgbm90IGFkZCBudW1iZXJzXG4gICAgICAvLyBPYnNlcnZlIGNoYW5nZXMgdG8gYWRkICdobGpzLWxpbmUtbnVtYmVycycgY2xhc3Mgb25seSB3aGVuIGxpbmUgbnVtYmVycyBpcyBhZGRlZCB0byB0aGUgY29kZSBlbGVtZW50XG4gICAgICB0aGlzLl9saW5lTnVtYmVyc09icyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX25hdGl2ZUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnVEFCTEUnKSB7XG4gICAgICAgICAgdGhpcy5fbmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdobGpzLWxpbmUtbnVtYmVycycpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVzdHJveUxpbmVOdW1iZXJzT2JzZXJ2ZXIoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fbGluZU51bWJlcnNPYnMub2JzZXJ2ZSh0aGlzLl9uYXRpdmVFbGVtZW50LCB7IGNoaWxkTGlzdDogdHJ1ZSB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZGVzdHJveUxpbmVOdW1iZXJzT2JzZXJ2ZXIoKSB7XG4gICAgaWYgKHRoaXMuX2xpbmVOdW1iZXJzT2JzKSB7XG4gICAgICB0aGlzLl9saW5lTnVtYmVyc09icy5kaXNjb25uZWN0KCk7XG4gICAgICB0aGlzLl9saW5lTnVtYmVyc09icyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRDb2RlKGNvbnRlbnQ6IHN0cmluZykge1xuICAgIGFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyLnNjaGVkdWxlKCgpID0+IHRoaXMuX25hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gY29udGVudCk7XG4gIH1cbn1cblxuIl19