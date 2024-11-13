addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request));
  });
  
  async function handleRequest(request) {
    const apiUrl = 'https://haissaa-0820316444d7.herokuapp.com/'; 
    const url = new URL(request.url);
    const apiPath = url.pathname;
  
    if (apiPath.startsWith("/api/")) {
      const response = await fetch(apiUrl + apiPath, {
        method: request.method,
        headers: request.headers,
        body: request.body
      });
  
      return new Response(response.body, {
        headers: response.headers
      });
    }
  
    return new Response("Not Found", { status: 404 });
  }
  
