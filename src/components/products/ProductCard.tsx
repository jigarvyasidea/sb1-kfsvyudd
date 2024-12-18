import React from 'react';
import { Plus, Info } from 'lucide-react';

interface ProductCardProps {
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  onClick: () => void;
}

const ProductCard = ({ name, category, description, imageUrl, onClick }: ProductCardProps) => {
  return (
    <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="aspect-w-16 aspect-h-9 relative">
        <img 
          src={imageUrl} 
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
      </div>
      
      <div className="p-6">
        <span className="text-blue-400 text-sm font-medium">{category}</span>
        <h3 className="mt-2 text-xl font-semibold text-white">{name}</h3>
        <p className="mt-2 text-gray-300 line-clamp-2">{description}</p>
        
        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={onClick}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4 mr-2" />
            Learn More
          </button>
          
          <button
            className="p-2 text-gray-300 hover:text-white transition-colors"
            aria-label="Product Information"
          >
            <Info className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;