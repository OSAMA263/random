import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-scroll";
import tw from "tailwind-styled-components";

export default function SpyActiveSection() {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <>
      <Header>
        {navbarLinks.map((link) => (
          <span className="relative me-6" key={link}>
            <Link
              className="transition-all"
              offset={-55}
              onSetActive={() => setActiveLink(link)}
              activeClass="active"
              href={link}
              spy
              smooth
              to={link}
              onClick={() => setActiveLink(link)}
            >
              {link}
              {link === activeLink && (
                <RoundedActiveLink layoutId="underline" />
              )}
            </Link>
          </span>
        ))}
      </Header>

      {/* -----PAGE SECTIONS ----------- */}
      {navbarLinks.map((page, i) => (
        <PageSection id={page} bg={bgs[i]} key={page}>
          the ({page}) section content
        </PageSection>
      ))}
    </>
  );
}

const PageSection = (props) => {
  const { children, id, bg } = props;

  return (
    <Section $bg={bg} id={id}>
      {children}
    </Section>
  );
};

const Header = tw.nav`
bg-gray-400
py-4
sticky
top-0
`;
const Section = tw.section`
${({ $bg }) => $bg}
h-[100dvh]
`;

const RoundedActiveLink = tw(motion.span)`
absolute
bottom-0
left-0
w-full
h-[2px]
bg-black
`;

const navbarLinks = ["home", "a long navlink", "about", "restroom"];
const bgs = ["bg-gray-200", "bg-gray-400", "bg-gray-600", "bg-gray-700"];
