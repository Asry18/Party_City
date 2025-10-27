import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, PartyPopper, Gift, Sparkles, Shield } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
        <Link to="/admin" className="absolute top-4 right-4">
          <Button variant="outline" size="sm" className="gap-2">
            <Shield className="h-4 w-4" />
            Admin
          </Button>
        </Link>
        <div className="container mx-auto px-4 py-20 text-center">
          <PartyPopper className="h-20 w-20 mx-auto mb-6 text-primary animate-bounce" />
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Welcome to Party City
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Your one-stop destination for all party supplies and celebration essentials
          </p>
          <Link to="/products">
            <Button size="lg" className="gap-2 text-lg px-8 py-6">
              Shop Now <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-border hover:border-primary transition-colors">
              <Gift className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-heading text-xl font-semibold mb-2">
                Wide Selection
              </h3>
              <p className="text-muted-foreground">
                Thousands of party supplies for every occasion and theme
              </p>
            </div>
            <div className="text-center p-6 rounded-lg border border-border hover:border-primary transition-colors">
              <Sparkles className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-heading text-xl font-semibold mb-2">
                Quality Products
              </h3>
              <p className="text-muted-foreground">
                Premium quality items to make your celebration memorable
              </p>
            </div>
            <div className="text-center p-6 rounded-lg border border-border hover:border-primary transition-colors">
              <PartyPopper className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="font-heading text-xl font-semibold mb-2">
                Fast Delivery
              </h3>
              <p className="text-muted-foreground">
                Quick and reliable shipping to get your party started on time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Ready to Start Planning?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Browse our collection and find everything you need for your perfect celebration
          </p>
          <Link to="/products">
            <Button size="lg" variant="default" className="gap-2">
              Browse Products <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
