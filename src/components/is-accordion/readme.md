# is-accordion



<!-- Auto Generated Below -->


## Overview

The is-accordion component is a container for is-accordion-item components. It is the parent component and is responsible for managing the state of the accordion.
```
<is-accordion>
 <is-accordion-item index="0">
  ...content...
 </is-accordion-item>
 <is-accordion-item index="1">
  ...content...
 </is-accordion-item>
</is-accordion>
```

## Properties

| Property      | Attribute     | Description                                                                                                                                             | Type                | Default   |
| ------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | --------- |
| `collapsible` | `collapsible` | If `true`, the accordion will be collapsible.                                                                                                           | `boolean`           | `true`    |
| `icon`        | `icon`        | The default icon to display in the accordion. Overide with ``` <is-accordion-item index="0">   <element slot="icon"></element> </is-accordion-item> ``` | `"arrow" \| "plus"` | `'arrow'` |
| `multiple`    | `multiple`    | If `true`, the accordion will allow multiple open items.                                                                                                | `boolean`           | `false`   |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
