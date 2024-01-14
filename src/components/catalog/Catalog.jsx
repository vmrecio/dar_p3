import CatalogFilters from "./CatalogFilters";
import CatalogList from "./CatalogList";
import { CatalogProvider } from "../../contexts/CatalogContext";

const Catalog = () => {
  return (
    <CatalogProvider>
      <main>
        <div className="container mx-auto px-4 my-4">
          <div className="flex gap-4">
            <div className="w-3/12 flex-none">
              <div className="h-full border-r-2 border-gray-300 p-r-3">
                <CatalogFilters />
              </div>
            </div>
            <div className="grow">
              <CatalogList />
            </div>
          </div>
        </div>
      </main>
    </CatalogProvider>
  );
};

export default Catalog;
