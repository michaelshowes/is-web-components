import {
  Component,
  Event,
  EventEmitter,
  Host,
  Method,
  Prop,
  h,
} from "@stencil/core";
import { randomString } from "../../utils/utils";

/**
 * Accordion Item component
 * ```
 * <is-accordion-item index="0">
 *  <h3 slot="trigger">Trigger</h3>
 *  <div slot="content">Content</div>
 * </is-accordion-item>
 * ```
 */
@Component({
  tag: "is-accordion-item",
  styleUrl: "is-accordion-item.scss",
  scoped: true,
})
export class MsAccordionItem {
  @Event({
    eventName: "accordionItemClicked",
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  accordionItemClicked: EventEmitter;

  @Method() async handleEvent(e: string) {
    this.accordionItemClicked.emit(e);
  }

  itemId: string = randomString(5);
  /**
   * The configuration object for the accordion
   */
  @Prop() config: any;
  /**
   * The index of the accordion item
   */
  @Prop() index!: number;

  @Method() async handleClick() {
    this.handleEvent(this.itemId);
  }

  @Method() async getIndex() {
    return this.index;
  }

  render() {
    const accordionId = this.config.accordionId;
    const itemId = this.itemId;
    const plusIcon = (
      <svg
        xmlns={"http://www.w3.org/2000/svg"}
        style={{
          width: "24px",
          height: "24px",
        }}
        viewBox={"0 0 24 24"}
      >
        <path d={"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"} />
      </svg>
    );
    const minusIcon = (
      <svg
        xmlns={"http://www.w3.org/2000/svg"}
        style={{
          width: "24px",
          height: "24px",
        }}
        viewBox={"0 0 24 24"}
      >
        <path d={"M19 13H5v-2h14v2z"} />
      </svg>
    );
    const arrowIcon = (
      <svg
        xmlns={"http://www.w3.org/2000/svg"}
        style={{
          width: "24px",
          height: "24px",
        }}
        viewBox={"0 0 24 24"}
      >
        <path d={"M12 15.5l-6-6-1.41 1.41L12 18.33l7.41-7.42L18 9.5l-6 6z"} />
      </svg>
    );

    return (
      <Host
        slot="item"
        id={`is-accordion-${accordionId}-item-${itemId}`}
        class={`is-accordion-item is-accordion-${accordionId}-item -item-${itemId}`}
      >
        <button
          id={`is-accordion-${accordionId}-trigger-${itemId}`}
          onClick={() => this.handleEvent(this.itemId)}
          aria-expanded={"false"}
          aria-controls={`is-accordion-${accordionId}-content-${itemId}`}
          disabled={false}
          class="is-accordion-trigger"
        >
          <slot name="trigger"></slot>
          <div class="is-accordion-trigger-icon">
            <div>
              <slot name="icon">
                {this.config.icon === "plus" ? (
                  <div>
                    <div class="is-accordion-trigger-icon-closed">
                      <slot name="icon-closed">{plusIcon}</slot>
                    </div>
                    <div class="is-accordion-trigger-icon-open">
                      <slot name="icon-open">{minusIcon}</slot>
                    </div>
                  </div>
                ) : (
                  <div>{arrowIcon}</div>
                )}
              </slot>
            </div>
          </div>
        </button>

        <div
          class="is-accordion-content"
          id={`is-accordion-${accordionId}-content-${itemId}`}
          role={"region"}
          aria-labelledby={`is-accordion-${accordionId}-trigger-${itemId}`}
        >
          <div class="is-accordion-content-overflow">
            <slot name="content"></slot>
          </div>
        </div>
      </Host>
    );
  }
}
