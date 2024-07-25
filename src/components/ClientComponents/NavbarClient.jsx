// src/components/NavbarClient.jsx
"use client";
import { useState } from "react";
import Link from "next/link";

const NavbarClient = () => {
  // Dropdown state management
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [resourceDropdown, setResourceDropdown] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState({
    services: false,
    webDevelopment: false,
    webDesign: false,
    searchEngineOptimisation: false,
    mobileAppDevelopment: false,
    itService: false,
    ecommerceDevelopment: false,
    digitalMarketing: false,
    cmsDevelopment: false,
  });

  // Handlers for dropdown toggling
  const handleDropDown = () => setDropdownMenu(prev => !prev);
  const handleResourceDropDown = () => setResourceDropdown(prev => !prev);
  const handleServiceDropdown = (menu) => {
    setServiceDropdown(prev => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <>
      <li onMouseEnter={handleDropDown} onMouseLeave={handleDropDown}>
        <a href="#">Join Us</a>
        {dropdownMenu && (
          <ul className="dropdown">
            <li>
              <Link href="/Career">Career</Link>
            </li>
            <li>
              <Link href="/InternshipPrograms">Internship Programs</Link>
            </li>
          </ul>
        )}
      </li>
      <li onMouseEnter={handleResourceDropDown} onMouseLeave={handleResourceDropDown}>
        <a href="#">Resources</a>
        {resourceDropdown && (
          <ul className="dropdown">
            <li>
              <Link href="/Resources/Blog">Blog</Link>
            </li>
            <li>
              <Link href="/Resources/Infographics">Infographics</Link>
            </li>
          </ul>
        )}
      </li>
      <li
        onMouseEnter={() => handleServiceDropdown("services")}
        onMouseLeave={() => handleServiceDropdown("services")}
      >
        <a href="#">Services</a>
        {serviceDropdown.services && (
          <ul className="dropdown">
            {/* Web Development */}
            <li
              onMouseEnter={() => handleServiceDropdown("webDevelopment")}
              onMouseLeave={() => handleServiceDropdown("webDevelopment")}
            >
              <Link href="/Services/WebDevelopment">Web Development</Link>
              {serviceDropdown.webDevelopment && (
                <ul className="dropdown-submenu">
                  <li>
                    <Link href="/Services/WebDevelopment/FullStackDevelopment">
                      Full Stack Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/Services/WebDevelopment/AspDotNetDevelopment">
                      ASP .NET Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/Services/WebDevelopment/JavaWebDevelopment">
                      Java Web Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/Services/WebDevelopment/PhpDevelopment">
                      PHP Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/Services/WebDevelopment/PythonDevelopment">
                      Python Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/Services/WebDevelopment/RubyonRailDevelopment">
                      Ruby on Rails Development
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Web Design */}
            <li
              onMouseEnter={() => handleServiceDropdown("webDesign")}
              onMouseLeave={() => handleServiceDropdown("webDesign")}
            >
              <Link href="/Services/WebDesign">Web Design</Link>
              {serviceDropdown.webDesign && (
                <ul className="dropdown-submenu">
                  <li>
                    <Link href="/Services/WebDesign/HTML5">HTML5</Link>
                  </li>
                  <li>
                    <Link href="/Services/WebDesign/ParallaxDesign">
                      Parallax Design
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Search Engine Optimisation */}
            <li
              onMouseEnter={() => handleServiceDropdown("searchEngineOptimisation")}
              onMouseLeave={() => handleServiceDropdown("searchEngineOptimisation")}
            >
              <Link href="/Services/SearchEngineOptimisation">
                Search Engine Optimisation
              </Link>
              {serviceDropdown.searchEngineOptimisation && (
                <ul className="dropdown-submenu">
                  <li>
                    <Link href="/Services/SearchEngineOptimisation/EcommerceSEO">
                      Ecommerce SEO
                    </Link>
                  </li>
                  <li>
                    <Link href="/Services/SearchEngineOptimisation/LocalSEO">
                      Local SEO
                    </Link>
                  </li>
                  <li>
                    <Link href="/Services/SearchEngineOptimisation/OnlineReputationManagement">
                      Online Reputation Management
                    </Link>
                  </li>
                  <li>
                    <Link href="/Services/SearchEngineOptimisation/PaidMarketing">
                      Paid Marketing
                    </Link>
                  </li>
                  <li>
                    <Link href="/Services/SearchEngineOptimisation/SEO">
                      SEO
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Mobile App Development */}
            <li
              onMouseEnter={() => handleServiceDropdown("mobileAppDevelopment")}
              onMouseLeave={() => handleServiceDropdown("mobileAppDevelopment")}
            >
              <Link href="/Services/MobileAppDevelopment">
                Mobile App Development
              </Link>
              {serviceDropdown.mobileAppDevelopment && (
                <ul className="dropdown-submenu">
                  <li>
                    <Link href="/Services/MobileAppDevelopment/AndroidAppDevelopment">
                      Android App Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/Services/MobileAppDevelopment/HTML5AppDevelopment">
                      HTML5 App Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/Services/MobileAppDevelopment/iOSAppDevelopment">
                      iOS App Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/Services/MobileAppDevelopment/iPadAppDevelopment">
                      iPad App Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/Services/MobileAppDevelopment/iPhoneAppDevelopment">
                      iPhone App Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/Services/MobileAppDevelopment/PhoneGapDevelopment">
                      PhoneGap Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/Services/MobileAppDevelopment/TitaniumDevelopment">
                      Titanium Development
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* IT Service */}
            <li
              onMouseEnter={() => handleServiceDropdown("itService")}
              onMouseLeave={() => handleServiceDropdown("itService")}
            >
              <Link href="/Services/ITService">IT Service</Link>
              {serviceDropdown.itService && (
                <ul className="dropdown-submenu">
                  <li>
                    <Link href="/Services/ITService/HelpDeskServices">
                      Help Desk Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/Services/ITService/MSP2022">MSP 2022</Link>
                  </li>
                  <li>
                    <Link href="/Services/ITService/RMM2022">RMM 2022</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* E-Commerce Development */}
            <li
              onMouseEnter={() => handleServiceDropdown("ecommerceDevelopment")}
              onMouseLeave={() => handleServiceDropdown("ecommerceDevelopment")}
            >
              <Link href="/Services/ECommerceDevelopment">E-Commerce Development</Link>
              {serviceDropdown.ecommerceDevelopment && (
                <ul className="dropdown-submenu">
                  <li>
                    <Link href="/Services/ECommerceDevelopment/CustomEcommerceDevelopment">
                      Custom Ecommerce Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/Services/ECommerceDevelopment/MagentoMarketing">
                      Magento Marketing
                    </Link>
                  </li>
                  <li>
                    <Link href="/Services/ECommerceDevelopment/Shopify">Shopify</Link>
                  </li>
                  <li>
                    <Link href="/Services/ECommerceDevelopment/WooCommerce">WooCommerce</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Digital Marketing */}
            <li
              onMouseEnter={() => handleServiceDropdown("digitalMarketing")}
              onMouseLeave={() => handleServiceDropdown("digitalMarketing")}
            >
              <Link href="/Services/DigitalMarketing">Digital Marketing</Link>
              {serviceDropdown.digitalMarketing && (
                <ul className="dropdown-submenu">
                  <li>
                    <Link href="/Services/DigitalMarketing/BrandMarketing">
                      Brand Marketing
                    </Link>
                  </li>
                  <li>
                    <Link href="/Services/DigitalMarketing/ContentMarketing">
                      Content Marketing
                    </Link>
                  </li>
                  <li>
                    <Link href="/Services/DigitalMarketing/EmailMarketing">
                      Email Marketing
                    </Link>
                  </li>
                  <li>
                    <Link href="/Services/DigitalMarketing/FacebookMarketing">
                      Facebook Marketing
                    </Link>
                  </li>
                  <li>
                    <Link href="/Services/DigitalMarketing/LinkedInMarketing">
                      LinkedIn Marketing
                    </Link>
                  </li>
                  <li>
                    <Link href="/Services/DigitalMarketing/SocialMediaMarketing">
                      Social Media Marketing
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* CMS Development */}
            <li
              onMouseEnter={() => handleServiceDropdown("cmsDevelopment")}
              onMouseLeave={() => handleServiceDropdown("cmsDevelopment")}
            >
              <Link href="/Services/CMSDevelopment">CMS Development</Link>
              {serviceDropdown.cmsDevelopment && (
                <ul className="dropdown-submenu">
                  <li>
                    <Link href="/Services/CMSDevelopment/ContentManagementSystem">
                      Content Management System
                    </Link>
                  </li>
                  <li>
                    <Link href="/Services/CMSDevelopment/Drupal">Drupal</Link>
                  </li>
                  <li>
                    <Link href="/Services/CMSDevelopment/Joomla">Joomla</Link>
                  </li>
                  <li>
                    <Link href="/Services/CMSDevelopment/WordPress">WordPress</Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        )}
      </li>
    </>
  );
};

export default NavbarClient;
