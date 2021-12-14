const html = ({ canvas }: { canvas: string }) => `
  <!DOCTYPE html>
  <html>
    <head>
    </head>
    <body style="margin:0">
      <div id="canvas">${canvas}</div>
    </body>
    <script src="/static/js/canvas.js" defer></script>
  </html>
`;

export default html;