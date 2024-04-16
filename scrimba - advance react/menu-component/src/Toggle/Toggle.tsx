import { createContext, useState, ReactNode, useEffect, useRef } from "react";

const ToggleContext = createContext({ on: false, toggle: () => {} });

export default function Toggle({
  children,
  onToggle,
}: {
  children: ReactNode;
  onToggle?: () => void;
}) {
  const [on, setOn] = useState(false);
  /**
   * Challenge: We only want to run onToggle() AFTER the
   * first time rendering the component. We can use refs to
   * track whether or not it's the first time this component
   * is rendering
   *
   * 1. Create a ref called `firstRender` which defaults to `true`
   *    (Since when we first create the ref, it's true that it
   *    is the first time the component is rendering)
   * 2. In the useEffect, check if your ref's value is `true`.
   *    If it is, set it to `false`. If it isn't... can you figure
   *    it out??
   * Hint: don't forget that your boolean value will be saved
   * under `firstRender.current`, not just `firstRender`!
   */

  const firstRender = useRef(true);
  function toggle() {
    setOn((prevOn) => !prevOn);
  }
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      if (onToggle) {
        onToggle();
      }
    }
  }, [on]);

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

export { ToggleContext };
