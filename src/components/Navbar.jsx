// src/components/Navbar.jsx
"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  // dropdown for Join Us tab button
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const handleDropDown = () => {
    setDropdownMenu(!dropdownMenu);
  };

  // dropdown for Resouces tab button
  const [resourceDropdown, setResourceDropdown] = useState(false);
  const handleResourceDropDown = () => {
    setResourceDropdown(!resourceDropdown);
  };

  // dropdown for Services tab button
  const [serviceDropdown, setServiceDropdown] = useState({
    services: false,
    webDevelopment: false,
    webDesign: false,
    searchEngineOptimisation: false,
    mobileAppDevelopment: false,
    itService: false,
    ecommerceDevelopment: false,
    digitalMarketing: false,
    cmsDevelopment:false,
  });
  const handleServiceDropdown = (menu) => {
    setServiceDropdown((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

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
        <li onMouseEnter={handleDropDown} onMouseLeave={handleDropDown}>
          <a href="#">Join Us</a>
          {dropdownMenu && (
            <ul className="dropdown">
              <li>
                <Link href="/Career">Career</Link>
              </li>
              <li>
                <Link href="/InternshipPrograms">
                  InternShip Programs
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link href="/our-portfolio">Our Portfolio</Link>
        </li>
        <li
          onMouseEnter={handleResourceDropDown}
          onMouseLeave={handleResourceDropDown}
        >
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
              {/* 1st Web development */}
              <li
                onMouseEnter={() => handleServiceDropdown("webDevelopment")}
                onMouseLeave={() => handleServiceDropdown("webDevelopment")}
              >
                <Link href="/Services/WebDevelopment">Web Development</Link>
                {serviceDropdown.webDevelopment && (
                  <ul className="dropdown-submenu">
                    <li>
                      <Link href="/Services/WebDevelopment/FullStackDevelopment">
                        FullStackDevelopment
                      </Link>
                    </li>

                    <li>
                      <Link href="/Services/WebDevelopment/AspDotNetDevelopment">
                        Asp .Net Development
                      </Link>
                    </li>

                    <li>
                      <Link href="/Services/WebDevelopment/JavaWebDevelopment">
                        Java Web Development
                      </Link>
                    </li>

                    <li>
                      <Link href="/Services/WebDevelopment/PhpDevelopment">
                        Php Development
                      </Link>
                    </li>

                    <li>
                      <Link href="/Services/WebDevelopment/PythonDevelopment">
                        Python Development
                      </Link>
                    </li>

                    <li>
                      <Link href="/Services/WebDevelopment/RubyonRailDevelopment">
                        Ruby on Rail Development
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* 2nd web design */}

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

              {/* 3rd  Search Engine Optimization*/}
              <li
                onMouseEnter={() =>
                  handleServiceDropdown("searchEngineOptimisation")
                }
                onMouseLeave={() =>
                  handleServiceDropdown("searchEngineOptimisation")
                }
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

              {/* 4th  Mobile App Development*/}
              <li
                onMouseEnter={() =>
                  handleServiceDropdown("mobileAppDevelopment")
                }
                onMouseLeave={() =>
                  handleServiceDropdown("mobileAppDevelopment")
                }
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
                        HTML 5 App Development
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

              {/* 5th  ITService*/}
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

              {/* 6th Ecommerce Development */}
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
                      <Link href="/Services/ECommerceDevelopment/MagentoMarketing">Magento Marketing</Link>
                    </li>

                    <li>
                      <Link href="/Services/ECommerceDevelopment/Shopify">Shopify</Link>
                    </li>
                    <li>
                      <Link href="/Services/ECommerceDevelopment/WooCommerce">Woo Commerce</Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* 7th Digital Marketing */}
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
                      <Link href="/Services/DigitalMarketing/ContentMarketing">Content Marketing</Link>
                    </li>

                    <li>
                      <Link href="/Services/DigitalMarketing/EmailMarketing">Email Marketing</Link>
                    </li>
                    <li>
                      <Link href="/Services/DigitalMarketing/FacebookMarketing">Facebook Marketing</Link>
                    </li>
                    <li>
                      <Link href="/Services/DigitalMarketing/LinkedInMarketing">LinkedIn Marketing</Link>
                    </li>
                    <li>
                      <Link href="/Services/DigitalMarketing/SocialMediaMarketing">SocialMedia Marketing</Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* 8th  */}
              <li
                onMouseEnter={() => handleServiceDropdown("cmsDevelopment")}
                onMouseLeave={() => handleServiceDropdown("cmsDevelopment")}
              >
                <Link href="/Services/CMSDevelopment">CMS Development</Link>
                {serviceDropdown.cmsDevelopment && (
                  <ul className="dropdown-submenu">
                    <li>
                      <Link href="/Services/CMSDevelopment/DrupalDevelopment">
                        Drupal Development
                      </Link>
                    </li>

                    <li>
                      <Link href="/Services/CMSDevelopment/HubspotDevelopment">Hubspot Development</Link>
                    </li>

                    <li>
                      <Link href="/Services/CMSDevelopment/InfusionSoft">Infusion Soft</Link>
                    </li>
                    <li>
                      <Link href="/Services/CMSDevelopment/JoomlaDevelopment">Joomla Development</Link>
                    </li>
                    <li>
                      <Link href="/Services/CMSDevelopment/WordpressDevelopment">Wordpress Development</Link>
                    </li>
                   
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
   </header>
  );
};

export default Navbar;
