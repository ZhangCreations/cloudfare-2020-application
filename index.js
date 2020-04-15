addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

class ElementHandler {
  element(element) {
    // An incoming element, such as `div`
    console.log(`Incoming element: ${element.tagName}`)
  }

  comments(comment) {
    // An incoming comment
  }

  text(text) {
    // An incoming piece of text
  }
}

async function handleRequest(request){
  const data = await fetch('https://cfw-takehome.developers.workers.dev/api/variants')
  .then(response => response.json());
  url = data["variants"][Math.floor(Math.random() * data["variants"].length)]
  newReq = new Request(url, {redirect:'follow'});
  response = await fetch(newReq)
  return new HTMLRewriter.on('h1#title', new ElementHandler()).onDocument(new DocumentHandler()).transform(res)
}