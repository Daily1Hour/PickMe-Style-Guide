# 스타일가이드

![palette](https://github.com/user-attachments/assets/124ce6af-bc46-4134-aef2-c2822358b038)

<table>
  <tr>
    <td style="background-color: #f6d5df; color:white; height:10px;">Primary</td>
    <td style="background-color: #f6d5df; width:10px;"><img src="https://placehold.co/30x25/f6d5df/f6d5df.png" /></td>
    <td style="background-color: #e580a0; width:10px;"><img src="https://placehold.co/30x25/e580a0/e580a0.png" /></td>
    <td style="background-color: #dc5680; width:10px;"><img src="https://placehold.co/30x25/dc5680/dc5680.png" /></td>
    <td style="background-color: #a9234d; width:10px;"><img src="https://placehold.co/30x25/a9234d/a9234d.png" /></td>
    <td style="background-color: #7f1a3a; width:10px;"><img src="https://placehold.co/30x25/7f1a3a/7f1a3a.png" /></td>
    <td>#E27396</td>
  </tr>
  <tr>
    <td style="background-color: #daeff1; color:white; height:10px;">Secondary</td>
    <td style="background-color: #daeff1; width:10px;"><img src="https://placehold.co/30x25/daeff1/daeff1.png" /></td>
    <td style="background-color: #b5dfe3; width:10px;"><img src="https://placehold.co/30x25/b5dfe3/b5dfe3.png" /></td>
    <td style="background-color: #6bbfc7; width:10px;"><img src="https://placehold.co/30x25/6bbfc7/6bbfc7.png" /></td>
    <td style="background-color: #388c94; width:10px;"><img src="https://placehold.co/30x25/388c94/388c94.png" /></td>
    <td style="background-color: #2a696f; width:10px;"><img src="https://placehold.co/30x25/2a696f/2a696f.png" /></td>
    <td>#B3DEE2</td>
  </tr>
  <tr>
    <td style="background-color: #ebf3d8; color:white; height:10px;">Tertiary</td>
    <td style="background-color: #ebf3d8; width:10px;"><img src="https://placehold.co/30x25/ebf3d8/ebf3d8.png" /></td>
    <td style="background-color: #d6e6b2; width:10px;"><img src="https://placehold.co/30x25/d6e6b2/d6e6b2.png" /></td>
    <td style="background-color: #aecd65; width:10px;"><img src="https://placehold.co/30x25/aecd65/aecd65.png" /></td>
    <td style="background-color: #7b9a32; width:10px;"><img src="https://placehold.co/30x25/7b9a32/7b9a32.png" /></td>
    <td style="background-color: #5c7425; width:10px;"><img src="https://placehold.co/30x25/5c7425/5c7425.png" /></td>
    <td>#EAF2D7</td>
  </tr>
</table>

## 호스트 사용법

### EJS

```html
<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8" />
        <title>Host</title>
        <meta
            http-equiv="Content-Security-Policy"
            content="style-src 'unsafe-inline' https: localhost:*;"
        />
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
                import("@styleguide").then((module) => module.get("./global"));
            });
        </script>
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
                "@styleguide": "http://localhost:9001/pickme-style-guide.js",
            },
            shared: ["react", "react-dom", "@chakra-ui/react"],
        }),
    ],
});
```

-   스타일시트

```js
// index.js
import("@styleguide/global");
```

-   컴포넌트

```js
// page.js
import { Button, Item } from "@styleguide/react";
```
