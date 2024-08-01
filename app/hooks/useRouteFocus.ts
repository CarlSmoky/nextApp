import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { RouteFocusParams } from "../types/Interfaces"

const useRouteFocus = ({ closeNav }: RouteFocusParams) => {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      closeNav();
      setTimeout(() => {
        const h1 = document.querySelector("h1");
        if (h1) {
          h1.focus();
        }
      }, 0);
      prevPathname.current = pathname;
    }
  }, [pathname, closeNav]);
};

export default useRouteFocus;
