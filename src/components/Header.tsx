import { Link } from "react-router-dom";
import MobileNav from "./MobNav";
const Header = () => {
  return (
    <div className="border-b-2 border-b-orange-500 py-6 bg-gray-200">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold tracking-tighter text-orange-500"
        >
          MernEat
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
