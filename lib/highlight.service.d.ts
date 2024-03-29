import { Observable } from 'rxjs';
import { HighlightConfig, HighlightResult, HighlightLibrary, HighlightOptions } from './highlight.model';
import { HighlightLoader } from './highlight.loader';
export declare class HighlightJS {
    private _loader;
    private _hljs;
    readonly hljs: HighlightLibrary | null;
    constructor(_loader: HighlightLoader, options: HighlightOptions);
    /**
     * Core highlighting function.
     * @param name Accepts a language name, or an alias
     * @param value A string with the code to highlight.
     * @param ignore_illegals When present and evaluates to a true value, forces highlighting to finish
     * even in case of detecting illegal syntax for the language instead of throwing an exception.
     * @param continuation An optional mode stack representing unfinished parsing.
     * When present, the function will restart parsing from this state instead of initializing a new one
     */
    highlight(name: string, value: string, ignore_illegals: boolean, continuation?: any): Observable<HighlightResult>;
    /**
     * Highlighting with language detection.
     * @param value Accepts a string with the code to highlight
     * @param languageSubset An optional array of language names and aliases restricting detection to only those languages.
     * The subset can also be set with configure, but the local parameter overrides the option if set.
     */
    highlightAuto(value: string, languageSubset: string[]): Observable<HighlightResult>;
    /**
     * Post-processing of the highlighted markup.
     * Currently consists of replacing indentation TAB characters and using <br> tags instead of new-line characters.
     * Options are set globally with configure.
     * @param value Accepts a string with the highlighted markup
     */
    fixMarkup(value: string): Observable<string>;
    /**
     * Applies highlighting to a DOM node containing code.
     * The function uses language detection by default but you can specify the language in the class attribute of the DOM node.
     * See the class reference for all available language names and aliases.
     * @param block The element to apply highlight on.
     */
    highlightBlock(block: HTMLElement): Observable<void>;
    /**
     * Configures global options:
     * @param config HighlightJs configuration argument
     */
    configure(config: HighlightConfig): Observable<void>;
    /**
     * Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
     */
    initHighlighting(): Observable<void>;
    /**
     * Adds new language to the library under the specified name. Used mostly internally.
     * @param name A string with the name of the language being registered
     * @param language A function that returns an object which represents the language definition.
     * The function is passed the hljs object to be able to use common regular expressions defined within it.
     */
    registerLanguage(name: string, language: () => any): Observable<HighlightLibrary>;
    /**
     * @return The languages names list.
     */
    listLanguages(): Observable<string[]>;
    /**
     * Looks up a language by name or alias.
     * @param name Language name
     * @return The language object if found, undefined otherwise.
     */
    getLanguage(name: string): Observable<any>;
    /**
     * Display line numbers
     * @param el Code element
     */
    lineNumbersBlock(el: HTMLElement): Observable<any>;
}
