# HTMX Error Drawer Extension

When an http request issued by HTMX fails, the error message is inserted into a special element at the top of the document's `<body>`.

## Usage

Include the extension:

``` html
<head>
    ...
    <script src="https://unpkg.com/htmx-extension-error-drawer@^1/src/error-drawer.js" defer></script>
    ...
</head>
```

Enable the extension:

``` html
<body hx-ext="error-drawer" >
    ...
</body>
```

## Configuration

Create your own `#error-drawer` element elsewhere in the page if you don't want it at the top of `<body>`.

