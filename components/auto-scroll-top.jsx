import React, { useEffect, useRef } from "react";

export function AutoScrollTop({ params, children }) {
  const viewRef = useRef(null);

  useEffect(() => {
    viewRef.current.scrollIntoView({ behavior: "smooth" });
  }, [JSON.stringify(params)]);

  return <div ref={viewRef}>{children}</div>;
}
