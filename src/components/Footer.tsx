import { NavLink } from "@/components/NavLink";
import logo from "@/assets/pf-gym-logo.png";

const Footer = () => {
  return (
    <footer className="bg-deep-black border-t border-border py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <img 
              src={logo} 
              alt="PF Gym & Fitness" 
              className="h-12 w-auto"
            />
            <nav className="flex gap-6">
              <NavLink 
                to="/"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </NavLink>
              <NavLink 
                to="/about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About Us
              </NavLink>
            </nav>
          </div>
          <p className="text-muted-foreground text-sm">
            © PF Gym 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
