# Theming for PWA Studio

## What problem are we trying to solve?

Right now, it's difficult for agencies to customize the look and feel of the stores they're building with PWA Studio. Regardless of whether developers are using components from `venia-ui` or authoring their own, our current architecture expects each component to define its own presentation—entirely. While this arrangement gives developers maximum flexibility, it also gives them too little assistance; to fully implement a design, they may need to override every component in the app.

We can do better for our developers. What they expect, and what we should deliver, are **themes**.

## What is a theme?

A theme is an independent package that serves as the basis of an app's presentation. A theme should have the following qualities:

- **centralized**: a theme should establish common presentational language and abstractions, such that an app's presentation can be consistent across components and screens
- **configurable**: a theme should consume a configuration file, such than an app can modify the values the theme uses to generate styles

- **hierarchical**: a theme should include base values and one or more levels of derived values, such that an app can make changes broadly or narrowly as necessary

- **inheritable**: a theme should allow other themes to declare it as a dependency, such that a developer can elect to package and distribute customizations as a child theme

## Why doesn't PWA Studio already support themes?

Generally, themes are either too bloated to meet the nonfunctional requirements of a PWA or too limited to support the diversity of design we see in Magento stores.

Traditionally, themes have been used to generate and serve all of the rulesets that an app could **potentially** need. This happens because theming systems typically aren't sophisticated enough to statically analyze an app's content—let alone scripts— to determine which rulesets are needed and which ones aren't. As a result, all rulesets must be served to the browser.

While serving the whole theme ensures that a shopper sees the correct presentation, it's also the exact kind of overserving that a PWA aims to avoid. Styles are render-blocking (must be served before the page renders), so unused rulesets end up delaying the initial render, which frustrates the shopper and leads to penalties in all the most important performance metrics for PWAs.

Some theming systems attempt to shrink their footprint by minimizing complexity (reducing the number of concepts and variants), but such an approach constrains design, so it's only viable if design authority rests with the theme. In our case, agencies give each Magento store a unique design and retain authority over its complexity, so we can't afford to constrain them arbitrarily.

We need a solution that remains optimized even as an agency's design language grows.

## What would the ideal solution look like?

In addition to supporting packaged themes featuring the authoring qualities listed earlier, a theming solution should also generate output optimized for fast rendering and low bandwidth. Ideally, output would have the following characteristics:

- **minimal**: the bundler should statically analyze rulesets, deduplicating them and pruning unused rulesets from the bundle
- **modular**: the bundler should split stylesheets into chunks, serving and updating them over the course of the shopper's journey rather than all up front

Essentially, we need a theming system that allows us to bundle styles the same way we bundle scripts. `[TODO: EXPAND]`

1. Collect all declarations in the codebase
2. Generate a utility classname & ruleset for each unique declaration
3. Deduplicate declarations using one of the following approaches:
    - transform classnames into sequences of utility classnames
    - transform declarations to extend utility classnames via `composes`

`[TODO: CONCLUDE]`

## Introducing Tailwind

Tailwind is a popular CSS framework and theming system centered around a utility-first philosophy. At a high level, workflows with Tailwind involve three steps:

1. **Theme authors** specify design values in a central configuration file
2. **Build plugins** read the configuration file to generate utility rulesets
3. **Component authors** add utility classnames to elements for presentation

On the one hand, this workflow allows Tailwind to reach something close to the ideal solution described earlier. When authors reuse generated classnames, in effect, they're manually deduplicating whole rulesets. For highly consistent designs that benefit from such reuse, the resulting CSS bundles can be very small.

On the other hand, Tailwind's philosophy rejects the core principle behind CSS itself: separation of content and presentation. Content is inherently meaningful and presentation is inherently arbitrary, so CSS exists to separate the two into static and dynamic layers, respectively. But Tailwind asserts that for developers trying to maintain a consistent presentation across a variety of content created by a variety of authors, perhaps content should be the dynamic layer instead.

Tailwind's position is compelling, but there's an important caveat: it only works if the teams applying presentation to components are also maintaining those components. Such an assumption is true for many applications, but it's not true for PWA Studio; in our case, Adobe maintains the library of Venia components, but agencies maintain only a minimal set of changes and additions. So we still prefer an arrangement where agencies can overhaul presentation from central configuration alone, without touching components.

But what if we could restrict Tailwind to the presentation layer?

## Tailwind and CSS Modules

Today, each `venia-ui` component has its own default presentation defined in its own `.css` file. Using a `css-loader` feature called CSS Modules, Webpack hashes and namespaces selectors, exports them to the component, and prunes any unused rulesets. `[TODO: EXPAND]`

```css
.checkoutButton {
    composes: button from global;
}
```

## FAQ

### Won't this require a major refactor of Venia's CSS?

