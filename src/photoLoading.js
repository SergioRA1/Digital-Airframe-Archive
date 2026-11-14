import { useCallback, useEffect, useRef, useState } from "react";

// Tracks whether an <img> has loaded. `complete` covers a photo the browser
// already had cached, and the timer covers a load event that never arrives,
// so a photograph is never left invisible.
export function usePhotoLoaded() {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef(null);

  const show = useCallback(() => setLoaded(true), []);

  useEffect(() => {
    const image = ref.current;

    if (image?.complete) {
      setLoaded(true);
    }

    image?.addEventListener("load", show);
    image?.addEventListener("error", show);

    const timer = window.setTimeout(show, 3000);

    return () => {
      image?.removeEventListener("load", show);
      image?.removeEventListener("error", show);
      window.clearTimeout(timer);
    };
  }, [show]);

  return {
    ref,
    loaded,
    fade: `transition-[opacity,transform] duration-700 ${loaded ? "opacity-100" : "opacity-0"}`,
  };
}
