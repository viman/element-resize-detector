import {IdHandler} from './id-handler';

export declare class ListenerHandler {
    get: (element: Element) => any;
    add: (element: Element, listener: () => void) => void;
    removeListener: (element: Element, listener: () => void) => void;
    removeAllListeners: (element: Element) => void;
}

export declare function listenerHandlerMaker(idHandler: IdHandler): ListenerHandler;