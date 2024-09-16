import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./theme-toggle-button";
import { useColorMode } from "./theme";
import Logo from "./logo";
import DropdownMenu from "./dropdown-menu";

const LinkItem = ({ href, path, children, css }) => {
  const active = path === href

  return (
    <Link
      to={href}
      className={`h-full p-2 ${active ? "bg-[#88CCCA]" : undefined} ${active ? "text-[#202023]" : "text-cta-text"} ${css}`}
      preventScrollReset={true}
    >
      {children}
    </Link>
  )
}

const Navbar_Page = props => {
  const pathname = props.path;
  const { theme } = useColorMode();

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
      root.classList.add("light");
    } else {
      root.classList.remove("light");
      root.classList.add("dark");
    }
  }, [theme]);

  return (
    <nav className={`w-full h-auto ${theme === "light" ? "bg-[#ffffff40]/30" : "bg-[#20202380]/30"} backdrop-blur-[10px] z-[9999] fixed top-0 flex justify-center items-center`}>

      <div className={` w-[48rem] h-auto  p-2 text-cta-text flex justify-between items-center `}>

        <div className="w-full md:w-[23rem] h-auto">
          {/* <LinkItem href="/">
              <div className="text-lg font-bold tracking-tight px-[10px] me-5 flex justify-center items-center ">
                <IoPaw className="me-[0.1rem] -rotate-[35deg] hover:-rotate-0" />
                Kongwarit Utapao
              </div>
            </LinkItem> */}
          <Logo />
        </div>

        <div className="w-full h-full hidden md:flex justify-start items-center gap-2  ">
          <LinkItem href="/works" path={pathname} css={"hover:underline font-sans"}>
            Works
          </LinkItem>
          <LinkItem href="/wallpapers" path={pathname} css={"hover:underline font-sans"}>
            Wallpapers
          </LinkItem>
          <LinkItem href="/Posts" path={pathname} css={"hover:underline font-sans "}>
            Posts
          </LinkItem>
          <LinkItem href="/Uses" path={pathname} css={"hover:underline font-sans"}>
            Uses
          </LinkItem>
          <LinkItem href="/My_GtiHub" path={pathname} css={"hover:underline font-sans"}>
            My_GtiHub
          </LinkItem>
        </div>

        <div className="w-full md:w-[18rem] flex justify-end gap-2">
          <ThemeToggle />
          <DropdownMenu />
        </div>

      </div>

    </nav>
  );
}

export default Navbar_Page