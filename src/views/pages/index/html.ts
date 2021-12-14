const html = ({ header, canvas }: { header: string, canvas: string }) => `
  <!DOCTYPE html>
  <html>
    <head>
    </head>
    <body style="margin:0">
      <header id=header>${header}</header>
      <div id="canvas">${canvas}</div>
    </body>
    <script src="/static/js/canvas.js" defer></script>
  </html>
`;

export default html;