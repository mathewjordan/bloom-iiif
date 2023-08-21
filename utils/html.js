const { buildMarkdown } = require("./markdown");

async function buildHTML(isStatic) {
  const htmlFile = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Redirecting to Clover IIIF</title>
      <meta
        http-equiv="refresh"
        content="0; URL=https://samvera-labs.github.io/clover-iiif/docs/slider"
      />
      <link rel="canonical" href="https://samvera-labs.github.io/clover-iiif/docs/slider" />
    </head>
    <body></body>
  </html>`;

  return htmlFile;
}

exports.buildHTML = buildHTML;
