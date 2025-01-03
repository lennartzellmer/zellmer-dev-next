---
title: Get the gears clicking - XState & Vue
description: Building state machines is exciting, and with `xstate/vue`, you can bring them to life as reactive objects in Vue. It’s a powerful combination, but beginners might encounter a few quirks and challenges along the way.  This guide will walk you through the basics, help you avoid common pitfalls, and show you how to make your state machines truly shine in your Vue applications!
seo_title: Get the gears clicking - XState & Vue
seo_description: Building state machines is exciting, and with `xstate/vue`, you can bring them to life as reactive objects in Vue. It’s a powerful combination, but beginners might encounter a few quirks and challenges along the way.  This guide will walk you through the basics, help you avoid common pitfalls, and show you how to make your state machines truly shine in your Vue applications!
thumbnail: /posts/blogpost_xstate_2.jpeg
slug: mesh-like-grears---combining-xstate-and-vue
---

Working with state machines can feel mind-boggling at first. All the complexity and implicit states that suddenly become explicit can be overwhelming—it certainly was for me. But this complexity wasn’t new; it was always there, just hidden behind cryptic variables, unstructured code, and undocumented logic.

Fortunately, the XState ecosystem offers an immediate solution to this challenge. The library provides robust visualization tools for implemented machines, enabling rapid comprehension of even the most complex system logic. 

Here’s how to set them up in Vue.

I am using the [**vitesse-lite**](https://github.com/antfu/vitesse-lite) template, as it’s one of the fastest ways to prototype in Vue 3. I’ve chosen Vue 3 because it’s becoming the default option for Vue in the coming days. For more details, check out my [**GitHub repository**](https://github.com/lennartzellmer/vitesse-lite-xstate).

To integrate state machines into my project, I added these three essential packages:

```bash
pnpm install -D @xstate/inspect
pnpm install xstate @xstate/vue
```

If you’re using Vue 2, there’s a package with similar functionality [**here**](https://github.com/ChrisShank/xstate-vue2). Your setup and mileage may vary, though—I haven’t tried it myself. 🤷🏼‍♂️

### Using the @xstate/vue Composables

Starting with `@xstate/vue`, you’ll likely use the composable `useMachine` to instantiate a machine within setup functions. It’s a fantastic way to get a machine running while subscribing to a reactive `state` and `send` function.

```javascript
setup() {
  const { state, send } = useMachine(myFirstMachine)
  return { state, send }
}
```

### State Has Superpowers

The XState docs explain how to create a reactive state, but they don’t emphasize the amazing things you can do with it (at least, not as enthusiastically as I do 🥳). For instance, the state object can tell you if the current state can potentially accept an event via the `send` method:

```javascript
const stateCanToggle = computed(() => {
  return state.value.nextEvents.includes('TOGGLE')
})
```

This is useful for displaying a button only when the action is available in the current state.

You can take this logic further. Not only can you determine if a state can accept an event, but you can also check if the event will lead to a state change. This is particularly helpful when transitions are guarded by conditions. For example, if data needs to be provided before progressing, you can show a button but disable it until the conditions are met:

```javascript
const stateCanToggle = computed(() => {
  return state.value.can('TOGGLE')
})
```

## Passing Partial State to Child Components

Sometimes, you may want to pass a subset of the state to a child component in Vue. For instance, if you have a child actor, you might want the child component to handle just that specific part of the machine. Initially, I tried accessing the state with a computed property and extracting the relevant subset, but it didn’t work. After hours of frustration (on New Year’s Eve, no less 😅), I asked for help in their [**Discord**](https://discord.com/invite/xstate) and found the solution: use the `useSelector` composable. This ensures reactivity isn’t lost, even in scenarios like `v-for` loops.

```javascript
setup() {
  const { state, send, service } = useMachine(myFirstMachine)

  const childMachine = useSelector(
    service,
    (state) => state.context.childMachine
  )

  return { childMachine }
}
```

## Set Initial Context of a Machine

You may need to set an initial context for your machine, such as fetching an entity based on context or preloading data. While a [**factory function**](https://xstate.js.org/docs/guides/context.html#initial-context) works, a simpler approach is using the `withContext` method:

```javascript
const myFirstMachineWithCtx = myFirstMachine.withContext({
  idToFetch: '12334'
})

const { service, send } = useMachine(myFirstMachineWithCtx)
```

---

## Configure the Visualizer

Adding the visualizer makes state machines 100 times more useful, especially for complex logic. It provides instant feedback, helps catch errors, and makes even simple machines more intuitive.

### Enable the Visualizer

First, globally enable the visualizer in your `main.ts` file by calling the `inspect` function:

```javascript
import { createApp } from 'vue'
import { inspect } from '@xstate/inspect'

if (import.meta.env.DEV) {
  inspect({
    iframe: false, // Opens the inspector in a new tab
  })
}

app.mount('#app')
```

### Enable Dev Tools for useMachine

Next, enable dev tools on your `useMachine` hooks. Use `import.meta.env.DEV` to activate debug mode only in development:

```javascript
setup() {
  const { state, send } = useMachine(toggleMachine, { devTools: import.meta.env.DEV })
  return { state, send }
}
```

---

## Final Thoughts

Mistakes are part of the process when building your first machines, such as creating the wrong submachine or using a state where a string in the context would suffice. I made both mistakes in my first week! 

If you want to dive deeper into avoiding these errors, the [**Stately.ai blog**](https://stately.ai/blog) is a fantastic resource.