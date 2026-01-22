import { RefObject } from "react";

export const useDropdownPosition = (
    ref: RefObject<HTMLDivElement | null> | RefObject<HTMLDivElement>
) => {
    const getDropdownPosition = () => {
        if (!ref.current) return {top: 0, left: 0};

        const rect = ref.current.getBoundingClientRect();
        const dropdownwidth = 240;  // width of dropdown (w-60 = 15rem = 240px)

        // Calculate the initial position
        let left = rect.left + window.scrollX;
        const top = rect.bottom + window.scrollY;

        // Check if dropdown would go off the right edge of the wiewport
        if (left + dropdownwidth > window.innerWidth) {
            // Align to right to edge of button instead
            left = rect.right + window.scrollX - dropdownwidth;

            // if still off-screen, align to the right edge of viewport with some padding
            if (left < 0) {
                left = window.innerWidth - dropdownwidth - 16; 
            }
        }

        // Ensure dropdown doesn't go off left edge
        if (left < 0) {
            left = 16;
        }

        return { top, left };
    };

    return {getDropdownPosition};
};