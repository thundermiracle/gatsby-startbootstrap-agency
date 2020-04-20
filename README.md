# gatsyby-startbootstrap-agency

gatsby version of startbootstrap-agency with i18n supported.

[![Build Status](https://travis-ci.org/thundermiracle/gatsby-startbootstrap-agency.svg)](https://travis-ci.org/thundermiracle/gatsby-startbootstrap-agency)
[![dependencies Status](https://david-dm.org/thundermiracle/gatsby-startbootstrap-agency/status.svg)](https://david-dm.org/thundermiracle/gatsby-startbootstrap-agency)
[![peerDependencies Status](https://david-dm.org/thundermiracle/gatsby-startbootstrap-agency/peer-status.svg)](https://david-dm.org/thundermiracle/gatsby-startbootstrap-agency?type=peer)
[![Netlify Status](https://api.netlify.com/api/v1/badges/0a8bfd50-2bd5-43a6-bacd-51e5efc1f248/deploy-status)](https://app.netlify.com/sites/gatsby-startbootstrap-agency/deploys)

## Preview

![startbootstrap-agency](https://github.com/thundermiracle/startbootstrap-agency-webpack/blob/screenshot/screenshot/startbootstrap-agency.png)

## Sample page

[https://gatsby-startbootstrap-agency.netlify.app](https://gatsby-startbootstrap-agency.netlify.app)

[※ startbootstrap-agency (Original Version)](https://github.com/BlackrockDigital/startbootstrap-agency)

[※ startbootstrap-agency-webpack(Webpack Version)](https://github.com/thundermiracle/startbootstrap-agency-webpack/)

## How to use

```sh
npm install -g gatsby-cli

gatsby new my-blog-folder https://github.com/thundermiracle/gatsby-startbootstrap-agency
```

## Why Gatsby Version

1. > Original version is great but have to load too many unnecessary contents from CDN including all components in `bootstrap`, all solid & brands icons in `fontawesome`. That dramatically slows down the FCP(first contentful paint) in 3G environment.

    Using Gatsby could tree-shaking unnecessary code, optimizing images which make first contentful paint very fast.

1. > Implementation of i18n in original version is not easy and will make a lot of redundant code.

    i18n is really easy in Gatsby and i18n is more maintainable.

## Compare of Original, Webpack and Gatsby version

coming soon...

## License

This project is licensed under the terms of the [MIT license](/LICENSE).
