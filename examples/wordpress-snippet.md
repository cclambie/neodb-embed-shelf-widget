# WordPress Usage

# Option 1 - Full control on file type uploads
## Step 1 — Upload Files

Upload the following files to your WordPress site (Media Library or via FTP):

• `neodb-embed-shelf-widget.js`  
• `neodb-embed-shelf-widget.css`  

Recommended location:

`/wp-content/uploads/`

---

## Step 2 — Add to Page

Add a **Custom HTML block** in WordPress and paste:

```
html
<link rel="stylesheet" href="/wp-content/uploads/neodb-embed-shelf-widget.css">
<div class="neodb-embed"></div>
<script src="/wp-content/uploads/neodb-embed-shelf-widget.js"></script>
```

---

# Option 2 - Limited control on file type uploads to media
## Step 1 - Add to Code Snippts plugin
 - if you haven't already, install WP Code Snippets plugin
 - add snippet type css
 - paste the css in
 - note the snippet id eg. [wpcode id="814"]
 - repeat for the js, but type js
 - edit the snippets with your VARIABLES

## Step 2 - Add snippets to page
 - paste the shortcode with correct snippet id onto the page you want to display your neodb

## Optional (Advanced)

If you prefer, you can place the files in your theme instead:

`/wp-content/themes/your-theme/js/`

And update the paths accordingly.
