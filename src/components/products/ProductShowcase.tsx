import React, { useState, useMemo } from 'react';
import Container from '../ui/Container';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';
import ProductSearch from './ProductSearch';
import ProductFilter from './ProductFilter';
import { products } from '../../data/products';
import { filterProducts, getUniqueCategories } from '../../utils/productFilters';

const ProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = useMemo(() => getUniqueCategories(products), []);
  
  const filteredProducts = useMemo(() => {
    return filterProducts(products, {
      category: selectedCategory,
      searchQuery: searchQuery,
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="py-20 bg-gray-900" id="products">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Our Products
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Discover our innovative pharmaceutical solutions
          </p>
        </div>

        <div className="space-y-6 mb-8">
          <ProductSearch
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
          
          <ProductFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No products found matching your criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        )}

        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </Container>
    </section>
  );
};

export default ProductShowcase;