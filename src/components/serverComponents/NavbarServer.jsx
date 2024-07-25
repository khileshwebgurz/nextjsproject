// src/components/NavbarServer.jsx
import Link from "next/link";

const NavbarServer = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact</Link>
          </li>
          <li>
            <Link href="#">Join Us</Link>
          </li>
          <li>
            <Link href="/our-portfolio">Our Portfolio</Link>
          </li>
          <li>
            <Link href="#">Resources</Link>
          </li>
          <li>
            <Link href="#">Services</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavbarServer;
