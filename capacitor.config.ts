import { CapacitorConfig } from '@capacitor/cli';
import { KeyboardResize, KeyboardStyle } from '@capacitor/keyboard';

const config: CapacitorConfig = {
  appId: 'com.mnemonix.app',
  appName: 'MnemoniX',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
      backgroundColor: "#2C3E2D",
      androidScaleType: "CENTER_CROP",
      showSpinner: true,
      androidSpinnerStyle: "large",
      spinnerColor: "#E67E22",
      splashFullScreen: true,
      splashImmersive: true
    },
    Keyboard: {
      resize: KeyboardResize.Body,
      style: KeyboardStyle.Dark,
      resizeOnFullScreen: true,
    }
  }
};

export default config;
