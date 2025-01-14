import { CONFIG } from "@/global-config";

import { AnimateView } from "@/sections/_examples/animate-view";

// ----------------------------------------------------------------------

export const metadata = { title: `Animate | Components - ${CONFIG.appName}` };

export default function Page() {
  return <AnimateView />;
}
