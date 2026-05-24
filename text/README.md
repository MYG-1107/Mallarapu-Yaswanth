# Mallarapu Yaswanth Portfolio

Modern, responsive, SEO-focused single-page portfolio website.

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

1. Open `index.html`.
2. Replace placeholders in:
   - About
   - Skills
   - Projects
   - Education & Achievements
   - Contact email
3. Add your images in `assets/images/`:
   - `profile.jpg` (recommended 600x600)
   - `og-cover.jpg` (recommended 1200x630)
4. Update all canonical/OG URLs if deployment URL changes.
5. Update JSON-LD schema values for complete personal data.

## SEO Checklist

- [x] Unique title with keyword: **Mallarapu Yaswanth**
- [x] Meta description with job title and intent keywords
- [x] Canonical URL
- [x] Open Graph tags
- [x] Twitter card tags
- [x] JSON-LD (`Person`, `CreativeWork`)
- [x] Semantic HTML5 sections (`header`, `main`, `section`, `footer`)
- [x] Heading hierarchy
- [x] `robots.txt` and `sitemap.xml`
- [x] Accessibility basics (skip link, ARIA labels, link text)

## Deploy

### GitHub Pages
1. Push repository to GitHub.
2. In GitHub, open **Settings → Pages**.
3. Set source branch and root folder (or `/text` if deploying this folder).
4. Save and wait for publishing.

### Netlify
1. Import the repository into Netlify.
2. Set publish directory to `text`.
3. Deploy.

### Vercel
1. Import project in Vercel.
2. Set output directory to `text`.
3. Deploy.

## Name Ranking Tips

1. Use your exact full name in:
   - `<title>`
   - `<h1>`
   - meta description
   - JSON-LD `Person.name`
2. Add a custom domain (optional) and keep consistent profile links.
3. Keep your LinkedIn and GitHub bios aligned with the same title keywords.
4. Add backlinks from social profiles, resumes, and developer communities.
5. Update projects regularly so search engines recrawl fresh content.
