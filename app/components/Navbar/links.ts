import { NavState　} from "../../types/Interfaces";

export const links = [
  {
    name: "Home",
    link: "/",
    submenu: false,
    sublinks: [],
    navState: NavState.home
  },
  {
    name: "Visual Art",
    link: "/visual-art",
    submenu: false,
    sublinks: [
          { name: "Washi", link: "/visual-art" },
          { name: "Mix media", link: "/visual-art" },
          { name: "Sculpture", link: "/visual-art" },
        ],
    navState: NavState.visualArt
  },
  {
    name: "Performance",
    link: "/performance",
    submenu: false,
    sublinks: [
          { name: "Mime dance", link: "/performance" },
          { name: "Dance", link: "/performance" },
          { name: "Silent story telling", link: "/performance" },
          { name: "Mime", link: "/performance" },
        ],
    navState: NavState.peformance
  },  
  {
    name: "Nia Instruction",
    link: "/nia-instruction",
    submenu: false,
    sublinks: [],
    navState: NavState.nia
  },
  {
    name: "About",
    link: "/about",
    submenu: false,
    sublinks: [],
    navState: NavState.about
  },
  {
    name: "Contact",
    link: "/#contact",
    submenu: false,
    sublinks: [],
    navState: NavState.contact
  },
];