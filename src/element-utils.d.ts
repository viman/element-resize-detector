export declare class ElementUtils {
    isDetectable: (element: Element) => boolean;
    markAsDetectable: (element: Element) => void;
    isBusy: (element: Element) => boolean;
    markBusy: (element: Element, busy: boolean) => void;
}

export declare function elementUtilsMaker(options: object): ElementUtils;