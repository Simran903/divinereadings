import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-around px-8 py-8 border-b shadow-sm text-xl">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img
          src="/logo.png"
          alt="logo"
          className="h-8 w-8"
        />
        <span className="text-xl font-bold text-gray-800">DivineReadings</span>
      </div>

      {/* Navigation Links */}
      <div className="space-x-16 text-gray-800">
        <Link href="#">
          Home
        </Link>
        <Link href="#">
          About Me
        </Link>
        <Link href="#">
          Services
        </Link>
        <Link href="#">
          Testimonials
        </Link>
        <Link href="#">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;