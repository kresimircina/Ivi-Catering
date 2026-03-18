# WordPress REST API - Stvarni HTML Odgovori

## 📡 ŠTO TOČNO VRAĆA WORDPRESS REST API

Ovdje su stvarni primjeri JSON odgovora koje React komponente primaju i rendiraju.

---

## 📄 Primjer 1: Stranica "Vjencanja" - API Response

```json
{
  "id": 123,
  "date": "2024-01-15T10:30:00",
  "date_gmt": "2024-01-15T09:30:00",
  "guid": {
    "rendered": "https://front2.edukacija.online/?page_id=123"
  },
  "modified": "2024-02-20T14:45:00",
  "modified_gmt": "2024-02-20T13:45:00",
  "slug": "vjencanja",
  "status": "publish",
  "type": "page",
  "link": "https://front2.edukacija.online/vjencanja/",
  "title": {
    "rendered": "Vjenčanja"
  },
  
  /* ⭐ NAJVAŽNIJE - sadržaj sa WordPress blokovima */
  "content": {
    "rendered": "\n<!-- wp:columns {\"align\":\"wide\"} -->\n<div class=\"wp-block-columns alignwide\"><!-- wp:column {\"width\":\"50%\"} -->\n<div class=\"wp-block-column\" style=\"flex-basis:50%\"><!-- wp:image {\"id\":456,\"sizeSlug\":\"large\",\"linkDestination\":\"none\"} -->\n<figure class=\"wp-block-image size-large\"><img src=\"https://front2.edukacija.online/wp-content/uploads/2024/01/vjencanja-slika.jpg\" alt=\"\" class=\"wp-image-456\" style=\"object-fit:cover\"/></figure>\n<!-- /wp:image --></div>\n<!-- /wp:column -->\n\n<!-- wp:column {\"width\":\"50%\"} -->\n<div class=\"wp-block-column\" style=\"flex-basis:50%\"><!-- wp:heading -->\n<h2 class=\"wp-block-heading\">Vjenčanja</h2>\n<!-- /wp:heading -->\n\n<!-- wp:paragraph -->\n<p>Evo kako funkcionira sjedinjenje dvaju srca! Na IVi Cateringu stvaramo magične trenutke za dan najveće ljubavi. Naš tim Experience svaki detalj kao jedinstven izraz vaše romance.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:buttons -->\n<div class=\"wp-block-buttons\"><!-- wp:button {\"backgroundColor\":\"custom\",\"textColor\":\"white\"} -->\n<div class=\"wp-block-button\"><a class=\"wp-block-button__link wp-element-button btn-ivi\" style=\"background-color:#bc9c6a;color:#ffffff\" href=\"https://front2.edukacija.online/kontakt/\">Saznajte više</a></div>\n<!-- /wp:button --></div>\n<!-- /wp:buttons --></div>\n<!-- /wp:column --></div>\n<!-- wp:columns -->",
    "protected": false
  },
  
  /* Featured media */
  "featured_media": 789,
  
  /* Embedded data (zbog &_embed parametra) */
  "_embedded": {
    "wp:featuredmedia": [
      {
        "id": 789,
        "date": "2024-01-15T10:25:00",
        "slug": "vjencanja-featured",
        "type": "attachment",
        "link": "https://front2.edukacija.online/vjencanja-featured/",
        "title": { "rendered": "Vjenčanja featured slika" },
        "media_details": {
          "width": 1200,
          "height": 800,
          "sizes": {
            "thumbnail": {
              "file": "vjencanja-slika-150x150.jpg",
              "width": 150,
              "height": 150,
              "mime_type": "image/jpeg",
              "source_url": "https://front2.edukacija.online/wp-content/uploads/2024/01/vjencanja-slika-150x150.jpg"
            },
            "medium": {
              "file": "vjencanja-slika-300x200.jpg",
              "width": 300,
              "height": 200,
              "source_url": "https://front2.edukacija.online/wp-content/uploads/2024/01/vjencanja-slika-300x200.jpg"
            },
            "full": {
              "file": "vjencanja-slika.jpg",
              "width": 1200,
              "height": 800,
              "source_url": "https://front2.edukacija.online/wp-content/uploads/2024/01/vjencanja-slika.jpg"
            }
          }
        }
      }
    ]
  },
  
  "yoast_head": "<title>Vjenčanja | IVi Catering</title>...",
  "yoast_head_json": { /* SEO data */ }
}
```

### Što React Dobiva

```javascript
// src/pages/Vjencanja.js - nakon fetch i setPage
const page = {
  title: { rendered: "Vjenčanja" },
  content: { rendered: "<div class=\"wp-block-columns\">...</div>" },
  featured_media: 789,
  _embedded: { ... }
}

// Rendiranje:
<div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />

// Prikazuje HTML kao:
<div class="wp-block-columns">
  <div class="wp-block-column">
    <figure class="wp-block-image">
      <img src="https://..." />
    </figure>
  </div>
  <div class="wp-block-column">
    <h2>Vjenčanja</h2>
    <p>Evo kako funkcionira...</p>
    <div class="wp-block-buttons">
      <div class="wp-block-button">
        <a class="wp-block-button__link">Saznajte više</a>
      </div>
    </div>
  </div>
</div>
```

---

## 📄 Primjer 2: Blog Post - API Response

```json
{
  "id": 501,
  "date": "2024-02-10T09:00:00",
  "slug": "novi-trend-u-catering-industriji",
  "status": "publish",
  "type": "post",
  "link": "https://front2.edukacija.online/novi-trend-u-catering-industriji/",
  
  "title": {
    "rendered": "Novi trend u catering industriji"
  },
  
  /* ⭐ Kompletetiraj sadržaj sa raznim blokovima */
  "content": {
    "rendered": "\n<!-- wp:paragraph -->\n<p>Catering industrija prolazi kroz revoluciju. Nove tehnike, novi trendovi, i novi zahtjevi klijenta definiraju budućnost ovog sektora.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:heading -->\n<h2 class=\"wp-block-heading\">Što se Mijenja?</h2>\n<!-- /wp:heading -->\n\n<!-- wp:list -->\n<ul class=\"wp-block-list\"><li>Organske namirnice postaju standard</li><li>Personalizirani meniji za svaki gost</li><li>Digitalna integracija u planning-u</li></ul>\n<!-- /wp:list -->\n\n<!-- wp:image {\"id\":502} -->\n<figure class=\"wp-block-image\"><img src=\"https://front2.edukacija.online/wp-content/uploads/2024/02/trend-slika.jpg\" alt=\"\" class=\"wp-image-502\"/><figcaption class=\"wp-block-image__caption\">Moderan pristup catering-u</figcaption></figure>\n<!-- /wp:image -->\n\n<!-- wp:media-text {\"mediaId\":503,\"mediaType\":\"image\"} -->\n<div class=\"wp-block-media-text\"><figure class=\"wp-block-media-text__media\"><img src=\"https://front2.edukacija.online/wp-content/uploads/2024/02/media-text.jpg\" alt=\"\"/></figure><div class=\"wp-block-media-text__content\"><!-- wp:paragraph -->\n<p>Tekst sa strane slike prikazuje važnu informaciju. Ovaj blok kombinira sliku i tekst u jednojedini layout gdje slika zauzima 50% prostora.</p>\n<!-- /wp:paragraph --></div></div>\n<!-- /wp:media-text -->\n\n<!-- wp:quote -->\n<blockquote class=\"wp-block-quote\"><p>Kvaliteta i prijateljalatnost su temelj uspješnog catering-a.</p><cite>— Marko Horvat, IVi Catering</cite></blockquote>\n<!-- /wp:quote -->\n\n<!-- wp:gallery {\"columns\":3} -->\n<figure class=\"wp-block-gallery has-nested-images columns-3\"><!-- wp:image {\"id\":504} -->\n<figure class=\"wp-block-image\"><img src=\"https://front2.edukacija.online/wp-content/uploads/2024/02/gallery-1.jpg\" alt=\"\"/></figure>\n<!-- /wp:image -->\n\n<!-- wp:image {\"id\":505} -->\n<figure class=\"wp-block-image\"><img src=\"https://front2.edukacija.online/wp-content/uploads/2024/02/gallery-2.jpg\" alt=\"\"/></figure>\n<!-- /wp:image -->\n\n<!-- wp:image {\"id\":506} -->\n<figure class=\"wp-block-image\"><img src=\"https://front2.edukacija.online/wp-content/uploads/2024/02/gallery-3.jpg\" alt=\"\"/></figure>\n<!-- /wp:image --></figure>\n<!-- /wp:gallery -->\n\n<!-- wp:paragraph -->\n<p>Zaključak: Budućnost cateringa je u inovaciji, kvaliteti i fokusu na iskustvo gosta.</p>\n<!-- /wp:paragraph -->"
  },
  
  /* Excerpt - sažetak posta */
  "excerpt": {
    "rendered": "<p>Catering industrija prolazi kroz revoluciju. Nove tehnike, novi trendovi, i novi zahtjevi klijenta definiraju budućnost ovog sektora.</p>\n"
  },
  
  "author": 1,
  "featured_media": 507,
  
  "_embedded": {
    "wp:featuredmedia": [
      {
        "id": 507,
        "title": { "rendered": "Blog featured slika" },
        "media_details": {
          "sizes": {
            "full": {
              "source_url": "https://front2.edukacija.online/wp-content/uploads/2024/02/blog-featured.jpg"
            }
          }
        }
      }
    ],
    "author": [
      {
        "id": 1,
        "name": "Admin",
        "url": "https://front2.edukacija.online/author/admin/"
      }
    ]
  }
}
```

### Što React Dobiva

```javascript
// src/pages/BlogSingle.js - nakon fetch i setPost
const post = {
  title: { rendered: "Novi trend u catering industriji" },
  content: { rendered: "<p>Catering industrija...</p><h2>...</h2>..." },
  excerpt: { rendered: "<p>Catering industrija prolazi...</p>" },
  featured_media: 507,
  _embedded: { ... }
}

// Rendira:
<div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />

// Prikazuje sve blokove:
// - Paragraf sa tekstom
// - H2 naslov
// - UL lista sa 3 stavke
// - Slika sa figcaption-om
// - Media-text blok (slika + tekst 50/50)
// - Quote blok
// - Galerija sa 3 slike
// - Završni paragraf
```

---

## 📄 Primjer 3: Lista Usluga - API Response

```json
[
  {
    "id": 1001,
    "date": "2024-01-20T08:00:00",
    "slug": "vjencanja",
    "status": "publish",
    "type": "eventi",
    "link": "https://front2.edukacija.online/vjencanja/",
    
    "title": { "rendered": "Vjenčanja" },
    
    /* ⭐ Sažetak sa wp-block-columns + slika */
    "excerpt": {
      "rendered": "\n<!-- wp:columns -->\n<div class=\"wp-block-columns\"><!-- wp:column -->\n<div class=\"wp-block-column\"><!-- wp:image {\"id\":1002} -->\n<figure class=\"wp-block-image\"><img src=\"https://front2.edukacija.online/wp-content/uploads/2024/01/event-thumb.jpg\" alt=\"\"/></figure>\n<!-- /wp:image --></div>\n<!-- /wp:column -->\n\n<!-- wp:column -->\n<div class=\"wp-block-column\"><h3>Vjenčanja</h3><p>Opšte informacije o vjenčanja usluge...</p></div>\n<!-- /wp:column --></div>\n<!-- /wp:columns -->"
    },
    
    "featured_media": 1002,
    "_embedded": {
      "wp:featuredmedia": [
        {
          "id": 1002,
          "media_details": {
            "sizes": {
              "full": {
                "source_url": "https://front2.edukacija.online/wp-content/uploads/2024/01/event-thumb.jpg",
                "width": 600,
                "height": 400
              }
            }
          }
        }
      ],
      "author": [{ "id": 1, "name": "Admin" }]
    }
  },
  
  {
    "id": 1003,
    "slug": "poslovni-eventi",
    "title": { "rendered": "Poslovni Eventi" },
    "excerpt": { "rendered": "..." },
    "featured_media": 1004,
    "_embedded": { ... }
  },
  
  {
    "id": 1005,
    "slug": "vjencanstva-malograda",
    "title": { "rendered": "Vjenčanja Malog Grada" },
    "excerpt": { "rendered": "..." },
    "featured_media": 1006,
    "_embedded": { ... }
  }
]
```

### Što React Dobiva

```javascript
// src/pages/Usluge.js - nakon fetch i setPosts
const posts = [
  {
    id: 1001,
    title: { rendered: "Vjenčanja" },
    excerpt: { rendered: "<div class=\"wp-block-columns\">..." },
    featured_media: 1002,
    _embedded: { ... }
  },
  // ... više stavki
]

// Rendira se kao:
{posts.map(post => (
  <div className="col-md-4">
    <img src={post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url} />
    <h2>{post.title.rendered}</h2>
    <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered }} />
  </div>
))}

// Prikazuje svaku stavku kao karticu sa:
// - Slikom
// - Naslovom
// - Sažetkom (sa wp-block-columns ako postoji)
```

---

## 🔍 KAKO VIDJETI PRAVI JSON ODGOVOR

### Metoda 1: Network Tab u DevTools

```
1. Otvori stranicu (F12)
2. Network → XHR (filter)
3. Potraži "/wp-json/" zahtjev
4. Klikni na zapisa
5. Response tab → pogledaj kompletan JSON
```

### Metoda 2: Direktno u URL Bar

```
Prvo registracija na API:
1. http://localhost:3000/vjencanja
2. (F12) Console tab
3. Kopiraj path iz URL-a
4. Otvori: https://front2.edukacija.online/backend/wp-json/wp/v2/stranica?slug=vjencanja
5. Vidaš JSON direktno u pregledniku
```

### Metoda 3: cURL u Terminalu

```bash
curl "https://front2.edukacija.online/backend/wp-json/wp/v2/stranica?slug=vjencanja&_embed" | jq .
```

---

## 📊 GDJE SE KLJUČNI DIJELOVI NALAZE U JSON-u

```json
{
  /* React koristi ove dijelove */
  
  "title": { "rendered": "..." },           ← Naslov stranice
  "content": { "rendered": "..." },         ← ⭐ HTML sa WordPress blokovima
  "excerpt": { "rendered": "..." },         ← Sažetak sa blokovima
  
  "featured_media": 123,                    ← ID slike
  "_embedded": {
    "wp:featuredmedia": [
      {
        "media_details": {
          "sizes": {
            "full": {
              "source_url": "https://..."   ← URL slike
            }
          }
        }
      }
    ],
    "author": [
      {
        "name": "Autor",                    ← Ime autora
        "link": "https://..."               ← Link na autora
      }
    ]
  }
}
```

---

## 🎨 MAPIRANJE: API → React → CSS

```
┌─────────────────────────────────────┐
│ WordPress REST API Vraća            │
│ ├─ title.rendered: "Vjenčanja"      │
│ ├─ content.rendered:                │
│ │  "<div class='wp-block-columns'>" │
│ └─ featured_media                   │
└──────────────────────────────────────┘
            ↓
┌─────────────────────────────────────┐
│ React Komponenta (Vjencanja.js)     │
│ ├─ useState(null) → page            │
│ ├─ fetch('/wp-json/...vjencanja')   │
│ ├─ setPage(data[0])                 │
│ └─ dangerouslySetInnerHTML={{       │
│     __html: page.content.rendered   │
│    }}                               │
└──────────────────────────────────────┘
            ↓
┌─────────────────────────────────────┐
│ Browser Rendira HTML                │
│ <div class="wp-block-columns">      │
│   <div class="wp-block-column">...  │
│ </div>                              │
└──────────────────────────────────────┘
            ↓
┌─────────────────────────────────────┐
│ CSS (App.css + Gutenberg.css)      │
│ Primjenjuje stilove:                │
│ .wp-block-columns { ... }           │
│ .wp-block-image { ... }             │
│ @media (max-width: 768px) { ... }   │
└──────────────────────────────────────┘
            ↓
┌─────────────────────────────────────┐
│ Korisnik Vidi Lepu Stranicu!        │
│ [SLIKA]         [TEKST]             │ Desktop
│                                     │
│ [SLIKA]                             │ Mobile
│ (tekst preko)                       │
└──────────────────────────────────────┘
```

---

## 🔑 KLJUČNI JSON PUTEVI ZA REACT

```javascript
// Učitanje:
const [page, setPage] = useState(null);

fetch('https://front2.edukacija.online/backend/wp-json/wp/v2/stranica?slug=vjencanja')
  .then(r => r.json())
  .then(data => setPage(data[0]))

// Pristup podacima:
page.title.rendered              // "Vjenčanja"
page.content.rendered            // "<div class='wp-block-...'>"
page.featured_media              // 123
page._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url
                                 // "https://...image.jpg"

// Rendiranje:
<h1>{page.title.rendered}</h1>
<div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
```

---

## 📋 SAŽETAK

**Redosljed:**
1. React komponenta pravi fetch zahtjev
2. WordPress API vraća JSON sa HTML-om
3. HTML sadrži WordPress blok klase (`wp-block-*`)
4. React prikazuje HTML sa `dangerouslySetInnerHTML`
5. CSS iz App.css i Gutenberg.css stilizira sve
6. Korisnik vidi lijepo formatiranu stranicu

**Ključna Svojstva u JSON-u:**
- `title.rendered` - Naslov za prikaz
- `content.rendered` - ⭐ HTML sa WordPress blokovima
- `excerpt.rendered` - Sažetak
- `featured_media` - ID slike
- `_embedded` - Dodatni podaci (za &_embed param)

**Gdje Se Koristi:**
- VideoVjencanja.js → linija 47
- BlogSingle.js → linija 53
- Uslugesingle.js → linija 57
- Usluge.js → linija 88
- PoslovniEventi.js → linija 74
