# 🎯 BRZI START - WordPress Blokovi u IviCatering Projektu

## ✨ Što Trebate Znati u 5 Minuta

### 1️⃣ Što su WordPress Blokovi?
Gutenberg blokovi su "građevne jedinke" sadržaja koji se kreiraju u WordPress editoru:
- **wp-block-columns** - Dva stupca (slika | tekst)
- **wp-block-image** - Slika
- **wp-block-buttons** - Gumbe  
- **wp-block-text** - Tekst paragrafi
- ...i 100+ dodatnih tipova

### 2️⃣ Gdje se Koriste u Projektu?
```
Stranice sa WordPress blokovima:
✅ Vjencanja    (stranica sa slikom + tekstom)
✅ Naslovna     (stranica sa slikom + tekstom)
✅ BlogSingle   (blog post sa mix blokovima)
✅ Uslugesingle (usluga sa mix blokovima)
✅ Onama        (o nama sa mix blokovima)
✅ Usluge       (popis usluga)
✅ PoslovniEventi (popis eventi)
```

### 3️⃣ Kako Dolaze u React?
```
WordPress → REST API → React State → dangerouslySetInnerHTML → Browser
```

### 4️⃣ Gdje su CSS Stilovi?
```
📁 src/App.css (linija 302-600)         ← Vaši prilagođeni stilovi
📁 src/Gutenberg.css (cijela)           ← WordPress defaultni stilovi
```

### 5️⃣ Mobilni Prikaz (Ključni dio!)
```
🖥️  DESKTOP (>768px)                    📱 MOBILE (<768px)
┌──────────────────────┐                ┌────────────┐
│[SLIKA][TEKST]       │                │[SLIKA]    │
│       Naslov        │      →          │ tekstovia│
│       Opis          │                │ (preko)  │
│       [Gumb]        │                │[GUMB]   │
└──────────────────────┘                └────────────┘

CSS: position: absolute + z-index
Slika z-index: 1, Overlay z-index: 2, Tekst z-index: 3
```

---

## 📁 Datoteke Koje Trebate

### Za Razumijevanje
| Datoteka | Trebam Razumjeti |
|----------|-----------------|
| [README_WORDPRESS_BLOKOVI.md](README_WORDPRESS_BLOKOVI.md) | Index i navigacija |
| [WORDPRESS_BLOKOVI_ANALIZA.md](WORDPRESS_BLOKOVI_ANALIZA.md) | Što su blokovi |
| [WORDPRESS_BLOKOVI_LOKACIJE.md](WORDPRESS_BLOKOVI_LOKACIJE.md) | Gdje se koriste |
| [WORDPRESS_BLOKOVI_PRIMJERI.md](WORDPRESS_BLOKOVI_PRIMJERI.md) | Kako izgledaju |
| [WORDPRESS_API_PRIMJERI.md](WORDPRESS_API_PRIMJERI.md) | Kako se učitavaju |
| [WORDPRESS_BLOKOVI_QUICK_REFERENCE.md](WORDPRESS_BLOKOVI_QUICK_REFERENCE.md) | Brze odgovore |

### U Kodu
| Datoteka | Koja Blokovi |
|----------|-------------|
| [src/App.css](src/App.css#L302) | Prilagođeni blok stilovi |
| [src/Gutenberg.css](src/Gutenberg.css) | Svi WordPress blok stilovi |
| [src/pages/Vjencanja.js](src/pages/Vjencanja.js#L47) | Koristi wp-block-columns |
| [src/pages/Naslovna.js](src/pages/Naslovna.js#L43) | Koristi wp-block-columns |
| [src/pages/BlogSingle.js](src/pages/BlogSingle.js#L53) | Razni blokovi |
| [src/pages/Uslugesingle.js](src/pages/Uslugesingle.js#L57) | Razni blokovi |

---

## 🎬 Primjer - Što se Dogodilo Kada User Posjeti Vjencanja Stranicu

```
1. KORISNIK KLIKNE LINK "VJENCANJA"
   ↓
2. REACT KOMPONENTA (Vjencanja.js)
   - useEffect poziva:
   - fetch('...api/stranica?slug=vjencanja')
   ↓
3. WORDPRESS REST API VRAĆA:
   {
     title: { rendered: "Vjenčanja" },
     content: { rendered: "<div class='wp-block-columns'>...</div>" }
   }
   ↓
4. REACT RENDIRA:
   <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
   ↓
5. BROWSER PRIKAZUJE:
   <div class="wp-block-columns">
     <div class="wp-block-column">    <!-- Slika -->
       <figure class="wp-block-image">
         <img src="..." />
       </figure>
     </div>
     <div class="wp-block-column">    <!-- Tekst -->
       <h2>Vjenčanja</h2>
       <p>Opis...</p>
       <div class="wp-block-buttons">
         <a>Saznajte više</a>
       </div>
     </div>
   </div>
   ↓
6. CSS STILIZIRA (iz App.css linija 302-450):
   - Desktop: stupci pored (50% | 50%)
   - Mobile: slika kao pozadina, tekst gore
   ↓
7. KORISNIK VIDI LIJEPU STRANICU! 🎉
```

---

## 🔧 Što Trebate Promijeniti za Mobilnu Prilagodbu

**Datoteka:** [src/App.css](src/App.css#L377)

```css
/* Trenutni mobilni CSS - linija 377 */
@media (max-width: 768px) {
  
  /* 1. Kontejner kartice */
  .usluge-feature-grid .wp-block-columns {
    display: block !important;
    position: relative !important;
    min-height: 450px;  /* ← Promijeni ako trebaju drugačija visina */
  }
  
  /* 2. Slika u pozadinu */
  .usluge-feature-grid .wp-block-columns .wp-block-column:has(.wp-block-image) {
    position: absolute !important;
    z-index: 1;  /* Ispod */
  }
  
  /* 3. Overlay tamnjenja */
  .usluge-feature-grid .wp-block-columns .wp-block-column:has(.wp-block-image)::after {
    background: rgba(0, 0, 0, 0.65);  /* ← Promijeni ako trebaju drugačije tamnjenje */
    z-index: 2;  /* U sredini */
  }
  
  /* 4. Tekst gore */
  .usluge-feature-grid .wp-block-columns .wp-block-column:not(:has(.wp-block-image)) {
    position: absolute !important;
    z-index: 3;  /* Na vrhu */
  }
}
```

---

## ⚙️ Gdje Mogu Vidjeti Što Radi

### U Browser-u (F12 - DevTools)

1. **Network Tab**
   - Vidite API pozive sa WordPress blokovima
   - Pogledajte "Response" tab kada kliknete na `/wp-json/` zahtjev
   - Vidite `content: { rendered: "<div class='wp-block-...'>" }`

2. **Elements Tab**
   - Pogledajte gdje se renderira HTML sa `wp-block-*` klasama
   - Desni klik → Inspect element na bloku
   - Vidite CSS aplikovan na taj element

3. **Console Tab**
   - Logujte podatke: `console.log(page.content.rendered)`
   - Vidite stvarni HTML koji dolazi

### U Kodu

1. **Pronađi CSS Stilove**
   ```bash
   # Terminal
   grep -r "wp-block-columns" src/
   # Rezultat: App.css, Gutenberg.css
   ```

2. **Pronađi Gdje se Koristi**
   ```bash
   # Terminal
   grep -r "dangerouslySetInnerHTML" src/pages/
   # Rezultat: Vjencanja.js, BlogSingle.js, itd.
   ```

---

## 🎨 Detaljne Dokumentacije

Ako trebate detaljnije informacije, pogledajte:

### Za Analizu Blokova
→ [WORDPRESS_BLOKOVI_ANALIZA.md](WORDPRESS_BLOKOVI_ANALIZA.md)
```
• Opis svakog blok tipa
• Gdje se koriste
• Kako se primjenjuju na mobilnom
• Pozadina i motivacije
```

### Za Pronalaženje Datoteka
→ [WORDPRESS_BLOKOVI_LOKACIJE.md](WORDPRESS_BLOKOVI_LOKACIJE.md)
```
• Tablica svih datoteka
• Gdje se učitavaju iz API-ja
• Gdje se rendiriraju
• Konkretni primjeri iz koda
```

### Za Vizualne Primjere
→ [WORDPRESS_BLOKOVI_PRIMJERI.md](WORDPRESS_BLOKOVI_PRIMJERI.md)
```
• Kompletan HTML sa komentarima
• CSS koji stilizira
• Rezultat na ekranu
• Z-index slojevanja
```

### Za Brze Rješenja
→ [WORDPRESS_BLOKOVI_QUICK_REFERENCE.md](WORDPRESS_BLOKOVI_QUICK_REFERENCE.md)
```
• Gdje promijeniti stil
• Kako debugirati
• Česta pitanja
• Primjeri problema
```

### Za API Podatke
→ [WORDPRESS_API_PRIMJERI.md](WORDPRESS_API_PRIMJERI.md)
```
• Stvarni JSON primjeri
• Što API vraća
• Gdje se nalazi HTML u JSON-u
• Kako vidjeti pravi odgovor
```

---

## 📊 Grafički Pregled - Tijek Podataka

```
┌─────────────────────────────┐
│  WORDPRESS.COM              │
│  ├─ Gutenberg Editor        │
│  ├─ Kreira wp-block-columns │
│  └─ Sprema stranicu         │
└──────────────┬──────────────┘
               │
               ↓
┌─────────────────────────────┐
│  WORDPRESS REST API         │
│  GET /wp-json/wp/v2/...     │
│  Returns: { content: "..." }│
└──────────────┬──────────────┘
               │
               ↓
┌─────────────────────────────┐
│  REACT                      │
│  ├─ Vjencanja.js            │
│  ├─ useState(page)          │
│  ├─ fetch API               │
│  ├─ dangerouslySetInnerHTML │
│  └─ Rendira HTML            │
└──────────────┬──────────────┘
               │
               ↓
┌─────────────────────────────┐
│  CSS STILIZACIJA            │
│  ├─ App.css (linija 302+)   │
│  ├─ Gutenberg.css (sve)     │
│  ├─ @media (max-width:768px)│
│  └─ position: absolute      │
└──────────────┬──────────────┘
               │
               ↓
┌─────────────────────────────┐
│  BROWSER                    │
│  └─ Korisnik vidi stranicu! │
└─────────────────────────────┘
```

---

## 🚀 Brzi Start - 3 Koraka

### Korak 1️⃣: Pročitajte Analizu (10 min)
```
→ WORDPRESS_BLOKOVI_ANALIZA.md
   Razumiete što su blokovi
```

### Korak 2️⃣: Nađite Datoteke (5 min)
```
→ WORDPRESS_BLOKOVI_LOKACIJE.md
   Znate gdje se sve nalazi
```

### Korak 3️⃣: Počnite Mjenjati CSS (30 min)
```
→ src/App.css linija 377
   Promijeni CSS prema potrebama
   → Testiraj u brwoser-u (F12)
```

---

## ✅ Checklist - Prije Nego Počnete

- [ ] Pročitao/la sam README_WORDPRESS_BLOKOVI.md
- [ ] Razumijem što su wp-block-* klase
- [ ] Vidim gde su CSS datoteke
- [ ] Mogu otvoriti DevTools (F12)
- [ ] Mogu vidjeti HTML sa wp-block klasama
- [ ] Znam gdje je App.css
- [ ] Mogu editirati CSS
- [ ] Mogu refresh-ati preglednik (Ctrl+R)

**🎉 SPREMAN/SPREMNA ZA MOBILNU PRILAGODBU!**

---

## 🆘 Brza Pomoć

| Trebam... | Pogledaj... |
|-----------|------------|
| Razumjeti blokove | ANALIZA.md |
| Pronaći datoteku | LOKACIJE.md |
| Vidjeti primjer | PRIMJERI.md |
| Promijeniti CSS | QUICK_REFERENCE.md → "Gdje Dodati" |
| Debugirati | QUICK_REFERENCE.md → "Kako Debugirati" |
| Bez razumijevanja | API_PRIMJERI.md |
| Sve u jednom mjestu | README_WORDPRESS_BLOKOVI.md |

---

## 📞 Sljedeći Koraci

1. **Pročitajte** [README_WORDPRESS_BLOKOVI.md](README_WORDPRESS_BLOKOVI.md) za detaljnu navigaciju
2. **Odaberite** jednu od 5 dokumentacija prema vašim potrebama
3. **Testirajte** promjene u brwoser-u sa F12 DevTools
4. **Spremi** sve promjene u datoteke
5. **Pushujem** u git kada je završeno

---

## 📝 Datoteke Koje Trebate

```
✅ README_WORDPRESS_BLOKOVI.md
   ├─ WORDPRESS_BLOKOVI_ANALIZA.md
   ├─ WORDPRESS_BLOKOVI_LOKACIJE.md
   ├─ WORDPRESS_BLOKOVI_PRIMJERI.md
   ├─ WORDPRESS_BLOKOVI_QUICK_REFERENCE.md
   ├─ WORDPRESS_API_PRIMJERI.md
   └─ BRZI_START.md (ova datoteka)

+ U KODU:
   ├─ src/App.css (CSS stilovi - što trebati promijeniti)
   ├─ src/Gutenberg.css (WordPress CSS)
   └─ src/pages/*.js (React komponente)
```

---

**Spreman/spremna? Nastavite sa [README_WORDPRESS_BLOKOVI.md](README_WORDPRESS_BLOKOVI.md)! 🚀**
