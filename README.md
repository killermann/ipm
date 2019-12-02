# www.ItsPronouncedMetrosexual.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/974238ce-2fc5-4142-801c-970bea0600cb/deploy-status)](https://app.netlify.com/sites/itspronouncedmetrosexual/deploys)

This is my fifth major rebuild of the IPM free online resource, and my first non-Wordpress version! This site gets millions of visitors a year, from all over the world (over 200 countries), and serves countless downloads of .PDFs and other resources.

I rebuilt the site from the ground up to make it:

- ⌨️ **More accessible** (for blind and low vision people, as well as non-mouse keyboard users)
- 🚰 **Less resource-intensive**, reducing the average page weight (in MB) by about 90% (for the climate, and for users around the world with limited bandwidth)
- 🔐 **More secure** (hacking has always been a problem with this site, and my sites in general -- no more!)
- 🏎 **Faster** (cuz who's just sitting around with 2 extra full seconds for an article to load, amiright?)
- 🗺 **Easier to navigate**, find & download what you want, and see what new stuff I've published since you last visited (local storage to the rescue!)
- 🤑 **Affordable to host** (with the traffic this site gets, I was paying $400 - $800 per month for managed Wordpress hosting. Big oof.)
- 🔮 **Completely open source** (you can see all content and all the code that powers the web app in this repository, and you're welcome to use it to build your own site!)

And I succeeded 💯 Here's the [Google Lighthouse Audit Scores](https://developers.google.com/web/tools/lighthouse) for this version of IPM:

![100 for performance, 100 for accessibility, 100 for best practices, 100 for SEO, and progressive web app enabled](https://i.imgur.com/eKcVSJF.png)

## 🛠 Built with...

- [Hugo](https://gohugo.io) &amp; [Go Lang](https://golang.org/)
- [Netlify](https://netlify.com)

## 🙌 Huge Thanks to...

- Jake Archibald and his SVG optimization GUI [https://jakearchibald.github.io/svgomg/](https://jakearchibald.github.io/svgomg/). I spent hours in there making my gradients _just so_, and was able to reduce my data footprint considerably.
- Chris Coyier and [CSS-Tricks.com](https://css-tricks.com/). Always the first place I go if I'm unsure of how to solve a front-end problem.
- [WebAIM](https://webaim.org) and all their accessibility pointers and resources, like the [contrast checker](https://webaim.org/resources/contrastchecker/). Wouldn't have gotten that 100 accessibility score without their guidance.