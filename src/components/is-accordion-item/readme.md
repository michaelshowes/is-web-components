# is-accordion-item



<!-- Auto Generated Below -->


## Overview

Accordion Item component
```
<is-accordion-item index="0">
 <h3 slot="trigger">Trigger</h3>
 <div slot="content">Content</div>
</is-accordion-item>
```

## Properties

| Property             | Attribute | Description                                | Type     | Default     |
| -------------------- | --------- | ------------------------------------------ | -------- | ----------- |
| `config`             | `config`  | The configuration object for the accordion | `any`    | `undefined` |
| `index` _(required)_ | `index`   | The index of the accordion item            | `number` | `undefined` |


## Events

| Event                  | Description | Type               |
| ---------------------- | ----------- | ------------------ |
| `accordionItemClicked` |             | `CustomEvent<any>` |


## Methods

### `getIndex() => Promise<number>`



#### Returns

Type: `Promise<number>`



### `handleClick() => Promise<void>`



#### Returns

Type: `Promise<void>`



### `handleEvent(e: string) => Promise<void>`



#### Parameters

| Name | Type     | Description |
| ---- | -------- | ----------- |
| `e`  | `string` |             |

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
