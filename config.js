module.exports = {
  browserSync: {
    hostname: "http://my-site.local:8083",
    port: 8080,
    openAutomatically: false,
    reloadDelay: 50
  },

  drush: {
    enabled: true,
    alias: 'drush --uri=my-site.local cache-rebuild all'
  },

  twig: {
    useCache: false // "false" means Drupal caches will be cleared on template changes.
  }
};
