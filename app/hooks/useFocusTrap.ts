import { useEffect } from "react";
import { FocusTrapParams } from "../types/Interfaces";

const useFocusTrap = ({ modalRef, isOpen, closeNav }: FocusTrapParams) => {
  useEffect(() => {
    const currentModalRef = modalRef.current;
    if (isOpen && currentModalRef) {
      const focusableElements = currentModalRef.querySelectorAll(
        "a[href], button, textarea, input, select"
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement;

      const trapFocus = (event: KeyboardEvent) => {
        if (event.key === "Tab") {
          if (event.shiftKey) {
            // Shift + Tab
            if (document.activeElement === firstElement) {
              event.preventDefault();
              lastElement.focus();
            }
          } else {
            // Tab
            if (document.activeElement === lastElement) {
              event.preventDefault();
              firstElement.focus();
            }
          }
        } else if (event.key === "Escape") {
          closeNav();
        }
      };

      currentModalRef.addEventListener("keydown", trapFocus);

      // Check if the click event comes from the dropdown icon
      const focusFirstElement = (event: MouseEvent) => {
        if (!(event.target as HTMLElement).classList.contains("dropdown-icon")) {
          firstElement.focus();
        }
      };

      return () => {
        currentModalRef.removeEventListener("keydown", trapFocus);
        currentModalRef.removeEventListener("mousedown", focusFirstElement);
      };
    }
  }, [isOpen, modalRef, closeNav]);
};

export default useFocusTrap;
