import React, { useContext, useState } from "react";

import sourceCatalog from './fakeCatalog.json';

const CatalogContext = React.createContext();

const CatalogProvider = ({ children }) => {
  // const [catalog, setCatalog] = useState(sourceCatalog);
  const [selectedFilters, setSelectedFilters] = useState({});

  const catalogCatagories = [...new Set(sourceCatalog.map(product => product.category))];

  const filterChange = (filter, value, action) => {
    if (action === "add") {
      if (typeof selectedFilters[filter] === "undefined") {
        setSelectedFilters(prev => ({ ...prev, [filter]: [value] }));
      } else {
        setSelectedFilters(prev => {
          const newFilterArr = [...prev[filter], value];
          return ({ ...prev, [filter]: newFilterArr });
        });
      }
    } else if (action === "remove") {
      setSelectedFilters(prev => {
        const newFilterArr = [...prev[filter]].filter(item => item !== value);
        return ({ ...prev, [filter]: newFilterArr });
      });
    }
  }

  const getCatalog = () => {
    return sourceCatalog.filter(product => {
      let keep = true;
      Object.keys(selectedFilters).forEach(filter => {
        if (selectedFilters[filter].length > 0) {
          if (!selectedFilters[filter].includes(product[filter])) {
            keep = false;
          }
        }
      });
      return keep;
    })
  }

  const catalog = getCatalog()

  // const [selectedCategories, setSelectedCategories] = useState(new Set());

  // const setFilter = (category, isChecked) => {
  //   setSelectedCategories(prevSelected => {
  //     const newSelected = new Set(prevSelected);
  //     if (isChecked) {
  //       newSelected.add(category);
  //     } else {
  //       newSelected.delete(category);
  //     }

  //     if (newSelected.size === 0) {
  //       setCatalog(sourceCatalog);
  //     } else {
  //       const filteredCatalog = sourceCatalog.filter(product =>
  //         newSelected.has(product.category)
  //       );
  //       setCatalog(filteredCatalog);
  //     }

  //     return newSelected;
  //   });
  // };

  // const resetCatalog = () => {
  //   setSelectedCategories(new Set());
  //   setCatalog(sourceCatalog);
  // };

  // const getFilters = () => {
  //   const uniqueCategories = new Set();
  //   sourceCatalog.forEach(product => {
  //     uniqueCategories.add(product.category);
  //   });
  //   return uniqueCategories;
  // };

  return (
    <CatalogContext.Provider value={{ catalog, selectedFilters, catalogCatagories, filterChange }}>
      {children}
    </CatalogContext.Provider>
  );
};

const useCatalog = () => {
  const context = useContext(CatalogContext);
  return context;
};

export { CatalogProvider, useCatalog };
