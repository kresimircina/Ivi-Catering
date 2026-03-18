# WordPress Blokovi - Detaljna Karta Datoteka i Lokacija

## 📊 Tablica Svih Datoteka sa WordPress Blokovima

| Datoteka | Tip | WordPress Blokovi | Linija | Vrsta Sadržaja |
|----------|-----|-------------------|--------|----------------|
| [Vjencanja.js](src/pages/Vjencanja.js) | Stranica | `wp-block-columns`, `wp-block-column`, `wp-block-image` | 47 | Kompletan sadržaj stranice |
| [Naslovna.js](src/pages/Naslovna.js) | Stranica | `wp-block-columns`, `wp-block-column`, `wp-block-image` | 43 | Kompletan sadržaj stranice |
| [BlogSingle.js](src/pages/BlogSingle.js) | Stranica | Razni blokovi (tekst, slike, liste) | 53 | Kompletan sadržaj post-a |
| [Uslugesingle.js](src/pages/Uslugesingle.js) | Stranica | Razni blokovi (tekst, slike, liste) | 57 | Kompletan sadržaj usluge |
| [Onama.js](src/pages/Onama.js) | Stranica | Razni blokovi | 43 | Kompletan sadržaj stranice |
| [Usluge.js](src/pages/Usluge.js) | Stranica | `wp-block-columns` (u excerpt-u) | 88 | Sažetak usluge |
| [PoslovniEventi.js](src/pages/PoslovniEventi.js) | Stranica | `wp-block-columns` (u excerpt-u) | 74 | Sažetak eventa |
| [Privevent.js](src/pages/Privevent.js) | Stranica | `wp-block-columns` (u excerpt-u) | 71 | Sažetak eventa |
| [App.css](src/App.css) | Stilove | CSS za sve WordPress blokove | 302-600+ | Prilagođeni stilovi |
| [Gutenberg.css](src/Gutenberg.css) | Stilove | Originalni WordPress CSS | Cijela datoteka | Standardni WordPress stilovi |

---

## 🔗 KAKO SE WORDPRESS BLOKOVI UČITAVAJU

### 1. API Poziv - Učitavanje Sadržaja
```javascript
// Iz Vjencanja.js
fetch('https://front2.edukacija.online/backend/wp-json/wp/v2/stranica/SLUG&_embed')
  .then(response => response.json())
  .then((data) => setPage(data))
```

**Što API vraća:**
- `page.title.rendered` - Naslov stranice
- `page.content.rendered` - **HTML sadržaj sa WordPress blokovima** ← KLJUČNO!
- `page.featured_media` - ID slike
- Ostali metadata...

### 2. Prikaz na React Stranici
```jsx
// Iz Vjencanja.js - linija 47
<div dangerouslySetInnerHTML={{ __html: page.content.rendered }}></div>
```

**Što se ovdje dogodilo:**
1. WordPress REST API vraća HTML sa klasama `wp-block-*`
2. React komponenta to prosljeđuje `dangerouslySetInnerHTML`
3. Preglednike render da HTML kao što je
4. CSS iz [App.css](src/App.css) i [Gutenberg.css](src/Gutenberg.css) stilizira te blokove

---

## 🎯 GDJE ODGOVARAJUĆI WORDPRESS BLOKOVI DOLAZE (Konkretni Primjeri)

### Primjer 1: Stranica "Vjencanja"

**Datoteka:** [src/pages/Vjencanja.js](src/pages/Vjencanja.js)

**Kako se učitava:**
```jsx
const Vjencanja = () => {
  const {slug} = useParams(); // slug = "vjencanja"
  const [page, setPage] = useState(null);

  useEffect(() => {
    fetch(`https://front2.edukacija.online/backend/wp-json/wp/v2/stranica?slug=vjencanja`)
      .then(r => r.json())
      .then(data => setPage(data[0]))
  }, [slug])

  return (
    <>
      <HeroSection stranica={page} />
      
      {/* OVDJE SE RENDIRIRAJU WORDPRESS BLOKOVI */}
      <div dangerouslySetInnerHTML={{ __html: page.content.rendered }}></div>
      {/* Sadržaj koji dolazi iz WordPress-a */}
    </>
  )
}
```

**Što WordPress vraća za Vjencanja stranicu:**
```html
<div class="wp-block-columns">
  <div class="wp-block-column">
    <figure class="wp-block-image">
      <img src="/wp-content/uploads/2024/01/vjencanja-slika.jpg" alt="Vjenčanja" />
    </figure>
  </div>
  <div class="wp-block-column">
    <h2>Vjenčanja</h2>
    <p>Opisujemo naše usluge za vjenčanja...</p>
    <div class="wp-block-buttons">
      <div class="wp-block-button">
        <a class="wp-block-button__link">Saznajte više</a>
      </div>
    </div>
  </div>
</div>
```

---

### Primjer 2: Blog Post (BlogSingle.js)

**Datoteka:** [src/pages/BlogSingle.js](src/pages/BlogSingle.js)

**Kako se učitava:**
```jsx
const BlogSingle = () => {
  const {slug} = useParams(); // slug = "novi-blog-post"
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://front2.edukacija.online/backend/wp-json/wp/v2/posts?slug=${slug}&_embed`)
      .then(r => r.json())
      .then(data => setPost(data[0]))
  }, [slug])

  return (
    <div className="blog-single">
      <div className="masthead">
        {/* Hero slika */}
      </div>
      <article>
        {/* WORDPRESS BLOKOVI IZ POST.CONTENT.RENDERED */}
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
      </article>
    </div>
  )
}
```

**Što WordPress vraća za Blog Post:**
```html
<!-- Kombinacija različitih blokova -->

<!-- Tekst blok -->
<p>Ovo je prvi paragraf blo posta sa WordPress-a...</p>

<!-- Slika blok -->
<figure class="wp-block-image">
  <img src="/wp-content/uploads/2024/02/blog-slika.jpg" alt="Blog slika" />
  <figcaption class="wp-block-image__caption">Opis slike</figcaption>
</figure>

<!-- Naslovi -->
<h2 class="wp-block-heading">Podnaslov bloga</h2>

<!-- Lista blok -->
<ul class="wp-block-list">
  <li>Stavka 1</li>
  <li>Stavka 2</li>
</ul>

<!-- Tekst + Slika blok -->
<div class="wp-block-media-text">
  <figure class="wp-block-media-text__media">
    <img src="/wp-content/uploads/2024/02/text-image.jpg" />
  </figure>
  <div class="wp-block-media-text__content">
    <p>Tekst sa strane slike...</p>
  </div>
</div>

<!-- Više teksta -->
<p>Završni paragraf...</p>
```

---

### Primjer 3: Lista Usluga (Usluge.js)

**Datoteka:** [src/pages/Usluge.js](src/pages/Usluge.js)

**Kako se učitava:**
```jsx
const Usluge = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Učitava SVE usluge
    fetch('https://front2.edukacija.online/backend/wp-json/wp/v2/eventi')
      .then(r => r.json())
      .then(setPosts)
  }, [])

  return (
    <div className="row">
      {posts.map(post => (
        <div key={post.id} className="col-md-4 blog-post">
          <img src={post._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url} />
          <h2>{post.title.rendered}</h2>
          
          {/* WORDPRESS BLOK - SAŽETAK */}
          <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered }} />
          
          <p>{post._embedded.author[0].name} | {new Date(post.date).toTimeString()}</p>
        </div>
      ))}
    </div>
  )
}
```

**Što WordPress vraća za `post.excerpt.rendered`:**
```html
<!-- Čest blok: wp-block-columns (sažetak usluge) -->
<div class="wp-block-columns">
  <div class="wp-block-column">
    <figure class="wp-block-image">
      <img src="/wp-content/uploads/events/event-thumb.jpg" />
    </figure>
  </div>
  <div class="wp-block-column">
    <h3>Naziv Eventa</h3>
    <p>Kratko opisivanje eventa...</p>
  </div>
</div>
```

---

## 📍 GDJE SE KORISTE WORDPRESS BLOKOVI U KODU

### Glavne Lokacije

#### 1. **Učitavање iz API-ja**
```
🔗 fetch() pozivi → WordPress REST API
   └─ Datoteka: src/pages/*.js
   └─ Lokacija: useEffect hook
```

#### 2. **Rendiranje na Stranici**
```
🖼️ dangerouslySetInnerHTML → React komponente
   └─ Datoteka: src/pages/*.js
   └─ Lokacija: JSX return statement
```

#### 3. **Stilizacija Blokova**
```
🎨 CSS klase → wp-block-*
   └─ Datoteka 1: src/App.css (linija 302-600+)
   └─ Datoteka 2: src/Gutenberg.css (cijela datoteka)
```

---

## 🎨 MOBILNI PRIKAZ - GDJE SE NALAZI

### Mobilni CSS za Blokove sa Slikom i Tekstom

**Datoteka:** [src/App.css](src/App.css), linija 377-450

```css
@media (max-width: 768px) {
  /* MOBILNI PRIKAZ - KARTICE SA SLIKOM */
  
  /* 1. wp-block-columns postaje position: relative */
  .usluge-feature-grid .wp-block-columns {
    display: block !important;
    position: relative !important;
    min-height: 450px;
  }

  /* 2. wp-block-column sa slikom u pozadinu */
  .usluge-feature-grid .wp-block-columns .wp-block-column:has(.wp-block-image) {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  /* 3. wp-block-image zauzima cijeli prostor */
  .usluge-feature-grid .wp-block-columns .wp-block-image,
  .usluge-feature-grid .wp-block-columns .wp-block-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* 4. Tamni overlay ::after */
  .usluge-feature-grid .wp-block-columns .wp-block-column:has(.wp-block-image)::after {
    background: rgba(0, 0, 0, 0.65);
    z-index: 2;
  }

  /* 5. wp-block-column sa tekstom preko slike */
  .usluge-feature-grid .wp-block-columns .wp-block-column:not(:has(.wp-block-image)) {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  /* 6. Tekst postaje bijel */
  .usluge-feature-grid .wp-block-columns h2 {
    color: #ffffff;
    text-shadow: 2px 2px 8px rgba(0,0,0,0.5);
  }
}
```

---

## 📋 STRUKTURA KOMPLEKSNOG WORDPRESS SADRŽAJA

Primjer što se točno učitava kada user posjetiti "Vjencanja" stranicu:

```
/api/stranica?slug=vjencanja
│
└─ Response JSON Object:
   ├─ id: 123
   ├─ title: { rendered: "Vjenčanja" }
   ├─ content: {
   │   rendered: `
   │     <div class="wp-block-columns">
   │       <div class="wp-block-column">
   │         <figure class="wp-block-image">
   │           <img src="..." alt="..." />
   │         </figure>
   │       </div>
   │       <div class="wp-block-column">
   │         <h2>Vjenčanja</h2>
   │         <p>Detaljni opis...</p>
   │         <div class="wp-block-buttons">
   │           <div class="wp-block-button">
   │             <a class="wp-block-button__link" href="...">
   │               Saznajte Više
   │             </a>
   │           </div>
   │         </div>
   │       </div>
   │     </div>
   │   `
   │ }
   ├─ featured_media: 456
   ├─ featured_media_url: "..."
   └─ Ostali metadata...
```

**Što se dogodi:**
1. React API poziva i dobiva ovaj JSON
2. `setPage(data[0])` sprema podatke u state
3. JSX rendira: `<div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />`
4. Preglednika prikazuje HTML sa `wp-block-*` klasama
5. CSS iz [App.css](src/App.css) i [Gutenberg.css](src/Gutenberg.css) stilizira sve

---

## 🔍 KAKO PRONAĆ GDJE SE KORISTI ODREĐENI BLOK

### Primjer: Pronalaženje Gdje se `wp-block-image` Koristi

**Korak 1: Pronađi u HTML-u koji WordPress vraća**
```
→ Koristi browser DevTools → Elements
→ Potraži "wp-block-image"
```

**Korak 2: Pronađi CSS stilove za taj blok**
```
→ Datoteka: src/App.css (linija 325-340)
→ Datoteka: src/Gutenberg.css (linija 1242-1310)

.wp-block-image {
  margin: 0;
  width: 100%;
}

.wp-block-image img {
  width: 100%;
  object-fit: cover;
}
```

**Korak 3: Pronađi React komponentu koja ga koristi**
```
→ Grep search za "dangerouslySetInnerHTML"
→ src/pages/Vjencanja.js (linija 47)
→ src/pages/BlogSingle.js (linija 53)
→ itd.
```

---

## 📊 SAŽETAK BLOKOVA PO TIPU

### Blokovi sa Slikom i Tekstom (2-kolone)
- **Koristi:** Vjencanja, Naslovna, Usluge, Poslovni eventi
- **CSS:** [App.css](src/App.css) linija 302-440
- **Mobilni:** Apsolutni pozicioniranje sa overlay-om
- **Blok klase:** `wp-block-columns`, `wp-block-column`, `wp-block-image`

### Blokovi sa Tekstom (Solo sadržaj)
- **Koristi:** BlogSingle, Uslugesingle, Onama
- **CSS:** [Gutenberg.css](src/Gutenberg.css) različiti odjeli
- **Mobilni:** Automatski stekovanje
- **Blok klase:** `wp-block-paragraph`, `wp-block-heading`, `wp-block-list`

### Blokovi sa Medijom (Media-text)
- **Koristi:** Može biti u bilo kojem post-u
- **CSS:** [Gutenberg.css](src/Gutenberg.css) linija 1710-1823
- **Mobilni:** CSS `grid-template-columns: 100% !important` (is-stacked-on-mobile)
- **Blok klase:** `wp-block-media-text`

---

## ✅ ZAKLJUČAK

**Sve WordPress blokove možete pronaći na:**

1. **API Response** ← gdje stvarno dolaze
   - Lokacija: `https://front2.edukacija.online/backend/wp-json/`
   - HTML sa `wp-block-*` klasama

2. **React Komponente** ← gdje se rendiriraju
   - Datoteke: `src/pages/*.js`
   - Metoda: `dangerouslySetInnerHTML`

3. **CSS Stilove** ← gdje se stiliziraju
   - Datoteke: `src/App.css` i `src/Gutenberg.css`
   - Media queries: `@media (max-width: 768px)`

**Za mobilnu prilagodbu fokusirajte se na:**
- [src/App.css](src/App.css) linija 377-450 (mobilni CSS za kartice)
- CSS `position: absolute` i `z-index` strategija
