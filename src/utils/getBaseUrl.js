function getBaseUrl(defaultLang, lang) {
  if (defaultLang !== lang) {
    return `/${lang}/`;
  }

  return '/';
}

module.exports = getBaseUrl;
