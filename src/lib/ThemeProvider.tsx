import { useAppSelector } from "@/redux/store";
import { type ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { theme } = useAppSelector((state) => state.theme);

  return (
    <div className={theme}>
      <div className="bg-gray-100 text-gray-700 dark:text-gray-200 dark:bg-[rgb(16,23,42)] min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default ThemeProvider;
