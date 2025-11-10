self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("site-cache").then(cache => {
      return cache.addAll([
        "./index.html",
        "./educacao.html",
        "./portfolio.html",
        "./contato.html",
        "./estilos.css",
        "./imagens/minha_foto.jpg",
        "./imagens/unifra.png",
        "./imagens/pucrs.png",
        "./imagens/github.jpg",
        "./imagens/dockerhub.jpg"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

