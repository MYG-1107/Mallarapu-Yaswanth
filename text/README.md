# Mallarapu Yaswanth Portfolio

Modern, responsive, SEO-focused single-page portfolio website built from resume data.

## Structure

```text
text/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── script.js
│   └── xlsx.js
├── assets/
│   └── images/
├── robots.txt
├── sitemap.xml
└── README.md
```

## Customize

1. Open `index.html` and replace all placeholder links:
   - GitHub, LinkedIn, Credly, HackerRank, Duolingo, HackerEarth
   - Project links marked as “Add live link”
2. Update the canonical URL, Open Graph URL/image, and Twitter image URLs to match your deployment.
3. Add images in `assets/images/`:
   - `profile.jpg` (recommended 600x600)
   - `og-cover.jpg` (recommended 1200x630)
4. Update JSON-LD schema values (location, sameAs, job title, and profile URLs).
5. Optionally add a resume PDF to `assets/` and link it in the hero section.

## SEO Checklist

- [x] Full name in title, H1, meta description, JSON-LD
- [x] Canonical URL and Open Graph tags
- [x] Twitter card metadata
- [x] JSON-LD `Person` + `WebSite`
- [x] Semantic HTML5 sections
- [x] Heading hierarchy and accessible navigation
- [x] `robots.txt` and `sitemap.xml`
- [x] Mobile-first responsive CSS

## Deploy

### GitHub Pages
1. Push repository to GitHub.
2. Go to **Settings → Pages**.
3. Set the source branch and set the folder to `/text`.
4. Save and wait for publishing.

### Netlify
1. Import the repository into Netlify.
2. Set the publish directory to `text`.
3. Deploy.

### Vercel
1. Import the project in Vercel.
2. Set the output directory to `text`.
3. Deploy.

## Ranking Tips

1. Keep your full name consistent across the title, H1, and social profiles.
2. Add backlinks from LinkedIn, GitHub, and resume PDFs.
3. Update projects periodically to encourage re-indexing.
4. Use a custom domain if possible and keep it consistent across profiles.
