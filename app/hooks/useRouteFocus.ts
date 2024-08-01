import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { RouteFocusParams } from "../types/Interfaces";
import { displayOrder } from "../data/multimediaDisplayOrder";

const useRouteFocus = ({ closeNav, isOpen }: RouteFocusParams) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    const handleHashChange = () => {
      if (!isOpen) {
        const hash = window.location.hash.slice(1);

        let focusElement: HTMLElement | null = null;
        if (hash === "contact") {
          focusElement = document.querySelector("#contact h2");
        } else if (displayOrder.indexOf(hash) !== -1) {
          focusElement = document.getElementById(hash.slice(1));
        } else {
          focusElement = document.querySelector("h1");
        }

        if (focusElement) {
          focusElement.setAttribute("tabindex", "-1");
          focusElement.focus();
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
  }, [pathname, searchParams, closeNav, isOpen]);
};

export default useRouteFocus;
