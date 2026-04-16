# WordPress Usage

## Step 1 — Upload Files

Upload the following files to your WordPress site (Media Library or via FTP):

• `neodb-embed-shelf-widget.js`  
• `neodb-embed-shelf-widget.css`  

Recommended location:

`/wp-content/uploads/`

---

## Step 2 — Add to Page

Add a **Custom HTML block** in WordPress and paste:

```html
<link rel="stylesheet" href="/wp-content/uploads/neodb-embed-shelf-widget.css">
<div class="neodb-embed"></div>
<script src="/wp-content/uploads/neodb-embed-shelf-widget.js"></script>

## Optional (Advanced)

If you prefer, you can place the files in your theme instead:

`/wp-content/themes/your-theme/js/`

And update the paths accordingly.
