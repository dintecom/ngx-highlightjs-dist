import { InjectionToken, Injectable, Inject, PLATFORM_ID, Optional, ɵɵdefineInjectable, ɵɵinject, EventEmitter, Directive, ElementRef, Input, Output, NgModule } from '@angular/core';
import { BehaviorSubject, from, EMPTY, zip, animationFrameScheduler } from 'rxjs';
import { filter, take, switchMap, map, tap, catchError } from 'rxjs/operators';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function HighlightLibrary() { }
if (false) {
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
    HighlightLibrary.prototype.highlight = function (name, value, ignore_illegals, continuation) { };
    /**
     * Highlighting with language detection.
     * @param {?} value Accepts a string with the code to highlight
     * @param {?} languageSubset An optional array of language names and aliases restricting detection to only those languages.
     * The subset can also be set with configure, but the local parameter overrides the option if set.
     * @return {?}
     */
    HighlightLibrary.prototype.highlightAuto = function (value, languageSubset) { };
    /**
     * Post-processing of the highlighted markup.
     * Currently consists of replacing indentation TAB characters and using <br> tags instead of new-line characters.
     * Options are set globally with configure.
     * @param {?} value Accepts a string with the highlighted markup
     * @return {?}
     */
    HighlightLibrary.prototype.fixMarkup = function (value) { };
    /**
     * Applies highlighting to a DOM node containing code.
     * The function uses language detection by default but you can specify the language in the class attribute of the DOM node.
     * See the class reference for all available language names and aliases.
     * @param {?} block The element to apply highlight on.
     * @return {?}
     */
    HighlightLibrary.prototype.highlightBlock = function (block) { };
    /**
     * Configures global options:
     * @param {?} config HighlightJs configuration argument
     * @return {?}
     */
    HighlightLibrary.prototype.configure = function (config) { };
    /**
     * Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
     * @return {?}
     */
    HighlightLibrary.prototype.initHighlighting = function () { };
    /**
     * Adds new language to the library under the specified name. Used mostly internally.
     * @param {?} name A string with the name of the language being registered
     * @param {?} language A function that returns an object which represents the language definition.
     * The function is passed the hljs object to be able to use common regular expressions defined within it.
     * @return {?}
     */
    HighlightLibrary.prototype.registerLanguage = function (name, language) { };
    /**
     * @return {?} The languages names list.
     */
    HighlightLibrary.prototype.listLanguages = function () { };
    /**
     * Looks up a language by name or alias.
     * @param {?} name Language name
     * @return {?} The language object if found, undefined otherwise.
     */
    HighlightLibrary.prototype.getLanguage = function (name) { };
    /**
     * Add line numbers to code element
     * @param {?} el Code element
     * @return {?}
     */
    HighlightLibrary.prototype.lineNumbersBlock = function (el) { };
}
/**
 * @record
 */
function HighlightConfig() { }
if (false) {
    /**
     * tabReplace: a string used to replace TAB characters in indentation.
     * @type {?|undefined}
     */
    HighlightConfig.prototype.tabReplace;
    /**
     * useBR: a flag to generate <br> tags instead of new-line characters in the output, useful when code is marked up using a non-<pre> container.
     * @type {?|undefined}
     */
    HighlightConfig.prototype.useBR;
    /**
     * classPrefix: a string prefix added before class names in the generated markup, used for backwards compatibility with stylesheets.
     * @type {?|undefined}
     */
    HighlightConfig.prototype.classPrefix;
    /**
     * languages: an array of language names and aliases restricting auto detection to only these languages.
     * @type {?|undefined}
     */
    HighlightConfig.prototype.languages;
}
/**
 * @record
 */
function HighlightResult() { }
if (false) {
    /** @type {?|undefined} */
    HighlightResult.prototype.language;
    /** @type {?|undefined} */
    HighlightResult.prototype.second_best;
    /** @type {?|undefined} */
    HighlightResult.prototype.top;
    /** @type {?|undefined} */
    HighlightResult.prototype.value;
    /** @type {?|undefined} */
    HighlightResult.prototype.relevance;
}
/**
 * @record
 */
function HighlightOptions() { }
if (false) {
    /** @type {?|undefined} */
    HighlightOptions.prototype.config;
    /** @type {?|undefined} */
    HighlightOptions.prototype.languages;
    /** @type {?|undefined} */
    HighlightOptions.prototype.lineNumbers;
}
/** @type {?} */
const HIGHLIGHT_OPTIONS = new InjectionToken('HIGHLIGHT_OPTIONS');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @dynamic
class HighlightLoader {
    /**
     * @param {?} doc
     * @param {?} platformId
     * @param {?} _options
     */
    constructor(doc, platformId, _options) {
        this._options = _options;
        // Stream that emits when hljs library is loaded and ready to use
        this._ready = new BehaviorSubject(null);
        this.ready = this._ready.asObservable().pipe(filter((/**
         * @param {?} hljs
         * @return {?}
         */
        (hljs) => !!hljs)), take(1));
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
            (hljs) => {
                if (this._options && this._options.lineNumbers) {
                    // Make hljs available on window object (required for the line numbers library)
                    doc.defaultView.hljs = hljs;
                    // Load line numbers library
                    return loadLineNumbers().pipe(tap((/**
                     * @return {?}
                     */
                    () => this._ready.next(hljs))));
                }
                else {
                    this._ready.next(hljs);
                    return EMPTY;
                }
            })), catchError((/**
             * @param {?} e
             * @return {?}
             */
            (e) => {
                console.error('Unable to load hljs library', e);
                return EMPTY;
            }))).subscribe();
        }
    }
    /**
     * Lazy-Load highlight.js library
     * @private
     * @return {?}
     */
    _loadLibrary() {
        return (this._options && this._options.languages && Object.keys(this._options.languages).length)
            ? from(loadCoreLibrary()).pipe(switchMap((/**
             * @param {?} hljs
             * @return {?}
             */
            (hljs) => this._loadLanguages(hljs))))
            : from(loadAllLibrary());
    }
    /**
     * Lazy-load highlight.js languages
     * @private
     * @param {?} hljs
     * @return {?}
     */
    _loadLanguages(hljs) {
        /** @type {?} */
        const languages = Object.entries(this._options.languages).map((/**
         * @param {?} __0
         * @return {?}
         */
        ([langName, langLoader]) => importModule(langLoader()).pipe(tap((/**
         * @param {?} langFunc
         * @return {?}
         */
        (langFunc) => hljs.registerLanguage(langName, langFunc))))));
        return zip(...languages).pipe(map((/**
         * @return {?}
         */
        () => hljs)));
    }
}
HighlightLoader.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
HighlightLoader.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [HIGHLIGHT_OPTIONS,] }] }
];
/** @nocollapse */ HighlightLoader.ngInjectableDef = ɵɵdefineInjectable({ factory: function HighlightLoader_Factory() { return new HighlightLoader(ɵɵinject(DOCUMENT), ɵɵinject(PLATFORM_ID), ɵɵinject(HIGHLIGHT_OPTIONS, 8)); }, token: HighlightLoader, providedIn: "root" });
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
const importModule = (/**
 * @param {?} moduleLoader
 * @return {?}
 */
(moduleLoader) => {
    return from(moduleLoader).pipe(filter((/**
     * @param {?} module
     * @return {?}
     */
    (module) => !!module && !!module.default)), map((/**
     * @param {?} module
     * @return {?}
     */
    (module) => module.default)));
});
const ɵ0 = importModule;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HighlightJS {
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
/** @nocollapse */ HighlightJS.ngInjectableDef = ɵɵdefineInjectable({ factory: function HighlightJS_Factory() { return new HighlightJS(ɵɵinject(HighlightLoader), ɵɵinject(HIGHLIGHT_OPTIONS, 8)); }, token: HighlightJS, providedIn: "root" });
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Highlight {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HighlightModule {
}
HighlightModule.decorators = [
    { type: NgModule, args: [{
                declarations: [Highlight],
                exports: [Highlight]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { HIGHLIGHT_OPTIONS, Highlight, HighlightJS, HighlightLoader, HighlightModule };
//# sourceMappingURL=ngx-highlightjs.js.map
