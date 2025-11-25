import { NavLink } from "@/components/NavLink";
import logo from "@/assets/pf-gym-logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink to="/">
          <img 
            src={logo} 
            alt="PF Gym & Fitness" 
            className="h-12 w-auto"
          />
        </NavLink>
        
        <div className="flex gap-8">
          <NavLink 
            to="/"
            className="text-foreground hover:text-primary transition-colors font-medium"
            activeClassName="text-primary"
          >
            Home
          </NavLink>
          <NavLink 
            to="/about"
            className="text-foreground hover:text-primary transition-colors font-medium"
            activeClassName="text-primary"
          >
            About Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
