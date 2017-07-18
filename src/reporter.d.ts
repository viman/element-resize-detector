export declare class Reporter {
    log: () => void;
    warn: () => void;
    error: () => void;
}

export declare function reporterMaker(quiet: boolean): Reporter;