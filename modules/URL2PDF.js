var url2pdf = require('url2pdf');
var q = require('q');

q.all([
  url2pdf.renderPdf('https://github.com/alvarcarto/url-to-pdf-api',{loadTimeout:20000})
])
.then(function(paths) {
  console.log('Created PDF @ ', paths);
})
.catch( function(err) {
  console.log(err);
})
