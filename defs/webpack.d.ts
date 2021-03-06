declare module webpack {
    export interface Loader {
        request: string;
        path: string;
        query: string;
    }

    export interface LoaderContext {
        version: number;
        context: string;
        request: string;
        query: string;
        data: Object;
        loaders: Array<Loader>;
        loaderIndex: number;
        resource: string;
        resourcePath: string;
        resourceQuery: string;
        values: Array<any>;
        inputValues: Array<any>;

        options: Object;
        debug: boolean;
        minimize: boolean;
        target: string;
        webpack: boolean;

        async(flag?: boolean): void;
        cacheable(flag?: boolean): void;
        emitError(message: string): void;
        emitWarning(message: string): void;
        exec(code: string, filename: string): void;
        resolve(context: string, request: string, callback: (err: Object, result: string) => void): void;
        resolveSync(context: string, request: string): string;
        addDependency(file: string): void;
        dependency(file: string): void;
        addContextDependency(directory: string): void;
        clearDependencies(): void;
        emitFile(name: string, content: string, sourceMap?: Object): void;
        emitFile(name: string, content: NodeBuffer, sourceMap?: Object): void;
        callback(error: any, content?: string, sourceMap?: Object): void;
        callback(error: any, content?: NodeBuffer, sourceMap?: Object): void;
    }

    export interface SourceMap {
        version: number;
        sources: string[];
        sourcesContent?: string[];
        names: string[];
        mappings: string;
        file?: string;
        sourceRoot?: string;
    }
}

declare module "loader-utils" {
    export function parseQuery(query: string): Object;
    export function getCurrentRequest(loaderContext: webpack.LoaderContext): string;
    export function getRemainingRequest(loaderContext: webpack.LoaderContext): string;
}
