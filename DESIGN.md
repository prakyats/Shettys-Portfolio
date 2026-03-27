# Design System Document

## 1. Overview & Creative North Star: "The Digital Monolith"
This design system is built for the high-end Computer Science portfolio—a space where technical precision meets editorial elegance. Our North Star is **"The Digital Monolith."** It represents a grounded, futuristic aesthetic that feels heavy yet translucent, like a slab of obsidian floating in a void. 

To break the "template" look, we move away from standard structural borders. Instead, we define space through **tonal depth, intentional asymmetry, and extreme typographic scale**. We lean into the "CS" aesthetic not through neon greens, but through architectural grid lines, sophisticated monospace-adjacent sans-serifs, and glass layers that suggest the complexity of underlying code.

## 2. Colors & Surface Philosophy
The palette is rooted in deep, atmospheric darks (`#070d1f`) to provide a canvas for light to emerge.

### The "No-Line" Rule
Traditional 1px solid borders are strictly prohibited for sectioning. We define boundaries through **Background Shifts**. A `surface-container-low` section sitting on a `surface` background creates a clear but soft structural change. If a boundary feels too soft, increase the spacing rather than adding a line.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the following tiers to create a "nested" depth model:
- **Base Layer:** `surface` (#070d1f) for the primary page background.
- **Sectioning:** `surface-container-low` (#09122b) for large background blocks.
- **Components:** `surface-container` (#0a1839) for cards and primary UI elements.
- **Highlights:** `surface-container-high` (#0b1d48) for active states or elevated popovers.

### The "Glass & Gradient" Rule
To achieve a premium "futuristic" feel:
- **Floating Elements:** Use `surface-variant` (#0a2257) at 40-60% opacity with a `backdrop-filter: blur(12px)`.
- **Gradients:** Use subtle linear transitions from `tertiary` (#47c4ff) to `tertiary-container` (#2db7f2) at a 135-degree angle for primary CTAs. This adds a "glow" that flat colors lack.

## 3. Typography: The Editorial Engine
Typography is the primary decorative element. The contrast between the technical `Inter` and the architectural `Space Grotesk` creates a "Software Architect" persona.

- **Display & Headline (Space Grotesk):** Use `display-lg` (3.5rem) for hero statements. Ensure letter-spacing is set to `-0.02em` to feel tight and custom. These should be high-contrast against the background using `on-surface`.
- **Body (Inter):** Use `body-md` (0.875rem) for general descriptions. Set line-height to 1.6 to ensure readability amidst the dark aesthetic.
- **Labels & Mono-accents:** Use `label-sm` (0.6875rem) for metadata (e.g., "Language: Python"). Use `on-surface-variant` (#96a9e6) to keep these secondary but legible.

## 4. Elevation & Depth
We eschew "Material" shadows in favor of **Tonal Layering** and **Ambient Glows**.

### The Layering Principle
Depth is achieved by "stacking" surface tiers. Place a `surface-container-lowest` card on a `surface-container-low` section to create a "recessed" look, or a `surface-container-highest` card on a `surface` background for a "raised" look.

### Ambient Shadows
When an element must float (e.g., a navigation bar or a modal):
- **Blur:** 40px to 80px.
- **Opacity:** 4%-8%.
- **Color:** Use a tinted version of `on-surface` (#dfe4ff) rather than pure black to simulate light scattering through glass.

### The "Ghost Border" Fallback
If accessibility requires a border, use the **Ghost Border**: `outline-variant` (#32457c) at **15% opacity**. It should be felt, not seen.

## 5. Components

### Buttons
- **Primary:** Gradient fill (`tertiary` to `tertiary-container`), `on-tertiary` text. Border-radius: `md` (0.375rem).
- **Secondary:** Transparent background with a "Ghost Border." On hover, shift background to `surface-container-high`.
- **Tertiary:** Text-only using `tertiary` color, with a subtle underline appearing only on hover.

### Glass Cards
For project displays, use `surface-container` with 40% opacity and `backdrop-filter: blur(20px)`. **Never use dividers.** Separate content (e.g., Title from Description) using `spacing-4` (1.4rem) of vertical white space.

### Chips (Tech Stack)
Small, pill-shaped (`full` radius) elements using `surface-container-highest`. Text should be `label-md` in `on-surface-variant`. These act as "technical annotations" rather than bold buttons.

### Faint Grid Background
To ground the "Computer Science" theme, implement a CSS background grid using `outline-variant` at 5% opacity. Grid cells should be large (e.g., 64px or 80px) to maintain a spacious feel.

## 6. Do’s and Don’ts

### Do:
- **Do** use `display-lg` for single, impactful words or numbers to create an editorial "magazine" feel.
- **Do** use `surface-bright` (#082768) as a very subtle "radial-gradient" glow behind hero sections to suggest a light source.
- **Do** lean on the Spacing Scale—specifically `spacing-16` and `spacing-20`—to let the design breathe.

### Don’t:
- **Don’t** use 100% white (#ffffff). Use `on-background` (#dfe4ff) to prevent eye strain in dark mode.
- **Don’t** use shadows on every card. Reserve them for floating navigation or modals.
- **Don’t** use standard 1px dividers. If you need to separate content, use a background color shift or a `1.4rem` gap.
- **Don’t** use sharp 0px corners. Even a "tech" look needs the sophistication of the `DEFAULT` (0.25rem) or `md` (0.375rem) radii.