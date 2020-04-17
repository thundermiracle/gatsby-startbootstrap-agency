import React from "react";
import { throttle } from "throttle-debounce";

const noop = () => {};

const useWindowOnScroll = (handleScroll) => {
  const internalHandleScroll = React.useMemo(() => {
    // 166 -> 60HZ
    return handleScroll ? throttle(166, handleScroll) : noop;
  }, [handleScroll]);

  React.useEffect(() => {
    if (internalHandleScroll === noop) {
      return undefined;
    }

    window.addEventListener("scroll", internalHandleScroll);
    return () => {
      window.removeEventListener("scroll", internalHandleScroll);
      internalHandleScroll.cancel();
    };
  }, [internalHandleScroll]);
};

export default useWindowOnScroll;
