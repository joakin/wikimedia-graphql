exports.wikipedia = {
  action: lang => `https://${lang}.wikipedia.org/w/api.php`,
  rest: lang => `https://${lang}.wikipedia.org/api/rest_v1`
};

exports.rest = {
  related: title => `/page/related/${encodeURIComponent(title)}`
};
