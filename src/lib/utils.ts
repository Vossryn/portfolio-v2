import { type ClassValue, clsx } from "clsx";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const useButtonBorderImage = (
  defaultValue: boolean = false
): [
  {
    borderWidth: string;
    borderImage: string;
  },
  (value: boolean) => void,
] => {
  const [hover, setHover] = useState(defaultValue);

  function toggleValue(value: boolean) {
    setHover((currentValue) =>
      typeof value === "boolean" ? value : !currentValue
    );
  }

  const buttonBorderImage = {
    borderWidth: "0px 20px",
    borderImage: `url("/svgs/button-${hover ? "cyan" : "yellow"}.svg") 0 20 fill / 1 / 0 stretch`,
  };

  return [buttonBorderImage, toggleValue];
};

export const cardBorderImageStyle = {
  borderWidth: "0px 20px",
  borderImage: `url("/svgs/voice-call-border.svg") 0 20 fill / 1 / 0 stretch`,
};

export const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mouseup", handleClickOutside);
    document.addEventListener("touchend", handleClickOutside);

    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
      document.removeEventListener("touchend", handleClickOutside);
    };
  }, [callback]);

  return ref;
};
