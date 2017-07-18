export interface ElementResizeDetectorOptionsInterface {
    callOnAdd?: boolean;
    idHandler?: object;
    reporter?: object;
    debug?: boolean;
}

export declare class ElementResizeDetector {
    constructor(options?: ElementResizeDetectorOptionsInterface);
}
