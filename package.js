Package.describe({
  summary: "Simple HTML5 Charts using the canvas element - richsilv extension"
});

Package.on_use(function (api) {
  api.add_files('Chart.js', 'client');
  api.export('Chart');
});
