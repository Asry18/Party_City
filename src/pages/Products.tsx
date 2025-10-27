import { useState } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { Product } from '@/types/product';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

// Mock products data
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Birthday Party Balloons Set',
    description: 'Colorful balloon set perfect for birthday celebrations',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500',
    category: 'Balloons',
    inStock: true,
    featured: true,
    rating: 5,
  },
  {
    id: '2',
    name: 'Party Hat Collection',
    description: 'Assorted party hats for all ages',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=500',
    category: 'Accessories',
    inStock: true,
    rating: 4,
  },
  {
    id: '3',
    name: 'Confetti Cannon',
    description: 'Large confetti cannon for big celebrations',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500',
    category: 'Decorations',
    inStock: true,
    featured: true,
    rating: 5,
  },
  {
    id: '4',
    name: 'Streamers Pack',
    description: 'Multi-color streamers for decorating',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1464547323744-4edd0cd0c746?w=500',
    category: 'Decorations',
    inStock: false,
  },
  {
    id: '5',
    name: 'Party Plates Set',
    description: 'Disposable plates for easy cleanup',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500',
    category: 'Tableware',
    inStock: true,
    rating: 4,
  },
  {
    id: '6',
    name: 'LED Party Lights',
    description: 'Color-changing LED lights for ambiance',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1481162854517-d9e353af153d?w=500',
    category: 'Lighting',
    inStock: true,
    featured: true,
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
