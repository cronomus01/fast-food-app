import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.fastfood.exam',
  appName: 'fast-food-exam',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
