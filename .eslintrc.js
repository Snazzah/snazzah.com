module.exports = {
  ignorePatterns: ['node_modules', 'dist', '.next'],
  extends: ['next', 'snazzah'],
  rules: {
    '@next/next/no-img-element': 0,
    '@next/next/no-html-link-for-pages': 0
  }
};
