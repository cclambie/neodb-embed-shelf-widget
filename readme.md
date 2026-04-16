# neodb-embed-shelf-widget

Embed your [NeoDB](https://neodb.net) books and podcasts shelf into any website with a single script tag. Works with any NeoDB instance. No build tools required.

Built by [Craig Lambie](https://craiglambie.com) · GitHub: [@cclambie](https://github.com/cclambie)

---

## Quick Start

1. Edit the config at the top of `dist/neodb-embed-shelf-widget.js`:

```js
const NEODB_HOST       = "https://reviewdb.app";   // Your NeoDB instance
const NEODB_TOKEN      = "YOUR_ACCESS_TOKEN";       // From your instance's /developer/ console
const NEODB_SHELF      = "complete";                // complete | progress | wishlist
const NEODB_CATEGORIES = ["book", "podcast"];       // Any combo of: book, podcast, movie, tv, music, game
const NEODB_LIMIT      = 12;                        // Items per category
```

2. Add to your HTML:

```html
<link rel="stylesheet" href="dist/neodb-embed-shelf-widget.css">
<div class="neodb-embed"></div>
<script src="dist/neodb-embed-shelf-widget.js"></script>
```

## WordPress

Use a **Custom HTML** block and load from jsDelivr (free CDN, no hosting needed):

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/cclambie/neodb-embed-shelf-widget@main/dist/neodb-embed-shelf-widget.css">
<div class="neodb-embed"></div>
<script src="https://cdn.jsdelivr.net/gh/cclambie/neodb-embed-shelf-widget@main/dist/neodb-embed-shelf-widget.js"></script>
```

## Getting Your Access Token

1. Log in to your NeoDB instance (e.g. `https://reviewdb.app`)
2. Go to `/developer/` on your instance
3. Click **Authorize** and copy your token

## API Endpoint Used

```
GET {NEODB_HOST}/api/me/shelf/{shelf_type}?category={category}&page=1
```

Shelf types: `complete` · `progress` · `wishlist`  
Categories: `book` · `podcast` · `movie` · `tv` · `music` · `game`

## ⚠️ CORS Note

Some NeoDB instances may block browser requests from other domains. If you see a CORS error, you'll need to either:
- Use a server-side proxy on your own site
- Or check if your instance allows cross-origin API reads

## License

MIT# neodb-embed-shelf-widget

Embed your [NeoDB](https://neodb.net) books and podcasts shelf into any website with a single script tag. Works with any NeoDB instance. No build tools required.

Built by [Craig Lambie](https://craiglambie.com) · GitHub: [@cclambie](https://github.com/cclambie)

---

## Quick Start

1. Edit the config at the top of `dist/neodb-embed-shelf-widget.js`:

```js
const NEODB_HOST       = "https://reviewdb.app";   // Your NeoDB instance
const NEODB_TOKEN      = "YOUR_ACCESS_TOKEN";       // From your instance's /developer/ console
const NEODB_SHELF      = "complete";                // complete | progress | wishlist
const NEODB_CATEGORIES = ["book", "podcast"];       // Any combo of: book, podcast, movie, tv, music, game
const NEODB_LIMIT      = 12;                        // Items per category
```

2. Add to your HTML:

```html
<link rel="stylesheet" href="dist/neodb-embed-shelf-widget.css">
<div class="neodb-embed"></div>
<script src="dist/neodb-embed-shelf-widget.js"></script>
```

## WordPress

Use a **Custom HTML** block and load from jsDelivr (free CDN, no hosting needed):

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/cclambie/neodb-embed-shelf-widget@main/dist/neodb-embed-shelf-widget.css">
<div class="neodb-embed"></div>
<script src="https://cdn.jsdelivr.net/gh/cclambie/neodb-embed-shelf-widget@main/dist/neodb-embed-shelf-widget.js"></script>
```

## Getting Your Access Token

1. Log in to your NeoDB instance (e.g. `https://reviewdb.app`)
2. Go to `/developer/` on your instance
3. Click **Authorize** and copy your token

## API Endpoint Used

```
GET {NEODB_HOST}/api/me/shelf/{shelf_type}?category={category}&page=1
```

Shelf types: `complete` · `progress` · `wishlist`  
Categories: `book` · `podcast` · `movie` · `tv` · `music` · `game`

## ⚠️ CORS Note

Some NeoDB instances may block browser requests from other domains. If you see a CORS error, you'll need to either:
- Use a server-side proxy on your own site
- Or check if your instance allows cross-origin API reads

## License

MIT# neodb-embed-shelf-widget

Embed your [NeoDB](https://neodb.net) books and podcasts shelf into any website with a single script tag. Works with any NeoDB instance. No build tools required.

Built by [Craig Lambie](https://craiglambie.com) · GitHub: [@cclambie](https://github.com/cclambie)

---

## Quick Start

1. Edit the config at the top of `dist/neodb-embed-shelf-widget.js`:

```js
const NEODB_HOST       = "https://reviewdb.app";   // Your NeoDB instance
const NEODB_TOKEN      = "YOUR_ACCESS_TOKEN";       // From your instance's /developer/ console
const NEODB_SHELF      = "complete";                // complete | progress | wishlist
const NEODB_CATEGORIES = ["book", "podcast"];       // Any combo of: book, podcast, movie, tv, music, game
const NEODB_LIMIT      = 12;                        // Items per category
```

2. Add to your HTML:

```html
<link rel="stylesheet" href="dist/neodb-embed-shelf-widget.css">
<div class="neodb-embed"></div>
<script src="dist/neodb-embed-shelf-widget.js"></script>
```

## WordPress

Use a **Custom HTML** block and load from jsDelivr (free CDN, no hosting needed):

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/cclambie/neodb-embed-shelf-widget@main/dist/neodb-embed-shelf-widget.css">
<div class="neodb-embed"></div>
<script src="https://cdn.jsdelivr.net/gh/cclambie/neodb-embed-shelf-widget@main/dist/neodb-embed-shelf-widget.js"></script>
```

## Getting Your Access Token

1. Log in to your NeoDB instance (e.g. `https://reviewdb.app`)
2. Go to `/developer/` on your instance
3. Click **Authorize** and copy your token

## API Endpoint Used

```
GET {NEODB_HOST}/api/me/shelf/{shelf_type}?category={category}&page=1
```

Shelf types: `complete` · `progress` · `wishlist`  
Categories: `book` · `podcast` · `movie` · `tv` · `music` · `game`

## ⚠️ CORS Note

Some NeoDB instances may block browser requests from other domains. If you see a CORS error, you'll need to either:
- Use a server-side proxy on your own site
- Or check if your instance allows cross-origin API reads

## License

MIT# neodb-embed-shelf-widget

Embed your [NeoDB](https://neodb.net) books and podcasts shelf into any website with a single script tag. Works with any NeoDB instance. No build tools required.

Built by [Craig Lambie](https://craiglambie.com) · GitHub: [@cclambie](https://github.com/cclambie)

---

## Quick Start

1. Edit the config at the top of `dist/neodb-embed-shelf-widget.js`:

```js
const NEODB_HOST       = "https://reviewdb.app";   // Your NeoDB instance
const NEODB_TOKEN      = "YOUR_ACCESS_TOKEN";       // From your instance's /developer/ console
const NEODB_SHELF      = "complete";                // complete | progress | wishlist
const NEODB_CATEGORIES = ["book", "podcast"];       // Any combo of: book, podcast, movie, tv, music, game
const NEODB_LIMIT      = 12;                        // Items per category
```

2. Add to your HTML:

```html
<link rel="stylesheet" href="dist/neodb-embed-shelf-widget.css">
<div class="neodb-embed"></div>
<script src="dist/neodb-embed-shelf-widget.js"></script>
```

## WordPress

Use a **Custom HTML** block and load from jsDelivr (free CDN, no hosting needed):

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/cclambie/neodb-embed-shelf-widget@main/dist/neodb-embed-shelf-widget.css">
<div class="neodb-embed"></div>
<script src="https://cdn.jsdelivr.net/gh/cclambie/neodb-embed-shelf-widget@main/dist/neodb-embed-shelf-widget.js"></script>
```

## Getting Your Access Token

1. Log in to your NeoDB instance (e.g. `https://reviewdb.app`)
2. Go to `/developer/` on your instance
3. Click **Authorize** and copy your token

## API Endpoint Used

```
GET {NEODB_HOST}/api/me/shelf/{shelf_type}?category={category}&page=1
```

Shelf types: `complete` · `progress` · `wishlist`  
Categories: `book` · `podcast` · `movie` · `tv` · `music` · `game`

## ⚠️ CORS Note

Some NeoDB instances may block browser requests from other domains. If you see a CORS error, you'll need to either:
- Use a server-side proxy on your own site
- Or check if your instance allows cross-origin API reads

## License

MIT
