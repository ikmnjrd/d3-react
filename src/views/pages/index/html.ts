const html = ({ header, canvas, main_links }: { header: string, canvas: string, main_links: string }) => `
  <!DOCTYPE html>
  <html>
    <head>
    </head>
    <body style="margin:0">
      <header id=header>${header}</header>
      <div id="main">${main_links}</div>
      <div id="canvas">${canvas}</div>
    </body>
    <script src="/static/js/header.js" defer></script>
    <script src="/static/js/main_links.js" defer></script>
    <script src="/static/js/canvas.js" defer></script>
  </html>
`;

export default html;