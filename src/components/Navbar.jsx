import React, { useState, useRef } from "react";
import gsap from "gsap";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    if (!menuOpen) {
      menuRef.current.style.display = "flex";

      gsap.fromTo(
        menuRef.current,
        { y: "-100%" },
        {
          y: 0,
          duration: 0.8,
          ease: "power4.out",
        }
      );

      gsap.fromTo(
        menuRef.current.querySelectorAll("a"),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          delay: 0.3,
        }
      );

      // ✅ Animation for Login/Logout buttons
      gsap.fromTo(
        document.querySelectorAll(".login-btn, .logout-btn"),
        { opacity: 0, y: -10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          delay: 0.6,
          stagger: 0.1,
        }
      );
    } else {
      gsap.to(menuRef.current, {
        y: "-100%",
        duration: 0.8,
        ease: "power4.inOut",
        onComplete: () => {
          menuRef.current.style.display = "none";
        },
      });
    }
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 md:p-9 p-3 w-full flex items-center justify-between">
        <img src="/images/Adobe Express - file (2).png" alt="nav-logo" className="h-10" />
        <button
          onClick={toggleMenu}
          className="text-lg z-50"
          style={{
            marginRight: "800px",
            color: menuOpen ? "white" : "black",
          }}
        >

          <i className="ri-arrow-down-double-fill text-4xl"></i>
        </button>

        {/* 🔒 Login / Logout Buttons */}
        <div className="absolute right-6 top-6 flex space-x-4"   onClick={() => navigate("/login")}>
            
          <button className="login-btn px-4 py-2 rounded bg-yellow-400 text-black font-semibold shadow hover:scale-105 transition-all duration-300 " >
            Login
          </button>
          <button className="logout-btn px-4 py-2 rounded bg-red-500 text-white font-semibold shadow hover:scale-105 transition-all duration-300" onClick={() => navigate("/logout")}>
            Logout
          </button>
        </div>
      </nav>

      <div
        ref={menuRef}
        className="fixed top-0 left-0 w-full h-screen bg-black text-white flex flex-row items-center justify-center z-40"
        style={{ transform: "translateY(-100%)", display: "none" }}
      >
        <ul className="space-y-6 text-2xl text-center">
          <li>
            <NavLink to="/" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" onClick={toggleMenu}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={toggleMenu}>
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
