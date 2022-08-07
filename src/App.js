import { useState } from "react";
import Menu from "./Menu";
import Navigation from "./Navigation";
import "./styles.css";
import menuList from "./menuData";

const categortList = ["All", ...new Set(menuList.map((item) => item.category))];
console.log(categortList);

export default function App() {
  const [menuData, setMenuData] = useState(menuList);
  const [category, setCategory] = useState(categortList);

  const filterbyCategory = (category) => {
    if (category === "All") {
      return setMenuData(menuList);
    }
    const newList = menuList.filter((value) => value.category === category);
    setMenuData(newList);
  };

  return (
    <div className="App">
      <h2>Menu</h2>
      <div className="SpaceLine" />
      <Navigation filterbyCategory={filterbyCategory} category={category} />
      <Menu menuData={menuData} />
    </div>
  );
}
