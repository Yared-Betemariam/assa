import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Button } from "./ui/button";

const Header = () => {
  const navLinks = [
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Dashboard",
      path: "/projects",
    },
    {
      name: "Projects",
      path: "/projects",
    },
  ];
  return (
    <header className=" h-24 border-b-2 border-black/10">
      <section className="wrapper h-full flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Logo />
          <div className="flex space-x-4">
            {navLinks.map((item) => (
              <Link className="opacity-70" to={item.path} key={item.path}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <Button size={"lg"} className="rounded-full">
            Sign In
          </Button>
        </div>
      </section>
    </header>
  );
};
export default Header;
