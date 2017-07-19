declare module "element-resize-detector" {
    interface ElementResizeDetectorOptions {
        callOnAdd?: boolean;
        idHandler?: any;
        reporter?: any;
        debug?: boolean;
        strategy?: string;
        batchProcessor?: any;
    }

    interface ElementResizeDetectorIdHandler {
        getId(element: Element): string | number | null;
        setId(element: Element): string | number | null;
    }

    interface ElementResizeDetectorReporter {
        log(): void;
        warn(): void;
        error(): void;
    }

    interface ListenToOptions {
        callOnAdd?: boolean;
        idHandler?: ElementResizeDetectorIdHandler;
        reporter?: ElementResizeDetectorReporter;
        debug?: boolean;
    }

    interface ElementResizeDetector {
        listenTo(options: ListenToOptions, elements: Element | Element[], listener: () => void): any;
        listenTo(elements: Element | Element[], listener: () => void): any;
        removeListener(element: Element, listener: () => void): void;
        removeAllListeners(element: Element): void;
        uninstall(elements: Element | Element[]): any;
    }

    export = elementResizeDetector;

    function elementResizeDetector(options: ElementResizeDetectorOptions): ElementResizeDetector;

    declare namespace elementResizeDetector {
    }
}
