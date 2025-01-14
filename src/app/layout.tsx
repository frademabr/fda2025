import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "src/global.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { SettingsProvider } from "@/components/settings/context/settings-provider";
import { ThemeProvider } from "@/theme/theme-provider";
import { MotionLazy } from "@/components/animate/motion-lazy";
import { ProgressBar } from "@/components/progress-bar";
import { defaultSettings, SettingsDrawer } from "@/components/settings";
import { themeConfig } from "@/theme";
import { themeOverrides } from "@/theme/theme-overrides";
import { CONFIG } from "@/global-config";

//--------------------------------------------------------------------------------------

const inter = Inter({
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  icons: [
    {
      rel: "icon",
      url: `${CONFIG.assetsDir}/assets/images/home/logo-fradema-single.png`,
    },
  ],
  title: "Fradema Consultoria Tributária",
  description: "Empresa Fradema de Consultoria Tributária",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SettingsProvider defaultSettings={defaultSettings}>
          <AppRouterCacheProvider options={{ key: "css" }}>
            <ThemeProvider
              themeOverrides={themeOverrides}
              defaultMode={themeConfig.defaultMode}
              modeStorageKey={themeConfig.modeStorageKey}
            >
              <MotionLazy>
                <ProgressBar />
                <SettingsDrawer defaultSettings={defaultSettings} />
                {children}
              </MotionLazy>
            </ThemeProvider>
          </AppRouterCacheProvider>
        </SettingsProvider>
      </body>
    </html>
  );
}
