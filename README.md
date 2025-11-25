# nowa-finanzen - Norbert Wagner

Eine moderne, responsive Onepager-Website für Norbert Wagner, Spezialist für Baufinanzierungen und Ratenkredite.

## 🚀 Technologie-Stack

- **Astro.js** - Modernes Web-Framework
- **TailwindCSS** - Utility-First CSS Framework
- **TypeScript** - Type-sicheres JavaScript
- **Font Awesome** - Icon-Bibliothek
- **Inter Font** - Moderne, professionelle Schriftart

## 📋 Features

- ✅ Responsive Design für alle Geräte
- ✅ Moderne, ansprechende UI basierend auf Best Practices
- ✅ Hero-Sektion mit professionellem Profilfoto
- ✅ Vorteile-Übersicht mit Icons
- ✅ Detaillierte Leistungsdarstellung
- ✅ Über-mich-Sektion
- ✅ 3-Schritte-Prozess
- ✅ Kontaktformular
- ✅ Smooth Scrolling Navigation
- ✅ Mobile-optimierte Navigation
- ✅ Professioneller Header mit CTA-Button

## 🛠️ Installation

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Production Build erstellen
npm run build

# Production Preview
npm run preview
```

## 🌐 GitHub Pages Deployment

### Automatisches Deployment einrichten

Die Website kann automatisch auf GitHub Pages deployed werden. Folgen Sie diesen Schritten:

#### 1. Repository auf GitHub erstellen

```bash
# Git Repository initialisieren (falls noch nicht geschehen)
git init

# Alle Dateien hinzufügen
git add .

# Ersten Commit erstellen
git commit -m "Initial commit"

# Remote Repository hinzufügen (ersetzen Sie USERNAME und REPO)
git remote add origin https://github.com/USERNAME/REPO.git

# Code pushen
git branch -M main
git push -u origin main
```

#### 2. GitHub Pages in den Repository-Einstellungen aktivieren

1. Gehen Sie zu Ihrem Repository auf GitHub
2. Klicken Sie auf **Settings** (Einstellungen)
3. Klicken Sie im linken Menü auf **Pages**
4. Unter **Source** (Quelle) wählen Sie:
   - Source: **GitHub Actions**

#### 3. Astro Config für GitHub Pages anpassen

Wenn Ihr Repository **NICHT** `username.github.io` heißt, müssen Sie die `site` und `base` Konfiguration anpassen:

Öffnen Sie `astro.config.mjs` und fügen Sie hinzu:

```javascript
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://USERNAME.github.io",
  base: "/REPO-NAME",
  integrations: [tailwind()],
});
```

Ersetzen Sie:

- `USERNAME` mit Ihrem GitHub-Benutzernamen
- `REPO-NAME` mit dem Namen Ihres Repositories

**Beispiel:**

```javascript
site: 'https://johndoe.github.io',
base: '/NorbertWagner',
```

**Wichtig:** Wenn Ihr Repository `username.github.io` heißt, lassen Sie `base` weg!

#### 4. Änderungen pushen

```bash
git add astro.config.mjs
git commit -m "Configure for GitHub Pages"
git push
```

#### 5. Deployment beobachten

1. Gehen Sie zu Ihrem Repository auf GitHub
2. Klicken Sie auf den **Actions** Tab
3. Sie sollten einen laufenden Workflow sehen
4. Nach erfolgreichem Abschluss (✅) ist Ihre Website live!

Ihre Website ist dann erreichbar unter:

- `https://USERNAME.github.io/REPO-NAME/` (normales Repository)
- `https://USERNAME.github.io/` (wenn Repository username.github.io heißt)

### Manuelle Builds

Bei jedem Push zum `main` oder `master` Branch wird die Website automatisch neu deployed.

Sie können das Deployment auch manuell triggern:

1. Gehen Sie zum **Actions** Tab
2. Klicken Sie auf **Deploy to GitHub Pages**
3. Klicken Sie auf **Run workflow**

## 📱 Kontaktdaten

**Norbert Wagner**  
Bankfachwirt (IHK)

Steigle 4  
74182 Obersulm

Tel.: +49 170 20 888 51  
Tel.: +49 7130 40 510 15

E-Mail: norbert.wagner@nowa-finanzen.de

## 🎨 Anpassungen

### Farben

Die Farbpalette kann in `tailwind.config.mjs` angepasst werden.

### Inhalte

Alle Inhalte befinden sich in den Astro-Komponenten im `src/components/` Verzeichnis.

### Bilder

Platzieren Sie Ihre Bilder im `public/` Verzeichnis und referenzieren Sie sie mit `/bildname.jpg`.

## 📄 Lizenz

Alle Rechte vorbehalten © 2025 nowa-finanzen
