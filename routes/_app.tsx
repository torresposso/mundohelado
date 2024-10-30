import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head lang="ES_CO">
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#2196F3"></meta>
        <title>Mundo Helado: Cada bocado, una experiencia única</title>
        <meta
          name="description"
          content="Descubre el mundo del helado en Mundo Helado. Cada bocado una experiencia única "
        />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
