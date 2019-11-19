/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
/**
 * @record
 */
export function HighlightLibrary() { }
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
export function HighlightConfig() { }
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
export function HighlightResult() { }
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
export function HighlightOptions() { }
if (false) {
    /** @type {?|undefined} */
    HighlightOptions.prototype.config;
    /** @type {?|undefined} */
    HighlightOptions.prototype.languages;
    /** @type {?|undefined} */
    HighlightOptions.prototype.lineNumbers;
}
/** @type {?} */
export const HIGHLIGHT_OPTIONS = new InjectionToken('HIGHLIGHT_OPTIONS');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlnaGxpZ2h0Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWhpZ2hsaWdodGpzLyIsInNvdXJjZXMiOlsibGliL2hpZ2hsaWdodC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUUvQyxzQ0F5RUM7Ozs7Ozs7Ozs7OztJQTlEQyxpR0FBc0c7Ozs7Ozs7O0lBUXRHLGdGQUF3RTs7Ozs7Ozs7SUFReEUsNERBQWlDOzs7Ozs7OztJQVFqQyxpRUFBeUM7Ozs7OztJQU16Qyw2REFBeUM7Ozs7O0lBS3pDLDhEQUF5Qjs7Ozs7Ozs7SUFRekIsNEVBQTBEOzs7O0lBSzFELDJEQUEwQjs7Ozs7O0lBTzFCLDZEQUErQjs7Ozs7O0lBTS9CLGdFQUFvQzs7Ozs7QUFHdEMscUNBU0M7Ozs7OztJQVBDLHFDQUFvQjs7Ozs7SUFFcEIsZ0NBQWdCOzs7OztJQUVoQixzQ0FBcUI7Ozs7O0lBRXJCLG9DQUFxQjs7Ozs7QUFHdkIscUNBTUM7OztJQUxDLG1DQUFrQjs7SUFDbEIsc0NBQWtCOztJQUNsQiw4QkFBVTs7SUFDVixnQ0FBZTs7SUFDZixvQ0FBbUI7Ozs7O0FBR3JCLHNDQUlDOzs7SUFIQyxrQ0FBeUI7O0lBQ3pCLHFDQUFtRDs7SUFDbkQsdUNBQXNCOzs7QUFHeEIsTUFBTSxPQUFPLGlCQUFpQixHQUFHLElBQUksY0FBYyxDQUFtQixtQkFBbUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGlnaGxpZ2h0TGlicmFyeSB7XG5cbiAgLyoqXG4gICAqIENvcmUgaGlnaGxpZ2h0aW5nIGZ1bmN0aW9uLlxuICAgKiBAcGFyYW0gbmFtZSBBY2NlcHRzIGEgbGFuZ3VhZ2UgbmFtZSwgb3IgYW4gYWxpYXNcbiAgICogQHBhcmFtIHZhbHVlIEEgc3RyaW5nIHdpdGggdGhlIGNvZGUgdG8gaGlnaGxpZ2h0LlxuICAgKiBAcGFyYW0gaWdub3JlX2lsbGVnYWxzIFdoZW4gcHJlc2VudCBhbmQgZXZhbHVhdGVzIHRvIGEgdHJ1ZSB2YWx1ZSwgZm9yY2VzIGhpZ2hsaWdodGluZyB0byBmaW5pc2hcbiAgICogZXZlbiBpbiBjYXNlIG9mIGRldGVjdGluZyBpbGxlZ2FsIHN5bnRheCBmb3IgdGhlIGxhbmd1YWdlIGluc3RlYWQgb2YgdGhyb3dpbmcgYW4gZXhjZXB0aW9uLlxuICAgKiBAcGFyYW0gY29udGludWF0aW9uIEFuIG9wdGlvbmFsIG1vZGUgc3RhY2sgcmVwcmVzZW50aW5nIHVuZmluaXNoZWQgcGFyc2luZy5cbiAgICogV2hlbiBwcmVzZW50LCB0aGUgZnVuY3Rpb24gd2lsbCByZXN0YXJ0IHBhcnNpbmcgZnJvbSB0aGlzIHN0YXRlIGluc3RlYWQgb2YgaW5pdGlhbGl6aW5nIGEgbmV3IG9uZVxuICAgKi9cbiAgaGlnaGxpZ2h0KG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgaWdub3JlX2lsbGVnYWxzOiBib29sZWFuLCBjb250aW51YXRpb24/OiBhbnkpOiBIaWdobGlnaHRSZXN1bHQ7XG5cbiAgLyoqXG4gICAqIEhpZ2hsaWdodGluZyB3aXRoIGxhbmd1YWdlIGRldGVjdGlvbi5cbiAgICogQHBhcmFtIHZhbHVlIEFjY2VwdHMgYSBzdHJpbmcgd2l0aCB0aGUgY29kZSB0byBoaWdobGlnaHRcbiAgICogQHBhcmFtIGxhbmd1YWdlU3Vic2V0IEFuIG9wdGlvbmFsIGFycmF5IG9mIGxhbmd1YWdlIG5hbWVzIGFuZCBhbGlhc2VzIHJlc3RyaWN0aW5nIGRldGVjdGlvbiB0byBvbmx5IHRob3NlIGxhbmd1YWdlcy5cbiAgICogVGhlIHN1YnNldCBjYW4gYWxzbyBiZSBzZXQgd2l0aCBjb25maWd1cmUsIGJ1dCB0aGUgbG9jYWwgcGFyYW1ldGVyIG92ZXJyaWRlcyB0aGUgb3B0aW9uIGlmIHNldC5cbiAgICovXG4gIGhpZ2hsaWdodEF1dG8odmFsdWU6IHN0cmluZywgbGFuZ3VhZ2VTdWJzZXQ6IHN0cmluZ1tdKTogSGlnaGxpZ2h0UmVzdWx0O1xuXG4gIC8qKlxuICAgKiBQb3N0LXByb2Nlc3Npbmcgb2YgdGhlIGhpZ2hsaWdodGVkIG1hcmt1cC5cbiAgICogQ3VycmVudGx5IGNvbnNpc3RzIG9mIHJlcGxhY2luZyBpbmRlbnRhdGlvbiBUQUIgY2hhcmFjdGVycyBhbmQgdXNpbmcgPGJyPiB0YWdzIGluc3RlYWQgb2YgbmV3LWxpbmUgY2hhcmFjdGVycy5cbiAgICogT3B0aW9ucyBhcmUgc2V0IGdsb2JhbGx5IHdpdGggY29uZmlndXJlLlxuICAgKiBAcGFyYW0gdmFsdWUgQWNjZXB0cyBhIHN0cmluZyB3aXRoIHRoZSBoaWdobGlnaHRlZCBtYXJrdXBcbiAgICovXG4gIGZpeE1hcmt1cCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBcHBsaWVzIGhpZ2hsaWdodGluZyB0byBhIERPTSBub2RlIGNvbnRhaW5pbmcgY29kZS5cbiAgICogVGhlIGZ1bmN0aW9uIHVzZXMgbGFuZ3VhZ2UgZGV0ZWN0aW9uIGJ5IGRlZmF1bHQgYnV0IHlvdSBjYW4gc3BlY2lmeSB0aGUgbGFuZ3VhZ2UgaW4gdGhlIGNsYXNzIGF0dHJpYnV0ZSBvZiB0aGUgRE9NIG5vZGUuXG4gICAqIFNlZSB0aGUgY2xhc3MgcmVmZXJlbmNlIGZvciBhbGwgYXZhaWxhYmxlIGxhbmd1YWdlIG5hbWVzIGFuZCBhbGlhc2VzLlxuICAgKiBAcGFyYW0gYmxvY2sgVGhlIGVsZW1lbnQgdG8gYXBwbHkgaGlnaGxpZ2h0IG9uLlxuICAgKi9cbiAgaGlnaGxpZ2h0QmxvY2soYmxvY2s6IEhUTUxFbGVtZW50KTogdm9pZDtcblxuICAvKipcbiAgICogQ29uZmlndXJlcyBnbG9iYWwgb3B0aW9uczpcbiAgICogQHBhcmFtIGNvbmZpZyBIaWdobGlnaHRKcyBjb25maWd1cmF0aW9uIGFyZ3VtZW50XG4gICAqL1xuICBjb25maWd1cmUoY29uZmlnOiBIaWdobGlnaHRDb25maWcpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBBcHBsaWVzIGhpZ2hsaWdodGluZyB0byBhbGwgPHByZT48Y29kZT4uLjwvY29kZT48L3ByZT4gYmxvY2tzIG9uIGEgcGFnZS5cbiAgICovXG4gIGluaXRIaWdobGlnaHRpbmcoKTogdm9pZDtcblxuICAvKipcbiAgICogQWRkcyBuZXcgbGFuZ3VhZ2UgdG8gdGhlIGxpYnJhcnkgdW5kZXIgdGhlIHNwZWNpZmllZCBuYW1lLiBVc2VkIG1vc3RseSBpbnRlcm5hbGx5LlxuICAgKiBAcGFyYW0gbmFtZSBBIHN0cmluZyB3aXRoIHRoZSBuYW1lIG9mIHRoZSBsYW5ndWFnZSBiZWluZyByZWdpc3RlcmVkXG4gICAqIEBwYXJhbSBsYW5ndWFnZSBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBvYmplY3Qgd2hpY2ggcmVwcmVzZW50cyB0aGUgbGFuZ3VhZ2UgZGVmaW5pdGlvbi5cbiAgICogVGhlIGZ1bmN0aW9uIGlzIHBhc3NlZCB0aGUgaGxqcyBvYmplY3QgdG8gYmUgYWJsZSB0byB1c2UgY29tbW9uIHJlZ3VsYXIgZXhwcmVzc2lvbnMgZGVmaW5lZCB3aXRoaW4gaXQuXG4gICAqL1xuICByZWdpc3Rlckxhbmd1YWdlKG5hbWU6IHN0cmluZywgbGFuZ3VhZ2U6ICgpID0+IGFueSk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIEByZXR1cm4gVGhlIGxhbmd1YWdlcyBuYW1lcyBsaXN0LlxuICAgKi9cbiAgbGlzdExhbmd1YWdlcygpOiBzdHJpbmdbXTtcblxuICAvKipcbiAgICogTG9va3MgdXAgYSBsYW5ndWFnZSBieSBuYW1lIG9yIGFsaWFzLlxuICAgKiBAcGFyYW0gbmFtZSBMYW5ndWFnZSBuYW1lXG4gICAqIEByZXR1cm4gVGhlIGxhbmd1YWdlIG9iamVjdCBpZiBmb3VuZCwgdW5kZWZpbmVkIG90aGVyd2lzZS5cbiAgICovXG4gIGdldExhbmd1YWdlKG5hbWU6IHN0cmluZyk6IGFueTtcblxuICAvKipcbiAgICogQWRkIGxpbmUgbnVtYmVycyB0byBjb2RlIGVsZW1lbnRcbiAgICogQHBhcmFtIGVsIENvZGUgZWxlbWVudFxuICAgKi9cbiAgbGluZU51bWJlcnNCbG9jayhlbDogRWxlbWVudCk6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGlnaGxpZ2h0Q29uZmlnIHtcbiAgLyoqIHRhYlJlcGxhY2U6IGEgc3RyaW5nIHVzZWQgdG8gcmVwbGFjZSBUQUIgY2hhcmFjdGVycyBpbiBpbmRlbnRhdGlvbi4gKi9cbiAgdGFiUmVwbGFjZT86IHN0cmluZztcbiAgLyoqIHVzZUJSOiBhIGZsYWcgdG8gZ2VuZXJhdGUgPGJyPiB0YWdzIGluc3RlYWQgb2YgbmV3LWxpbmUgY2hhcmFjdGVycyBpbiB0aGUgb3V0cHV0LCB1c2VmdWwgd2hlbiBjb2RlIGlzIG1hcmtlZCB1cCB1c2luZyBhIG5vbi08cHJlPiBjb250YWluZXIuICovXG4gIHVzZUJSPzogYm9vbGVhbjtcbiAgLyoqIGNsYXNzUHJlZml4OiBhIHN0cmluZyBwcmVmaXggYWRkZWQgYmVmb3JlIGNsYXNzIG5hbWVzIGluIHRoZSBnZW5lcmF0ZWQgbWFya3VwLCB1c2VkIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSB3aXRoIHN0eWxlc2hlZXRzLiAqL1xuICBjbGFzc1ByZWZpeD86IHN0cmluZztcbiAgLyoqIGxhbmd1YWdlczogYW4gYXJyYXkgb2YgbGFuZ3VhZ2UgbmFtZXMgYW5kIGFsaWFzZXMgcmVzdHJpY3RpbmcgYXV0byBkZXRlY3Rpb24gdG8gb25seSB0aGVzZSBsYW5ndWFnZXMuICovXG4gIGxhbmd1YWdlcz86IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhpZ2hsaWdodFJlc3VsdCB7XG4gIGxhbmd1YWdlPzogc3RyaW5nO1xuICBzZWNvbmRfYmVzdD86IGFueTtcbiAgdG9wPzogYW55O1xuICB2YWx1ZT86IHN0cmluZztcbiAgcmVsZXZhbmNlPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEhpZ2hsaWdodE9wdGlvbnMge1xuICBjb25maWc/OiBIaWdobGlnaHRDb25maWc7XG4gIGxhbmd1YWdlcz86IHsgW25hbWU6IHN0cmluZ106ICgpID0+IFByb21pc2U8YW55PiB9O1xuICBsaW5lTnVtYmVycz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBISUdITElHSFRfT1BUSU9OUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxIaWdobGlnaHRPcHRpb25zPignSElHSExJR0hUX09QVElPTlMnKTtcbiJdfQ==