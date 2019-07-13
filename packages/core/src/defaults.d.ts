import { FactoryOptions, LoggerAction } from '../types';
export declare const factoryOptions: FactoryOptions;
export declare function simpleErrorHandler(e: Error | string): void;
export declare function simpleLogger(logInfo: LoggerAction): void;
export declare function noop(): void;
