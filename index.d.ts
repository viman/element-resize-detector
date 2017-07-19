/**
 * Creates an element resize detector instance.
 *
 * @param {elementResizeDetector.ElementResizeDetectorOptions?} options options Optional global options object that will decide how this instance will work.
 * @returns {elementResizeDetector.ElementResizeDetector}
 */
declare function elementResizeDetector(options: elementResizeDetector.ElementResizeDetectorOptions): elementResizeDetector.ElementResizeDetector;

declare namespace elementResizeDetector {
    interface ElementResizeDetectorIdHandler {
        get(element: Element): any;

        add(element: Element, listener: () => void): void;

        removeListener(element: Element, listener: () => void): void;

        removeAllListeners(element: Element): void;
    }

    interface ElementResizeDetectorReporter {
        log(): void;

        warn(): void;

        error(): void;
    }

    interface ElementResizeDetectorOptions {
        /**
         * Determines if listeners should be called when they are getting added.
         *
         * Default is true. If true, the listener is guaranteed to be called when it has been added.
         * If false, the listener will not be guarenteed to be called when it has been added (does not prevent it from being called).
         */
        callOnAdd?: boolean;

        /**
         * A custom id handler that is responsible for generating, setting and retrieving id's for elements.
         *
         * If not provided, a default id handler will be used.
         */
        idHandler?: ElementResizeDetectorIdHandler;

        /**
         * A custom reporter that handles reporting logs, warnings and errors.
         *
         * If not provided, a default id handler will be used.
         * If set to false, then nothing will be reported.
         */
        reporter?: ElementResizeDetectorReporter;

        /**
         * If set to true, the the system will report debug messages as default for the listenTo method.
         */
        debug?: boolean;
        strategy?: string;
        batchProcessor?: any;
    }

    interface ElementResizeDetector {
        listenTo(options: ElementResizeDetectorListenToOptions, elements: Element | Element[], listener: () => void): any;

        listenTo(elements: Element | Element[], listener: () => void): any;

        removeListener(element: Element, listener: () => void): void;

        removeAllListeners(element: Element): void;

        uninstall(elements: Element | Element[]): any;
    }

    interface ElementResizeDetectorIdHandler {
        /**
         * Gets the resize detector id of the element.
         *
         * @param {Element} element
         * @returns {string | number}
         */
        get(element: Element): string | number | null;

        /**
         * Generates and sets the resize detector id of the element.
         *
         * @param {Element} element
         * @returns {string | number}
         */
        set(element: Element): string | number | null;
    }

    interface ElementResizeDetectorReporter {
        log(): void;

        warn(): void;

        error(): void;
    }

    interface ElementResizeDetectorListenToOptions {
        callOnAdd?: boolean;
        idHandler?: ElementResizeDetectorIdHandler;
        reporter?: ElementResizeDetectorReporter;
        debug?: boolean;
    }

    type ElementResizeDetectorMaker = (options: ElementResizeDetectorOptions) => ElementResizeDetector;
}

export = elementResizeDetector;
