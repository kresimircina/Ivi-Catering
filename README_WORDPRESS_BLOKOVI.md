# 📚 WordPress Blokovi - Kompletan Pregled Dokumentacije

## 🎯 INDEX SVIH DOKUMENTACIJA

Ova dokumentacija je podijeljena u **5 detaljnih datoteka**. Odaberite što trebate:

---

## 📖 1. **WORDPRESS_BLOKOVI_ANALIZA.md** 
### 📌 Za Razumijevanje Što su WordPress Blokovi

**Trebam znati:**
- Što su WordPress Gutenberg blokovi?
- Koja se blokovi koriste na stranici?
- Kako se blokovi primjenjuju na mobilnom?
- Gdje su stilovi za blokove?

**Trebam vidjeti:**
- Pregled svih tipova blokova
- Strukturu HTML-a blokova
- Gdje se CSS nalazi

👉 **Pročitaj ovu datoteku prvo ako si nova/novi u projektu**

---

## 📍 2. **WORDPRESS_BLOKOVI_LOKACIJE.md**
### 📌 Za Pronalaženje Gdje Se Koristi Što

**Trebam znati:**
- U kojim datotekama se koriste WordPress blokovi?
- Koje stranice koriste koje blokove?
- Gdje se učitavaju iz API-ja?
- Gdje se rendiriraju u React-u?

**Trebam vidjeti:**
- Tablica svih datoteka sa blokovima
- Kako se WordPress sadržaj učitava
- Konkretni primjeri iz stvarnog koda

👉 **Pročitaj ovu datoteku ako trebam pronaći gdje je nešto**

---

## 💻 3. **WORDPRESS_BLOKOVI_PRIMJERI.md**
### 📌 Za Konkretne Primjere i Vizualizaciju

**Trebam znati:**
- Što točno dolazi iz API-ja?
- Kako izgleda HTML koji se rendira?
- Kako CSS pretvara HTML u vizualni prikaz?
- Kako se mobilni prikaz razlikuje od desktop?

**Trebam vidjeti:**
- Kompletan HTML primjer sa komentarima
- CSS koji stilizira taj HTML
- Vizualni prikaz na desktop i mobile
- Z-index slojevanja objašnjeno

👉 **Pročitaj ovu datoteku ako trebam vidjeti kako se stvari transformiraju**

---

## 🚀 4. **WORDPRESS_BLOKOVI_QUICK_REFERENCE.md**
### 📌 Za Brze Odgovore i Rješenja

**Trebam znati:**
- Gdje promijeniti stil?
- Kako debugirati problem?
- Što raditi ako nešto ne ide?
- Koji CSS svojstva su važna?

**Trebam vidjeti:**
- Brze akcije ("trebam vidjeti sve wp-block klase")
- Česta pitanja i odgovore
- Checklist za mobilnu prilagodbu
- Primjere problema i rješenja

👉 **Pročitaj ovu datoteku ako trebam brzo nešto srediti**

---

## 📡 5. **WORDPRESS_API_PRIMJERI.md**
### 📌 Za API Odgovore i JSON Strukturu

**Trebam znati:**
- Što točno WordPress API vraća?
- Gdje se nalazi sadržaj sa blokovima u JSON-u?
- Kako React pristupa podacima?
- Koja je struktura JSON-a?

**Trebam vidjeti:**
- Potpune JSON primjere API odgovora
- Gdje se nalazi ključni HTML sadržaj
- Mapiranje: API → React → CSS
- Kako vidjeti pravi JSON u pregledniku

👉 **Pročitaj ovu datoteku ako trebam razumjeti kako funkcionira API**

---

## 🗺️ BRZI NAVIGACIJSKI VODIČ

### Po Situaciji - Što Trebam Pročitati?

| Situacija | Datoteka | Linija |
|-----------|----------|--------|
| Trebam znati što su WordPress blokovi | ANALIZA | Sve |
| Trebam promijeniti CSS blokove | ANALIZA | Vidi "CSS Stilovi" |
| Trebam pronači datoteku sa blokom X | LOKACIJE | Vidi "Tablica Svih Datoteka" |
| Trebam vidjeti stvarni HTML bloka | PRIMJERI | Vidi "Primjer 1, 2, 3" |
| Trebam vidjeti mobilni CSS | PRIMJERI | Vidi @media query dio |
| Trebam brzo promijenjeni stil | QUICK REFERENCE | Vidi "Gdje Dodati" |
| Trebam debugirati problem | QUICK REFERENCE | Vidi "Kako Debugirati" |
| Trebam pronaći rješenje | QUICK REFERENCE | Vidi "Česta Pitanja" |
| Trebam rozumjeti API | API_PRIMJERI | Vidi "Što Vraća API" |
| Trebam vidjeti JSON strukturu | API_PRIMJERI | Vidi "Primjer 1, 2, 3" |

---

## 📊 MAPA DATOTEKA U PROJEKTU

```
🎯 Trebam Promijeniti STILOVE
   ├─ src/App.css ........................ Prilagođeni stilovi (302-600+)
   └─ src/Gutenberg.css ................. WordPress stilovi (sve)

🎯 Trebam Vidjeti REACT KOMPONENTE
   ├─ src/pages/Vjencanja.js ............ Stranica sa WordPress blokovima
   ├─ src/pages/Naslovna.js ............ Stranica sa WordPress blokovima
   ├─ src/pages/BlogSingle.js .......... Blog post sa raznim blokovima
   ├─ src/pages/Uslugesingle.js ....... Usluga sa raznim blokovima
   ├─ src/pages/Onama.js ............... O nama sa raznim blokovima
   ├─ src/pages/Usluge.js .............. Popis usluga
   └─ src/pages/PoslovniEventi.js ..... Popis eventi

🎯 Trebam Vidjeti HTML STRUKTURU
   └─ WordPress REST API ....... https://front2.edukacija.online/backend/wp-json/
      ├─ /wp/v2/stranica?slug=vjencanja
      ├─ /wp/v2/posts?slug=...
      └─ /wp/v2/eventi?slug=...
```

---

## 🔄 REDOSLJED ČITANJA PREPORUČEN

### Ako Ste Novi/Nova u Projektu:

1. **Prvo:** WORDPRESS_BLOKOVI_ANALIZA.md
   - Razumijevanje što su blokovi
   - Tipovi blokova koji se koriste
   
2. **Zatim:** WORDPRESS_BLOKOVI_LOKACIJE.md
   - Gdje se blokovi koriste
   - Koje datoteke trebate
   
3. **Treće:** WORDPRESS_API_PRIMJERI.md
   - Kako se podatke učitavaju
   - Što API vraća
   
4. **Četvrto:** WORDPRESS_BLOKOVI_PRIMJERI.md
   - Vizuale primjere
   - CSS transformacije
   
5. **Zadnje:** WORDPRESS_BLOKOVI_QUICK_REFERENCE.md
   - Za kasnije referiranja

---

### Ako Trebate Brzo Nešto Riješiti:

1. **Start here:** WORDPRESS_BLOKOVI_QUICK_REFERENCE.md
   - Pronađi u "Gdje Dodati/Promijeniti"
   - Vidi "Česta Pitanja"
   - Vidi "Primjeri Problema"

2. **Ako trebate detaljnije:** WORDPRESS_BLOKOVI_ANALIZA.md
   - Vidi "CSS Stilovi" odjeljak

3. **Ako trebate vidjeti kod:** WORDPRESS_BLOKOVI_LOKACIJE.md
   - Vidi "Tablica Svih Datoteka"

---

## 💡 KLJUČNI KONCEPTI

### "wp-block-" Klase
```javascript
wp-block-columns      // Stupci za layout
wp-block-column       // Pojedina kolona
wp-block-image        // Slika sa figcaption-om
wp-block-buttons      // Gumbe
wp-block-buttons__link // Link unutar gumba
wp-block-media-text   // Slika i tekst 50/50
wp-block-paragraph    // Tekst paragrafi
wp-block-list         // Liste
wp-block-quote        // Citati
wp-block-gallery      // Galerije slika
```

### "dangerouslySetInnerHTML"
```javascript
// HTML koji dolazi iz WordPress API-ja se rendira sa:
<div dangerouslySetInnerHTML={{ __html: content.rendered }} />

// Koristi se u:
- Vjencanja.js (linija 47)
- BlogSingle.js (linija 53)
- Uslugesingle.js (linija 57)
- Onama.js (linija 43)
- Naslovna.js (linija 43)
- Usluge.js (linija 88)
- PoslovniEventi.js (linija 74)
```

### "Mobilni CSS"
```css
@media (max-width: 768px) {
  /* Position: absolute za slojevanje */
  /* z-index za redosljed (1, 2, 3) */
  /* Slika u pozadinu, tekst gore */
}
```

---

## 🎨 VIZUALNI PREGLED

```
DESKTOP (>768px)
┌──────────────────────────────────┐
│ [SLIKA 50%] [TEKST 50%]        │
│ (pored)      (pored)            │
│              - Naslov            │
│              - Opis              │
│              [Gumb]              │
└──────────────────────────────────┘

MOBILE (<768px)
┌──────────────────────────┐
│ SLIKA (100%)            │
│ [overlay 65%]           │
│ Tekst preko slike       │
│ - Naslov (bijel)        │
│ - Opis (bijel)          │
│ [Gumb]                  │
└──────────────────────────┘
```

---

## 🔗 POVEZANE DATOTEKE U REPOZITORIJU

```
📁 src/
├─ App.css .......................... Glavni CSS
├─ Gutenberg.css ................... WordPress CSS
├─ pages/
│  ├─ Vjencanja.js ................. Stranica
│  ├─ Naslovna.js .................. Stranica
│  ├─ BlogSingle.js ................ Blog
│  ├─ Uslugesingle.js ............. Usluga
│  ├─ Onama.js ..................... O nama
│  ├─ Usluge.js .................... Popis
│  ├─ PoslovniEventi.js ........... Eventi
│  └─ Blog.css ..................... Blog stilovi
│
├─ components/
│  ├─ HeroSection.js .............. Hero blok
│  └─ (drugi komponenti)
│
📁 build/ ........................... Produkcija
└─ package.json .................... Dependency-ji
```

---

## ⚡ ČESTA PITANJA - BRZI LINKOVI

**Gdje je CSS?**
→ Vidi ANALIZA.md "CSS Stilovi" ili QUICK_REFERENCE.md "Gdje Dodati"

**Kako se WordPress blokovi učitavaju?**
→ Vidi LOKACIJE.md "Kako se WordPress blokovi učitavaju"

**Što točno dolazi iz API-ja?**
→ Vidi API_PRIMJERI.md "Što Vraća API"

**Trebam vidjeti stvarni HTML?**
→ Vidi PRIMJERI.md "Primjer 1, 2, 3"

**Kako funkcionira mobilni prikaz?**
→ Vidi PRIMJERI.md "Mobilni Pregled" ili ANALIZA.md "Mobilni Prikaz"

**Trebam promijenjiti stil - gdje?**
→ Vidi QUICK_REFERENCE.md "Gdje Dodati/Promijeniti"

**Nešto ne radi - što raditi?**
→ Vidi QUICK_REFERENCE.md "Kako Debugirati"

**Kao poznajemo API strukturu?**
→ Vidi API_PRIMJERI.md "Gdje se Ključni Dijelovi Nalaze"

---

## 📋 SADRŽAJ PO DOKUMENTACIJI

### WORDPRESS_BLOKOVI_ANALIZA.md
- Pregled WordPress blokova
- Opis svakog blok tipa
- CSS stilovi gdje se nalaze
- Mobilni prikaz kako funkcionira
- Mogućnosti za prilagodbu

### WORDPRESS_BLOKOVI_LOKACIJE.md
- Tablica svih datoteka sa blokovima
- Kako se WordPress sadržaj učitava
- Konkretni primjeri iz koda
- Gdje se blokovi renderiraju
- Kako pronči gdje se koristi određeni blok

### WORDPRESS_BLOKOVI_PRIMJERI.md
- Scenarij od učitavanja do prikaza
- Kompletan HTML primjer sa blokovima
- CSS koji stilizira HTML
- Rezultat na ekranu (desktop i mobile)
- Blok slojevanja (Z-index)
- Transformacija pri rotaciji ekrana

### WORDPRESS_BLOKOVI_QUICK_REFERENCE.md
- Brzi pristup za česte zadatke
- Gdje dodati nove stilove
- Kako debugirati
- CSS svojstva za mobilnu prilagodbu
- Česta pitanja i odgovore
- Primjeri problema i rješenja

### WORDPRESS_API_PRIMJERI.md
- Što WordPress API vraća (stvarni JSON)
- Primjer 1: Stranica "Vjencanja"
- Primjer 2: Blog post
- Primjer 3: Lista usluga
- Kako vidjeti pravi JSON odgovor
- Mapiranje: API → React → CSS
- Ključni JSON putevi

---

## ✅ ZAVRŠNI CHECKLIST

Prije nego što počnete sa mobilnom preuređbom:

- [ ] Pročitao/la sam WORDPRESS_BLOKOVI_ANALIZA.md
- [ ] Razumijem što su wp-block-* klase
- [ ] Znam gdje se CSS nalazi
- [ ] Pročitao/la sam WORDPRESS_BLOKOVI_PRIMJERI.md
- [ ] Vidim kako WordPress blokovi funkcioniraju
- [ ] Razumijem z-index slojevanje
- [ ] Znam što je dangerouslySetInnerHTML
- [ ] Mogu vidjeti HTML u DevTools
- [ ] Mogu pristupiti CSS datotekama
- [ ] Imam QUICK_REFERENCE.md ako trebam


- [ ] SPREMNA/SPREMAN ZA MOBILNU PRILAGODBU! 🚀

---

## 📞 KONTAKT / POMOĆ

Ako trebate detaljnije informacije:

1. Pogledaj u odgovarajućoj datoteci (koristi tabelu gore)
2. Koristi Ctrl+F da pronađeš ključnu reč
3. Pogledaj QUICK_REFERENCE.md za rješenja
4. Pogledaj PRIMJERI.md za vizualne definicije

---

## 📝 VERZIJA DOKUMENTA

- Datum: 18. ožujka 2026.
- Verzija: 1.0
- Projekt: IviCatering React App
- WordPress API: https://front2.edukacija.online/backend/wp-json/v2
- React verzija: (provjerite u package.json)

---

**🎯 Sada ste sprema/spreman! Odaberite datoteku koja vam trebaju i počnite čitati!**
