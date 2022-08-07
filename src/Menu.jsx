import "./styles.css";

export default function Menu({ menuData }) {
  return (
    <div className="menuItems">
      {menuData.map((item) => {
        const { id, category, dish, desc, image, price } = item;
        return (
          <div className="menuList" key={id}>
            <img src={image} alt={dish} />
            <div className="dishInfo">
              <div className="dishBasic">
                <h3 className="dishName">{dish}</h3>
                <p className="dishPrice">${price}</p>
              </div>
              <p className="dishDesc">{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
