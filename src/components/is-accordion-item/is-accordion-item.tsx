import { Component, Host, Prop, State, h } from '@stencil/core';
import { randomString } from '../../utils/utils';
import { state, set } from '../../store';

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
  tag: 'is-accordion-item',
  styleUrl: 'is-accordion-item.css',
  scoped: true,
})
export class MsAccordionItem {
  randomId: string = randomString(5);
  /**
   * The index of the accordion item
   */
  @Prop() index!: number;
  /**
   * The active index of the accordion
   */
  @State() activeIndex: number[] = state.collapsible ? [-1] : [0];

  private toggleActive = () => {
    // set('activeIndex', [this.index]);
    const isActive = state.activeIndex.includes(this.index);

    if (state.multiple) {
      if (isActive) {
        set(
          'activeIndex',
          state.activeIndex.filter(index => index !== this.index),
        );
      } else {
        set('activeIndex', [...state.activeIndex, this.index]);
      }
    }

    if (!state.multiple) {
      if (isActive) {
        set('activeIndex', [-1]);
      } else {
        set('activeIndex', [this.index]);
      }
    }
  };

  render() {
    const isActive: boolean = state.activeIndex.includes(this.index);
    const plusIcon = (
      <svg
        xmlns={'http://www.w3.org/2000/svg'}
        style={{
          width: '24px',
          height: '24px',
        }}
        viewBox={'0 0 24 24'}
      >
        <path d={'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'} />
      </svg>
    );
    const minusIcon = (
      <svg
        xmlns={'http://www.w3.org/2000/svg'}
        style={{
          width: '24px',
          height: '24px',
        }}
        viewBox={'0 0 24 24'}
      >
        <path d={'M19 13H5v-2h14v2z'} />
      </svg>
    );
    const arrowIcon = (
      <svg
        xmlns={'http://www.w3.org/2000/svg'}
        style={{
          width: '24px',
          height: '24px',
        }}
        viewBox={'0 0 24 24'}
      >
        <path d={'M12 15.5l-6-6-1.41 1.41L12 18.33l7.41-7.42L18 9.5l-6 6z'} />
      </svg>
    );
    const defaultIcon = () => {
      if (state.icon === 'plus') {
        if (isActive) {
          return minusIcon;
        } else {
          return plusIcon;
        }
      } else {
        return arrowIcon;
      }
    };

    return (
      <Host slot="item" id={`accordion-item-${this.randomId}`} class="is-accordion-item">
        <div data-state={isActive ? 'open' : 'closed'}>
          <button
            id={`accordion-trigger-${this.randomId}`}
            onClick={() => this.toggleActive()}
            aria-expanded={isActive}
            aria-controls={`accordion-content-${this.randomId}`}
            disabled={isActive && !state.collapsible}
            class="is-accordion-trigger"
            style={{
              width: '100%',
              textAlign: 'left',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <slot name="trigger"></slot>
            <div
              style={{
                transition: 'transform 0.3s ease-in-out',
                transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            >
              <slot name="icon">{defaultIcon()}</slot>
            </div>
          </button>

          <div
            class="is-accordion-content"
            id={`accordion-content-${this.randomId}`}
            role={'region'}
            aria-labelledby={`accordion-trigger-${this.randomId}`}
            style={{
              display: 'grid',
              gridTemplateRows: isActive ? '1fr' : '0fr',
              opacity: isActive ? '1' : '0',
              overflow: 'hidden',
              transition: 'all 0.3s ease-in-out',
            }}
          >
            <div style={{ overflow: 'hidden' }}>
              <slot name="content"></slot>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
