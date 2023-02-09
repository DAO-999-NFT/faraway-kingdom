import {createContext, useState} from 'react';

interface ProvidedValue {
  setNotOpen: () => void;
  setOpen: () => void;
  isOpen: boolean;
}

export const ThemeContext = createContext<ProvidedValue>({
  isOpen: false,
  setOpen: () => {},
  setNotOpen: () => {},
});

interface RightDrawerProviderProps {
  children: React.ReactNode;
}

export function RightDrawerProvider({children}: RightDrawerProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ThemeContext.Provider
      value={{
        isOpen,
        setOpen: () => setIsOpen(true),
        setNotOpen: () => setIsOpen(false),
      }}>
      {children}
    </ThemeContext.Provider>
  );
}
