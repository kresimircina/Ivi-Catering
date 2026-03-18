# WordPress Blokovi - Primjeri Stvarnog HTML-a i CSS-a

## 🎬 VIZUALNI PUT WORDPRESS BLOKA OD STVARANJA DO PRIKAZIVANJA

### Scenarij: Korisnik Posjeti Stranicu "Vjencanja"

```
┌─────────────────────────────────────────────────────────────┐
│ 1. KORISNIK KLIKNE NA "VJENČANJA" STRANICU                 │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ 2. REACT PRAVI API POZIV                                   │
│    fetch('...backend/wp-json/wp/v2/stranica?slug=vjencanja')
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ 3. WORDPRESS VRAĆA JSON SA HTML-om                         │
│    page.content.rendered = "<div class='wp-block-..."      │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ 4. REACT PRIKAZUJE: dangerouslySetInnerHTML                │
│    <div dangerouslySetInnerHTML={{ __html: ... }} />       │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ 5. CSS IZ App.css i Gutenberg.css STILIZIRA BLOKOVE       │
│    .wp-block-columns { display: flex; ... }                │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ 6. KORISNIK VIDI LIJEPU STRANICU SA BLOKOVIMA             │
└─────────────────────────────────────────────────────────────┘
```

---

## 📝 PRIMJER 1: Kompletan HTML Blok koji Dolazi iz WordPress-a

### Što Koristi API Vraća (`page.content.rendered`)

```html
<!-- 
  Ovo je HTML koji dolazi direktno iz WordPress REST API-ja
  Koristi se na stranicama: Vjencanja, Naslovna, itd.
-->

<div class="wp-block-columns">
  <!-- STUPAC 1: SLIKA -->
  <div class="wp-block-column" style="flex-basis: 50%;"> 
    <figure class="wp-block-image">
      <img 
        alt="Vjenčanja" 
        class="wp-image-456" 
        loading="lazy" 
        src="https://front2.edukacija.online/wp-content/uploads/2024/01/wedding-image.jpg" 
        style="object-fit: cover;" 
      />
    </figure>
  </div>

  <!-- STUPAC 2: TEKST I GUMB -->
  <div class="wp-block-column" style="flex-basis: 50%;">
    <h2 class="wp-block-heading">Vjenčanja</h2>
    
    <p>Evo kako funkcionira sjedinjenje dvaju srca! Na IVi Cateringu stvaramo magične trenutke 
    za dan najveće ljubavi. Naš timExperience svaki detalj kao jedinstven izraz vaše romance.</p>
    
    <div class="wp-block-buttons">
      <div class="wp-block-button" style="width:fit-content;">
        <a 
          class="wp-block-button__link wp-element-button btn-ivi" 
          href="https://front2.edukacija.online/kontakt/" 
          style="
            background-color: #bc9c6a; 
            border-radius: 5px; 
            color: white;
          "
        >
          Saznajte više
        </a>
      </div>
    </div>
  </div>
</div>
```

### Što Se Događa Kada React Prosljeđuje U dangerouslySetInnerHTML

```jsx
// src/pages/Vjencanja.js - Linija 47
<div dangerouslySetInnerHTML={{ __html: page.content.rendered }}></div>

// React rendira upravo taj HTML kao što je
// Browser vidi:
// <div class="wp-block-columns">
//   <div class="wp-block-column">...</div>
//   <div class="wp-block-column">...</div>
// </div>
```

---

## 🎨 PRIMJER 2: CSS koji Stilizira taj HTML - DESKTOP PRIKAZ

### Lokacija: [src/App.css](src/App.css) linija 302-360

```css
/* DESKTOP PRIKAZ (>768px) */

.wp-block-columns {
  align-items: center !important; 
  margin: 0 auto 80px auto !important;
  max-width: 1200px !important;
  gap: 40px; 
  background-color: #f8f9f8;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.06);
  overflow: hidden;
  padding: 0 !important;
}

.wp-block-columns .wp-block-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  text-align: center;
  padding: 40px;
}

.wp-block-columns .wp-block-image {
  margin: 0 !important;
  width: 100%;
  height: 100%;
}

.wp-block-columns .wp-block-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 400px;
  transition: transform 0.6s ease;
}

.wp-block-columns h2 {
  color: #2d5a2d; 
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: 600;
}

.wp-block-columns p {
  color: #4a5d4a;
  font-size: 1.15rem;
  line-height: 1.8;
  margin-bottom: 30px;
}

.wp-block-columns .wp-block-buttons {
  justify-content: center !important;
  width: 100%;
  display: flex;
}
```

### Rezultat na Ekranu - DESKTOP:
```
┌─────────────────────────────────────────────┐
│  [  SLIKA       ] [  TEKST        ]         │
│  [  (400px+)    ] [ Vjenčanja      ]       │
│  [              ] [ Opis...       ]        │
│  [              ] [  [Saznajte]   ]        │
│  [              ] [              ]        │
└─────────────────────────────────────────────┘
   |← 50% →|      |← 50% →|
```

---

## 📱 PRIMJER 3: CSS koji Stilizira taj HTML - MOBILNI PRIKAZ

### Lokacija: [src/App.css](src/App.css) linija 377-450

```css
/* MOBILNI PRIKAZ (<768px) */

/* Cijela kartica postaje kontejner sa pozadinskaslika */
.usluge-feature-grid .wp-block-columns {
  display: block !important;
  position: relative !important;
  margin-bottom: 40px !important;
  min-height: 450px;
  overflow: hidden;
  border-radius: 12px;
}

/* 1️⃣ STUPAC SA SLIKOM U POZADINU */
.usluge-feature-grid .wp-block-columns .wp-block-column:has(.wp-block-image) {
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
  z-index: 1; /* Ispod */
  padding: 0 !important;
  margin: 0 !important;
}

/* Slika zauzima cijelo područje */
.usluge-feature-grid .wp-block-columns .wp-block-image,
.usluge-feature-grid .wp-block-columns .wp-block-image img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover !important;
  margin: 0 !important;
}

/* 2️⃣ TAMNI OVERLAY PREKO SLIKE - Čitljivost teksta */
.usluge-feature-grid .wp-block-columns .wp-block-column:has(.wp-block-image)::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65); /* 65% zauzetka */
  z-index: 2; /* Iznad slike, ispod teksta */
}

/* 3️⃣ STUPAC SA TEKSTOM NAD SLIKOM */
.usluge-feature-grid .wp-block-columns .wp-block-column:not(:has(.wp-block-image)) {
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
  z-index: 3; /* Na vrhu */
  
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 20px !important;
}

/* Tekst je bijel da bi bio čitljiv na tamnoj pozadini */
.usluge-feature-grid .wp-block-columns h2 {
  color: #ffffff !important;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.5);
  font-size: 2rem;
}

.usluge-feature-grid .wp-block-columns p {
  color: #f0f0f0 !important;
  text-shadow: 1px 1px 5px rgba(0,0,0,0.5);
  font-size: 1.05rem;
  margin-bottom: 20px;
}
```

### Rezultat na Ekranu - MOBILNI:
```
┌──────────────────────────┐
│  SLIKA U POZADINI       │
│  [overlay 65%]          │
│                         │
│  Vjenčanja              │
│  (tekst preko slike)    │
│  Opis usluge            │
│                         │
│  [Saznajte više]        │
│                         │
└──────────────────────────┘
     100% širine
     450px minimalne visine
```

---

## 📐 BLOK SLOJEVANJA - Z-INDEX OBJAŠNJENJE

```
z-index: 3  ┌────────────────────────┐
            │  TEKST (Vjenčanja)    │ ← VIDLJIVO
            │  (bijel tekst)        │
            ├────────────────────────┤
z-index: 2  │ OVERLAY (crn, 65%) │ ← Tamnjenje
            │ rgba(0,0,0,0.65)      │
            ├────────────────────────┤
z-index: 1  │ SLIKA (background)   │ ← Na dnu
            │ (object-fit: cover)   │
            └────────────────────────┘

📍 Kako Radi:
1. Stupac sa slikom (z-index: 1) → position: absolute, cijeli blok
2. ::after pseudo-element (z-index: 2) → overlay tamnjenja
3. Stupac sa tekstom (z-index: 3) → position: absolute na vrhu
```

---

## 🔄 TRANSFORMACIJA - ŠTO SE DOGODI KADA SE MIJENJA VELIČINA EKRANA

### Scenario: Korisnik Rotira Telefon iz Portrait u Landscape

**1. Portrait (< 768px) - AKTIVNO:**
```css
/* Mobilni CSS je aktivan */
.usluge-feature-grid .wp-block-columns {
  display: block !important;
  position: relative !important;
  min-height: 450px;
}
```
Rezultat: Slika u pozadini, tekst preko

**2. Landscape (≥ 768px) - AKTIVNO:**
```css
/* Mobilni CSS više nije aktivan, odgovarajuje desktop CSS */
.wp-block-columns {
  display: flex;
  gap: 40px;
}
```
Rezultat: Stupci pored jedan drugoga (slika | tekst)

---

## 📋 PRIMJER 4: Blog Post sa Raznim Blokovima

### Što WordPress Vraća za Blog Post

```html
<!-- 
  Primjer sadržaja koji dolazi iz /backend/wp-json/wp/v2/posts?slug=...
  Koristi se na blogSingle.js i Uslugesingle.js
-->

<!-- Tekst blok -->
<p>Ovo je prva linija blo posta sa svim detaljima koje trebate znati...</p>

<!-- Naslovi -->
<h2>Podnaslov prvog odjeljka</h2>

<!-- Lista -->
<ul class="wp-block-list">
  <li>Stavka 1 sa važnom informacijom</li>
  <li>Stavka 2 sa dodatnim detaljem</li>
  <li>Stavka 3 sa zaključkom</li>
</ul>

<!-- Slika sa tekstom pored (50/50 layout) -->
<div class="wp-block-media-text">
  <figure class="wp-block-media-text__media">
    <img src="https://example.com/media.jpg" alt="Media slika" />
  </figure>
  <div class="wp-block-media-text__content">
    <h3>Tekst Pored Slike</h3>
    <p>Opis što se nalazi pored slike na desnoj strani...</p>
    <p>Dodatni tekst koji se pojavljuje skupa sa slikom...</p>
  </div>
</div>

<!-- Citati -->
<blockquote class="wp-block-quote">
  <p>"Ovo je važan citat koji trebate zapamtiti"</p>
  <cite>— Autor Citata</cite>
</blockquote>

<!-- Slika -->
<figure class="wp-block-image">
  <img src="https://example.com/big-image.jpg" alt="Velika slika" />
  <figcaption>Opis pod slikom</figcaption>
</figure>

<!-- Galerija slika -->
<figure class="wp-block-gallery has-nested-images">
  <figure class="wp-block-image">
    <img src="https://example.com/gallery1.jpg" />
  </figure>
  <figure class="wp-block-image">
    <img src="https://example.com/gallery2.jpg" />
  </figure>
  <figure class="wp-block-image">
    <img src="https://example.com/gallery3.jpg" />
  </figure>
</figure>

<!-- Završni tekst -->
<p>Ovo je završni paragraf sa zaključkom bloga...</p>
```

### Kako CSS Stilizira Blog Post

```css
/* src/App.css + src/Gutenberg.css */

.wp-block-paragraph {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5em;
}

.wp-block-media-text {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2em;
}

@media (max-width: 600px) {
  .wp-block-media-text {
    grid-template-columns: 1fr;
  }
}

.wp-block-image figcaption {
  text-align: center;
  font-style: italic;
  color: #666;
  margin-top: 10px;
}

.wp-block-quote {
  border-left: 4px solid #bc9c6a;
  padding-left: 20px;
  font-style: italic;
}

.wp-block-gallery {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.wp-block-gallery figure {
  flex: 1 1 calc(50% - 10px);
}
```

---

## 🎯 ČESTA PITANJA - GDJE SE NALAZI ŠTA?

### "Gdje je HTML koji dolazi iz WordPress-a?"
```
→ U browser DevTools → Elements → pogledaj <div dangerouslySetInnerHTML...>
→ Doslovno je HTML koji WordPress vraća
```

### "Gdje je CSS koji stilizira te HTML elemente?"
```
→ src/App.css (linija 302-600+) → prilagođeni stilovi za vašu stranicu
→ src/Gutenberg.css (cijela datoteka) → originalni WordPress Gutenberg stilovi
```

### "Gdje se učitava sadržaj stranice?"
```
→ src/pages/Vjencanja.js → linija 47 → dangerouslySetInnerHTML
→ useState za page podatke
→ useEffect za fetch API poziv
```

### "Gdje su mobilni stilovi?"
```
→ src/App.css → linija 377-450
→ @media (max-width: 768px) { ... }
```

### "Koji su to wp-block-* klase?"
```
→ WordPress Gutenberg - 100+ mogućih blok tipova
→ wp-block-columns, wp-block-image, wp-block-buttons itd.
→ Svaka klasa ima CSS u Gutenberg.css
```

---

## ✅ ZAKLJUČAK - CIJELI PROCES

```
1. WORDPRESS EDITOR
   └─ Koristi Gutenberg blok editor
   └─ Kreira bloke: wp-block-columns, wp-block-image, itd.

2. WORDPRESS REST API
   └─ /wp-json/wp/v2/stranica?slug=vjencanja
   └─ Vraća: { content: { rendered: "<div class='wp-block-..." } }

3. REACT KOMPONENTA
   └─ fetch() → podatke u state
   └─ dangerouslySetInnerHTML → rendira HTML

4. CSS STILOVI
   └─ App.css → prilagođeni stilovi
   └─ Gutenberg.css → standardni WordPress stilovi
   └─ @media (max-width: 768px) → mobilni prikaz

5. KORISNIK
   └─ Vidi lijepu stranicu sa slikom i tekstom
   └─ Na mobilu: slika u pozadini, tekst gore
   └─ Na desktopu: slika i tekst pored
```
