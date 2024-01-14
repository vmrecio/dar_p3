// import React, { useState, useEffect } from "react";
import { useCatalog } from "../../contexts/CatalogContext";
// import Button from "../common/Button";
import StarRating from "../common/StarRating";

const CatalogFilters = () => {
  const { catalogCatagories, filterChange } = useCatalog();
  // const { setFilter, resetCatalog, getFilters, selectedCategories } = useCatalog();
  // const [checkedCategories, setCheckedCategories] = useState(new Set());

  // useEffect(() => {
  //   setCheckedCategories(new Set(selectedCategories));
  // }, [selectedCategories]);

  // const handleCategoryChange = (category, isChecked) => {
  //   if (isChecked) {
  //     setCheckedCategories(prev => new Set(prev.add(category)));
  //   } else {
  //     setCheckedCategories(prev => {
  //       const newSet = new Set(prev);
  //       newSet.delete(category);
  //       return newSet;
  //     });
  //   }
  //   setFilter(category, isChecked);
  // };

  // const categories = Array.from(getFilters());

  const handleFilterChange = (filterName, value, ev) => {
    const action = ev.target?.checked ? "add" : "remove";
    filterChange(filterName, value, action);
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="font-semibold mb-2">Tipo</h2>
        {catalogCatagories.map((category) => (
          <div key={category} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={category}
              name={category}
              className="mr-2"
              onChange={(ev) => handleFilterChange("category", category, ev)}
            />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
      </div>

      <div id="valoraciones" className="mb-6">
        <h2 className="font-semibold mb-2">Valoraciones</h2>
        {[1, 2, 3, 4, 5].map((rating) => (
          <div key={rating} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`rating-${rating}`}
              name={`rating-${rating}`}
              className="mr-2"
              onChange={(ev) => handleFilterChange("rating", rating, ev)}
            />
            <label htmlFor={`rating-${rating}`}>
              <StarRating rating={rating} />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogFilters;
