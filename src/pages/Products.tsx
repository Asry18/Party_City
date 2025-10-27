import { useState } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { Product } from '@/types/product';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

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

// Mock products data
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Balloon Arch Kit',
    description: 'Create a stunning balloon arch for your celebration',
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
    description: 'Set of scented candles perfect for romantic occasions',
    price: 24.99,
    image: candleSet,
    category: 'Candles',
    inStock: true,
    rating: 5,
  },
  {
    id: '3',
    name: 'Couple Coffee Mugs',
    description: 'Matching coffee mugs for the perfect couple',
    price: 18.99,
    image: coffeeMugs,
    category: 'Gifts',
    inStock: true,
    rating: 4,
  },
  {
    id: '4',
    name: 'Confetti Hearts',
    description: 'Heart-shaped confetti for romantic celebrations',
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
    description: 'Matching bracelets for couples',
    price: 34.99,
    image: coupleBracelets,
    category: 'Jewelry',
    inStock: true,
    rating: 5,
  },
  {
    id: '6',
    name: 'Heart Wall Decorations',
    description: 'Beautiful heart decorations for your celebration',
    price: 15.99,
    image: heartDecorations,
    category: 'Decorations',
    inStock: true,
    rating: 4,
  },
  {
    id: '7',
    name: 'Elegant Jewelry Box',
    description: 'Beautiful jewelry box for storing precious items',
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
    description: 'Decorative love letters for romantic displays',
    price: 22.99,
    image: loveLetters,
    category: 'Decorations',
    inStock: true,
    rating: 4,
  },
  {
    id: '9',
    name: 'Love Lock',
    description: 'Symbolic love lock for couples',
    price: 12.99,
    image: loveLock,
    category: 'Gifts',
    inStock: false,
  },
  {
    id: '10',
    name: 'Pastel Bouquet',
    description: 'Beautiful pastel colored flower bouquet',
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
    description: 'Preserve your precious memories in this beautiful album',
    price: 28.99,
    image: photoAlbum,
    category: 'Gifts',
    inStock: true,
    rating: 5,
  },
  {
    id: '12',
    name: 'Pink Peonies Bouquet',
    description: 'Fresh pink peonies for elegant celebrations',
    price: 44.99,
    image: pinkPeonies,
    category: 'Flowers',
    inStock: true,
    rating: 5,
  },
  {
    id: '13',
    name: 'Red Roses Bouquet',
    description: 'Classic red roses for romantic occasions',
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
    description: 'Romantic rose-shaped LED string lights',
    price: 19.99,
    image: roseLights,
    category: 'Lighting',
    inStock: true,
    rating: 4,
  },
  {
    id: '15',
    name: 'White Orchid',
    description: 'Elegant white orchid plant',
    price: 35.99,
    image: whiteOrchid,
    category: 'Flowers',
    inStock: true,
    rating: 5,
  },
];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = mockProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-heading text-4xl font-bold mb-4">Our Products</h1>
        <p className="text-muted-foreground mb-6">
          Browse our wide selection of party supplies and decorations
        </p>
        
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No products found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
