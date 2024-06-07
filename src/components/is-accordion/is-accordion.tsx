import { Component, Element, Host, Prop, h } from '@stencil/core';
import { set } from '../../store';

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
  tag: 'is-accordion',
  styleUrl: 'is-accordion.css',
  scoped: true,
})
export class MsAccordion {
  @Element() el: HTMLElement;
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
  @Prop() icon: 'arrow' | 'plus' = 'arrow';

  componentDidLoad() {
    set('collapsible', this.collapsible);
    set('multiple', this.multiple);
    set('icon', this.icon);
    this.collapsible ? set('activeIndex', [-1]) : set('activeIndex', [0]);
  }

  render() {
    return (
      <Host class="is-accordion">
        <slot name="item"></slot>
      </Host>
    );
  }
}
