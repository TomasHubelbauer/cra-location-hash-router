# CRA `location.hash` router

[**WEB**](https://tomashubelbauer.github.io/cra-location-hash-router)

In this repository I validate my idea for client+server routing solution using
the URL fragments.

The idea is for cases where your SPA is served from a file server (like GitHub
Pages) and you cannot set a catch-all route for `index.html`.

GitHub Pages has `404.html` which can be abused to redirect to `index.html`, but
it is not good for SEO indexing to return content with 404 responses. This
solution doesn't produced nice URLs, it relies on the octothorpe character, but
it works without the 404 and is simple to implement on the client side.

https://github.com/TomasHubelbauer/cra-location-search-router

## To-Do
