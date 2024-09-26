/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    /**
     * The is-accordion component is a container for is-accordion-item components. It is the parent component and is responsible for managing the state of the accordion.
     * ```
     * <is-accordion>
     *  <is-accordion-item index="0">
     *   ...content...
     *  </is-accordion-item>
     *  <is-accordion-item index="1">
     *   ...content...
     *  </is-accordion-item>
     * </is-accordion>
     * ```
     */
    interface IsAccordion {
        /**
          * If `true`, the accordion will be collapsible.
         */
        "collapsible": boolean;
        /**
          * The default icon to display in the accordion. Overide with ``` <is-accordion-item index="0">   <element slot="icon"></element> </is-accordion-item> ```
         */
        "icon": "arrow" | "plus";
        /**
          * If `true`, the accordion will allow multiple open items.
         */
        "multiple": boolean;
    }
    /**
     * Accordion Item component
     * ```
     * <is-accordion-item index="0">
     *  <h3 slot="trigger">Trigger</h3>
     *  <div slot="content">Content</div>
     * </is-accordion-item>
     * ```
     */
    interface IsAccordionItem {
        /**
          * The configuration object for the accordion
         */
        "config": any;
        "getIndex": () => Promise<number>;
        "handleClick": () => Promise<void>;
        "handleEvent": (e: string) => Promise<void>;
        /**
          * The index of the accordion item
         */
        "index": number;
    }
}
export interface IsAccordionItemCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLIsAccordionItemElement;
}
declare global {
    /**
     * The is-accordion component is a container for is-accordion-item components. It is the parent component and is responsible for managing the state of the accordion.
     * ```
     * <is-accordion>
     *  <is-accordion-item index="0">
     *   ...content...
     *  </is-accordion-item>
     *  <is-accordion-item index="1">
     *   ...content...
     *  </is-accordion-item>
     * </is-accordion>
     * ```
     */
    interface HTMLIsAccordionElement extends Components.IsAccordion, HTMLStencilElement {
    }
    var HTMLIsAccordionElement: {
        prototype: HTMLIsAccordionElement;
        new (): HTMLIsAccordionElement;
    };
    interface HTMLIsAccordionItemElementEventMap {
        "accordionItemClicked": any;
    }
    /**
     * Accordion Item component
     * ```
     * <is-accordion-item index="0">
     *  <h3 slot="trigger">Trigger</h3>
     *  <div slot="content">Content</div>
     * </is-accordion-item>
     * ```
     */
    interface HTMLIsAccordionItemElement extends Components.IsAccordionItem, HTMLStencilElement {
        addEventListener<K extends keyof HTMLIsAccordionItemElementEventMap>(type: K, listener: (this: HTMLIsAccordionItemElement, ev: IsAccordionItemCustomEvent<HTMLIsAccordionItemElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLIsAccordionItemElementEventMap>(type: K, listener: (this: HTMLIsAccordionItemElement, ev: IsAccordionItemCustomEvent<HTMLIsAccordionItemElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLIsAccordionItemElement: {
        prototype: HTMLIsAccordionItemElement;
        new (): HTMLIsAccordionItemElement;
    };
    interface HTMLElementTagNameMap {
        "is-accordion": HTMLIsAccordionElement;
        "is-accordion-item": HTMLIsAccordionItemElement;
    }
}
declare namespace LocalJSX {
    /**
     * The is-accordion component is a container for is-accordion-item components. It is the parent component and is responsible for managing the state of the accordion.
     * ```
     * <is-accordion>
     *  <is-accordion-item index="0">
     *   ...content...
     *  </is-accordion-item>
     *  <is-accordion-item index="1">
     *   ...content...
     *  </is-accordion-item>
     * </is-accordion>
     * ```
     */
    interface IsAccordion {
        /**
          * If `true`, the accordion will be collapsible.
         */
        "collapsible"?: boolean;
        /**
          * The default icon to display in the accordion. Overide with ``` <is-accordion-item index="0">   <element slot="icon"></element> </is-accordion-item> ```
         */
        "icon"?: "arrow" | "plus";
        /**
          * If `true`, the accordion will allow multiple open items.
         */
        "multiple"?: boolean;
    }
    /**
     * Accordion Item component
     * ```
     * <is-accordion-item index="0">
     *  <h3 slot="trigger">Trigger</h3>
     *  <div slot="content">Content</div>
     * </is-accordion-item>
     * ```
     */
    interface IsAccordionItem {
        /**
          * The configuration object for the accordion
         */
        "config"?: any;
        /**
          * The index of the accordion item
         */
        "index": number;
        "onAccordionItemClicked"?: (event: IsAccordionItemCustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "is-accordion": IsAccordion;
        "is-accordion-item": IsAccordionItem;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            /**
             * The is-accordion component is a container for is-accordion-item components. It is the parent component and is responsible for managing the state of the accordion.
             * ```
             * <is-accordion>
             *  <is-accordion-item index="0">
             *   ...content...
             *  </is-accordion-item>
             *  <is-accordion-item index="1">
             *   ...content...
             *  </is-accordion-item>
             * </is-accordion>
             * ```
             */
            "is-accordion": LocalJSX.IsAccordion & JSXBase.HTMLAttributes<HTMLIsAccordionElement>;
            /**
             * Accordion Item component
             * ```
             * <is-accordion-item index="0">
             *  <h3 slot="trigger">Trigger</h3>
             *  <div slot="content">Content</div>
             * </is-accordion-item>
             * ```
             */
            "is-accordion-item": LocalJSX.IsAccordionItem & JSXBase.HTMLAttributes<HTMLIsAccordionItemElement>;
        }
    }
}
