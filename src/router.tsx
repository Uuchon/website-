import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Publications from "./pages/Publications";
import RatVocalization from "./pages/RatVocalization";
import SoundAtlas from "./pages/SoundAtlas";
import SoundPerception from "./pages/SoundPerception";
import SoundVisualization from "./pages/SoundVisualization";

export const routers = [
  {
    path: "/",
    name: "home",
    element: <Home />,
  },
  {
    path: "/sound-visualization",
    name: "sound-visualization",
    element: <SoundVisualization />,
  },
  {
    path: "/rat-vocalization",
    name: "rat-vocalization",
    element: <RatVocalization />,
  },
  {
    path: "/sound-perception",
    name: "sound-perception",
    element: <SoundPerception />,
  },
  {
    path: "/sound-atlas",
    name: "sound-atlas",
    element: <SoundAtlas />,
  },
  {
    path: "/publications",
    name: "publications",
    element: <Publications />,
  },
  {
    path: "/about",
    name: "about",
    element: <About />,
  },
  /* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */
  {
    path: "*",
    name: "404",
    element: <NotFound />,
  },
];

declare global {
  interface Window {
    __routers__: typeof routers;
  }
}

window.__routers__ = routers;
