import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <div className="max-w-md mx-auto">
        <h1 className="font-heading text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="font-heading text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Link to="/">
          <Button size="lg" className="gap-2">
            <Home className="h-5 w-5" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
