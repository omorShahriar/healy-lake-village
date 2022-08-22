import Layout from "./components/Layout";
import styles from "./styles/app.css";

const {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} = require("@remix-run/react");

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta = () => ({
  charset: "utf-8",
  title: "DOT Lake Village",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />

        <Links />
      </head>

      <body
        className=" font-noto bg-dotOrange "
        ondragstart="return false;"
        ondrop="return false;"
        oncontextmenu="return false;"
        oncopy="return false;"
      >
        <Layout>
          <Outlet />
        </Layout>

        <ScrollRestoration />

        <Scripts />

        <LiveReload />
      </body>
    </html>
  );
}
