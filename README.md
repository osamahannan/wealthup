# WealthUp Landing Page

WealthUp is a modern, Figma-inspired financial planning landing page built with Next.js and Tailwind CSS. The UI uses a glassmorphism visual system, gradient surfaces, responsive layouts, and goal-based investment interactions.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Next Image optimization

## Project Structure

```
src/
	app/
		globals.css
		layout.tsx
		page.tsx
	assets/
		icons/
		images/
	components/
		layout/
			Header.tsx
			Footer.tsx
			index.ts
	features/
		home/
			components/
				GoalCard.tsx
				Slider.tsx
				ResultBox.tsx
				index.ts
			sections/
				Hero.tsx
				BackedBySection.tsx
				MultipleWaysSection.tsx
				WhyWealthGrowsSection.tsx
				CTABanner.tsx
				HowItWorksSection.tsx
				index.ts
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open:

```text
http://localhost:3000
```

## Available Scripts

- `npm run dev` - start local development server
- `npm run build` - build production bundle
- `npm run start` - start production server
- `npm run lint` - run lint checks

## Highlights

- Interactive goal planning hero section with sliders and result cards
- Glass-effect CTA and section cards based on Figma references
- Dynamic selected-goal image rendering and custom ellipse shadow
- Auto-rotating investment options with sliding active panel animation
- Full mobile responsiveness across all homepage sections
- Production-oriented architecture using feature and layout grouping

## Repository

GitHub: https://github.com/osamahannan/wealthup.git
