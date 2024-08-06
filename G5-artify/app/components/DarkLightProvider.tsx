'use client';

// Import necessary modules and types
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';

// Define the props interface for DarkLightProvider
interface DarkLightProviderProps {
  children: ReactNode; // Children components
}
// Define the DarkLightProvider component
const DarkLightProvider = ({ children }: DarkLightProviderProps) => {
  // Render the NextThemesProvider with the provided children and set the attribute to "class"
  return <NextThemesProvider attribute="class">{children}</NextThemesProvider>;
};
// Export the DarkLightProvider component
export default DarkLightProvider;