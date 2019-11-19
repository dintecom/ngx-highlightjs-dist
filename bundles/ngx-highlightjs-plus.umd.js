(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common/http'), require('ngx-highlightjs'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ngx-highlightjs/plus', ['exports', '@angular/core', '@angular/common/http', 'ngx-highlightjs', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global['ngx-highlightjs'] = global['ngx-highlightjs'] || {}, global['ngx-highlightjs'].plus = {}), global.ng.core, global.ng.common.http, global['ngx-highlightjs'], global.rxjs, global.rxjs.operators));
}(this, (function (exports, core, http, ngxHighlightjs, rxjs, operators) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function GistOptions() { }
    if (false) {
        /** @type {?} */
        GistOptions.prototype.clientId;
        /** @type {?} */
        GistOptions.prototype.clientSecret;
    }
    /** @type {?} */
    var GIST_OPTIONS = new core.InjectionToken('GIST_OPTIONS');
    /**
     * @record
     */
    function Owner() { }
    if (false) {
        /** @type {?} */
        Owner.prototype.login;
        /** @type {?} */
        Owner.prototype.id;
        /** @type {?} */
        Owner.prototype.node_id;
        /** @type {?} */
        Owner.prototype.avatar_url;
        /** @type {?} */
        Owner.prototype.gravatar_id;
        /** @type {?} */
        Owner.prototype.url;
        /** @type {?} */
        Owner.prototype.html_url;
        /** @type {?} */
        Owner.prototype.followers_url;
        /** @type {?} */
        Owner.prototype.following_url;
        /** @type {?} */
        Owner.prototype.gists_url;
        /** @type {?} */
        Owner.prototype.starred_url;
        /** @type {?} */
        Owner.prototype.subscriptions_url;
        /** @type {?} */
        Owner.prototype.organizations_url;
        /** @type {?} */
        Owner.prototype.repos_url;
        /** @type {?} */
        Owner.prototype.events_url;
        /** @type {?} */
        Owner.prototype.received_events_url;
        /** @type {?} */
        Owner.prototype.type;
        /** @type {?} */
        Owner.prototype.site_admin;
    }
    /**
     * @record
     */
    function User() { }
    if (false) {
        /** @type {?} */
        User.prototype.login;
        /** @type {?} */
        User.prototype.id;
        /** @type {?} */
        User.prototype.node_id;
        /** @type {?} */
        User.prototype.avatar_url;
        /** @type {?} */
        User.prototype.gravatar_id;
        /** @type {?} */
        User.prototype.url;
        /** @type {?} */
        User.prototype.html_url;
        /** @type {?} */
        User.prototype.followers_url;
        /** @type {?} */
        User.prototype.following_url;
        /** @type {?} */
        User.prototype.gists_url;
        /** @type {?} */
        User.prototype.starred_url;
        /** @type {?} */
        User.prototype.subscriptions_url;
        /** @type {?} */
        User.prototype.organizations_url;
        /** @type {?} */
        User.prototype.repos_url;
        /** @type {?} */
        User.prototype.events_url;
        /** @type {?} */
        User.prototype.received_events_url;
        /** @type {?} */
        User.prototype.type;
        /** @type {?} */
        User.prototype.site_admin;
    }
    /**
     * @record
     */
    function ChangeStatus() { }
    if (false) {
        /** @type {?} */
        ChangeStatus.prototype.total;
        /** @type {?} */
        ChangeStatus.prototype.additions;
        /** @type {?} */
        ChangeStatus.prototype.deletions;
    }
    /**
     * @record
     */
    function History() { }
    if (false) {
        /** @type {?} */
        History.prototype.user;
        /** @type {?} */
        History.prototype.version;
        /** @type {?} */
        History.prototype.committed_at;
        /** @type {?} */
        History.prototype.change_status;
        /** @type {?} */
        History.prototype.url;
    }
    /**
     * @record
     */
    function Files() { }
    /**
     * @record
     */
    function Gist() { }
    if (false) {
        /** @type {?} */
        Gist.prototype.url;
        /** @type {?} */
        Gist.prototype.forks_url;
        /** @type {?} */
        Gist.prototype.commits_url;
        /** @type {?} */
        Gist.prototype.id;
        /** @type {?} */
        Gist.prototype.node_id;
        /** @type {?} */
        Gist.prototype.git_pull_url;
        /** @type {?} */
        Gist.prototype.git_push_url;
        /** @type {?} */
        Gist.prototype.html_url;
        /** @type {?} */
        Gist.prototype.files;
        /** @type {?} */
        Gist.prototype.public;
        /** @type {?} */
        Gist.prototype.created_at;
        /** @type {?} */
        Gist.prototype.updated_at;
        /** @type {?} */
        Gist.prototype.description;
        /** @type {?} */
        Gist.prototype.comments;
        /** @type {?|undefined} */
        Gist.prototype.user;
        /** @type {?} */
        Gist.prototype.comments_url;
        /** @type {?} */
        Gist.prototype.owner;
        /** @type {?} */
        Gist.prototype.forks;
        /** @type {?} */
        Gist.prototype.history;
        /** @type {?} */
        Gist.prototype.truncated;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
                params = new http.HttpParams().set('client_id', this._options.clientId).set('client_secret', this._options.clientSecret);
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
                operators.publishReplay(1), operators.refCount(), operators.catchError((/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) {
                    console.error('[NgxHighlight]: Unable to fetch the URL!', err.message);
                    return rxjs.EMPTY;
                })));
            }
            return rxjs.EMPTY;
        };
        CodeLoader.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        CodeLoader.ctorParameters = function () { return [
            { type: http.HttpClient },
            { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [GIST_OPTIONS,] }] }
        ]; };
        /** @nocollapse */ CodeLoader.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function CodeLoader_Factory() { return new CodeLoader(core.ɵɵinject(http.HttpClient), core.ɵɵinject(GIST_OPTIONS, 8)); }, token: CodeLoader, providedIn: "root" });
        return CodeLoader;
    }());
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GistDirective = /** @class */ (function () {
        function GistDirective(_loader) {
            this._loader = _loader;
            this.gistLoad = new core.EventEmitter();
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
            { type: core.Directive, args: [{
                        selector: '[gist]'
                    },] }
        ];
        /** @nocollapse */
        GistDirective.ctorParameters = function () { return [
            { type: CodeLoader }
        ]; };
        GistDirective.propDecorators = {
            gist: [{ type: core.Input }],
            gistLoad: [{ type: core.Output }]
        };
        return GistDirective;
    }());
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
            { type: core.Pipe, args: [{
                        name: 'gistFile'
                    },] }
        ];
        return GistFilePipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: core.Pipe, args: [{
                        name: 'codeFromUrl'
                    },] }
        ];
        /** @nocollapse */
        CodeFromUrlPipe.ctorParameters = function () { return [
            { type: CodeLoader }
        ]; };
        return CodeFromUrlPipe;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        CodeFromUrlPipe.prototype._loader;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HighlightPlusModule = /** @class */ (function () {
        function HighlightPlusModule() {
        }
        HighlightPlusModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            ngxHighlightjs.HighlightModule,
                            http.HttpClientModule
                        ],
                        declarations: [
                            GistDirective,
                            GistFilePipe,
                            CodeFromUrlPipe
                        ],
                        exports: [
                            ngxHighlightjs.HighlightModule,
                            GistDirective,
                            GistFilePipe,
                            CodeFromUrlPipe
                        ]
                    },] }
        ];
        return HighlightPlusModule;
    }());

    exports.GIST_OPTIONS = GIST_OPTIONS;
    exports.GistDirective = GistDirective;
    exports.GistFilePipe = GistFilePipe;
    exports.HighlightPlusModule = HighlightPlusModule;
    exports.ɵa = CodeLoader;
    exports.ɵb = CodeFromUrlPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-highlightjs-plus.umd.js.map
