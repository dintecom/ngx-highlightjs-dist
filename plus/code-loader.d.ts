import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gist, GistOptions } from './gist.model';
export declare class CodeLoader {
    private _http;
    private _options;
    constructor(_http: HttpClient, _options: GistOptions);
    /**
     * Get plus code
     * @param id Gist ID
     */
    getCodeFromGist(id: string): Observable<Gist>;
    /**
     * Get code by URL
     * @param url File raw link
     */
    getCodeFromUrl(url: string): Observable<string>;
    /**
     * Check if OAuth option is provided
     */
    private isOAuthProvided;
    private fetchFile;
}
