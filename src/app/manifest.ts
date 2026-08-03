import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Daniel Bergholz - Engenheiro de Software & Solopreneur",
    short_name: "Daniel Bergholz",
    description: "Engenheiro de software, criador de conteúdo e solopreneur",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    theme_color: "#ffffff",
    background_color: "#ffffff",
    display: "standalone",
    start_url: "/",
    scope: "/",
    lang: "pt-BR",
    orientation: "portrait-primary"
  }
}
