import { PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { CodeLoader } from './code-loader';
export declare class CodeFromUrlPipe implements PipeTransform {
    private _loader;
    constructor(_loader: CodeLoader);
    transform(url: string): Observable<string>;
}
