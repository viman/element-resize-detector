import {IdHandler} from './id-handler';
import {Reporter} from './reporter';

export interface ElementResizeDetectorOptionsInterface {
    callOnAdd?: boolean;
    idHandler?: IdHandler;
    reporter?: Reporter;
    debug?: boolean;
    strategy?: string;
    batchProcessor?: any;
}

export declare function elementResizeDetectorMaker(options?: ElementResizeDetectorOptionsInterface);
