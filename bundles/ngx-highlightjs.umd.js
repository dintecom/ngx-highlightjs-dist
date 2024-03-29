(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-highlightjs', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', '@angular/common'], factory) :
    (global = global || self, factory(global['ngx-highlightjs'] = {}, global.ng.core, global.rxjs, global.rxjs.operators, global.ng.common));
}(this, (function (exports, core, rxjs, operators, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

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
    var HIGHLIGHT_OPTIONS = new core.InjectionToken('HIGHLIGHT_OPTIONS');

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
            this._ready = new rxjs.BehaviorSubject(null);
            this.ready = this._ready.asObservable().pipe(operators.filter((/**
             * @param {?} hljs
             * @return {?}
             */
            function (hljs) { return !!hljs; })), operators.take(1));
            // Check if hljs is already available
            if (common.isPlatformBrowser(platformId) && doc.defaultView.hljs) {
                this._ready.next(doc.defaultView.hljs);
            }
            else {
                // Load hljs library
                this._loadLibrary().pipe(operators.switchMap((/**
                 * @param {?} hljs
                 * @return {?}
                 */
                function (hljs) {
                    if (_this._options && _this._options.lineNumbers) {
                        // Make hljs available on window object (required for the line numbers library)
                        doc.defaultView.hljs = hljs;
                        // Load line numbers library
                        return loadLineNumbers().pipe(operators.tap((/**
                         * @return {?}
                         */
                        function () { return _this._ready.next(hljs); })));
                    }
                    else {
                        _this._ready.next(hljs);
                        return rxjs.EMPTY;
                    }
                })), operators.catchError((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) {
                    console.error('Unable to load hljs library', e);
                    return rxjs.EMPTY;
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
                ? rxjs.from(loadCoreLibrary()).pipe(operators.switchMap((/**
                 * @param {?} hljs
                 * @return {?}
                 */
                function (hljs) { return _this._loadLanguages(hljs); })))
                : rxjs.from(loadAllLibrary());
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
                return importModule(langLoader()).pipe(operators.tap((/**
                 * @param {?} langFunc
                 * @return {?}
                 */
                function (langFunc) { return hljs.registerLanguage(langName, langFunc); })));
            }));
            return rxjs.zip.apply(void 0, __spread(languages)).pipe(operators.map((/**
             * @return {?}
             */
            function () { return hljs; })));
        };
        HighlightLoader.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        HighlightLoader.ctorParameters = function () { return [
            { type: undefined, decorators: [{ type: core.Inject, args: [common.DOCUMENT,] }] },
            { type: Object, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [HIGHLIGHT_OPTIONS,] }] }
        ]; };
        /** @nocollapse */ HighlightLoader.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function HighlightLoader_Factory() { return new HighlightLoader(core.ɵɵinject(common.DOCUMENT), core.ɵɵinject(core.PLATFORM_ID), core.ɵɵinject(HIGHLIGHT_OPTIONS, 8)); }, token: HighlightLoader, providedIn: "root" });
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
        return rxjs.from(moduleLoader).pipe(operators.filter((/**
         * @param {?} module
         * @return {?}
         */
        function (module) { return !!module && !!module.default; })), operators.map((/**
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
            return this._loader.ready.pipe(operators.map((/**
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
            return this._loader.ready.pipe(operators.map((/**
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
            return this._loader.ready.pipe(operators.map((/**
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
            return this._loader.ready.pipe(operators.map((/**
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
            return this._loader.ready.pipe(operators.map((/**
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
            return this._loader.ready.pipe(operators.map((/**
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
            return this._loader.ready.pipe(operators.tap((/**
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
            return this._loader.ready.pipe(operators.map((/**
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
            return this._loader.ready.pipe(operators.map((/**
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
            return this._loader.ready.pipe(operators.filter((/**
             * @param {?} hljs
             * @return {?}
             */
            function (hljs) { return !!hljs.lineNumbersBlock; })), operators.tap((/**
             * @param {?} hljs
             * @return {?}
             */
            function (hljs) { return hljs.lineNumbersBlock(el); })));
        };
        HighlightJS.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        HighlightJS.ctorParameters = function () { return [
            { type: HighlightLoader },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [HIGHLIGHT_OPTIONS,] }] }
        ]; };
        /** @nocollapse */ HighlightJS.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function HighlightJS_Factory() { return new HighlightJS(core.ɵɵinject(HighlightLoader), core.ɵɵinject(HIGHLIGHT_OPTIONS, 8)); }, token: HighlightJS, providedIn: "root" });
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
            this.highlighted = new core.EventEmitter();
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
            rxjs.animationFrameScheduler.schedule((/**
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
            rxjs.animationFrameScheduler.schedule((/**
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
            { type: core.Directive, args: [{
                        host: {
                            '[class.hljs]': 'true'
                        },
                        selector: '[highlight]'
                    },] }
        ];
        /** @nocollapse */
        Highlight.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: HighlightJS },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [HIGHLIGHT_OPTIONS,] }] }
        ]; };
        Highlight.propDecorators = {
            code: [{ type: core.Input, args: ['highlight',] }],
            languages: [{ type: core.Input }],
            lineNumbers: [{ type: core.Input }],
            highlighted: [{ type: core.Output }]
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
            { type: core.NgModule, args: [{
                        declarations: [Highlight],
                        exports: [Highlight]
                    },] }
        ];
        return HighlightModule;
    }());

    exports.HIGHLIGHT_OPTIONS = HIGHLIGHT_OPTIONS;
    exports.Highlight = Highlight;
    exports.HighlightJS = HighlightJS;
    exports.HighlightLoader = HighlightLoader;
    exports.HighlightModule = HighlightModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-highlightjs.umd.js.map
