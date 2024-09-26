import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

enum IconName {
  ARROW = 'arrow',
  PLUS = 'plus',
}

const meta: Meta = {
  title: 'Components/Accordion',
  component: 'is-accordion',
  parameters: {
    docs: {
      description: {
        component:
          'An accordion is a vertically stacked list of interactive headings that each contain a title, content snippet, or thumbnail representing a section of content. The headings function as controls that enable users to reveal or hide their associated sections of content. Accordions are commonly used to reduce the need to scroll when presenting multiple sections of content on a single page.',
      },
    },
  },
  argTypes: {
    collapsible: {
      description: 'If true, multiple accordion items can be expanded at the same time.',
      table: {
        defaultValue: { summary: 'true' },
      },
      control: {
        type: 'boolean',
      },
    },
    multiple: {
      description: 'If true, at most one accordion item can be expanded at the same time.',
      table: {
        defaultValue: { summary: 'false' },
      },
      control: {
        type: 'boolean',
      },
    },
    icon: {
      description: 'The icon to display in the accordion trigger.',
      table: {
        defaultValue: { summary: 'arrow' },
      },
      control: {
        type: 'select',
        options: IconName,
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Primary: Story = {
  args: {
    collapsible: true,
    multiple: false,
    icon: 'arrow',
    itemOne: {
      trigger: 'Accordion Item 1',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime optio doloribus, alias esse corrupti quisquam? Nesciunt quae nostrum repellat illum doloribus accusamus nulla sequi aspernatur asperiores doloremque, earum tenetur hic.',
    },
    itemTwo: {
      trigger: 'Accordion Item 2',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime optio doloribus, alias esse corrupti quisquam? Nesciunt quae nostrum repellat illum doloribus accusamus nulla sequi aspernatur asperiores doloremque, earum tenetur hic.',
    },
    itemThree: {
      trigger: 'Accordion Item 3',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime optio doloribus, alias esse corrupti quisquam? Nesciunt quae nostrum repellat illum doloribus accusamus nulla sequi aspernatur asperiores doloremque, earum tenetur hic.',
    },
  },
  render: ({ collapsible, multiple, icon, itemOne, itemTwo, itemThree }) =>
    html`
<is-accordion collapsible="${collapsible}" multiple="${multiple}" icon="${icon}">
  <is-accordion-item index="0">
    <h3 slot="trigger">${itemOne.trigger}</h3>
    <p slot="content">${itemOne.content}</p>
  </is-accordion-item>
  <is-accordion-item index="1">
    <h3 slot="trigger">${itemTwo.trigger}</h3>
    <p slot="content">${itemTwo.content}</p>
  </is-accordion-item>
  <is-accordion-item index="2">
    <h3 slot="trigger">${itemThree.trigger}</h3>
    <p slot="content">${itemThree.content}</p>
  </is-accordion-item>
</is-accordion>`,
};
