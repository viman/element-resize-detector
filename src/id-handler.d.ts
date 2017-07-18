import {IdGenerator} from './id-generator';

export declare class IdHandler {
    getId: (element: Element) => string | number | null;
    setId: (element: Element) => string | number | null;
}

export interface IdHandlerOptionsInterface {
    idGenerator?: idGenerator;
    stateHandler?: object;
}

export declare function idHandlerMaker(options: IdHandlerOptionsInterface): IdHandler;