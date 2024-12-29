---
title: "Using Radix Colors in TailwindCSS"
description: "Radix colors are an insanely versatile UI library for colors. Actually it is meant for React/vanillaJS but can also be used beautifully in projects with Tailwind."
seo_title: "How to integrate Tailwind's and Radix's color systems using an easy mapping layer."
seo_description: "How to integrate Tailwind's and Radix's color systems using an easy mapping layer."
thumbnail: /blogpost_radix.jpeg
slug: radix-colours-in-tailwind
---

Normally, the colors from the Radix package cannot be used directly in Tailwind. The object that Radix provides does not match the tailwind logic of colors. However, with a bit of javascript and mapping of the two systems, they can be combined beautifully.

All you need to do is installing @radix-ui/colors

  ```sh
  npm install @radix-ui/colors
  ```

Import the colors to your tailwind config file and add the conversion logic. I am using typescript in this example but you can easily do the same in JavaScript.

```js
import * as radixColors from '@radix-ui/colors'
import type { Config } from 'tailwindcss'

/**
 * Format Radix colors into Tailwind CSS format.
 *
 * @example blueDark.blue1 -> blue-dark-1
 */
function formatRadixColors() {
  const colors: Record<string, Record<string, string>> = {}

  const colorEntries = Object.entries(radixColors)
  for (const [radixColorName, radixColor] of colorEntries) {
    const colorName = radixColorName
    const color: Record<string, string> = {}

    for (const [radixScale, value] of Object.entries(radixColor)) {
      const scale = radixScale.match(/\d+$/)?.[0]
      if (!scale) {
        continue
      }
      color[scale] = value
    }

    const kebabCaseColorName = colorName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()

    colors[kebabCaseColorName] = color
  }

  return colors
}

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: formatRadixColors(),
    },
  },
}
```

That's it! You can now use all Radix colors like this:

```html
<div class="bg-slate-1 text-slate-12">
    Test
</div>
```