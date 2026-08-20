"use client";

import { cn } from '@/lib/utils';
import React from 'react';
import { Zap, Cpu, Fingerprint, Pencil, Settings2, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

export type FeatureType = {
	title: string;
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	description: string;
};

export type FeatureCardProps = React.ComponentProps<'div'> & {
	feature: FeatureType;
};

export function FeatureCard({ feature, className, ...props }: FeatureCardProps) {
	const p = genRandomPattern();

	return (
		<div className={cn('relative overflow-hidden p-6 transition-all duration-300 hover:bg-muted/40', className)} {...props}>
			<div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
				<div className="from-foreground/5 to-foreground/1 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
					<GridPattern
						width={20}
						height={20}
						x="-12"
						y="4"
						squares={p}
						className="fill-foreground/5 stroke-foreground/25 absolute inset-0 h-full w-full mix-blend-overlay"
					/>
				</div>
			</div>
			<feature.icon className="text-primary size-6 transition-transform group-hover:scale-110" strokeWidth={1.5} aria-hidden />
			<h3 className="mt-8 text-base font-semibold tracking-tight text-foreground md:text-lg">{feature.title}</h3>
			<p className="text-muted-foreground relative z-20 mt-2 text-sm leading-relaxed font-normal">{feature.description}</p>
		</div>
	);
}

export function GridPattern({
	width,
	height,
	x,
	y,
	squares,
	...props
}: React.ComponentProps<'svg'> & { width: number; height: number; x: string; y: string; squares?: number[][] }) {
	const patternId = React.useId();

	return (
		<svg aria-hidden="true" {...props}>
			<defs>
				<pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
					<path d={`M.5 ${height}V.5H${width}`} fill="none" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
			{squares && (
				<svg x={x} y={y} className="overflow-visible">
					{squares.map(([x, y], index) => (
						<rect strokeWidth="0" key={index} width={width + 1} height={height + 1} x={x * width} y={y * height} />
					))}
				</svg>
			)}
		</svg>
	);
}

function genRandomPattern(length?: number): number[][] {
	length = length ?? 5;
	return Array.from({ length }, () => [
		Math.floor(Math.random() * 4) + 7, // random x between 7 and 10
		Math.floor(Math.random() * 6) + 1, // random y between 1 and 6
	]);
}

export const defaultFeatures: FeatureType[] = [
	{
		title: 'Ultra-Fast Performance',
		icon: Zap,
		description: 'Optimized Next.js architecture with zero layout shift, static caching, and instant SSR response times.',
	},
	{
		title: 'Enterprise Architecture',
		icon: Cpu,
		description: 'Built on modular TypeScript and Tailwind CSS patterns to effortlessly scale from MVP to enterprise.',
	},
	{
		title: 'Robust Security',
		icon: Fingerprint,
		description: 'Comprehensive headers, content security policies, safe sanitization, and best-in-class data privacy.',
	},
	{
		title: 'Deep Customization',
		icon: Pencil,
		description: 'Flexible component primitives and design tokens engineered to match your unique brand identity.',
	},
	{
		title: 'Total Control & SEO',
		icon: Settings2,
		description: 'Complete metadata engine, dynamic sitemaps, JSON-LD structured schema, and OpenGraph optimization.',
	},
	{
		title: 'Built for AI Era',
		icon: Sparkles,
		description: 'Designed for high-converting agentic workflows, responsive interfaces, and intelligent digital experiences.',
	},
];

type ViewAnimationProps = {
	delay?: number;
	className?: React.ComponentProps<typeof motion.div>['className'];
	children: React.ReactNode;
};

export function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}

export function GridFeatureCardsSection() {
	return (
		<section id="features" aria-labelledby="features-heading" className="py-20 md:py-32 relative bg-background">
			<div className="mx-auto w-full max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
				<AnimatedContainer className="mx-auto max-w-3xl text-center">
					<div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-4">
						<Sparkles className="size-3.5" /> High Impact Features
					</div>
					<h2 id="features-heading" className="text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl">
						Power. Speed. Control.
					</h2>
					<p className="text-muted-foreground mt-4 text-base tracking-wide text-balance md:text-lg">
						Everything you need to build fast, secure, scalable, and search-engine-dominating applications.
					</p>
				</AnimatedContainer>

				<AnimatedContainer
					delay={0.3}
					className="grid grid-cols-1 divide-y divide-border border border-border sm:grid-cols-2 md:grid-cols-3 sm:divide-x rounded-2xl overflow-hidden bg-card/50 shadow-sm"
				>
					{defaultFeatures.map((feature, i) => (
						<FeatureCard key={i} feature={feature} />
					))}
				</AnimatedContainer>
			</div>
		</section>
	);
}

export default GridFeatureCardsSection;
