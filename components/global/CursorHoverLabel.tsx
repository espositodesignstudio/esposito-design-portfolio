"use client";

import React, { createContext, useContext } from "react";

interface HoverContextType {
  setHoverLabel: (label: string | null) => void;
}

const HoverContext = createContext<HoverContextType>({
  setHoverLabel: () => {},
});

export const useHoverLabel = () => useContext(HoverContext);

export function HoverProvider({ children }: { children: React.ReactNode }) {
  return (
    <HoverContext.Provider value={{ setHoverLabel: () => {} }}>
      {children}
    </HoverContext.Provider>
  );
}
