import { CategoryBox } from "./CategoryBox";
import { v4 as uuid } from "uuid";
import { GetCategories } from "../services/getCategories";
import { Loader } from "../components/Loader";

import "../styles/components/categoryContainer.css";


export const CategoryContainer = ({ activeCard, setActiveCard }) => {
  const { loader, categories } = GetCategories();
  const displayCategories = categories;


  const setActiveCardStyle = (activeCard, categoryName) => {
    if (activeCard === categoryName) return "active-card";
    else return "inactive-card";
  };
  return (
    <div className="category-container">
      {loader && <Loader />}
      {!loader &&
        displayCategories.map((category) => (
          <CategoryBox
            key={uuid()}
            categoryData={category}
            setActiveCard={setActiveCard}
            setCardStyle={setActiveCardStyle(activeCard, category.categoryName)}
          />
        ))}
    </div>
  );
};
