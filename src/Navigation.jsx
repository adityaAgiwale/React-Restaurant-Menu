import "./styles.css";

export default function Navigation({ filterbyCategory, category }) {
  return (
    <div className="Navigation__Menu">
      {category.map((item, id) => {
        return (
          <button
            key={id}
            className="category__button"
            onClick={() => filterbyCategory(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
