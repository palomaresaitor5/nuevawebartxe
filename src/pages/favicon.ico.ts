import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  // Redirect to the static favicon file
  return new Response(null, {
    status: 302,
    headers: {
      Location: "/favicon.ico"
    }
  });
};
