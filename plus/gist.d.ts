import { PipeTransform, EventEmitter } from '@angular/core';
import { CodeLoader } from './code-loader';
import { Gist } from './gist.model';
export declare class GistDirective {
    private _loader;
    constructor(_loader: CodeLoader);
    private gist;
    gistLoad: EventEmitter<Gist>;
}
export declare class GistFilePipe implements PipeTransform {
    transform(gist: Gist, fileName: string): string | null;
}
