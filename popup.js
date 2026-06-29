// Popup Controller for Web Accessibility Companion
(function() {
    'use strict';

    // 1. Language Translation Packs
    const translations = {
      en: {
        headerText: "Accessibility Companion",
        headerSub: "RPwD Act / GIGW Compliant",
        zoomText: "Zoom Text",
        highContrast: "High Contrast",
        bigCursor: "Large Cursor",
        dyslexicFont: "Dyslexia Font",
        adhdFocus: "ADHD Focus",
        readingRuler: "Reading Ruler",
        textReader: "Screen Text Reader",
        highlightLinks: "Highlight Links",
        highlightHeadings: "Highlight Headings",
        keyboardHelper: "Keyboard Helper",
        stopAnimations: "Pause Animations",
        imageHide: "Text-Only Images",
        voiceCommands: "Voice Navigation",
        fontAdjust: "Font Size Scale",
        spacingAdjust: "Letter Spacing",
        lineAdjust: "Line Spacing",
        resetAll: "Reset All Settings",
        statusActive: "Active",
        statusOff: "Off",
        speechTapInfo: "Click text to read aloud",
        voiceCommandsInfo: "Try: 'scroll down', 'click link'",
        contrastOff: "Normal / Off",
        contrastYellow: "Yellow on Black",
        contrastInverted: "Inverted Colors",
        contrastGrayscale: "Grayscale",
        contrastDarkMono: "Dark Monochromatic"
      },
      hi: {
        headerText: "सुलभता सहायक साथी",
        headerSub: "RPwD अधिनियम / GIGW अनुपालन",
        zoomText: "टेक्स्ट आकार बढ़ाएं",
        highContrast: "उच्च कंट्रास्ट",
        bigCursor: "बड़ा कर्सर",
        dyslexicFont: "डिस्लेक्सिया फ़ॉन्ट",
        adhdFocus: "ADHD फोकस",
        readingRuler: "पठन रूलर",
        textReader: "स्क्रीन पाठ वाचक",
        highlightLinks: "लिंक्स हाइलाइट",
        highlightHeadings: "शीर्षक हाइलाइट",
        keyboardHelper: "कीबोर्ड सहायक",
        stopAnimations: "एनिमेशन रोकें",
        imageHide: "केवल टेक्स्ट इमेज",
        voiceCommands: "आवाज आदेश",
        fontAdjust: "फॉन्ट आकार स्केल",
        spacingAdjust: "अक्षर रिक्ति",
        lineAdjust: "पंक्ति रिक्ति",
        resetAll: "सभी सेटिंग्स रीसेट करें",
        statusActive: "सक्रिय",
        statusOff: "बंद",
        speechTapInfo: "पढ़ने के लिए टेक्स्ट पर क्लिक करें",
        voiceCommandsInfo: "बोलें: 'नीचे स्क्रॉल करें', 'क्लिक [नाम]'",
        contrastOff: "सामान्य / बंद",
        contrastYellow: "काले पर पीला",
        contrastInverted: "विपरीत रंग",
        contrastGrayscale: "ग्रेस्केल",
        contrastDarkMono: "डार्क मोनोक्रोमैटिक"
      },
      ta: {
        headerText: "அணுகல்தன்மை துணைவன்",
        headerSub: "RPwD சட்டம் / GIGW இணக்கம்",
        zoomText: "எழுத்து அளவு",
        highContrast: "அதிக மாறுபாடு",
        bigCursor: "பெரிய கர்சர்",
        dyslexicFont: "டிஸ்லெக்ஸியா எழுத்து",
        adhdFocus: "ADHD கவனம்",
        readingRuler: "வாసిப்பு அளவுகோல்",
        textReader: "திரை உரை வாசிப்பான்",
        highlightLinks: "இணைப்பு முன்னிலை",
        highlightHeadings: "தலைப்பு முன்னிலை",
        keyboardHelper: "விசைப்பலகை உதவி",
        stopAnimations: "அசைவூட்ட நிறுத்தம்",
        imageHide: "உரை மட்டும் படம்",
        voiceCommands: "குரல் கட்டளைகள்",
        fontAdjust: "எழுத்து அளவு மாற்றி",
        spacingAdjust: "எழுத்து இடைவெளி",
        lineAdjust: "வரி இடைவெளி",
        resetAll: "அமைப்புகளை மீட்டமை",
        statusActive: "செயலில்",
        statusOff: "முடக்கம்",
        speechTapInfo: "உரக்க வாசிக்க கிளிக் செய்யவும்",
        voiceCommandsInfo: "கூறுக: 'கீழே ஸ்க்ரோல்', 'கிளிக் [இணைப்பு]'",
        contrastOff: "இயல்பு / முடக்கம்",
        contrastYellow: "கருப்பில் மஞ்சள்",
        contrastInverted: "தலைகீழ் நிறங்கள்",
        contrastGrayscale: "சாம்பல் நிறம்",
        contrastDarkMono: "டார்க் மோனோ"
      },
      te: {
        headerText: "యాక్సెసిబిలిటీ సహాయకుడు",
        headerSub: "RPwD చట్టం / GIGW వర్తింపు",
        zoomText: "టెక్స్ట్ పెద్దది చేయి",
        highContrast: "అధిక కాంట్రాస్ట్",
        bigCursor: "పెద్ద కర్సర్",
        dyslexicFont: "డిస్లెక్సియా ఫాంట్",
        adhdFocus: "ADHD ఫోకస్",
        readingRuler: "రీడింగ్ రూలర్",
        textReader: "స్క్రీన్ రీడర్",
        highlightLinks: "లింక్స్ హైలైట్",
        highlightHeadings: "హెడ్డింగ్స్ హైలైట్",
        keyboardHelper: "కీబోర్డ్ సహాయకారి",
        stopAnimations: "యానిమేషన్లు ఆపు",
        imageHide: "కేవలం టెక్స్ట్ ఇమేజ్",
        voiceCommands: "వాయిస్ ఆదేశాలు",
        fontAdjust: "ఫాంట్ పరిమాణం స్కేల్",
        spacingAdjust: "అక్షరాల దూరం",
        lineAdjust: "లైన్ దూరం",
        resetAll: "రీసెట్ చేయండి",
        statusActive: "యాక్టివ్",
        statusOff: "ఆఫ్",
        speechTapInfo: "చదవడానికి టెక్స్ట్ పై క్లిక్ చేయండి",
        voiceCommandsInfo: "ట్రై: 'కిందకి స్క్రోల్', 'క్లిక్ [లింక్]'",
        contrastOff: "సాధారణం / ఆఫ్",
        contrastYellow: "నలుపుపై పసుపు",
        contrastInverted: "వ్యతిరేక రంగులు",
        contrastGrayscale: "ग्रेస్కేల్",
        contrastDarkMono: "డార్క్ మోనో"
      },
      bn: {
        headerText: "সহায়তা সাথি",
        headerSub: "RPwD আইন / GIGW অনুবর্তী",
        zoomText: "লেখা বড় করুন",
        highContrast: "উচ্চ বৈপরীত্য",
        bigCursor: "বড় কার্সার",
        dyslexicFont: "ডিসলেক্সিয়া ফন্ট",
        adhdFocus: "ADHD ফোকাস",
        readingRuler: "পঠন রুলার",
        textReader: "স্ক্রীন রিডার",
        highlightLinks: "লিঙ্ক হাইলাইট করুন",
        highlightHeadings: "শিরোনাম হাইলাইট",
        keyboardHelper: "কীবোর্ড সাহায্যকারী",
        stopAnimations: "অ্যানিমেশন বন্ধ করুন",
        imageHide: "টেক্সট-অনলি ইমেজ",
        voiceCommands: "ভয়েস কমান্ড",
        fontAdjust: "ফন্টের আকার স্কেল",
        spacingAdjust: "অক্ষরের দূরত্ব",
        lineAdjust: "লাইনের দূরত্ব",
        resetAll: "সব রিসেট করুন",
        statusActive: "সক্রিয়",
        statusOff: "বন্ধ",
        speechTapInfo: "শুনতে টেক্সটের ওপর ক্লিক করুন",
        voiceCommandsInfo: "বলুন: 'নিচে স্ক্রোল', 'ক্লিক [লিঙ্ক]'",
        contrastOff: "স্বাভাবিক / বন্ধ",
        contrastYellow: "কালোতে হলুদ",
        contrastInverted: "বিপরীত রং",
        contrastGrayscale: "গ্রেস্কেল",
        contrastDarkMono: "ডার্ক মনো"
      },
      mr: {
        headerText: "अॅक्सेसिबिलिटी साथीदार",
        headerSub: "RPwD कायदा / GIGW पालन",
        zoomText: "मजकूर मोठा करा",
        highContrast: "उच्च कॉन्ट्रास्ट",
        bigCursor: "मोठा कर्सर",
        dyslexicFont: "डिस्लेक्सिया फॉन्ट",
        adhdFocus: "ADHD फोकस",
        readingRuler: "वाचन पट्टी",
        textReader: "स्क्रीन वाचक",
        highlightLinks: "लिंक्स हायलाइट करा",
        highlightHeadings: "शीर्षके हायलाइट करा",
        keyboardHelper: "कीबोर्ड मदतनीस",
        stopAnimations: "अॅनिमेशन थांबवा",
        imageHide: "फक्त मजकूर चित्रे",
        voiceCommands: "आवाज आदेश",
        fontAdjust: "फॉन्ट आकार स्केल",
        spacingAdjust: "अक्षर अंतर",
        lineAdjust: "ओळ अंतर",
        resetAll: "सर्व रीसेट करा",
        statusActive: "सक्रिय",
        statusOff: "बंद",
        speechTapInfo: "वाचण्यासाठी मजकुरावर क्लिक करा",
        voiceCommandsInfo: "प्रयत्न: 'खाली स्क्रॉल', 'क्लिक [नाव]'",
        contrastOff: "सामान्य / बंद",
        contrastYellow: "काळ्यावर पिवळा",
        contrastInverted: "उलट रंग",
        contrastGrayscale: "ग्रेस्केल",
        contrastDarkMono: "डार्क मोनो"
      },
      kn: {
        headerText: "ಪ್ರವೇಶಿಸುವಿಕೆ ಸಹಾಯಕ",
        headerSub: "RPwD ಕಾಯ್ದೆ / GIGW ನಿಯಮಾವಳಿ",
        zoomText: "ಪಠ್ಯ ದೊಡ್ಡದಾಗಿಸು",
        highContrast: "ಹೆಚ್ಚಿನ ಕಾಂಟ್ರಾಸ್ಟ್",
        bigCursor: "ದೊಡ್ಡ ಕರ್ಸರ್",
        dyslexicFont: "ಡಿಸ್ಲೆಕ್ಸಿಯಾ ಫಾಂಟ್",
        adhdFocus: "ADHD ಗಮನ",
        readingRuler: "ಓದುವ ರೂಲರ್",
        textReader: "ಸ್ಕ್ರೀನ್ ರೀಡರ್",
        highlightLinks: "ಲಿಂಕ್ ಹೈಲೈಟ್ ಮಾಡಿ",
        highlightHeadings: "ಹೆಡ್ಡಿಂಗ್ ಹೈಲೈಟ್",
        keyboardHelper: "ಕೀಬೋರ್ಡ್ ಸಹಾಯಕ",
        stopAnimations: "ಅನಿಮೇಷನ್ ನಿಲ್ಲಿಸು",
        imageHide: "ಪಠ್ಯ ಮಾತ್ರ ಚಿತ್ರಗಳು",
        voiceCommands: "ಧ್ವನಿ ಆಜ್ಞೆಗಳು",
        fontAdjust: "ಅಕ್ಷರದ ಗಾತ್ರ ಸ್ಕೇಲ್",
        spacingAdjust: "ಅಕ್ಷರಗಳ ಅಂತರ",
        lineAdjust: "ಸಾಲಿನ ಅಂತರ",
        resetAll: "ಮರುಹೊಂದಿಸಿ",
        statusActive: "ಸಕ್ರಿಯ",
        statusOff: "ಆಫ್",
        speechTapInfo: "ಓದಲು ಪಠ್ಯದ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ",
        voiceCommandsInfo: "ಹೇಳಿ: 'ಕೆಳಗೆ ಸ್ಕ್ರಾಲ್', 'ಕ್ಲಿಕ್ [ಲಿಂಕ್]'",
        contrastOff: "ಸಾಮಾನ್ಯ / ಆಫ್",
        contrastYellow: "ಕಪ್ಪು ಮೇಲೆ ಹಳದಿ",
        contrastInverted: "ವಿಲೋಮ ಬಣ್ಣಗಳು",
        contrastGrayscale: "ಗ್ರೇಸ್ಕೇಲ್",
        contrastDarkMono: "ಡಾರ್ಕ್ ಮೋನೋ"
      },
      ml: {
        headerText: "പ്രവേശനക്ഷമതാ സഹായി",
        headerSub: "RPwD നിയമം / GIGW പാലനം",
        zoomText: "വലിപ്പം കൂട്ടുക",
        highContrast: "ഉയർന്ന കോൺട്രാസ്റ്റ്",
        bigCursor: "വലിയ കേഴ്സർ",
        dyslexicFont: "ഡിസ്‌ലെക്സിയ ഫോണ്ട്",
        adhdFocus: "ADHD ഫോക്കസ്",
        readingRuler: "റീഡിംഗ് റൂലർ",
        textReader: "സ്ക്രീൻ റീഡർ",
        highlightLinks: "ലിങ്കുകൾ ഹൈലൈറ്റ്",
        highlightHeadings: "തലക്കെട്ട് ഹൈലൈറ്റ്",
        keyboardHelper: "കീബോർഡ് സഹായി",
        stopAnimations: "ആനിമേഷൻ നിർത്തുക",
        imageHide: "ടെക്സ്റ്റ് മാത്രം ചിത്രങ്ങൾ",
        voiceCommands: "വോയ്സ് കമാൻഡുകൾ",
        fontAdjust: "അക്ഷര വലിപ്പം സ്കെയിൽ",
        spacingAdjust: "അക്ഷര അകലം",
        lineAdjust: "വരി അകലം",
        resetAll: "റീസെറ്റ് ചെയ്യുക",
        statusActive: "സജീവം",
        statusOff: "ഓഫ്",
        speechTapInfo: "വായിക്കാൻ ടെക്സ്റ്റിൽ ക്ലിക്ക് ചെയ്യുക",
        voiceCommandsInfo: "പറയുക: 'താഴേക്ക് സ്ക്രോൾ', 'ക്ലിക് [ലിങ്ക്]'",
        contrastOff: "സാധാരണ / ഓഫ്",
        contrastYellow: "കറുപ്പിൽ മഞ്ഞ",
        contrastInverted: "വിപരീത നിറങ്ങൾ",
        contrastGrayscale: "ഗ്രേസ്കെയിൽ",
        contrastDarkMono: "ഡാർക്ക് മോണോ"
      },
      gu: {
        headerText: "એક્સેસિબિલિટી સાથી",
        headerSub: "RPwD એક્ટ / GIGW પાલન",
        zoomText: "લખાણ મોટું કરો",
        highContrast: "ઉચ્ચ કોન્ટ્રાસ્ટ",
        bigCursor: "મોટો કર્સર",
        dyslexicFont: "ડિસ્લેક્સિયા ફોન્ટ",
        adhdFocus: "ADHD ફોકસ",
        readingRuler: "વાંચન પટ્ટી",
        textReader: "સ્ક્રીન રીડર",
        highlightLinks: "લિંક્સ હાઇલાઇટ",
        highlightHeadings: "હેડિંગ હાઇલાઇટ",
        keyboardHelper: "કીબોર્ડ સહાયક",
        stopAnimations: "એનિમેશન બંધ કરો",
        imageHide: "માત્ર લખાણ ચિત્રો",
        voiceCommands: "વોઇસ કમાન્ડ",
        fontAdjust: "ફોન્ટ માપ સ્કેલ",
        spacingAdjust: "અક્ષર અંતર",
        lineAdjust: "લાઇન અંતર",
        resetAll: "બધું રીસેટ કરો",
        statusActive: "સક્રિય",
        statusOff: "બંધ",
        speechTapInfo: "વાંચવા માટે લખાણ પર ક્લિક કરો",
        voiceCommandsInfo: "પ્રયત્ન: 'નીચે સ્ક્રોલ કરો', 'ક્લિક [લિંક]'",
        contrastOff: "સામાન્ય / બંધ",
        contrastYellow: "કાળા પર પીળો",
        contrastInverted: "વિપરીત રંગો",
        contrastGrayscale: "ગ્રેસ્કેલ",
        contrastDarkMono: "ડાર્ક મોનો"
      },
      ur: {
        headerText: "رسائی ساتھی",
        headerSub: "RPwD ایکٹ / GIGW تعمیل",
        zoomText: "تحریر بڑی کریں",
        highContrast: "اعلی کنٹراسٹ",
        bigCursor: "بڑا کرسر",
        dyslexicFont: "ڈیسلیکسیا فونٹ",
        adhdFocus: "ADHD فوکس",
        readingRuler: "ریڈنگ رولر",
        textReader: "اسکرین ریڈر",
        highlightLinks: "لنکس نمایاں کریں",
        highlightHeadings: "سرخیوں کی نشاندہی",
        keyboardHelper: "کی بورڈ مددگار",
        stopAnimations: "حرکت روکیں",
        imageHide: "صرف تحریری تصاویر",
        voiceCommands: "صوتی احکامات",
        fontAdjust: "تحریر کا سائز اسکیل",
        spacingAdjust: "حروف کا فاصلہ",
        lineAdjust: "لائنوں کا فاصلہ",
        resetAll: "ترتیبات بحال کریں",
        statusActive: "سرگرم",
        statusOff: "بند",
        speechTapInfo: "سننے کے لیے تحریر پر کلک کریں",
        voiceCommandsInfo: "بولیں: 'نیچے جائیں'، 'کلک کریں [لنک کا نام]'",
        contrastOff: "عام / بند",
        contrastYellow: "کالے پر پیلا",
        contrastInverted: "عکسی رنگ",
        contrastGrayscale: "گریسکیل",
        contrastDarkMono: "ڈارک مونو"
      }
    };

    let state = {};
    let activeLang = 'en';

    // Update popup text based on translation locale
    function applyPopupLanguage(langCode) {
        activeLang = translations[langCode] ? langCode : 'en';
        const t = translations[activeLang];

        document.getElementById('pop-header-title').innerText = t.headerText;
        document.getElementById('pop-header-sub').innerText = t.headerSub;

        // Labels
        document.getElementById('label-fontsize').innerText = t.fontAdjust;
        document.getElementById('label-letterspacing').innerText = t.spacingAdjust;
        document.getElementById('label-lineheight').innerText = t.lineAdjust;

        // Titles
        document.getElementById('title-contrast').innerText = t.highContrast;
        document.getElementById('title-cursor').innerText = t.bigCursor;
        document.getElementById('title-dyslexia').innerText = t.dyslexicFont;
        document.getElementById('title-adhd').innerText = t.adhdFocus;
        document.getElementById('title-ruler').innerText = t.readingRuler;
        document.getElementById('title-links').innerText = t.highlightLinks;
        document.getElementById('title-headings').innerText = t.highlightHeadings;
        document.getElementById('title-keyboard').innerText = t.keyboardHelper;
        document.getElementById('title-animations').innerText = t.stopAnimations;
        document.getElementById('title-imagehide').innerText = t.imageHide;
        document.getElementById('title-speech').innerText = t.textReader;
        document.getElementById('title-voice').innerText = t.voiceCommands;

        document.getElementById('pop-reset-btn').innerText = t.resetAll;

        // Re-populate select options with language labels
        const selectEl = document.getElementById('pop-select-contrast');
        if (selectEl) {
            selectEl.innerHTML = `
                <option value="off">${t.contrastOff}</option>
                <option value="high-contrast">${t.contrastYellow}</option>
                <option value="inverted">${t.contrastInverted}</option>
                <option value="grayscale">${t.contrastGrayscale}</option>
                <option value="dark-mono">${t.contrastDarkMono}</option>
            `;
        }

        updateUI();
    }

    // Restore controls states from chrome storage
    function refreshState() {
        chrome.storage.local.get(['accessibilityState'], (result) => {
            if (result.accessibilityState) {
                state = result.accessibilityState;
                updateUI();
            }
        });
    }

    // Refresh UI elements styles/text based on state object
    function updateUI() {
        if (!state || Object.keys(state).length === 0) return;

        const t = translations[activeLang];

        // Adjusters values
        document.getElementById('val-fontsize').innerText = (state.fontSizeDelta > 0 ? '+' : '') + state.fontSizeDelta;
        document.getElementById('val-letterspacing').innerText = (state.letterSpacingDelta > 0 ? '+' : '') + state.letterSpacingDelta;
        document.getElementById('val-lineheight').innerText = (state.lineHeightDelta > 0 ? '+' : '') + state.lineHeightDelta;

        // Sync dropdown list values
        const selectEl = document.getElementById('pop-select-contrast');
        if (selectEl) {
            selectEl.value = state.highContrast;
        }

        // Toggle card background class
        const contrastCard = document.getElementById('pop-contrast');
        if (contrastCard) {
            if (state.highContrast !== 'off') {
                contrastCard.classList.add('enabled');
            } else {
                contrastCard.classList.remove('enabled');
            }
        }

        // Card Toggles helper function
        const syncCard = (cardId, statusId, enabled, textVal) => {
            const card = document.getElementById(cardId);
            const status = document.getElementById(statusId);
            if (!card || !status) return;
            if (enabled) {
                card.classList.add('enabled');
                status.innerText = textVal || t.statusActive;
            } else {
                card.classList.remove('enabled');
                status.innerText = textVal || t.statusOff;
            }
        };

        syncCard('pop-cursor', 'status-cursor', state.largeCursor);
        syncCard('pop-dyslexia', 'status-dyslexia', state.dyslexicFont);
        syncCard('pop-adhd', 'status-adhd', state.adhdMode);
        syncCard('pop-ruler', 'status-ruler', state.readingRuler);
        syncCard('pop-links', 'status-links', state.highlightLinks);
        syncCard('pop-headings', 'status-headings', state.highlightHeadings);
        syncCard('pop-keyboard', 'status-keyboard', state.keyboardHelper);
        syncCard('pop-animations', 'status-animations', state.stopAnimations);
        syncCard('pop-imagehide', 'status-imagehide', state.imageHide);

        // Screen text reader row
        const speechCard = document.getElementById('pop-speech');
        const speechStatus = document.getElementById('status-speech');
        const speechDesc = document.getElementById('desc-speech');
        if (state.speechActive) {
            speechCard.classList.add('enabled');
            speechStatus.innerText = t.statusActive;
            speechDesc.innerText = t.speechTapInfo;
        } else {
            speechCard.classList.remove('enabled');
            speechStatus.innerText = t.statusOff;
            speechDesc.innerText = t.statusOff;
        }

        // Voice Command navigation row
        const voiceCard = document.getElementById('pop-voice');
        const voiceStatus = document.getElementById('status-voice');
        const voiceDesc = document.getElementById('desc-voice');
        if (state.voiceCommands) {
            voiceCard.classList.add('enabled');
            voiceStatus.innerText = t.statusActive;
            voiceDesc.innerText = t.voiceCommandsInfo;
        } else {
            voiceCard.classList.remove('enabled');
            voiceStatus.innerText = t.statusOff;
            voiceDesc.innerText = t.statusOff;
        }
    }

    // Save field updates back to chrome storage
    function saveStateField(field, value) {
        state[field] = value;
        chrome.storage.local.set({ accessibilityState: state }, () => {
            updateUI();
        });
    }

    // Wire up events
    function initEvents() {
        // Font adjusters
        document.getElementById('pop-font-up').onclick = () => saveStateField('fontSizeDelta', Math.min(6, state.fontSizeDelta + 1));
        document.getElementById('pop-font-down').onclick = () => saveStateField('fontSizeDelta', Math.max(-3, state.fontSizeDelta - 1));
        document.getElementById('pop-spacing-up').onclick = () => saveStateField('letterSpacingDelta', Math.min(6, state.letterSpacingDelta + 1));
        document.getElementById('pop-spacing-down').onclick = () => saveStateField('letterSpacingDelta', Math.max(0, state.letterSpacingDelta - 1));
        document.getElementById('pop-line-up').onclick = () => saveStateField('lineHeightDelta', Math.min(6, state.lineHeightDelta + 1));
        document.getElementById('pop-line-down').onclick = () => saveStateField('lineHeightDelta', Math.max(0, state.lineHeightDelta - 1));

        // Toggles
        document.getElementById('pop-select-contrast').onchange = (e) => {
            saveStateField('highContrast', e.target.value);
        };
        // Focusing select element on card outer clicks
        document.getElementById('pop-contrast').onclick = (e) => {
            if (e.target.id !== 'pop-select-contrast') {
                document.getElementById('pop-select-contrast').focus();
            }
        };

        document.getElementById('pop-cursor').onclick = () => saveStateField('largeCursor', !state.largeCursor);
        document.getElementById('pop-dyslexia').onclick = () => saveStateField('dyslexicFont', !state.dyslexicFont);
        document.getElementById('pop-adhd').onclick = () => saveStateField('adhdMode', !state.adhdMode);
        document.getElementById('pop-ruler').onclick = () => saveStateField('readingRuler', !state.readingRuler);
        document.getElementById('pop-links').onclick = () => saveStateField('highlightLinks', !state.highlightLinks);
        document.getElementById('pop-headings').onclick = () => saveStateField('highlightHeadings', !state.highlightHeadings);
        document.getElementById('pop-keyboard').onclick = () => saveStateField('keyboardHelper', !state.keyboardHelper);
        document.getElementById('pop-animations').onclick = () => saveStateField('stopAnimations', !state.stopAnimations);
        document.getElementById('pop-imagehide').onclick = () => saveStateField('imageHide', !state.imageHide);
        document.getElementById('pop-speech').onclick = () => saveStateField('speechActive', !state.speechActive);
        document.getElementById('pop-voice').onclick = () => saveStateField('voiceCommands', !state.voiceCommands);

        // Reset
        document.getElementById('pop-reset-btn').onclick = () => {
            const defaultState = {
                fontSizeDelta: 0,
                lineHeightDelta: 0,
                letterSpacingDelta: 0,
                highContrast: 'off',
                dyslexicFont: false,
                largeCursor: false,
                speechActive: false,
                highlightLinks: false,
                highlightHeadings: false,
                keyboardHelper: false,
                stopAnimations: false,
                readingRuler: false,
                imageHide: false,
                voiceCommands: false
            };
            chrome.storage.local.set({ accessibilityState: defaultState }, () => {
                state = defaultState;
                updateUI();
            });
        };
    }

    // Startup Initialization
    document.addEventListener('DOMContentLoaded', () => {
        initEvents();
        refreshState();

        // Detect language of the active tab by querying it
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs[0]) {
                chrome.tabs.sendMessage(tabs[0].id, { action: "getLanguage" }, (response) => {
                    let pageLang = 'en';
                    if (chrome.runtime.lastError) {
                        // Content script not loaded (e.g. extension page or new tab), fallback to browser lang
                        pageLang = navigator.language.substring(0, 2).toLowerCase();
                    } else if (response && response.lang) {
                        pageLang = response.lang;
                    }
                    applyPopupLanguage(pageLang);
                });
            } else {
                applyPopupLanguage('en');
            }
        });
    });

    // Listen for storage changes from page and sync
    chrome.storage.onChanged.addListener((changes, namespace) => {
        if (namespace === 'local' && changes.accessibilityState) {
            state = changes.accessibilityState.newValue;
            updateUI();
        }
    });

})();
