import "../styles/components/categorybox.css";

export const CategoryBox = ({ categoryData, setActiveCard, setCardStyle }) => {
  const { categoryName, categoryImg } = categoryData;

  return (
    <div
      className={`category-box flex-column-center ${setCardStyle}`}
      onClick={() => setActiveCard(categoryName)}
    >
      <img className="category-icon mg-top-sm" src={categoryImg}></img>
      <h4 className="mg-y-sm">{categoryName}</h4>
    </div>
  );
};
