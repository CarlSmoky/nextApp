import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { RouteFocusParams } from "../types/Interfaces";

const useRouteFocus = ({ closeNav }: RouteFocusParams) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      if (hash === "#contact") {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          const h2 = contactSection.querySelector("h2");
          if (h2) {
            h2.setAttribute("tabindex", "-1");
            h2.focus();
          }
        }
      } else if (hash === "#essay" || hash === "#poem" || hash === "#radio") {
        const selectedMultimediaSection = document.getElementById(hash.slice(1));
        if (selectedMultimediaSection) {
          selectedMultimediaSection.setAttribute("tabindex", "-1");
          selectedMultimediaSection.focus();
        }
      } else {
        const h1 = document.querySelector("h1");
        if (h1) {
          h1.setAttribute("tabindex", "-1");
          h1.focus();
        }
      }
    };

    if (prevPathname.current !== pathname) {
      closeNav();
      setTimeout(() => {
        handleHashChange();
        prevPathname.current = pathname;
      }, 0);
    } else if (window.location.hash) {
      handleHashChange();
    }

  }, [pathname, searchParams, closeNav]);
};

export default useRouteFocus;
