/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, Output, Inject, Optional, EventEmitter, ElementRef } from '@angular/core';
import { animationFrameScheduler } from 'rxjs';
import { HighlightJS } from './highlight.service';
import { HIGHLIGHT_OPTIONS } from './highlight.model';
export class Highlight {
    /**
     * @param {?} el
     * @param {?} _hljs
     * @param {?} _options
     */
    constructor(el, _hljs, _options) {
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
    ngOnChanges(changes) {
        if (changes.code &&
            changes.code.currentValue &&
            changes.code.currentValue !== changes.code.previousValue) {
            this.highlightElement(this.code, this.languages);
        }
    }
    /**
     * Highlighting with language detection and fix markup.
     * @param {?} code Accepts a string with the code to highlight
     * @param {?=} languages An optional array of language names and aliases restricting detection to only those languages.
     * The subset can also be set with configure, but the local parameter overrides the option if set.
     * @return {?}
     */
    highlightElement(code, languages) {
        // Set code text before highlighting
        this.setCode(code);
        this._hljs.highlightAuto(code, languages).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        (res) => {
            // Set highlighted code
            this.setCode(res.value);
            // Check if user want to show line numbers
            if (this.lineNumbers && this._options && this._options.lineNumbers) {
                this.addLineNumbers();
            }
            // Forward highlight response to the highlighted output
            this.highlighted.emit(res);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    addLineNumbers() {
        // Clean up line numbers observer
        this.destroyLineNumbersObserver();
        animationFrameScheduler.schedule((/**
         * @return {?}
         */
        () => {
            // Add line numbers
            this._hljs.lineNumbersBlock(this._nativeElement).subscribe();
            // If lines count is 1, the line numbers library will not add numbers
            // Observe changes to add 'hljs-line-numbers' class only when line numbers is added to the code element
            this._lineNumbersObs = new MutationObserver((/**
             * @return {?}
             */
            () => {
                if (this._nativeElement.firstElementChild.tagName.toUpperCase() === 'TABLE') {
                    this._nativeElement.classList.add('hljs-line-numbers');
                }
                this.destroyLineNumbersObserver();
            }));
            this._lineNumbersObs.observe(this._nativeElement, { childList: true });
        }));
    }
    /**
     * @private
     * @return {?}
     */
    destroyLineNumbersObserver() {
        if (this._lineNumbersObs) {
            this._lineNumbersObs.disconnect();
            this._lineNumbersObs = null;
        }
    }
    /**
     * @private
     * @param {?} content
     * @return {?}
     */
    setCode(content) {
        animationFrameScheduler.schedule((/**
         * @return {?}
         */
        () => this._nativeElement.innerHTML = content));
    }
}
Highlight.decorators = [
    { type: Directive, args: [{
                host: {
                    '[class.hljs]': 'true'
                },
                selector: '[highlight]'
            },] }
];
/** @nocollapse */
Highlight.ctorParameters = () => [
    { type: ElementRef },
    { type: HighlightJS },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [HIGHLIGHT_OPTIONS,] }] }
];
Highlight.propDecorators = {
    code: [{ type: Input, args: ['highlight',] }],
    languages: [{ type: Input }],
    lineNumbers: [{ type: Input }],
    highlighted: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWhpZ2hsaWdodGpzLyIsInNvdXJjZXMiOlsibGliL2hpZ2hsaWdodC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLE1BQU0sRUFDTixRQUFRLEVBR1IsWUFBWSxFQUNaLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxpQkFBaUIsRUFBcUMsTUFBTSxtQkFBbUIsQ0FBQztBQVF6RixNQUFNLE9BQU8sU0FBUzs7Ozs7O0lBcUJwQixZQUFZLEVBQWMsRUFDTixLQUFrQixFQUNxQixRQUEwQjtRQURqRSxVQUFLLEdBQUwsS0FBSyxDQUFhO1FBQ3FCLGFBQVEsR0FBUixRQUFRLENBQWtCOztRQUozRSxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDO1FBSzFELElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUNFLE9BQU8sQ0FBQyxJQUFJO1lBQ1osT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZO1lBQ3pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxLQUFLLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUN4RDtZQUNBLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNsRDtJQUNILENBQUM7Ozs7Ozs7O0lBUUQsZ0JBQWdCLENBQUMsSUFBWSxFQUFFLFNBQW9CO1FBQ2pELG9DQUFvQztRQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUMvRCx1QkFBdUI7WUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEIsMENBQTBDO1lBQzFDLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFO2dCQUNsRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDdkI7WUFDRCx1REFBdUQ7WUFDdkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVPLGNBQWM7UUFDcEIsaUNBQWlDO1FBQ2pDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQ2xDLHVCQUF1QixDQUFDLFFBQVE7OztRQUFDLEdBQUcsRUFBRTtZQUNwQyxtQkFBbUI7WUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDN0QscUVBQXFFO1lBQ3JFLHVHQUF1RztZQUN2RyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksZ0JBQWdCOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQy9DLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssT0FBTyxFQUFFO29CQUMzRSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztpQkFDeEQ7Z0JBQ0QsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7WUFDcEMsQ0FBQyxFQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDekUsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVPLDBCQUEwQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNsQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztTQUM3QjtJQUNILENBQUM7Ozs7OztJQUVPLE9BQU8sQ0FBQyxPQUFlO1FBQzdCLHVCQUF1QixDQUFDLFFBQVE7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxHQUFHLE9BQU8sRUFBQyxDQUFDO0lBQ2xGLENBQUM7OztZQTNGRixTQUFTLFNBQUM7Z0JBQ1QsSUFBSSxFQUFFO29CQUNKLGNBQWMsRUFBRSxNQUFNO2lCQUN2QjtnQkFDRCxRQUFRLEVBQUUsYUFBYTthQUN4Qjs7OztZQVhDLFVBQVU7WUFHSCxXQUFXOzRDQWdDTCxRQUFRLFlBQUksTUFBTSxTQUFDLGlCQUFpQjs7O21CQWRoRCxLQUFLLFNBQUMsV0FBVzt3QkFJakIsS0FBSzswQkFHTCxLQUFLOzBCQUdMLE1BQU07Ozs7Ozs7SUFoQlAsbUNBQTZDOzs7OztJQUc3QyxvQ0FBNkI7O0lBRzdCLHlCQUFrQzs7SUFJbEMsOEJBQThCOztJQUc5QixnQ0FBK0I7O0lBRy9CLGdDQUE0RDs7Ozs7SUFHaEQsMEJBQTBCOzs7OztJQUMxQiw2QkFBeUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEluamVjdCxcbiAgT3B0aW9uYWwsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgRXZlbnRFbWl0dGVyLFxuICBFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEhpZ2hsaWdodEpTIH0gZnJvbSAnLi9oaWdobGlnaHQuc2VydmljZSc7XG5pbXBvcnQgeyBISUdITElHSFRfT1BUSU9OUywgSGlnaGxpZ2h0T3B0aW9ucywgSGlnaGxpZ2h0UmVzdWx0IH0gZnJvbSAnLi9oaWdobGlnaHQubW9kZWwnO1xuXG5ARGlyZWN0aXZlKHtcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuaGxqc10nOiAndHJ1ZSdcbiAgfSxcbiAgc2VsZWN0b3I6ICdbaGlnaGxpZ2h0XSdcbn0pXG5leHBvcnQgY2xhc3MgSGlnaGxpZ2h0IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICAvLyBIaWdobGlnaHRlZCBDb2RlXG4gIHByaXZhdGUgcmVhZG9ubHkgX25hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuXG4gIC8vIFRlbXAgb2JzZXJ2ZXIgdG8gb2JzZXJ2ZSB3aGVuIGxpbmUgbnVtYmVycyBoYXMgYmVlbiBhZGRlZCB0byBjb2RlIGVsZW1lbnRcbiAgcHJpdmF0ZSBfbGluZU51bWJlcnNPYnM6IGFueTtcblxuICAvLyBIaWdobGlnaHQgY29kZSBpbnB1dFxuICBASW5wdXQoJ2hpZ2hsaWdodCcpIGNvZGUhOiBzdHJpbmc7XG5cbiAgLy8gQW4gb3B0aW9uYWwgYXJyYXkgb2YgbGFuZ3VhZ2UgbmFtZXMgYW5kIGFsaWFzZXMgcmVzdHJpY3RpbmcgZGV0ZWN0aW9uIHRvIG9ubHkgdGhvc2UgbGFuZ3VhZ2VzLlxuICAvLyBUaGUgc3Vic2V0IGNhbiBhbHNvIGJlIHNldCB3aXRoIGNvbmZpZ3VyZSwgYnV0IHRoZSBsb2NhbCBwYXJhbWV0ZXIgb3ZlcnJpZGVzIHRoZSBvcHRpb24gaWYgc2V0LlxuICBASW5wdXQoKSBsYW5ndWFnZXMhOiBzdHJpbmdbXTtcblxuICAvLyBTaG93IGxpbmUgbnVtYmVyc1xuICBASW5wdXQoKSBsaW5lTnVtYmVycyE6IGJvb2xlYW47XG5cbiAgLy8gU3RyZWFtIHRoYXQgZW1pdHMgd2hlbiBjb2RlIHN0cmluZyBpcyBoaWdobGlnaHRlZFxuICBAT3V0cHV0KCkgaGlnaGxpZ2h0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEhpZ2hsaWdodFJlc3VsdD4oKTtcblxuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfaGxqczogSGlnaGxpZ2h0SlMsXG4gICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoSElHSExJR0hUX09QVElPTlMpIHByaXZhdGUgX29wdGlvbnM6IEhpZ2hsaWdodE9wdGlvbnMpIHtcbiAgICB0aGlzLl9uYXRpdmVFbGVtZW50ID0gZWwubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoXG4gICAgICBjaGFuZ2VzLmNvZGUgJiZcbiAgICAgIGNoYW5nZXMuY29kZS5jdXJyZW50VmFsdWUgJiZcbiAgICAgIGNoYW5nZXMuY29kZS5jdXJyZW50VmFsdWUgIT09IGNoYW5nZXMuY29kZS5wcmV2aW91c1ZhbHVlXG4gICAgKSB7XG4gICAgICB0aGlzLmhpZ2hsaWdodEVsZW1lbnQodGhpcy5jb2RlLCB0aGlzLmxhbmd1YWdlcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhpZ2hsaWdodGluZyB3aXRoIGxhbmd1YWdlIGRldGVjdGlvbiBhbmQgZml4IG1hcmt1cC5cbiAgICogQHBhcmFtIGNvZGUgQWNjZXB0cyBhIHN0cmluZyB3aXRoIHRoZSBjb2RlIHRvIGhpZ2hsaWdodFxuICAgKiBAcGFyYW0gbGFuZ3VhZ2VzIEFuIG9wdGlvbmFsIGFycmF5IG9mIGxhbmd1YWdlIG5hbWVzIGFuZCBhbGlhc2VzIHJlc3RyaWN0aW5nIGRldGVjdGlvbiB0byBvbmx5IHRob3NlIGxhbmd1YWdlcy5cbiAgICogVGhlIHN1YnNldCBjYW4gYWxzbyBiZSBzZXQgd2l0aCBjb25maWd1cmUsIGJ1dCB0aGUgbG9jYWwgcGFyYW1ldGVyIG92ZXJyaWRlcyB0aGUgb3B0aW9uIGlmIHNldC5cbiAgICovXG4gIGhpZ2hsaWdodEVsZW1lbnQoY29kZTogc3RyaW5nLCBsYW5ndWFnZXM/OiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIC8vIFNldCBjb2RlIHRleHQgYmVmb3JlIGhpZ2hsaWdodGluZ1xuICAgIHRoaXMuc2V0Q29kZShjb2RlKTtcbiAgICB0aGlzLl9obGpzLmhpZ2hsaWdodEF1dG8oY29kZSwgbGFuZ3VhZ2VzKS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAvLyBTZXQgaGlnaGxpZ2h0ZWQgY29kZVxuICAgICAgdGhpcy5zZXRDb2RlKHJlcy52YWx1ZSk7XG4gICAgICAvLyBDaGVjayBpZiB1c2VyIHdhbnQgdG8gc2hvdyBsaW5lIG51bWJlcnNcbiAgICAgIGlmICh0aGlzLmxpbmVOdW1iZXJzICYmIHRoaXMuX29wdGlvbnMgJiYgdGhpcy5fb3B0aW9ucy5saW5lTnVtYmVycykge1xuICAgICAgICB0aGlzLmFkZExpbmVOdW1iZXJzKCk7XG4gICAgICB9XG4gICAgICAvLyBGb3J3YXJkIGhpZ2hsaWdodCByZXNwb25zZSB0byB0aGUgaGlnaGxpZ2h0ZWQgb3V0cHV0XG4gICAgICB0aGlzLmhpZ2hsaWdodGVkLmVtaXQocmVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkTGluZU51bWJlcnMoKSB7XG4gICAgLy8gQ2xlYW4gdXAgbGluZSBudW1iZXJzIG9ic2VydmVyXG4gICAgdGhpcy5kZXN0cm95TGluZU51bWJlcnNPYnNlcnZlcigpO1xuICAgIGFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgIC8vIEFkZCBsaW5lIG51bWJlcnNcbiAgICAgIHRoaXMuX2hsanMubGluZU51bWJlcnNCbG9jayh0aGlzLl9uYXRpdmVFbGVtZW50KS5zdWJzY3JpYmUoKTtcbiAgICAgIC8vIElmIGxpbmVzIGNvdW50IGlzIDEsIHRoZSBsaW5lIG51bWJlcnMgbGlicmFyeSB3aWxsIG5vdCBhZGQgbnVtYmVyc1xuICAgICAgLy8gT2JzZXJ2ZSBjaGFuZ2VzIHRvIGFkZCAnaGxqcy1saW5lLW51bWJlcnMnIGNsYXNzIG9ubHkgd2hlbiBsaW5lIG51bWJlcnMgaXMgYWRkZWQgdG8gdGhlIGNvZGUgZWxlbWVudFxuICAgICAgdGhpcy5fbGluZU51bWJlcnNPYnMgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1RBQkxFJykge1xuICAgICAgICAgIHRoaXMuX25hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGxqcy1saW5lLW51bWJlcnMnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlc3Ryb3lMaW5lTnVtYmVyc09ic2VydmVyKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2xpbmVOdW1iZXJzT2JzLm9ic2VydmUodGhpcy5fbmF0aXZlRWxlbWVudCwgeyBjaGlsZExpc3Q6IHRydWUgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGRlc3Ryb3lMaW5lTnVtYmVyc09ic2VydmVyKCkge1xuICAgIGlmICh0aGlzLl9saW5lTnVtYmVyc09icykge1xuICAgICAgdGhpcy5fbGluZU51bWJlcnNPYnMuZGlzY29ubmVjdCgpO1xuICAgICAgdGhpcy5fbGluZU51bWJlcnNPYnMgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0Q29kZShjb250ZW50OiBzdHJpbmcpIHtcbiAgICBhbmltYXRpb25GcmFtZVNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB0aGlzLl9uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnQpO1xuICB9XG59XG5cbiJdfQ==