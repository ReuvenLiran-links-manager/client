self.addEventListener("fetch", event => {
  event.respondWith(customHeaderRequestFetch(event));
});

function customHeaderRequestFetch(event) {
  const { request } = event;
  // decide for yourself which values you provide to mode and credentials
  let newRequest = request;

  const localFiles = [
    "static/js/bundle.js",
    "static/js/0.chunk.js",
    "main.chunk.js",
    "service-worker1.js",
    "favicon.ico",
    "index.html",
    "manifest.json",
    "logo192.png",
    "logo512.png",
    ""
  ]
  const exact = new Set([
    "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css",
    "https://fonts.googleapis.com/css?family=Roboto:300,400,500",
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    ...localFiles.map(file => `http://localhost:3000/${file}`)
  ]);

  // const blackList = [

  // ];
  console.log("3000 ORIGINAL", request.url);
  if (
    !exact.has(request.url) &&
    !request.url.includes("http://localhost:3000/sockjs-node")
  ) {
    // console.log("ORIGINAL", request.url);
    // debugger
    const base = encodeURIComponent("https://www.google.com");
    let url;
    try {
      const bla = new URL(request.url);
      url = `http://localhost:9000/${encodeURIComponent(request.url)}`;
    } catch (e) {
      url = `http://localhost:9000/${base}${encodeURIComponent(request.url)}`;
    }
    newRequest = new Request(url, request);
    console.log("3000 MODIFIED", newRequest.url);
  }
  // const newRequest = new Request(event.request, {
  //   // mode: "cors",
  //   // credentials: "omit",
  //   // headers: {
  //   //   "x-my-custom-header": "The Most Amazing Header Ever"
  //   // }
  // });
  return fetch(newRequest);
}
