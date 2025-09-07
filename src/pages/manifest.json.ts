import type { APIRoute, ImageMetadata } from "astro";


export const GET: APIRoute = async () => {
  const icons = [
    {
      src: "/imagenes/icon-192.png",
      sizes: "192x192",
      type: "image/png",
      purpose: "any",
    },
    {
      src: "/imagenes/icon-512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any",
    },
    {
      src: "/imagenes/icon-maskable-192.png",
      sizes: "192x192",
      type: "image/png",
      purpose: "maskable",
    },
    {
      src: "/imagenes/icon-maskable-512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "maskable",
    },
  ];

  const manifest = {
    short_name: "ScrewFast",
    name: "ScrewFast",
    icons,
    display: "minimal-ui",
    id: "/",
    start_url: "/",
    theme_color: "#FFEDD5",
    background_color: "#262626",
  };

  return new Response(JSON.stringify(manifest));
};
