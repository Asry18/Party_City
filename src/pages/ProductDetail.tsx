import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, ArrowLeft, Star } from 'lucide-react';
import { Product } from '@/types/product';

// Import product images
import balloonArch from '@/assets/products/balloon-arch.jpg';
import candleSet from '@/assets/products/candle-set.jpg';
import coffeeMugs from '@/assets/products/coffee-mugs.jpg';
import confettiHearts from '@/assets/products/confetti-hearts.jpg';
import coupleBracelets from '@/assets/products/couple-bracelets.jpg';
import heartDecorations from '@/assets/products/heart-decorations.jpg';
import jewelryBox from '@/assets/products/jewelry-box.jpg';
import loveLetters from '@/assets/products/love-letters.jpg';
import loveLock from '@/assets/products/love-lock.jpg';
import pastelBouquet from '@/assets/products/pastel-bouquet.jpg';
import photoAlbum from '@/assets/products/photo-album.jpg';
import pinkPeonies from '@/assets/products/pink-peonies.jpg';
import redRoses from '@/assets/products/red-roses.jpg';
import roseLights from '@/assets/products/rose-lights.jpg';
import whiteOrchid from '@/assets/products/white-orchid.jpg';

// Mock product data (in a real app, this would be fetched from an API)
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Balloon Arch Kit',
    description: 'Create a stunning balloon arch for your celebration. This comprehensive kit includes everything you need to create a professional-looking balloon display.',
    price: 29.99,
    image: balloonArch,
    category: 'Decorations',
    inStock: true,
    featured: true,
    rating: 5,
  },
  {
    id: '2',
    name: 'Romantic Candle Set',
    description: 'Set of beautifully scented candles perfect for romantic occasions. Creates the perfect ambiance for any celebration.',
    price: 24.99,
    image: candleSet,
    category: 'Candles',
    inStock: true,
    rating: 5,
  },
  {
    id: '3',
    name: 'Couple Coffee Mugs',
    description: 'Matching coffee mugs for the perfect couple. High quality ceramic with beautiful designs.',
    price: 18.99,
    image: coffeeMugs,
    category: 'Gifts',
    inStock: true,
    rating: 4,
  },
  {
    id: '4',
    name: 'Confetti Hearts',
    description: 'Heart-shaped confetti for romantic celebrations. Perfect for weddings, anniversaries, or Valentine\'s Day.',
    price: 8.99,
    image: confettiHearts,
    category: 'Decorations',
    inStock: true,
    featured: true,
    rating: 5,
  },
  {
    id: '5',
    name: 'Couple Bracelets',
    description: 'Matching bracelets for couples. Beautiful design that symbolizes your connection.',
    price: 34.99,
    image: coupleBracelets,
    category: 'Jewelry',
    inStock: true,
    rating: 5,
  },
  {
    id: '6',
    name: 'Heart Wall Decorations',
    description: 'Beautiful heart decorations for your celebration. Easy to hang and reusable.',
    price: 15.99,
    image: heartDecorations,
    category: 'Decorations',
    inStock: true,
    rating: 4,
  },
  {
    id: '7',
    name: 'Elegant Jewelry Box',
    description: 'Beautiful jewelry box for storing precious items. Features soft velvet interior and elegant exterior.',
    price: 45.99,
    image: jewelryBox,
    category: 'Gifts',
    inStock: true,
    featured: true,
    rating: 5,
  },
  {
    id: '8',
    name: 'Love Letters Set',
    description: 'Decorative love letters for romantic displays. Spell out your message of love.',
    price: 22.99,
    image: loveLetters,
    category: 'Decorations',
    inStock: true,
    rating: 4,
  },
  {
    id: '9',
    name: 'Love Lock',
    description: 'Symbolic love lock for couples. Perfect for special occasions and anniversaries.',
    price: 12.99,
    image: loveLock,
    category: 'Gifts',
    inStock: false,
  },
  {
    id: '10',
    name: 'Pastel Bouquet',
    description: 'Beautiful pastel colored flower bouquet. Soft, elegant colors perfect for any celebration.',
    price: 39.99,
    image: pastelBouquet,
    category: 'Flowers',
    inStock: true,
    featured: true,
    rating: 5,
  },
  {
    id: '11',
    name: 'Memory Photo Album',
    description: 'Preserve your precious memories in this beautiful album. High-quality pages and elegant cover.',
    price: 28.99,
    image: photoAlbum,
    category: 'Gifts',
    inStock: true,
    rating: 5,
  },
  {
    id: '12',
    name: 'Pink Peonies Bouquet',
    description: 'Fresh pink peonies for elegant celebrations. Beautiful and fragrant flowers.',
    price: 44.99,
    image: pinkPeonies,
    category: 'Flowers',
    inStock: true,
    rating: 5,
  },
  {
    id: '13',
    name: 'Red Roses Bouquet',
    description: 'Classic red roses for romantic occasions. The timeless symbol of love and passion.',
    price: 49.99,
    image: redRoses,
    category: 'Flowers',
    inStock: true,
    featured: true,
    rating: 5,
  },
  {
    id: '14',
    name: 'Rose String Lights',
    description: 'Romantic rose-shaped LED string lights. Create a magical atmosphere for your celebration.',
    price: 19.99,
    image: roseLights,
    category: 'Lighting',
    inStock: true,
    rating: 4,
  },
  {
    id: '15',
    name: 'White Orchid',
    description: 'Elegant white orchid plant. Long-lasting beauty for your home or special event.',
    price: 35.99,
    image: whiteOrchid,
    category: 'Flowers',
    inStock: true,
    rating: 5,
  },
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();

  // Find product by id
  const product = mockProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="font-heading text-3xl font-bold mb-4">Product Not Found</h1>
        <Link to="/products">
          <Button>Back to Products</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/products">
        <Button variant="ghost" className="mb-6 gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to Products
        </Button>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden rounded-lg border border-border">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full"
          />
          {product.featured && (
            <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
              Featured
            </Badge>
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col space-y-6">
          <div>
            <h1 className="font-heading text-4xl font-bold mb-2">{product.name}</h1>
            <Badge variant="secondary">{product.category}</Badge>
          </div>

          {product.rating && (
            <div className="flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < product.rating! ? 'fill-accent text-accent' : 'text-muted'
                  }`}
                />
              ))}
              <span className="text-sm text-muted-foreground">({product.rating} stars)</span>
            </div>
          )}

          <p className="text-lg text-muted-foreground">{product.description}</p>

          <div className="flex items-baseline gap-2">
            <p className="text-4xl font-heading font-bold text-primary">
              ${product.price.toFixed(2)}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {product.inStock ? (
              <>
                <Button
                  size="lg"
                  onClick={() => addToCart(product)}
                  className="gap-2 flex-1"
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </Button>
                <Badge variant="outline" className="text-green-600 border-green-600">
                  In Stock
                </Badge>
              </>
            ) : (
              <Badge variant="secondary" className="text-lg px-6 py-3">
                Out of Stock
              </Badge>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
