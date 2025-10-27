import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, ArrowLeft, Star } from 'lucide-react';
import { Product } from '@/types/product';

// Mock product data (in a real app, this would be fetched from an API)
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Birthday Party Balloons Set',
    description: 'Colorful balloon set perfect for birthday celebrations. Includes 50 premium quality latex balloons in assorted colors.',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800',
    category: 'Balloons',
    inStock: true,
    featured: true,
    rating: 5,
  },
  // Add more products as needed
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
