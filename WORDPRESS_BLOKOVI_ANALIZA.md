# WordPress Blokovi - Detaljne Informacije

## 📋 Pregled

Vaš React projekt koristi WordPress Gutenberg blokove koji se učitavaju dinamički kroz REST API. Sadržaj sa WordPress-a se prikazuje na React stranicama koristeći `dangerouslySetInnerHTML`.

---

## 🎯 Glavne Datoteke sa WordPress Blokovima

### 1. **Stranice sa Dinamičkim Sadržajem**

#### [src/pages/Vjencanja.js](src/pages/Vjencanja.js)
- **Korišteni blokovi:** `wp-block-columns`, `wp-block-column`, `wp-block-image`
- **Struktura:**
  ```jsx
  <div dangerouslySetInnerHTML={{ __html:page.content.rendered }}></div>
  ```
- **Mobilni prikaz:** Blokovi sa slikom ostanu kao stupci na mobilnom (nemaju poseban preured)
- **Lokacija:** Linija 47

#### [src/pages/Naslovna.js](src/pages/Naslovna.js)
- **Korišteni blokovi:** `wp-block-columns`, `wp-block-column`, `wp-block-image`
- **Struktura:** Ista kao Vjencanja - koristi WordPress REST API
- **Lokacija:** Linija 43

#### [src/pages/BlogSingle.js](src/pages/BlogSingle.js)
- **Korišteni blokovi:** Razni Gutenberg blokovi (tekst, slike, liste, itd.)
- **Struktura:**
  ```jsx
  <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
  ```
- **Omotač:** Centriran u kontejneru sa `col-md-10 col-lg-8 col-xl-7`
- **Lokacija:** Linija 53

#### [src/pages/Uslugesingle.js](src/pages/Uslugesingle.js)
- **Korišteni blokovi:** Razni Gutenberg blokovi
- **Struktura:** Ista kao BlogSingle
- **Lokacija:** Linija 57

#### [src/pages/Usluge.js](src/pages/Usluge.js)
- **Korišteni blokovi:** `wp-block-columns` sa slikom i tekstom
- **Struktura:** Koristi excerpt.rendered za prikaz sažetka

#### [src/pages/Onama.js](src/pages/Onama.js)
- **Korišteni blokovi:** Razni Gutenberg blokovi
- **Lokacija:** Linija 43

#### [src/pages/PoslovniEventi.js](src/pages/PoslovniEventi.js)
- **Korišteni blokovi:** `wp-block-columns` sa slikom i tekstom

#### [src/pages/Privevent.js](src/pages/Privevent.js)
- **Korišteni blokovi:** `wp-block-columns` sa slikom i tekstom

---

## 🧩 Tipovi WordPress Blokova Koji Se Koriste

### 1. **wp-block-columns & wp-block-column**
**Namjena:** Raspoređivanje sadržaja u stupce (do 6 stupaca)

**Desktop struktura:**
```html
<div class="wp-block-columns">        <!-- Kontejner za sve stupce -->
  <div class="wp-block-column">       <!-- Stupac 1 -->
    <figure class="wp-block-image">
      <img src="..." />
    </figure>
  </div>
  <div class="wp-block-column">       <!-- Stupac 2 -->
    <h2>Naslov</h2>
    <p>Tekst...</p>
    <div class="wp-block-buttons">
      <div class="wp-block-button">
        <a class="wp-block-button__link">Gumb</a>
      </div>
    </div>
  </div>
</div>
```

**Mobilni prikaz (trenutan):** Blokovi se stekuju okomito (automatski iz Gutenberg CSS-a)

**Problem za rješavanje:** Slika i tekst trebaju biti reorganizirani kako su definirani u App.css

---

### 2. **wp-block-image**
**Namjena:** Prikaz slike

**Struktura:**
```html
<figure class="wp-block-image">
  <img src="..." alt="..." />
  <figcaption>Naslov slike (opcionalno)</figcaption>
</figure>
```

**CSS svojstva:**
- `object-fit: cover` - Slika ispunjava dostupan prostor
- `max-width: 100%` - Responzivna širina
- `border-radius` - Zaobljeni rubovi (ako postoje)

---

### 3. **wp-block-buttons & wp-block-button**
**Namjena:** Skupovi interaktivnih gumbova

**Struktura:**
```html
<div class="wp-block-buttons">
  <div class="wp-block-button">
    <a class="wp-block-button__link">Tekst gumba</a>
  </div>
</div>
```

**Vaš CSS za gumbe:** [src/App.css](src/App.css) linija 623-653

---

### 4. **wp-block-cover / wp-block-cover-image**
**Namjena:** Pozadinska slika sa tekstom preko nje

**Strukturu:**
```html
<div class="wp-block-cover" style="...">
  <div class="wp-block-cover__inner-container">
    <!-- Tekst i sadržaj -->
  </div>
</div>
```

---

### 5. **wp-block-media-text**
**Namjena:** Slika sa tekstom sa strane (50/50 layout)

**Struktura:**
```html
<div class="wp-block-media-text">
  <div class="wp-block-media-text__media">
    <img src="..." />
  </div>
  <div class="wp-block-media-text__content">
    <!-- Tekst, naslovi, itd. -->
  </div>
</div>
```

**Mobilni prikaz:** Automatski se preuređuje - slika gore, tekst dolje

---

### 6. **wp-block-gallery**
**Namjena:** Galerije sa više slika

**Struktura:**
```html
<figure class="wp-block-gallery has-nested-images">
  <figure class="wp-block-image">
    <img src="..." />
  </figure>
  <figure class="wp-block-image">
    <img src="..." />
  </figure>
  ...
</figure>
```

---

### 7. **wp-block-group**
**Namjena:** Grupe sadržaja sa zajedničkim stilom

**Struktura:**
```html
<div class="wp-block-group">
  <!-- Bilo koji sadržaj -->
</div>
```

---

### 8. **wp-block-list**
**Namjena:** Liste (neuređene/uređene)

**Struktura:**
```html
<ul class="wp-block-list">
  <li>Stavka 1</li>
  <li>Stavka 2</li>
</ul>
```

---

## 🎨 CSS Stilovi - Gdje Se Nalaze

### [src/App.css](src/App.css)
**Linija 302-600:** Svi prilagođeni stilovi za WordPress blokove
- `wp-block-columns` - Glavne kartice sa slikom i tekstom
- `wp-block-image` - Stilovi za slike (object-fit, min-height, itd.)
- `wp-block-buttons` - Stilovi za gumbe
- **Mobilni stilovi** (linija 377-450): Posebna logika za 768px i manje

**Ključna mobilna funkcionalnost:**
```css
@media (max-width: 768px) {
  /* Slika ide u pozadinu */
  .usluge-feature-grid .wp-block-columns .wp-block-column:has(.wp-block-image) {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  
  /* Tamni overlay preko slike */
  .usluge-feature-grid .wp-block-columns .wp-block-column:has(.wp-block-image)::after {
    background: rgba(0, 0, 0, 0.65);
    z-index: 2;
  }
  
  /* Tekst ide preko slike */
  .usluge-feature-grid .wp-block-columns .wp-block-column:not(:has(.wp-block-image)) {
    position: absolute;
    z-index: 3;
  }
}
```

### [src/Gutenberg.css](src/Gutenberg.css)
**Originalni WordPress Gutenberg CSS** - Sadrži sve standardne WordPress blok stilove
- `wp-block-columns` - Linija 298-350
- `wp-block-image` - Linija 1242-1310
- `wp-block-cover` - Linija 512-800
- `wp-block-media-text` - Linija 1710-1823
- `wp-block-gallery` - Linija 949-1240
- `wp-block-buttons` - razne linije
- I **3600+ linija** drugih WordPress blok stilova

---

## 📱 Mobilni Pregled - Trenutna Struktura

### Kako Funkcionira Sada

1. **Desktop (>768px):**
   - Stupci se prikazuju horizon (50% | 50%)
   - Slika sa jedne strane, tekst sa druge strane

2. **Mobilni (<768px):**
   - Stupci se stekuju vertikalno (100%)
   - Slika se prikazuje kao pozadina
   - Tekst ide preko slike sa tamnim overlay-om
   - Koristi CSS `position: absolute` za slojeve

### Gdje Se Primjenjuje Mobilni Pregled

- `.usluge-feature-grid .wp-block-columns` - Kartice sa slikom i tekstom
- Ove kartice se koriste na stranicama: **Vjencanja, Naslovna, Usluge**

---

## 🔍 Detaljan Prikaz - Kod sa API-ja

### Primjer HTML-a Koji Dolazi iz WordPress-a

```html
<!-- Tipična struktura koja dolazi iz WordPress REST API-ja -->
<div class="wp-block-columns">
  <div class="wp-block-column">
    <figure class="wp-block-image">
      <img 
        loading="lazy" 
        src="https://example.com/wp-content/uploads/image.jpg"
        alt="Opis slike" 
      />
    </figure>
  </div>
  <div class="wp-block-column">
    <h2>Naslov Usluge</h2>
    <p>Opis usluge sa detaljima...</p>
    <div class="wp-block-buttons">
      <div class="wp-block-button">
        <a 
          class="wp-block-button__link" 
          href="https://example.com/proizvod"
        >
          Saznajte Više
        </a>
      </div>
    </div>
  </div>
</div>
```

---

## 🎯 Blokovi po Sajtnici

### Stranica: **Vjencanja** [Vjencanja.js](src/pages/Vjencanja.js)
- **Sadržaj:** WordPress stranica sa `wp-block-columns`
- **Ukupno stupaca:** 2 (slika + tekst)
- **Lokacija:** Linija 47
- **Lista:** 
  - `wp-block-columns` ✓
  - `wp-block-column` ✓
  - `wp-block-image` ✓
  - `wp-block-buttons` ✓ (ako je u sadržaju)

### Stranica: **Naslovna** [Naslovna.js](src/pages/Naslovna.js)
- **Ista struktura kao Vjencanja**
- **Dodatno:** Ima `usluge-feature-grid` wrapper sa mobilnim logikom

### Stranica: **Blog & Usluge** [BlogSingle.js](src/pages/BlogSingle.js) & [Uslugesingle.js](src/pages/Uslugesingle.js)
- **Sadržaj:** Kompleksni WordPress post sa različitim blokovima
- **Mogući blokovi:**
  - Tekst (paragraf)
  - Slike
  - Naslovi (h2, h3, h4, itd.)
  - Liste (ul, ol)
  - Citate (blockquote)
  - Gumbe
  - Medija (video, audio)
  - I više...

---

## 🚨 Važne Klase za Mobilnu Prilagodbu

| Klasa | Namjena | Mobilni Ključ |
|-------|---------|---------------|
| `.wp-block-columns` | Stupci | `flex-wrap: wrap` na <768px |
| `.wp-block-column` | Pojedina kolona | `flex-basis: 100%` na <768px |
| `.wp-block-image` | Slika u bloku | `position: absolute` u `.usluge-feature-grid` |
| `.wp-block-column:has(.wp-block-image)` | Stupac sa slikom | Šalje se u pozadinu (App.css:390) |
| `.wp-block-column:not(:has(.wp-block-image))` | Stupac sa tekstom | Pokriva pozadinu (App.css:422) |
| `.usluge-feature-grid` | Kontejner za kartice | Aktivira posebnu mobilnu logiku |

---

## 💾 CSS Mediji Upiti

### Mobilni Breakpoint: 768px
```css
@media (max-width: 768px) {
  /* Mobilni stilovi */
}

@media (min-width: 782px) {
  /* WordPress default tablet+ */
}
```

### Gdje Se Koriste u Vašem Kodu
- [App.css](src/App.css) linija 377-450: Mobilni stilovi za usluge kartice
- [App.css](src/App.css) linija 577-600: Dodatni mobilni stilovi
- [Gutenberg.css](src/Gutenberg.css): Razne mobile-first strukture

---

## 📐 Struktura Mobilnog Preuređivanja (Detaljno)

### Za Kartice sa Slikom i Tekstom (<768px)

**1. Stupac sa Slikom - Pozadina:**
```css
.usluge-feature-grid .wp-block-columns .wp-block-column:has(.wp-block-image) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
```

**2. Tamni Overlay - Čitljivost:**
```css
.usluge-feature-grid .wp-block-columns .wp-block-column:has(.wp-block-image)::after {
  background: rgba(0, 0, 0, 0.65);
  z-index: 2;
}
```

**3. Stupac sa Tekstom - Vrh:**
```css
.usluge-feature-grid .wp-block-columns .wp-block-column:not(:has(.wp-block-image)) {
  position: absolute;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
```

---

## 🔗 Povezana Dokumentacija

- [React komponente sa WordPress integracijom](src/pages/)
- [Gutenberg CSS stilovi](src/Gutenberg.css)
- [Prilagođeni App CSS](src/App.css)
- [WordPress REST API endpoint](https://front2.edukacija.online/backend/wp-json/)

---

## ✅ Mogućnosti za Mobilnu Prilagodbu

### Trenutno Aktivno
1. ✓ Slika kao pozadina teksta
2. ✓ Tamni overlay preko slike
3. ✓ Centriran tekst
4. ✓ Stekovanje stupaca

### Može Se Dodati
1. Prilagođene minimalne visine
2. Različiti overlays po tipu kartice
3. Swiper/Carousel za više kartice
4. Ponavljajući blokovi (repeated blocks)
5. Grid layouts za galerije
6. Lazy loading za slike (već ima u WP API-ju)

---

## 📞 Zaključak

Vaš projekt koristi:
- **8+ tipova WordPress Gutenberg blokova**
- **2 CSS datoteke** za stilizaciju (App.css + Gutenberg.css)
- **7+ stranica** sa dinamičkim WordPress sadržajem
- **Mobilna logika** sa `position: absolute` i `z-index` slojevanjem
- **WordPress REST API** za učitavanje sadržaja

Svi blokovi sa slikom i tekstom su konfigurirani za mobilni prikaz sa overlay tehnikom.
