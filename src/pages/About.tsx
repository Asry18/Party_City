import { PartyPopper, Users, Heart, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl font-bold mb-4">About Party City</h1>
          <p className="text-xl text-muted-foreground">
            Your trusted partner in creating unforgettable celebrations
          </p>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-muted-foreground">
            Since our founding, Party City has been dedicated to bringing joy and excitement to every celebration.
            We believe that every moment worth celebrating deserves the perfect supplies, decorations, and atmosphere.
          </p>
          <p className="text-muted-foreground">
            Our mission is to provide high-quality party supplies that transform ordinary gatherings into
            extraordinary memories. From birthdays to weddings, from corporate events to casual get-togethers,
            we have everything you need to make your event special.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="text-center p-6 rounded-lg border border-border">
            <PartyPopper className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="font-heading text-xl font-semibold mb-2">Quality Products</h3>
            <p className="text-muted-foreground">
              We source only the finest party supplies to ensure your celebration is perfect
            </p>
          </div>
          <div className="text-center p-6 rounded-lg border border-border">
            <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="font-heading text-xl font-semibold mb-2">Customer Focus</h3>
            <p className="text-muted-foreground">
              Your satisfaction is our priority, and we're here to help every step of the way
            </p>
          </div>
          <div className="text-center p-6 rounded-lg border border-border">
            <Heart className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="font-heading text-xl font-semibold mb-2">Passionate Team</h3>
            <p className="text-muted-foreground">
              Our dedicated team loves celebrations as much as you do
            </p>
          </div>
          <div className="text-center p-6 rounded-lg border border-border">
            <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h3 className="font-heading text-xl font-semibold mb-2">Trusted Brand</h3>
            <p className="text-muted-foreground">
              Years of experience making celebrations special for thousands of customers
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8 text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg text-muted-foreground">
            To be the go-to destination for party supplies worldwide, bringing happiness and
            creating lasting memories for every celebration, big or small.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
