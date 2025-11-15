import { FeatureSteps } from '@/components/ui/feature-section';

const aboutFeatures = [
  {
    step: '01',
    title: 'About Me',
    content: 'I’m a Computer Science graduate passionate about creating efficient and secure full-stack web applications using .NET and Angular.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    step: '02',
    title: 'Education',
    content: 'Completed B.Tech in Computer Science (2020-2024) and a Pre-University course (2018-2020) at RGUKT Ongole.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop'
  },
  {
    step: '03',
    title: 'Core Skills',
    content: 'Proficient in C#, ASP.NET Core, Angular, SQL Server, and building secure REST APIs. Experienced with cloud platforms like Azure.',
    image: 'https://images.unsplash.com/photo-1517694712202-1428bc648c2a?q=80&w=2070&auto=format&fit=crop'
  }
];

const About = () => {
  return (
    <section id="about">
      <FeatureSteps
        features={aboutFeatures}
        title="My Journey"
        autoPlayInterval={5000}
      />
    </section>
  );
};

export default About;
