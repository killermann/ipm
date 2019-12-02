# www.ItsPronouncedMetrosexual.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/974238ce-2fc5-4142-801c-970bea0600cb/deploy-status)](https://app.netlify.com/sites/itspronouncedmetrosexual/deploys)

This is my fifth major rebuild of the IPM free online resource, and my first non-Wordpress version! This site gets millions of visitors a year, from all over the world (over 200 countries), and serves countless downloads of .PDFs and other resources.

I rebuilt the site from the ground up to make it:

- ⌨️ **More accessible** (for everyone, but especially blind and low vision people, as well as non-mouse keyboard users)
- 🚰 **Less resource-intensive**, reducing the average page weight (in MB) by about 90% (for the climate, and for people around the world with limited bandwidth)
- 🔐 **More secure** (hacking has always been a problem with this site, and my sites in general -- no more!)
- 🏎 **Faster** (cuz who's just sitting around with 2 extra full seconds for an article to load, amiright?)
- 🗺 **Easier to navigate**, find & download what you want, and see what new stuff I've published since you last visited (local storage to the rescue!)
- 🤑 **Affordable to host** (with the traffic this site gets, I was paying $400 - $800 per month for managed Wordpress hosting. Big oof.)
- 🔮 **Completely open source** (you can see all content and all the code that powers the web app in this repository, and you're welcome to use it to build your own site!)

And I succeeded 💯 Here's the [Google Lighthouse Audit Scores](https://developers.google.com/web/tools/lighthouse) for this version of IPM:

![100 for performance, 100 for accessibility, 100 for best practices, 100 for SEO, and progressive web app enabled](https://i.imgur.com/eKcVSJF.png)

## 🙋‍♀️ Contributing

Want to help out? Please submit pull requests with...

- 📝 **Edits!** Fix typos, content errors, or even suggest a rewrite to make a section of an article more readable.
- 🌏 **Translations!** Create a new markdown file and prepend the two-letter country code of the language you're translating it into before the .md (e.g., about.fr.md to translate the [About page](https://github.com/killermann/ipm/blob/master/content/about.md) into French)
- 🐞 **Bug fixes!** Noticing something wonky on the front-end? Have an easy fix? I'd love the help. I barely know how any of this stuff works.
- ♿️ **Accessibility improvements!** Is there a better way to do something? Did I forget alt text where I should really have included it? Please help me help everyone use this site.

## 🛠 Built with...

- [JAMStack Methodology](https://jamstack.org/)
- [Hugo](https://gohugo.io) &amp; [Go Lang](https://golang.org/)
- [Netlify](https://netlify.com)
- [Coffee](https://ko-fi.com/killermann)

## 🙌 Huge Thanks to...

- The cabal of [a11y](https://a11yproject.com/)/accessibility activists who checked in on this site build progress from July - November 2019 as I was creating it from the ground up and gave me regular feedback and constructive criticism to make the site the most accessible it's ever been
- My secret beta tester group who provided me tons of insight on the new design and structure of the site
- Jake Archibald and his SVG optimization GUI [https://jakearchibald.github.io/svgomg/](https://jakearchibald.github.io/svgomg/). I spent hours in there making my gradients _just so_, and was able to reduce my data footprint considerably.
- Chris Coyier and [CSS-Tricks.com](https://css-tricks.com/). Always the first place I go if I'm unsure of how to solve a front-end problem.
- [WebAIM](https://webaim.org) and all their accessibility pointers and resources, like the [contrast checker](https://webaim.org/resources/contrastchecker/). Wouldn't have gotten that 100 accessibility score without their guidance.
- The [Hugo Community](https://discourse.gohugo.io/) and bep for their helpfulness, troubleshooting, and guidance in learning a new SSG.
