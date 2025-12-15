import { CartProvider } from '@/contexts/CartProvider';
import { ThemeProvider } from '@/contexts/ThemeProvider';
import { Inter_400Regular, Inter_500Medium, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

export const unstable_settings = {
  anchor: '(downTab)',
};

export default function RootLayout() {
  const [loaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!loaded) return null;

  return (
    <ThemeProvider >
      <CartProvider>
        <Stack>
          <Stack.Screen name="(downTab)" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="auto" />
      </CartProvider>
    </ThemeProvider>
  );
}

