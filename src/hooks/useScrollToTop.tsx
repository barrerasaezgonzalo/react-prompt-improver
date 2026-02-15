import { useEffect, useState, useCallback } from "react";

interface UseScrollToTopOptions {
  threshold?: number;
  behavior?: ScrollBehavior;
}

export function useScrollToTop({
  threshold = 300,
  behavior = "smooth",
}: UseScrollToTopOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior,
    });
  }, [behavior]);

  return { isVisible, scrollToTop };
}
