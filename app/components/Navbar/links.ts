import { PerformanceType, VisualArtType　} from "../../types/Interfaces";
import { toTitleCase, getPerformanceTypeName } from "../../utils/textFormat"

export const links = [
  {
    name: "Home",
    link: "/",
    submenu: false,
    sublinks: [],
  },
  {
    name: "Visual Art",
    link: "/visual-art",
    submenu: false,
    sublinks: [
          { name: toTitleCase(VisualArtType　.washi), link: `/visual-art?type=${VisualArtType　.washi}` },
          { name: toTitleCase(VisualArtType　.mixMedia), link: `/visual-art?type=${VisualArtType　.mixMedia}` },
          { name: toTitleCase(VisualArtType　.sculpture), link: `/visual-art?type=${VisualArtType　.sculpture}` },
        ],
  },
  {
    name: "Performance",
    link: "/performance",
    submenu: false,
    sublinks: [
          { name: getPerformanceTypeName(PerformanceType　.mimeDance), link: `/performance?type=${PerformanceType　.mimeDance}` },
          { name: getPerformanceTypeName(PerformanceType　.dance), link: `/performance?type=${PerformanceType　.dance}` },
          { name: getPerformanceTypeName(PerformanceType　.silentStoryTelling), link: `/performance?type=${PerformanceType　.silentStoryTelling}` },
          { name: getPerformanceTypeName(PerformanceType　.mimeClowning), link: `/performance?type=${PerformanceType　.mimeClowning}` },
        ],
  },  
  {
    name: "Nia Instruction",
    link: "/nia-instruction",
    submenu: false,
    sublinks: [],
  },
  {
    name: "About",
    link: "/about",
    submenu: false,
    sublinks: [],
  },
  {
    name: "Contact",
    link: "/#contact",
    submenu: false,
    sublinks: [],
  },
];