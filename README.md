<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsyby startbootstrap-agency
</h1>

gatsby version of startbootstrap-agency with i18n supported.

[![dependencies Status](https://david-dm.org/thundermiracle/gatsby-startbootstrap-agency/status.svg)](https://david-dm.org/thundermiracle/gatsby-startbootstrap-agency)
[![Netlify Status](https://api.netlify.com/api/v1/badges/0a8bfd50-2bd5-43a6-bacd-51e5efc1f248/deploy-status)](https://app.netlify.com/sites/gatsby-startbootstrap-agency/deploys)

## Preview

![startbootstrap-agency](https://github.com/thundermiracle/gatsby-startbootstrap-agency/blob/screenshot/screenshot/startbootstrap-agency.png)

## Sample page

[https://gatsby-startbootstrap-agency.netlify.app](https://gatsby-startbootstrap-agency.netlify.app)

[※ startbootstrap-agency (Original Version)](https://github.com/BlackrockDigital/startbootstrap-agency)

[※ startbootstrap-agency-webpack(Webpack Version)](https://github.com/thundermiracle/startbootstrap-agency-webpack/)

## Note

__If you're not interesting in i18n, use [StaticQueryVersion](https://github.com/thundermiracle/gatsby-startbootstrap-agency/tree/StaticQueryVersion) instead. StaticQueryVersion gets better performance and better code structure.__

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

## Comparison of Original, Webpack and Gatsby version

### Gatsby Version

![Gatsby lighthouse](https://github.com/thundermiracle/gatsby-startbootstrap-agency/blob/screenshot/screenshot/lighthouse_gatsby.png)

### Webpack Version

![Webpack lighthouse](https://github.com/thundermiracle/gatsby-startbootstrap-agency/blob/screenshot/screenshot/lighthouse_webpack.png)

### Original Version

![Original lighthouse](https://github.com/thundermiracle/gatsby-startbootstrap-agency/blob/screenshot/screenshot/lighthouse_original.png)

## Basic Configuration

- `iconName` in Services.md MUST be defined in `'config/CustomIcons.jsx'`.

- `imageFileName` in markdown MUST be added in `'content/assets'`.

- all configurable contents are saved in markdown files in `'content'` folder.

- change `file name's number` in `'content/sections'` folder to change the sort order.

- nullable items (if defined):
  
  - `anchor` in section markdown: display in menu if defined in sections' markdown
  - items in `social`: `twitter, facebook, linkedin, github, medium`
  - `jumpToAnchor, jumpToAnchorText` in Top.md: add button in Top section

## i18n Configuration

- set defaultLang in `'config/site.js'`

- add langTextMap to `'config/site.js'` (LanguageSelector won't display if langTextMap is not defined. Consider using [StaticQueryVersion](#note) if i18n is not necessary)

- copy markdown files in `'content'` folder, rename it to `xxxx.[langKey].md` and translate the contents

## License

This project is licensed under the terms of the [MIT license](/LICENSE).
