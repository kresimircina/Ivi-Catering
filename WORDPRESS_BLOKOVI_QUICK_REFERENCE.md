D# WordPress Blokovi - Brzi Referenti Vodič

## 🚀 BRZI PRISTUP

### Trebam Vidjeti Sve WordPress Blokove na Stranici
```javascript
// Otvori browser DevTools (F12)
// Elements → Potraži "wp-block-"
// Prouči HTML strukturu

// Ili:
// Pogledaj page.content.rendered u network tabu
// API Response → Search for wp-block-
```

### Trebam Promijeniti STILOVE WordPress Blokova
```
📁 src/App.css
┣ Linija 302-360: Blokovi sa slikom i tekstom (desktop)
┣ Linija 377-450: Blokovi sa slikom i tekstom (mobile)
┗ Linija 452-600: Ostali blok stilovi

📁 src/Gutenberg.css
┗ Cijela datoteka: WordPress standardni stilovi
```

### Trebam Dodati NOVI WORDPRESS BLOK SADRŽAJ
```
1. Kreni u WordPress admin (https://...)
2. Koristiti Gutenberg editor
3. Kreiraj bloke (columns, image, buttons)
4. Objavi stranicu
5. React će automatski učitati (jer koristi API)
```

### Trebam PROMIJENITI MOBILNI PRIKAZ
```
📁 src/App.css
┗ Linija 377: @media (max-width: 768px)
  ├─ Slika u pozadinu: position: absolute, z-index: 1
  ├─ Overlay: ::after, z-index: 2
  ├─ Tekst gore: z-index: 3
  └─ Promijeni bilo koji od tih svojstava
```

---

## 📊 BRZI PREGLED DATOTEKA

| Datoteka | Namjena | Linija Interesa | Tip |
|----------|---------|-----------------|-----|
| [Vjencanja.js](src/pages/Vjencanja.js) | Stranica sa wp-block-columns | 47 | React |
| [Naslovna.js](src/pages/Naslovna.js) | Stranica sa wp-block-columns | 43 | React |
| [BlogSingle.js](src/pages/BlogSingle.js) | Blog post sa raznim blokovima | 53 | React |
| [Uslugesingle.js](src/pages/Uslugesingle.js) | Usluga sa raznim blokovima | 57 | React |
| [Onama.js](src/pages/Onama.js) | O nama sa raznim blokovima | 43 | React |
| [Usluge.js](src/pages/Usluge.js) | Lista usluga sa sažecima | 88 | React |
| [PoslovniEventi.js](src/pages/PoslovniEventi.js) | Lista eventi sa sažecima | 74 | React |
| [App.css](src/App.css) | Prilagođeni stilovi | 302-600+ | CSS |
| [Gutenberg.css](src/Gutenberg.css) | WordPress stilovi | sve linije | CSS |

---

## 🎨 WORDPRESS BLOK KLASE - BRZI REFERENCE

### Česti Blokovi u Vašem Projektu

```
✅ KORISTE SE ČESTO:

wp-block-columns
  └─ 2-kolonski layout (slika | tekst)
  └─ CSS: App.css linija 302

wp-block-column
  └─ Pojedina kolona
  └─ CSS: App.css linija 315

wp-block-image
  └─ Slika sa figcaption (opcionalno)
  └─ CSS: App.css linija 325

wp-block-buttons
  └─ Kontejner za gumbe
  └─ CSS: App.css linija 358

⚠️ MOGU SE POJAVITI:

wp-block-paragraph
  └─ Tekst paragraf
  └─ CSS: Gutenberg.css

wp-block-heading
  └─ Naslovi (h2, h3, h4)
  └─ CSS: Gutenberg.css

wp-block-list
  └─ Neuređene/uređene liste
  └─ CSS: Gutenberg.css

wp-block-media-text
  └─ Slika sa tekstom 50/50
  └─ CSS: Gutenberg.css linija 1710
```

---

## 🔧 CSS SVOJSTVA ZA MOBILNU PRILAGODBU

### Ključne CSS Svojstva za Mobile

```css
/* Z-index slojevanje */
z-index: 1   /* Pozadina (slika) */
z-index: 2   /* Sredina (overlay) */
z-index: 3   /* Vrh (tekst) */

/* Position strategija */
position: absolute;
position: relative;

/* Objekt-fit za slike */
object-fit: cover;   /* Slika ispunjava prostor */
object-fit: contain; /* Slika se vidi cijela */

/* Overlay boja */
background: rgba(0, 0, 0, 0.65);  /* 65% tamnjenja */

/* Pseudo elementi */
.element::after { }  /* Overlay preko elementa */
```

### Gdje Se Koriste u App.css

```css
/* Linija 390 */
.usluge-feature-grid .wp-block-columns .wp-block-column:has(.wp-block-image) {
  position: absolute;
  z-index: 1;
}

/* Linija 410 */
.usluge-feature-grid .wp-block-columns .wp-block-column:has(.wp-block-image)::after {
  background: rgba(0, 0, 0, 0.65);
  z-index: 2;
}

/* Linija 422 */
.usluge-feature-grid .wp-block-columns .wp-block-column:not(:has(.wp-block-image)) {
  position: absolute;
  z-index: 3;
}
```

---

## 🔗 API ENDPOINTS - BRZI PRISTUP

### Učitavanje Stranica

```javascript
// Stranica po slug-u
fetch('https://front2.edukacija.online/backend/wp-json/wp/v2/stranica?slug=vjencanja')
  
// Lista svih stranica
fetch('https://front2.edukacija.online/backend/wp-json/wp/v2/stranica')
```

### Učitavanje Blog Postova

```javascript
// Post po slug-u
fetch('https://front2.edukacija.online/backend/wp-json/wp/v2/posts?slug=blog-naslov&_embed')

// Lista svih postova
fetch('https://front2.edukacija.online/backend/wp-json/wp/v2/posts?_embed')
```

### Učitavanje Usluga/Eventi

```javascript
// Event po slug-u
fetch('https://front2.edukacija.online/backend/wp-json/wp/v2/eventi?slug=event-naslov&_embed')

// Lista svih eventi
fetch('https://front2.edukacija.online/backend/wp-json/wp/v2/eventi?_embed')
```

### Što Svaki Request Vraća

```javascript
{
  id: 123,
  title: { rendered: "Naslov stvare" },
  content: { rendered: "<div class='wp-block-...'>" },  // ← HTML sa blokovima
  excerpt: { rendered: "<div class='wp-block-...'>" },  // ← Sažetak
  featured_media: 456,
  featured_media_url: "https://...",
  _embedded: {
    "wp:featuredmedia": [ { media_details: { sizes: { full: { source_url: "..." } } } } ],
    author: [ { name: "Autor", url: "..." } ]
  }
}
```

---

## 💾 GDJE DODATI/PROMIJENITI

### Trebam Dodati Novi Stil za wp-block-image

**Gdje:** [src/App.css](src/App.css) nakon linije 331

```css
/* Dodaj nakon postojećih stilova */
.wp-block-columns .wp-block-image {
  border: 3px solid #bc9c6a;  /* Novi stil */
}
```

### Trebam Promijeniti MOBILNO PONAŠANJE

**Gdje:** [src/App.css](src/App.css) u media query (linija 377+)

```css
@media (max-width: 768px) {
  /* Promijeni ove值 */
  .usluge-feature-grid .wp-block-columns {
    min-height: 500px;  /* Promijeni sa 450px */
  }
  
  .usluge-feature-grid .wp-block-columns .wp-block-column:has(.wp-block-image)::after {
    background: rgba(0, 0, 0, 0.50);  /* Promijeni sa 0.65 */
  }
}
```

### Trebam Dodati Novi WORDPRESS BLOK CSS

**Gdje:** [src/App.css](src/App.css) nakon linije 600

```css
/* Novi blok stil - dodaj na kraj datoteke */
.wp-block-quote {
  border-left: 5px solid #bc9c6a;
  padding-left: 20px;
  font-style: italic;
}
```

---

## 🔍 KAKO DEBUGIRATI WORDPRESS BLOKOVE

### 1. Pregledaj Stvarni HTML iz API-ja

```javascript
// U React komponenti, loguj podatke:
useEffect(() => {
  fetch('...api/endpoint')
    .then(r => r.json())
    .then(data => {
      console.log('API Odgovor:', data.content.rendered);
      // Kopira HTML i inspektiraj struktu
    })
}, [])
```

### 2. Koristi Browser DevTools

```
1. Otvori stranicu (F12)
2. Elements → Potraži "wp-block-"
3. Pogledaj HTML strukturu
4. Pogledaj computed CSS stilove → right side
5. Eksperimentiraj sa CSS promjenama (live editing)
```

### 3. Pronađi CSS Problem

```
Ako blok izgleda loše:

1. F12 → Pogledaj element
2. Potraži background, position, z-index svojstva
3. Pogledaj App.css i Gutenberg.css za ta svojstva
4. Promijeni i test lokalno
5. Spremi u datoteku
```

---

## ⚡ BRZE AKCIJE

### Trebam Vidjeti Sve wp-block-* Klase u Projektu
```bash
# U terminalu:
grep -r "wp-block-" src/

# Ili koristi Find in Files (Ctrl+Shift+F) u VS Code
# Pretraži: wp-block-
```

### Trebam Vidjeti Ako se Koristi Određeni Blok
```bash
# Primjer: traži sve gdje se koristi wp-block-columns
grep -r "wp-block-columns" src/

# Trebam vidjeti datoteke gdje se koristi dangerouslySetInnerHTML
grep -r "dangerouslySetInnerHTML" src/
```

### Trebam Vidjeti Kompletan CSS za Blok
```css
/* Traži u App.css ili Gutenberg.css */
.wp-block-[blok-naziv] {
  /* Sva svojstva za taj blok */
}

@media (max-width: 768px) {
  .wp-block-[blok-naziv] {
    /* Mobilna svojstva */
  }
}
```

---

## 📋 CHECKLIST - MOBILNA PRILAGODBA

### Prije Počinjete

- [ ] Pregledam App.css liniju 377-450 (mobilni CSS)
- [ ] Razumijem z-index slojevanje (1, 2, 3)
- [ ] Znam koja svojstva da promijenim

### Tijekom Rada

- [ ] Otvarim DevTools (F12)
- [ ] Testiram promjene na mobilnom prikazu
- [ ] Promijenim CSS i refresh (Ctrl+R)
- [ ] Provjerim da izgleda dobro

### Završa Rada

- [ ] Testiram sve stranice (Vjencanja, Naslovna, Usluge)
- [ ] Testiram na različitim veličinama ekrana
- [ ] Provjerim da gumbe funkcioniraju
- [ ] Sprojem datoteku

---

## 🎯 PRIMJERI ČESTIH PROBLEMA I RJEŠENJA

### Problem 1: Tekst je neočitljiv nad slikom na mobilu

**Rješenje:**
```css
/* Povećaj opacity overlaya u App.css linija 410 */
background: rgba(0, 0, 0, 0.80);  /* Sa 0.65 na 0.80 */
```

### Problem 2: Slika je premala na mobilu

**Rješenje:**
```css
/* Povećaj min-height u App.css linija 385 */
min-height: 600px;  /* Sa 450px na 600px */
```

### Problem 3: Tekst se ne vidi jer je u uglu

**Rješenje:**
```css
/* Promijeni justify-content u App.css linija 428 */
justify-content: flex-start;  /* Sa center */
padding: 50px 20px 20px;      /* Dodaj više prostora */
```

### Problem 4: Gumb izgleda los na mobilu

**Rješenje:** Pogledaj [src/App.css](src/App.css) linija 623-653
```css
div.btn-ivi, 
div.wp-block-buttons.btn-ivi {
  /* Koji stilovi se primjenjuju */
}

.btn-ivi .wp-block-button__link {
  /* Promijeni padding, font-size, itd. */
}
```

---

## 🔗 DODATNI RESURSI

### WordPress REST API Dokumentacija
- https://developer.wordpress.org/rest-api/

### Gutenberg Blok Dokumentacija
- https://developer.wordpress.org/block-editor/reference-guides/

### CSS Media Queries
- https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries

### Flex Layout
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout

### CSS Grid
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout

---

## 📝 SAŽETAK

**TRI GLAVNE DATOTEKE SA WORDPRESS BLOKOVIMA:**

1. 📁 [src/App.css](src/App.css) - Vaši prilagođeni stilovi
2. 📁 [src/Gutenberg.css](src/Gutenberg.css) - WordPress standardni stilovi
3. 📁 [src/pages/\*.js](src/pages/) - React komponente

**MOBILNA LOGIKA:**
- Slika: `position: absolute`, `z-index: 1`
- Overlay: `::after`, `z-index: 2`
- Tekst: `position: absolute`, `z-index: 3`

**BRZI PRISTUP:**
- Promjena stilova → App.css
- Promjena mobile → App.css linija 377-450
- Dodavanje novog bloka → WordPress editor
- Provjera → Browser DevTools

---

## 🆘 TREBAM POMOĆ?

1. **Trebam vidjeti gdje se koristi blok X**
   → Grep search: `wp-block-X`

2. **Trebam vidjeti CSS za blok X**
   → Pretraži App.css ili Gutenberg.css za `.wp-block-X`

3. **Trebam dodati novi stil**
   → Dodaj u App.css nakon linije 600

4. **Trebam testirati promjene**
   → Koristi Browser DevTools - live CSS editing

5. **Trebam ponovno učitati stranicu**
   → Ctrl+R (refresh) ili Ctrl+Shift+R (hard refresh)
