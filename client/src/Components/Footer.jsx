import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import brand from "../assets/My_BrandLogo_original_-removebg-preview.png";
import { Link } from "react-router-dom";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

export default function FooterComponent() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between gap-10">
          {/* Logo Section */}
          <div className="w-fit mt-5">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={brand}
                className="h-10 sm:h-12 w-auto object-contain"
                alt="KidoBlog Logo"
              />
              <span className="font-semibold text-base sm:text-lg text-gray-800 dark:text-white">
                KidoBlog
              </span>
            </Link>
          </div>

          {/* Link Sections */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <FooterTitle title="Meet The Founder" />
              <FooterLinkGroup col>
                <FooterLink
                  href="https://abdulwe.github.io/malik-portfolio/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Portfolio
                </FooterLink>
                <FooterLink
                  href="/Meet Founder"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kido's Blog
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Follow Us" />
              <FooterLinkGroup col>
                <FooterLink
                  href="https://www.github.com/abdulwe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </FooterLink>
                <FooterLink href="#" target="_blank" rel="noopener noreferrer">
                  Discord
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Legal" />
              <FooterLinkGroup col>
                <FooterLink href="#" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </FooterLink>
                <FooterLink href="#" target="_blank" rel="noopener noreferrer">
                  Terms &amp; Conditions
                </FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>

        {/* Divider */}
        <FooterDivider />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4">
          <FooterCopyright
            href="#"
            by="KidoBlog"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 mt-4 sm:mt-0 justify-center">
            <FooterIcon href="#" icon={BsFacebook} />
            <FooterIcon href="#" icon={BsInstagram} />
            <FooterIcon href="#" icon={BsTwitter} />
            <FooterIcon href="#" icon={BsGithub} />
            <FooterIcon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
