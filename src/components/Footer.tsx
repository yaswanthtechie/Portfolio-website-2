import { Github, Mail } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer>
      <div className="section-container py-8">
        <Separator className="bg-white/10 mb-8" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © 2025 Alex Morgan — All Rights Reserved
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/alex-morgan" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="mailto:alex.morgan.dev@example.com" className="text-muted-foreground hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
