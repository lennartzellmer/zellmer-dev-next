---
title: XState changed how I think applications
description: I first heard about state machines in December 2019 during episode 206 of *Syntax*, a podcast about web development. The concept immediately captivated me—the idea of having an explicit state to rely on was fascinating. But state machines are so much more than that. Let me explain.
seo_title: XState changed how I think applications
seo_description: I first heard about state machines in December 2019 during episode 206 of *Syntax*, a podcast about web development. The concept immediately captivated me—the idea of having an explicit state to rely on was fascinating. But state machines are so much more than that. Let me explain.
thumbnail: /posts/blogpost_xstate.jpeg
slug: x-state-changed-how-i-think-applications
---

I first heard about state machines in December 2019. It was on [episode no. 206](https://syntax.fm/show/206/state-machines-css-and-animations-with-david-k-piano) of „Syntax", a podcast about web development. The concept immediately captivated me — the idea of having an explicit state to rely on was fascinating. However, while working on my first project with XState last month, I discovered that state machines can offer so much more than just clear state management.

## What is a state machine / XState?

The foundation of the XState ecosystem is a core library designed to create and interpret state machines. While it may sound fancy at first, it’s based on a simple set of rules that anyone can understand — not just developers, but also other stakeholders in a (software) project, such as designers, product owners, managers, QA engineers, or testers.

Let’s start by diving deeper into the term **state machine** itself.

The term **state** refers to a condition that is distinguishable from one or more other conditions. For example, you can either be awake or asleep, but not both at the same time. Similarly, you can sit, stand, or walk, but only one of those actions can occur at any given moment. In software, we encounter the same patterns. Data can either be saved or unsaved. A form can be valid or invalid. A user can be logged in or logged out.

The **machine** part of a *state machine* signifies two key concepts:

	1.	State Transitions: States can change from one to another. For instance, the machine can transition from the state of being asleep to being awake.
	2.	Predictability and Reproducibility: State transitions happen in a defined, predictable, and reproducible manner.

Predictable? Reproducible? Don’t worry—we’ll get to that shortly.

### Tackling complexity in app development

Building a simple application is not the challenging part of software development—it’s the fun part.

The hard part comes with maintaining code quality as the application scales. That’s why we introduce tests and adopt quality standards: to avoid losing track of what functionality has been implemented. When time and resources permit, we write documentation to help others—and our future selves—understand how things were intended to work when we first built them. The problems we tackle are complex, and we’re well aware of that.

State machines can be a powerful ally in managing this complexity. They don’t just tell you what the current state is—they also provide a roadmap for how to transition between states. They achieve this by clearly defining which state changes are possible from a given starting point. For example, if you’re in the state of *being asleep*, transitioning directly to *commuting to work* is hard to imagine. There must be intermediate states, like *making coffee* or *brushing teeth*, along the way.

This is what I referred to earlier as predictability. State machines offer a fixed set of possible transitions, ensuring processes follow a defined path. Even better, they behave consistently every time you start a similar process. You cannot skip steps like *making coffee* and *brushing teeth* if the process demands them before reaching the state of *commuting to work*. This behavior is not only predictable but also reproducible.

These qualities make state machines an excellent tool for developing applications. But their benefits start long before you even write your first line of code.

### State machines from conception to deployment and back

When developing a new feature, we often begin by translating business logic into a flowchart that represents application logic. This flowchart is then transformed into variables, functions, and data models. The resulting code, however, can be difficult to read, and reverse-engineering the original business logic often becomes a tedious task—especially after some time has passed and when documentation is either lacking or nonexistent. Let’s be honest—that’s often the reality.

I believe XState can serve as an excellent tool to bridge the significant gap between planning, implementation, and later customization of a feature. With state machines at its core, XState provides an entire ecosystem of tools focused on creating, managing, and visualizing flowcharts and state diagrams. Its comprehensive suite of packages makes it easy to harness the power of state machines in any modern web tech stack.

*   xState - Core finite state machine and statecharts library + interpreter
*   [**@xstate/react**](https://github.com/davidkpiano/xstate/tree/main/packages/xstate-react)\- React hooks and utilities
*   [**@xstate/vue**](https://github.com/davidkpiano/xstate/tree/main/packages/xstate-vue)\- Vue composition
*   [**@xstate/svelte**](https://github.com/davidkpiano/xstate/tree/main/packages/xstate-svelte)\- Svelte utilities
*   [**@xstate/inspect**](https://github.com/davidkpiano/xstate/tree/main/packages/xstate-inspect)\- Inspection utilities
*   [...](https://xstate.js.org/docs/#packages)

However, I believe the most valuable aspect of XState isn’t its versatility in use cases or integrations—it’s the [visualizer](https://stately.ai/viz) that truly unlocks the power of state machines. 

As I mentioned earlier, I think every stakeholder in the software development process can think and work in terms of state machines. In fact, many already do! Designers consider states like _invalid_, _valid_, _active_, _disabled_, or _loading_. Product managers think in terms of states like _to-do_, _in progress_, or _done_. While writing a state machine in code might seem complex, the visualizer removes much of that complexity, making it an intuitive and even enjoyable experience.

When starting a new feature, we typically begin by planning it as a flowchart. In the past, we might have used tools like LucidChart or Whimsical for this. Now, we can use the XState visualizer. It allows us to mock the entire business process as a state chart and visualize the logic in an engaging, interactive way. If needed, we can also incorporate real functionality by invoking functions and services directly within the chart.

Once the state chart is complete, the same code we created in the visualizer can be seamlessly integrated into our application. While some edge cases might still need handling, the core logic is ready to use. What’s more, we can share the same state chart with a designer, who can use it to craft visual designs for each application state. This creates a single source of truth for application logic across all departments.

And as a developer, the best part is this: if months or even years later a new feature needs to be added or an existing process needs to change, you can simply load the state machine code into the visualizer to instantly understand how all parts of the program are interconnected. The code becomes far more intuitive, making it easier to reverse-engineer or extend.

I’m not suggesting this eliminates the need for testing or that it solves all the challenges of scalable application development. However, it is undoubtedly a tool that improves communication among stakeholders and fosters a unified understanding of the software we’re building. Too often, we adopt new technologies only to realize that they add more complexity rather than reducing it. 

In my experience, state machines—and XState in particular—have been the opposite. Much like TypeScript, they provide a significant confidence boost in the functionality we deliver, all with just a few lines of structured code.

I’d love for my team to explore XState in the near future. 
*(Spoiler: The team tried it but the learning curve was too high and the team did not want to invest the time... )*

### Where to go from here?

*   A good follow up to read more about state machines, in general, is this section of the XState documentation: **[Introduction to state machines and statecharts](https://xstate.js.org/docs/guides/introduction-to-state-machines-and-statecharts/#introduction-to-state-machines-and-statecharts).**
*   This youtube video gave me enough motivation to try it myself: [Standing on the Shoulders of Giants. Development With XState](https://www.youtube.com/watch?v=GuzcWkVrqLg&t=7s)
*   Examples that might be a bit too elaborated but still interesting: [XState Catalogue](https://xstate-catalogue.com/)
*   Paid course to go all-in: [State Machines in JavaScript with XState](https://frontendmasters.com/courses/xstate/)