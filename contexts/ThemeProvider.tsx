import { Colors } from '@/constants/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemeMode = 'light' | 'dark';

interface ThemeContextData {
  mode: ThemeMode;
  colors: typeof Colors.light;
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>('light');

  useEffect(() => {
    AsyncStorage.getItem('theme').then(stored => {
      if (stored === 'dark') setMode('dark');
    });
  }, []);

  async function toggleTheme() {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    await AsyncStorage.setItem('theme', newMode);
  }

  return (
    <ThemeContext.Provider
      value={{
        mode,
        colors: Colors[mode],
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
