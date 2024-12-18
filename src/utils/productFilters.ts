// Utility functions for filtering and searching products
export interface FilterOptions {
  category: string;
  searchQuery: string;
}

export const filterProducts = (products: any[], options: FilterOptions) => {
  return products.filter(product => {
    const matchesCategory = options.category === 'all' || product.category === options.category;
    const matchesSearch = product.name.toLowerCase().includes(options.searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(options.searchQuery.toLowerCase()) ||
                         product.category.toLowerCase().includes(options.searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
};

export const getUniqueCategories = (products: any[]): string[] => {
  const categories = products.map(product => product.category);
  return ['all', ...new Set(categories)];
};