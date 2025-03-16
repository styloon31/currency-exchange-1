export async function GET() {
    const baseUrl = "https://www.7janpathforex.com";
  
    const pages = ["", "about", "contact"].map((page) => {
      return `
        <url>
          <loc>${baseUrl}/${page}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <priority>${page === "" ? "1.0" : "0.8"}</priority>
        </url>
      `;
    });
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.join("")}
    </urlset>`;
  
    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  }
  