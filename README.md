# 스타일가이드 HOST 사용법

## EJS

### 스타일시트

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>Host</title>
  <meta http-equiv="Content-Security-Policy" content="style-src 'unsafe-inline' https: localhost:*;">
  <meta name="importmap-type" use-injector />
  
  <% if (isLocal) { %>
    <script type="injector-importmap">
      {
        "imports": {
          "@styleguide": "//localhost:9001/pickme-style-guide.js"
        }
      }
    </script>
  <% } %>

  <script src="https://cdn.jsdelivr.net/npm/import-map-overrides@4.1.0/dist/import-map-overrides.js"></script>
</head>
<body>
  <script>
    window.importMapInjector.initPromise.then(() => {
      import("@styleguide").then(module => module.get("./global"));
    });
  </script>
</body>
</html>
```

## Vite

```js
// vite.config.js
import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
    plugins: [
        federation({
            name: "host-app",
            remotes: {
                "@styleguide": "http://localhost:9001/pickme-style-guide.js",
            },
            shared: ["react", "react-dom", "@chakra-ui/react"],
        }),
    ],
});
```

### 스타일시트

```js
// index.js
import("@styleguide/global");
```

### 컴포넌트

```js
// page.js
import { Button, Item } from "@styleguide/react";
```
