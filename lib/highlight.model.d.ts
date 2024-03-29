import { InjectionToken } from '@angular/core';
export interface HighlightLibrary {
    /**
     * Core highlighting function.
     * @param name Accepts a language name, or an alias
     * @param value A string with the code to highlight.
     * @param ignore_illegals When present and evaluates to a true value, forces highlighting to finish
     * even in case of detecting illegal syntax for the language instead of throwing an exception.
     * @param continuation An optional mode stack representing unfinished parsing.
     * When present, the function will restart parsing from this state instead of initializing a new one
     */
    highlight(name: string, value: string, ignore_illegals: boolean, continuation?: any): HighlightResult;
    /**
     * Highlighting with language detection.
     * @param value Accepts a string with the code to highlight
     * @param languageSubset An optional array of language names and aliases restricting detection to only those languages.
     * The subset can also be set with configure, but the local parameter overrides the option if set.
     */
    highlightAuto(value: string, languageSubset: string[]): HighlightResult;
    /**
     * Post-processing of the highlighted markup.
     * Currently consists of replacing indentation TAB characters and using <br> tags instead of new-line characters.
     * Options are set globally with configure.
     * @param value Accepts a string with the highlighted markup
     */
    fixMarkup(value: string): string;
    /**
     * Applies highlighting to a DOM node containing code.
     * The function uses language detection by default but you can specify the language in the class attribute of the DOM node.
     * See the class reference for all available language names and aliases.
     * @param block The element to apply highlight on.
     */
    highlightBlock(block: HTMLElement): void;
    /**
     * Configures global options:
     * @param config HighlightJs configuration argument
     */
    configure(config: HighlightConfig): void;
    /**
     * Applies highlighting to all <pre><code>..</code></pre> blocks on a page.
     */
    initHighlighting(): void;
    /**
     * Adds new language to the library under the specified name. Used mostly internally.
     * @param name A string with the name of the language being registered
     * @param language A function that returns an object which represents the language definition.
     * The function is passed the hljs object to be able to use common regular expressions defined within it.
     */
    registerLanguage(name: string, language: () => any): void;
    /**
     * @return The languages names list.
     */
    listLanguages(): string[];
    /**
     * Looks up a language by name or alias.
     * @param name Language name
     * @return The language object if found, undefined otherwise.
     */
    getLanguage(name: string): any;
    /**
     * Add line numbers to code element
     * @param el Code element
     */
    lineNumbersBlock(el: Element): void;
}
export interface HighlightConfig {
    /** tabReplace: a string used to replace TAB characters in indentation. */
    tabReplace?: string;
    /** useBR: a flag to generate <br> tags instead of new-line characters in the output, useful when code is marked up using a non-<pre> container. */
    useBR?: boolean;
    /** classPrefix: a string prefix added before class names in the generated markup, used for backwards compatibility with stylesheets. */
    classPrefix?: string;
    /** languages: an array of language names and aliases restricting auto detection to only these languages. */
    languages?: string[];
}
export interface HighlightResult {
    language?: string;
    second_best?: any;
    top?: any;
    value?: string;
    relevance?: number;
}
export interface HighlightOptions {
    config?: HighlightConfig;
    languages?: {
        [name: string]: () => Promise<any>;
    };
    lineNumbers?: boolean;
}
export declare const HIGHLIGHT_OPTIONS: InjectionToken<HighlightOptions>;
