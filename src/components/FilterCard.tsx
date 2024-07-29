// import { Upload } from "lucide-react";
import filterData from "./../filterData.json";
import { Filters } from "@/types";

type Props = {
  filters: Filters,
  setFilters: (filters: Filters) => void
}

const FilterCard = ({ filters, setFilters }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    let updatedValues = filters[name as keyof Filters];

    if (checked) {
      // Add the filter value if checked
      updatedValues = [...updatedValues, value];
    } else {
      // Remove the filter value if unchecked
      updatedValues = updatedValues.filter((item: string) => item !== value);
    }

    setFilters({
      ...filters,
      [name]: updatedValues
    });
  };

  return (
    <div className="flex flex-col gap-3 rounded-lg border shadow-lg p-4 w-64">
      <div>
        <h1 className="font-semibold text-2xl pb-5">FILTERS</h1>
        <h3 className="border-b">Colors</h3>
        <div className="flex flex-col py-3">
          {filterData.color.map((color, index) => (
            <label key={index} className="flex items-center gap-6">
              <input
                type="checkbox"
                value={color}
                name="colors"
                onChange={handleChange}
              />
              {color}
            </label>
          ))}
        </div>
      </div>
      <div>
        <h3 className="border-b">Gender</h3>
        <div className="flex flex-col py-3">
          {filterData.gender.map((gender, index) => (
            <label key={index} className="flex items-center gap-6">
              <input
                type="checkbox"
                value={gender}
                name="gender"
                onChange={handleChange}
              />
              {gender}
            </label>
          ))}
        </div>
      </div>
      <div>
        <h3 className="border-b">Price</h3>
        <div className="flex flex-col py-3">
          {filterData.price.map((price, index) => (
            <label key={index} className="flex items-center gap-6">
              <input
                type="checkbox"
                value={price[0]}
                name="price"
                onChange={handleChange}
              />
              {price[1]}
            </label>
          ))}
        </div>
      </div>
      <div>
        <h3 className="border-b">Type</h3>
        <div className="flex flex-col py-3">
          {filterData.type.map((type, index) => (
            <label key={index} className="flex items-center gap-6">
              <input
                type="checkbox"
                value={type}
                name="type"
                onChange={handleChange}
              />
              {type}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterCard;
