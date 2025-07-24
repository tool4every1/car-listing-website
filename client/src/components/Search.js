import React, { useState } from 'react';

export default function CarSearch() {
  const [filters, setFilters] = useState({
    make: '',
    minPrice: 0,
    maxPrice: 10000000,
    fuelType: ''
  });

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <select 
          className="p-2 border rounded"
          onChange={e => setFilters({...filters, make: e.target.value})}
        >
          <option value="">All Brands</option>
          <option value="Toyota">Toyota</option>
          <option value="Honda">Honda</option>
        </select>
        
        <input 
          type="number" 
          placeholder="Min Price" 
          className="p-2 border rounded"
          onChange={e => setFilters({...filters, minPrice: e.target.value})}
        />
        
        <select 
          className="p-2 border rounded"
          onChange={e => setFilters({...filters, fuelType: e.target.value})}
        >
          <option value="">Fuel Type</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Electric</option>
        </select>
        
        <button 
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          onClick={() => console.log('Search:', filters)}
        >
          Search Cars
        </button>
      </div>
    </div>
  );
}
