import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { skills as skillCategories } from '@/data/content';
import { FeatureCard } from '@/components/ui/GridFeatureCard';

// Helper component for animations
type ViewAnimationProps = {
	delay?: number;
	className?: React.ComponentProps<typeof motion.div>['className'];
	children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
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

const Skills = () => {
    const allSkills = React.useMemo(() => {
        return Object.entries(skillCategories).flatMap(([category, skillList]) => 
          skillList.map(skill => ({
            title: skill.name,
            icon: skill.icon,
            description: `Category: ${category}`
          }))
        );
      }, []);

  return (
    <section id="skills">
      <div className="section-container">
        <AnimatedContainer className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-wide text-balance md:text-4xl lg:text-5xl xl:font-extrabold font-heading">
                Technical Skills
            </h2>
            <p className="text-muted-foreground mt-4 text-sm tracking-wide text-balance md:text-base">
                A collection of technologies and tools I'm proficient with.
            </p>
        </AnimatedContainer>

        <AnimatedContainer
            delay={0.4}
            className="mt-12 grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
            {allSkills.map((feature, i) => (
                <FeatureCard key={i} feature={feature} />
            ))}
        </AnimatedContainer>
      </div>
    </section>
  );
};

export default Skills;
