# Universal Web Accessibility Companion

An advanced, multilingual Google Chrome extension built in compliance with India's **Rights of Persons with Disabilities (RPwD) Act** and **Guidelines for Indian Government Websites (GIGW / WCAG 2.1 AA)**. It dynamically adapts its controls, screen reader vocalizations, and speech recognition to the language of the active webpage.

---

## 🌟 Key Features

The extension contains dedicated profiles and assistive helpers tailored for every category of disability:

### 1. Visual Impairment (Blindness & Low Vision)
*   **Direct High Contrast Selection**: Instantly select from multiple high-contrast options (**Yellow on Black**, **Inverted Colors**, **Grayscale**, **Dark Monochromatic**, or **Normal**) using an accessible dropdown select element.
*   **Font Magnifier**: Scale up text size up to 200% on the fly.
*   **Dynamic Spacing Adjusters**: Fine-tune word/letter spacing and line heights.
*   **Link Highlighting**: Outlines all links with thick outlines, double underlines, and distinct fills to stand out clearly.
*   **Heading Markers**: Outlines headers (H1 to H6) for structural ease.
*   **Large Cursor**: Toggles a massive high-visibility yellow pointer.

### 2. Cognitive & Neurological Impairments (ADHD, Dyslexia, Epilepsy)
*   **ADHD Focus Shutter**: Darkens the webpage and opens a clear horizontal spotlight following the mouse pointer.
*   **Reading Ruler**: A tracking line assistant following the cursor to avoid line skipping.
*   **Dyslexia Font Support**: Automatically overrides default site styling to load **OpenDyslexic** typography.
*   **Stop Page Animations**: Pauses active animations, transitions, and marquees for epilepsy and seizure safety.
*   **Text-Only Images**: Hides image containers and renders their textual descriptions (`alt` tags) inline.

### 3. Motor & Mobility Impairments
*   **Enhanced Keyboard Outline**: Renders an extremely visible outline surrounding active HTML focus elements.
*   **Speech Commands Navigation**: Mutes the keyboard and lets users navigate hands-free in their native dialect (supports scrolling, clicking links/buttons, and resetting configurations).

### 4. Auditory Impairments
*   **Multilingual Screen Reader**: Selects elements and reads them out loud using native system text-to-speech engines in the language of the website.

---

## 🇮🇳 Language Auto-Adaptation

The extension auto-detects the `<html lang="...">` attribute of the active webpage and translates all widget buttons, option select lists, TTS screen reader feedback, and voice commands into **10 major languages**:
1.  **English (en)**
2.  **Hindi (hi)** (हिन्दी)
3.  **Tamil (ta)** (தமிழ்)
4.  **Telugu (te)** (తెలుగు)
5.  **Bengali (bn)** (বাংলা)
6.  **Marathi (mr)** (मराठी)
7.  **Kannada (kn)** (ಕನ್ನಡ)
8.  **Malayalam (ml)** (മലയാളം)
9.  **Gujarati (gu)** (ગુજરાતી)
10. **Urdu (ur)** (اردو)

---

## 🎙️ Hands-Free Voice Commands Guide

When **Voice Navigation** is active, speak commands matching the page language. Example commands include:
*   **Scroll Down**: `"scroll down"` / `"नीचे स्क्रॉल"` / `"கீழே ஸ்க்ரோல்"`
*   **Scroll Up**: `"scroll up"` / `"ऊपर स्क्रॉल"` / `"மேலே ஸ்க்ரோல்"`
*   **Scroll to Top**: `"scroll to top"` / `"सबसे ऊपर"` / `"மேலே செல்"`
*   **Click Element**: `"click [Link/Button Text]"` / `"होम पर क्लिक करें"` / `"கிளிக் [உரை]"`
*   **Highlight Links**: `"highlight links"` / `"लिंक हाइलाइट"`
*   **Reset**: `"reset"` / `"रीसेट"` / `"மீட்டமை"`

---

## 🎹 Keyboard Shortcuts

*   `+` / `-` : Grow / Shrink Font Size
*   `C` : Cycle High Contrast profiles
*   `M` : Toggle Large Cursor
*   `D` : Toggle Dyslexia Font
*   `A` : Toggle ADHD Focus Shutter
*   `R` : Toggle Reading Ruler
*   `S` : Toggle Screen Reader
*   `L` : Toggle Highlight Links
*   `H` : Toggle Highlight Headings
*   `K` : Toggle Keyboard Helper (Outline rings)
*   `P` : Toggle Pause Animations
*   `I` : Toggle Text-Only Images (Image Hide)
*   `V` : Toggle Voice Navigation

---

## 🛠️ Installation Instructions

1.  Clone or download this repository to your local drive.
2.  Open **Google Chrome** and navigate to `chrome://extensions/`.
3.  Turn on **Developer mode** (toggle switches in the top right header).
4.  Click **Load unpacked** (button in the top left).
5.  Choose the root directory folder containing these extension files.
6.  *Important Note*: If the extension icon displays a puzzle piece, click the **Reload** (circular arrow) button on the extension card in `chrome://extensions/` to load the freshly generated icon files.

---

## ⚖️ License

Distributed under the **GNU Affero General Public License version 3 (AGPL-3.0)**. See the `LICENSE` file for details.
