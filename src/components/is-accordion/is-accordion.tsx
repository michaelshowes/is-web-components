import {
  Component,
  Element,
  Host,
  Listen,
  Prop,
  State,
  h,
} from "@stencil/core";
import { randomString } from "../../utils/utils";

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
@Component({
  tag: "is-accordion",
  styleUrl: "is-accordion.scss",
  scoped: true,
})
export class MsAccordion {
  @Element()
  el: HTMLElement;

  accordionId: string = randomString(5);

  @State() activeItem: HTMLElement;
  /**
   * If `true`, the accordion will be collapsible.
   */
  @Prop() collapsible: boolean = true;
  /**
   * If `true`, the accordion will allow multiple open items.
   */
  @Prop() multiple: boolean = false;
  /**
   * The default icon to display in the accordion. Overide with
   * ```
   * <is-accordion-item index="0">
   *   <element slot="icon"></element>
   * </is-accordion-item>
   * ```
   */
  @Prop() icon: "arrow" | "plus" = "arrow";
  allItems: boolean = false;
  /**
   * The configuration object for the accordion
   */
  config: any = {
    accordionId: this.accordionId,
    multiple: this.multiple,
    collapsible: this.collapsible,
    icon: this.icon,
    activeIndex: this.collapsible ? [-1] : [0],
    allItems: this.allItems,
  };

  @Listen("accordionItemClicked")
  accordionItemClickedHandler(event: CustomEvent) {
    const target = event.target as HTMLElement;
    const trigger = target.querySelector(".is-accordion-trigger");

    if (!this.multiple) {
      const allItems = document.querySelectorAll(
        `.is-accordion-${this.accordionId}-item`,
      );

      allItems.forEach((item) => {
        if (item !== event.target) {
          item.setAttribute("data-state", "closed");
          item
            .querySelector(".is-accordion-trigger")
            .setAttribute("aria-expanded", "false");
          item
            .querySelector(".is-accordion-trigger")
            .removeAttribute("disabled");
        }
      });
    }

    target.setAttribute(
      "data-state",
      target.getAttribute("data-state") === "open" ? "closed" : "open",
    );
    trigger.setAttribute(
      "aria-expanded",
      target.getAttribute("data-state") === "open" ? "true" : "false",
    );
    if (!this.collapsible && target.getAttribute("data-state") === "open") {
      trigger.setAttribute("disabled", "true");
    } else {
      trigger.removeAttribute("disabled");
    }
  }

  componentWillLoad() {
    this.el.childNodes.forEach((element) => {
      element["config"] = this.config;
    });
  }

  componentDidLoad() {
    if (!this.collapsible) {
      const allItems = document.querySelectorAll(
        `.is-accordion-${this.accordionId}-item`,
      );
      allItems[0].setAttribute("data-state", "open");
      allItems[0]
        .querySelector(".is-accordion-trigger")
        .setAttribute("aria-expanded", "true");
      allItems[0]
        .querySelector(".is-accordion-trigger")
        .setAttribute("disabled", "true");
    }
  }

  render() {
    return (
      <Host
        class={`is-accordion is-accordion-${this.accordionId}`}
        id={`is-accordion-${this.accordionId}`}
      >
        <slot name="item"></slot>
      </Host>
    );
  }
}
