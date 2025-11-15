import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const ResumeCTA = () => {
  return (
    <section id="resume-cta" className="py-20 sm:py-24">
      <div className="section-container">
        <motion.div 
          className="p-8 sm:p-12 rounded-lg bg-transparent border border-white/10 text-center glow-border"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white">
            Want to know more about my experience?
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-primary-foreground/80">
            Download my resume to explore my skills and accomplishments in detail.
          </p>
          <div className="mt-8">
            <a href="/Deekshitha_NV_Resume.pdf" download>
              <Button size="lg" className="bg-white text-primary hover:bg-gray-200">
                <Download className="mr-2 h-5 w-5" /> Download Resume
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeCTA;
