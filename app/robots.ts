export async function GET() {
    const content = `User-agent: *
  Allow: /
  
  Sitemap: https://www.7janpathforex.com/sitemap.xml
    `;
    
    return new Response(content, {
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
  