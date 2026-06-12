import { useEffect, useRef, useState } from "react";

export function useIntersectionObserver<T extends Element = HTMLElement>(
  options?: IntersectionObserverInit,
): [React.RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);
    observer.observe(el);
    return () => observer.disconnect();
  // options object identity changes on every render; threshold/rootMargin are stable primitives
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, isVisible];
}
