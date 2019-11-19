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
        this.setCode(this.escapeHtml(code));
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
    /**
     * @private
     * @param {?} content
     * @return {?}
     */
    escapeHtml(content) {
        /** @type {?} */
        const entityMap = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
            '/': '&#x2F;',
            '`': '&#x60;',
            '=': '&#x3D;'
        };
        return String(content).replace(/[&<>"'`=\/]/g, (/**
         * @param {?} s
         * @return {?}
         */
        s => entityMap[s]));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWhpZ2hsaWdodGpzLyIsInNvdXJjZXMiOlsibGliL2hpZ2hsaWdodC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLE1BQU0sRUFDTixRQUFRLEVBR1IsWUFBWSxFQUNaLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxpQkFBaUIsRUFBcUMsTUFBTSxtQkFBbUIsQ0FBQztBQVF6RixNQUFNLE9BQU8sU0FBUzs7Ozs7O0lBcUJwQixZQUFZLEVBQWMsRUFDTixLQUFrQixFQUNxQixRQUEwQjtRQURqRSxVQUFLLEdBQUwsS0FBSyxDQUFhO1FBQ3FCLGFBQVEsR0FBUixRQUFRLENBQWtCOztRQUozRSxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFtQixDQUFDO1FBSzFELElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUNFLE9BQU8sQ0FBQyxJQUFJO1lBQ1osT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZO1lBQ3pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxLQUFLLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUN4RDtZQUNBLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNsRDtJQUNILENBQUM7Ozs7Ozs7O0lBUUQsZ0JBQWdCLENBQUMsSUFBWSxFQUFFLFNBQW9CO1FBQ2pELG9DQUFvQztRQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FB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QkFHTCxNQUFNOzs7Ozs7O0lBaEJQLG1DQUE2Qzs7Ozs7SUFHN0Msb0NBQTZCOztJQUc3Qix5QkFBa0M7O0lBSWxDLDhCQUE4Qjs7SUFHOUIsZ0NBQStCOztJQUcvQixnQ0FBNEQ7Ozs7O0lBR2hELDBCQUEwQjs7Ozs7SUFDMUIsNkJBQXlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBJbmplY3QsXG4gIE9wdGlvbmFsLFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIEV2ZW50RW1pdHRlcixcbiAgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBIaWdobGlnaHRKUyB9IGZyb20gJy4vaGlnaGxpZ2h0LnNlcnZpY2UnO1xuaW1wb3J0IHsgSElHSExJR0hUX09QVElPTlMsIEhpZ2hsaWdodE9wdGlvbnMsIEhpZ2hsaWdodFJlc3VsdCB9IGZyb20gJy4vaGlnaGxpZ2h0Lm1vZGVsJztcblxuQERpcmVjdGl2ZSh7XG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmhsanNdJzogJ3RydWUnXG4gIH0sXG4gIHNlbGVjdG9yOiAnW2hpZ2hsaWdodF0nXG59KVxuZXhwb3J0IGNsYXNzIEhpZ2hsaWdodCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgLy8gSGlnaGxpZ2h0ZWQgQ29kZVxuICBwcml2YXRlIHJlYWRvbmx5IF9uYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudDtcblxuICAvLyBUZW1wIG9ic2VydmVyIHRvIG9ic2VydmUgd2hlbiBsaW5lIG51bWJlcnMgaGFzIGJlZW4gYWRkZWQgdG8gY29kZSBlbGVtZW50XG4gIHByaXZhdGUgX2xpbmVOdW1iZXJzT2JzOiBhbnk7XG5cbiAgLy8gSGlnaGxpZ2h0IGNvZGUgaW5wdXRcbiAgQElucHV0KCdoaWdobGlnaHQnKSBjb2RlITogc3RyaW5nO1xuXG4gIC8vIEFuIG9wdGlvbmFsIGFycmF5IG9mIGxhbmd1YWdlIG5hbWVzIGFuZCBhbGlhc2VzIHJlc3RyaWN0aW5nIGRldGVjdGlvbiB0byBvbmx5IHRob3NlIGxhbmd1YWdlcy5cbiAgLy8gVGhlIHN1YnNldCBjYW4gYWxzbyBiZSBzZXQgd2l0aCBjb25maWd1cmUsIGJ1dCB0aGUgbG9jYWwgcGFyYW1ldGVyIG92ZXJyaWRlcyB0aGUgb3B0aW9uIGlmIHNldC5cbiAgQElucHV0KCkgbGFuZ3VhZ2VzITogc3RyaW5nW107XG5cbiAgLy8gU2hvdyBsaW5lIG51bWJlcnNcbiAgQElucHV0KCkgbGluZU51bWJlcnMhOiBib29sZWFuO1xuXG4gIC8vIFN0cmVhbSB0aGF0IGVtaXRzIHdoZW4gY29kZSBzdHJpbmcgaXMgaGlnaGxpZ2h0ZWRcbiAgQE91dHB1dCgpIGhpZ2hsaWdodGVkID0gbmV3IEV2ZW50RW1pdHRlcjxIaWdobGlnaHRSZXN1bHQ+KCk7XG5cbiAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2hsanM6IEhpZ2hsaWdodEpTLFxuICAgICAgICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEhJR0hMSUdIVF9PUFRJT05TKSBwcml2YXRlIF9vcHRpb25zOiBIaWdobGlnaHRPcHRpb25zKSB7XG4gICAgdGhpcy5fbmF0aXZlRWxlbWVudCA9IGVsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgaWYgKFxuICAgICAgY2hhbmdlcy5jb2RlICYmXG4gICAgICBjaGFuZ2VzLmNvZGUuY3VycmVudFZhbHVlICYmXG4gICAgICBjaGFuZ2VzLmNvZGUuY3VycmVudFZhbHVlICE9PSBjaGFuZ2VzLmNvZGUucHJldmlvdXNWYWx1ZVxuICAgICkge1xuICAgICAgdGhpcy5oaWdobGlnaHRFbGVtZW50KHRoaXMuY29kZSwgdGhpcy5sYW5ndWFnZXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIaWdobGlnaHRpbmcgd2l0aCBsYW5ndWFnZSBkZXRlY3Rpb24gYW5kIGZpeCBtYXJrdXAuXG4gICAqIEBwYXJhbSBjb2RlIEFjY2VwdHMgYSBzdHJpbmcgd2l0aCB0aGUgY29kZSB0byBoaWdobGlnaHRcbiAgICogQHBhcmFtIGxhbmd1YWdlcyBBbiBvcHRpb25hbCBhcnJheSBvZiBsYW5ndWFnZSBuYW1lcyBhbmQgYWxpYXNlcyByZXN0cmljdGluZyBkZXRlY3Rpb24gdG8gb25seSB0aG9zZSBsYW5ndWFnZXMuXG4gICAqIFRoZSBzdWJzZXQgY2FuIGFsc28gYmUgc2V0IHdpdGggY29uZmlndXJlLCBidXQgdGhlIGxvY2FsIHBhcmFtZXRlciBvdmVycmlkZXMgdGhlIG9wdGlvbiBpZiBzZXQuXG4gICAqL1xuICBoaWdobGlnaHRFbGVtZW50KGNvZGU6IHN0cmluZywgbGFuZ3VhZ2VzPzogc3RyaW5nW10pOiB2b2lkIHtcbiAgICAvLyBTZXQgY29kZSB0ZXh0IGJlZm9yZSBoaWdobGlnaHRpbmdcbiAgICB0aGlzLnNldENvZGUodGhpcy5lc2NhcGVIdG1sKGNvZGUpKTtcbiAgICB0aGlzLl9obGpzLmhpZ2hsaWdodEF1dG8oY29kZSwgbGFuZ3VhZ2VzKS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XG4gICAgICAvLyBTZXQgaGlnaGxpZ2h0ZWQgY29kZVxuICAgICAgdGhpcy5zZXRDb2RlKHJlcy52YWx1ZSk7XG4gICAgICAvLyBDaGVjayBpZiB1c2VyIHdhbnQgdG8gc2hvdyBsaW5lIG51bWJlcnNcbiAgICAgIGlmICh0aGlzLmxpbmVOdW1iZXJzICYmIHRoaXMuX29wdGlvbnMgJiYgdGhpcy5fb3B0aW9ucy5saW5lTnVtYmVycykge1xuICAgICAgICB0aGlzLmFkZExpbmVOdW1iZXJzKCk7XG4gICAgICB9XG4gICAgICAvLyBGb3J3YXJkIGhpZ2hsaWdodCByZXNwb25zZSB0byB0aGUgaGlnaGxpZ2h0ZWQgb3V0cHV0XG4gICAgICB0aGlzLmhpZ2hsaWdodGVkLmVtaXQocmVzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkTGluZU51bWJlcnMoKSB7XG4gICAgLy8gQ2xlYW4gdXAgbGluZSBudW1iZXJzIG9ic2VydmVyXG4gICAgdGhpcy5kZXN0cm95TGluZU51bWJlcnNPYnNlcnZlcigpO1xuICAgIGFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyLnNjaGVkdWxlKCgpID0+IHtcbiAgICAgIC8vIEFkZCBsaW5lIG51bWJlcnNcbiAgICAgIHRoaXMuX2hsanMubGluZU51bWJlcnNCbG9jayh0aGlzLl9uYXRpdmVFbGVtZW50KS5zdWJzY3JpYmUoKTtcbiAgICAgIC8vIElmIGxpbmVzIGNvdW50IGlzIDEsIHRoZSBsaW5lIG51bWJlcnMgbGlicmFyeSB3aWxsIG5vdCBhZGQgbnVtYmVyc1xuICAgICAgLy8gT2JzZXJ2ZSBjaGFuZ2VzIHRvIGFkZCAnaGxqcy1saW5lLW51bWJlcnMnIGNsYXNzIG9ubHkgd2hlbiBsaW5lIG51bWJlcnMgaXMgYWRkZWQgdG8gdGhlIGNvZGUgZWxlbWVudFxuICAgICAgdGhpcy5fbGluZU51bWJlcnNPYnMgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLl9uYXRpdmVFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkLnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1RBQkxFJykge1xuICAgICAgICAgIHRoaXMuX25hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGxqcy1saW5lLW51bWJlcnMnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlc3Ryb3lMaW5lTnVtYmVyc09ic2VydmVyKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2xpbmVOdW1iZXJzT2JzLm9ic2VydmUodGhpcy5fbmF0aXZlRWxlbWVudCwgeyBjaGlsZExpc3Q6IHRydWUgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGRlc3Ryb3lMaW5lTnVtYmVyc09ic2VydmVyKCkge1xuICAgIGlmICh0aGlzLl9saW5lTnVtYmVyc09icykge1xuICAgICAgdGhpcy5fbGluZU51bWJlcnNPYnMuZGlzY29ubmVjdCgpO1xuICAgICAgdGhpcy5fbGluZU51bWJlcnNPYnMgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0Q29kZShjb250ZW50OiBzdHJpbmcpIHtcbiAgICBhbmltYXRpb25GcmFtZVNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB0aGlzLl9uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBlc2NhcGVIdG1sKGNvbnRlbnQ6IHN0cmluZykge1xuICAgIGNvbnN0IGVudGl0eU1hcCA9IHtcbiAgICAgICcmJzogJyZhbXA7JyxcbiAgICAgICc8JzogJyZsdDsnLFxuICAgICAgJz4nOiAnJmd0OycsXG4gICAgICAnXCInOiAnJnF1b3Q7JyxcbiAgICAgIFwiJ1wiOiAnJiMzOTsnLFxuICAgICAgJy8nOiAnJiN4MkY7JyxcbiAgICAgICdgJzogJyYjeDYwOycsXG4gICAgICAnPSc6ICcmI3gzRDsnXG4gICAgfTtcbiAgICByZXR1cm4gU3RyaW5nKGNvbnRlbnQpLnJlcGxhY2UoL1smPD5cIidgPVxcL10vZywgcyA9PiBlbnRpdHlNYXBbc10pO1xuICB9XG59XG4iXX0=