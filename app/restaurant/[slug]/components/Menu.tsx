import { Item } from "@prisma/client";
import MenuCard from "./MenuCard";

const Menu = ({ menu }: { menu: Item[] }) => {
  return (
    <main className="bg-white mt-5">
      <div>
        <div className="mt-4 pb-1 mb-1">
          <h1 className="font-bold text-4xl">Menu</h1>
        </div>
        {menu?.length > 0 && (
          <div className="flex flex-wrap justify-between">
            {/* MENU CARD */}
            {menu.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        )}

        {menu.length === 0 && (
          <div className="flex flex-wrap justify-between">
            <p>Sorry, This restaurant has no menu Available YET</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Menu;
