# 스타일가이드 HOST 사용법

## 스타일시트

### EJS

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Host</title>
  <meta name="importmap-type" use-injector />
  
  <% if (isLocal) { %>
    <script type="injector-importmap">
      {
        "imports": {
          "@pickme/style-guide": "//localhost:9001/pickme-style-guide.js"
        }
      }
    </script>
  <% } %>

  <script src="https://cdn.jsdelivr.net/npm/import-map-overrides@4.1.0/dist/import-map-overrides.js"></script>
</head>
<body>
  <script>
    window.importMapInjector.initPromise.then(() => {
      import('@pickme/style-guide');
    });
  </script>
  <import-map-overrides-full show-when-local-storage="devtools" dev-libs></import-map-overrides-full>
</body>
</html>
```

### Vite

```js
// vite.config.js
import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
    plugins: [
        federation({
            name: "host-app",
            remotes: {
                remoteApp: "http://localhost:9001/pickme-style-guide.js",
            },
        }),
    ],
});

// index.js
import("remoteApp/GlobalStyles");
```

## 컴포넌트

```js
// vite.config.js
import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
    plugins: [
        federation({
            name: "host-app",
            remotes: {
                remoteApp: "http://localhost:9001/pickme-style-guide.js",
            },
            shared: ["react", "react-dom", "@chakra-ui/react"],
        }),
    ],
});

// index.js
import Button from "remoteApp/Button";
```
