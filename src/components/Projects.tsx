import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { projects, projectCategories } from '@/data/content';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <section id="projects">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center">Projects</h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
            A selection of my work. Filter by category to see more.
          </p>
        </motion.div>

        <div className="mt-12 flex justify-center">
          <Tabs value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="bg-background border border-white/10">
              {projectCategories.map(category => (
                <TabsTrigger key={category} value={category} className="data-[state=active]:bg-primary/20 data-[state=active]:text-white">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <motion.div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
              >
                <Card className="h-full flex flex-col bg-card-gradient border border-white/10 glow-border">
                  <CardHeader>
                    <div className="aspect-video bg-primary-gradient rounded-md mb-4"></div>
                    <CardTitle className="font-heading">{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map(t => <Badge key={t} variant="secondary">{t}</Badge>)}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                  <CardFooter>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button variant="outline" className="w-full bg-white/5 hover:bg-white/10 border-white/20">
                        View Project <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
