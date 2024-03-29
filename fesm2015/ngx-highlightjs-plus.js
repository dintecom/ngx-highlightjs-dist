import { InjectionToken, Injectable, Optional, Inject, ɵɵdefineInjectable, ɵɵinject, EventEmitter, Directive, Input, Output, Pipe, NgModule } from '@angular/core';
import { HttpParams, HttpClient, HttpClientModule } from '@angular/common/http';
import { HighlightModule } from 'ngx-highlightjs';
import { EMPTY } from 'rxjs';
import { publishReplay, refCount, catchError } from 'rxjs/operators';

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
const GIST_OPTIONS = new InjectionToken('GIST_OPTIONS');
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
class CodeLoader {
    /**
     * @param {?} _http
     * @param {?} _options
     */
    constructor(_http, _options) {
        this._http = _http;
        this._options = _options;
    }
    /**
     * Get plus code
     * @param {?} id Gist ID
     * @return {?}
     */
    getCodeFromGist(id) {
        /** @type {?} */
        let params;
        if (this.isOAuthProvided()) {
            params = new HttpParams().set('client_id', this._options.clientId).set('client_secret', this._options.clientSecret);
        }
        return this.fetchFile(`https://api.github.com/gists/${id}`, { params, responseType: 'json' });
    }
    /**
     * Get code by URL
     * @param {?} url File raw link
     * @return {?}
     */
    getCodeFromUrl(url) {
        return this.fetchFile(url, { responseType: 'text' });
    }
    /**
     * Check if OAuth option is provided
     * @private
     * @return {?}
     */
    isOAuthProvided() {
        return !!this._options && !!this._options.clientId && !!this._options.clientSecret;
    }
    /**
     * @private
     * @param {?} url
     * @param {?} options
     * @return {?}
     */
    fetchFile(url, options) {
        // Check if URL is valid
        if (isUrl(url)) {
            return this._http.get(url, options).pipe(
            // Catch response
            publishReplay(1), refCount(), catchError((/**
             * @param {?} err
             * @return {?}
             */
            (err) => {
                console.error('[NgxHighlight]: Unable to fetch the URL!', err.message);
                return EMPTY;
            })));
        }
        return EMPTY;
    }
}
CodeLoader.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
CodeLoader.ctorParameters = () => [
    { type: HttpClient },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [GIST_OPTIONS,] }] }
];
/** @nocollapse */ CodeLoader.ngInjectableDef = ɵɵdefineInjectable({ factory: function CodeLoader_Factory() { return new CodeLoader(ɵɵinject(HttpClient), ɵɵinject(GIST_OPTIONS, 8)); }, token: CodeLoader, providedIn: "root" });
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
    const regExp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regExp.test(url);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GistDirective {
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
class GistFilePipe {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CodeFromUrlPipe {
    /**
     * @param {?} _loader
     */
    constructor(_loader) {
        this._loader = _loader;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    transform(url) {
        return this._loader.getCodeFromUrl(url);
    }
}
CodeFromUrlPipe.decorators = [
    { type: Pipe, args: [{
                name: 'codeFromUrl'
            },] }
];
/** @nocollapse */
CodeFromUrlPipe.ctorParameters = () => [
    { type: CodeLoader }
];
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
class HighlightPlusModule {
}
HighlightPlusModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    HighlightModule,
                    HttpClientModule
                ],
                declarations: [
                    GistDirective,
                    GistFilePipe,
                    CodeFromUrlPipe
                ],
                exports: [
                    HighlightModule,
                    GistDirective,
                    GistFilePipe,
                    CodeFromUrlPipe
                ]
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

export { GIST_OPTIONS, GistDirective, GistFilePipe, HighlightPlusModule, CodeLoader as ɵa, CodeFromUrlPipe as ɵb };
//# sourceMappingURL=ngx-highlightjs-plus.js.map
