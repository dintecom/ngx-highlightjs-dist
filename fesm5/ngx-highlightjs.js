import { InjectionToken, Injectable, Inject, PLATFORM_ID, Optional, ɵɵdefineInjectable, ɵɵinject, EventEmitter, Directive, ElementRef, Input, Output, NgModule } from '@angular/core';
import { BehaviorSubject, from, EMPTY, zip, animationFrameScheduler } from 'rxjs';
import { filter, take, switchMap, map, tap, catchError } from 'rxjs/operators';
import { __read, __spread } from 'tslib';
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
var HIGHLIGHT_OPTIONS = new InjectionToken('HIGHLIGHT_OPTIONS');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            var _b = __read(_a, 2), langName = _b[0], langLoader = _b[1];
            return importModule(langLoader()).pipe(tap((/**
             * @param {?} langFunc
             * @return {?}
             */
            function (langFunc) { return hljs.registerLanguage(langName, langFunc); })));
        }));
        return zip.apply(void 0, __spread(languages)).pipe(map((/**
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
    /** @nocollapse */ HighlightLoader.ngInjectableDef = ɵɵdefineInjectable({ factory: function HighlightLoader_Factory() { return new HighlightLoader(ɵɵinject(DOCUMENT), ɵɵinject(PLATFORM_ID), ɵɵinject(HIGHLIGHT_OPTIONS, 8)); }, token: HighlightLoader, providedIn: "root" });
    return HighlightLoader;
}());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /** @nocollapse */ HighlightJS.ngInjectableDef = ɵɵdefineInjectable({ factory: function HighlightJS_Factory() { return new HighlightJS(ɵɵinject(HighlightLoader), ɵɵinject(HIGHLIGHT_OPTIONS, 8)); }, token: HighlightJS, providedIn: "root" });
    return HighlightJS;
}());
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
        this.setCode(this.escapeHtml(code));
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
    /**
     * @private
     * @param {?} content
     * @return {?}
     */
    Highlight.prototype.escapeHtml = /**
     * @private
     * @param {?} content
     * @return {?}
     */
    function (content) {
        /** @type {?} */
        var entityMap = {
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
        function (s) { return entityMap[s]; }));
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
var HighlightModule = /** @class */ (function () {
    function HighlightModule() {
    }
    HighlightModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [Highlight],
                    exports: [Highlight]
                },] }
    ];
    return HighlightModule;
}());

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
