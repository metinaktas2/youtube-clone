import { createContext, useContext, useState } from "react";

// Context yapısının krurulumu
export const SidebarContext = createContext();

//Sağlayıcı component
export const SidebarProvider = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Abone Hook'u
export const useSidebar = () => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("Provider ile app'i sarmalamayı unutmayın");
  }
  return context;
};
