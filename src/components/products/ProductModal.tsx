import React from 'react';
import { X, Download, Share2 } from 'lucide-react';

interface ProductModalProps {
  product: {
    name: string;
    category: string;
    description: string;
    imageUrl: string;
    details: {
      ingredients: string[];
      usage: string;
      sideEffects: string[];
    };
  };
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-900 opacity-75" onClick={onClose}></div>
        </div>

        <div className="inline-block align-bottom bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="bg-gray-800">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="px-6 pt-5 pb-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                  <p className="mt-1 text-sm text-blue-400">{product.category}</p>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 text-gray-400 hover:text-white">
                    <Download className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-white">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-lg font-semibold text-white">Description</h4>
                <p className="mt-2 text-gray-300">{product.description}</p>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold text-white">Key Ingredients</h4>
                <ul className="mt-2 grid grid-cols-2 gap-2">
                  {product.details.ingredients.map((ingredient, index) => (
                    <li key={index} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold text-white">Usage</h4>
                <p className="mt-2 text-gray-300">{product.details.usage}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;