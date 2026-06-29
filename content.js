// Injected Web Accessibility Engine (RPwD Compliant)
(function() {
    'use strict';

    // 1. Language Localization Packs (Indian Languages + English)
    const translations = {
      en: {
        headerText: "ACCESSIBILITY COMPANION",
        zoomText: "Zoom Text [ + ]",
        shrinkText: "Shrink Text [ - ]",
        highContrast: "High Contrast [ C ]",
        bigCursor: "Large Cursor [ M ]",
        dyslexicFont: "Dyslexia Font [ D ]",
        adhdFocus: "ADHD Focus Shutter [ A ]",
        readingRuler: "Reading Ruler [ R ]",
        textReader: "Screen Text Reader [ S ]",
        highlightLinks: "Highlight Links [ L ]",
        highlightHeadings: "Highlight Headings [ H ]",
        keyboardHelper: "Keyboard Helper [ K ]",
        stopAnimations: "Pause Animations [ P ]",
        imageHide: "Text-Only Images [ I ]",
        voiceCommands: "Voice Navigation [ V ]",
        fontAdjust: "Font Size Scale",
        spacingAdjust: "Letter Spacing",
        lineAdjust: "Line Spacing",
        resetAll: "Reset All Accessibility Settings",
        statusActive: "Active",
        statusOff: "Off",
        speechTapInfo: "Click text to read aloud",
        voiceCommandsInfo: "Try: 'scroll down', 'scroll up', 'click [link]'",
        voiceCommandMatched: "Voice Command: ",
        voiceCommandError: "Voice system error: ",
        voiceListening: "Voice Companion Listening...",
        contrastOff: "Normal / Off",
        contrastYellow: "Yellow on Black",
        contrastInverted: "Inverted Colors",
        contrastGrayscale: "Grayscale",
        contrastDarkMono: "Dark Monochromatic"
      },
      hi: {
        headerText: "सुलभता साथी (सहायक)",
        zoomText: "टेक्स्ट बड़ा करें [ + ]",
        shrinkText: "टेक्स्ट छोटा करें [ - ]",
        highContrast: "उच्च कंट्रास्ट [ C ]",
        bigCursor: "बड़ा कर्सर [ M ]",
        dyslexicFont: "डिस्लेक्सिया फ़ॉन्ट [ D ]",
        adhdFocus: "ADHD फोकस शटर [ A ]",
        readingRuler: "पठन रूलर रेखा [ R ]",
        textReader: "स्क्रीन पाठ वाचक [ S ]",
        highlightLinks: "लिंक्स हाइलाइट करें [ L ]",
        highlightHeadings: "शीर्षक हाइलाइट करें [ H ]",
        keyboardHelper: "कीबोर्ड सहायक [ K ]",
        stopAnimations: "एनिमेशन रोकें [ P ]",
        imageHide: "केवल टेक्स्ट इमेज [ I ]",
        voiceCommands: "आवाज आदेश [ V ]",
        fontAdjust: "फॉन्ट का आकार",
        spacingAdjust: "अक्षर रिक्ति",
        lineAdjust: "पंक्ति रिक्ति",
        resetAll: "सभी सेटिंग्स रीसेट करें",
        statusActive: "सक्रिय",
        statusOff: "बंद",
        speechTapInfo: "ज़ोर से पढ़ने के लिए टेक्स्ट पर क्लिक करें",
        voiceCommandsInfo: "बोलें: 'नीचे स्क्रॉल करें', 'ऊपर स्क्रॉल करें', 'क्लिक [नाम]'",
        voiceCommandMatched: "आदेश निष्पादित: ",
        voiceCommandError: "ध्वनि आदेश त्रुटि: ",
        voiceListening: "आवाज आदेश सुन रहा है...",
        contrastOff: "सामान्य / बंद",
        contrastYellow: "काले पर पीला",
        contrastInverted: "विपरीत रंग",
        contrastGrayscale: "ग्रेस्केल",
        contrastDarkMono: "डार्क मोनोक्रोमैटिक"
      },
      ta: {
        headerText: "அணுகல்தன்மை துணைவன்",
        zoomText: "எழுத்தைப் பெரிதாக்கு [ + ]",
        shrinkText: "எழுத்தைச் சிறிதாக்கு [ - ]",
        highContrast: "அதிக மாறுபாடு [ C ]",
        bigCursor: "பெரிய கர்சர் [ M ]",
        dyslexicFont: "டிஸ்லெக்ஸியா எழுத்து [ D ]",
        adhdFocus: "ADHD ஷட்டர் [ A ]",
        readingRuler: "வாசிப்பு அளவுகோல் [ R ]",
        textReader: "திரை உரை வாசிப்பான் [ S ]",
        highlightLinks: "இணைப்பு முன்னிலை [ L ]",
        highlightHeadings: "தலைப்பு முன்னிலை [ H ]",
        keyboardHelper: "விசைப்பலகை உதவி [ K ]",
        stopAnimations: "அசைவൂட்ட நிறுத்தம் [ P ]",
        imageHide: "உரை மட்டும் படம் [ I ]",
        voiceCommands: "குரல் கட்டளைகள் [ V ]",
        fontAdjust: "எழுத்து அளவு",
        spacingAdjust: "எழுத்து இடைவெளி",
        lineAdjust: "வரி இடைவெளி",
        resetAll: "அமைப்புகளை மீட்டமை",
        statusActive: "செயலில்",
        statusOff: "முடக்கம்",
        speechTapInfo: "உரையை உரக்க வாசிக்க கிளிக் செய்யவும்",
        voiceCommandsInfo: "கூறுக: 'கீழே ஸ்க்ரோல்', 'மேலே ஸ்க்ரோல்', 'கிளிக் [இணைப்பு]'",
        voiceCommandMatched: "கட்டளை இயக்கப்பட்டது: ",
        voiceCommandError: "குரல் கட்டளை பிழை: ",
        voiceListening: "குരல் கட்டளை கேட்கிறது...",
        contrastOff: "இயல்பு / முடக்கம்",
        contrastYellow: "கருப்பில் மஞ்சள்",
        contrastInverted: "தலைகீழ் நிறங்கள்",
        contrastGrayscale: "சாம்பல் நிறம்",
        contrastDarkMono: "டார்க் மோனோ"
      },
      te: {
        headerText: "యాక్సెసిబిలిటీ సహాయకుడు",
        zoomText: "టెక్స్ట్ పెద్దది చేయి [ + ]",
        shrinkText: "టెక్స్ట్ చిన్నది చేయి [ - ]",
        highContrast: "అధిక కాంట్రాస్ట్ [ C ]",
        bigCursor: "పెద్ద కర్సర్ [ M ]",
        dyslexicFont: "డిస్లెక్సియా ఫాంట్ [ D ]",
        adhdFocus: "ADHD ఫోకస్ షట్టర్ [ A ]",
        readingRuler: "రీడింగ్ రూలర్ [ R ]",
        textReader: "స్క్రీన్ రీడర్ [ S ]",
        highlightLinks: "లింక్స్ హైలైట్ చేయి [ L ]",
        highlightHeadings: "హెడ్డింగ్స్ హైలైట్ [ H ]",
        keyboardHelper: "కీబోర్డ్ సహాయకారి [ K ]",
        stopAnimations: "యానిమేషన్లు ఆపు [ P ]",
        imageHide: "కేవలం టెక్స్ట్ ఇమేజ్ [ I ]",
        voiceCommands: "వాయిస్ ఆదేశాలు [ V ]",
        fontAdjust: "ఫాంట్ పరిమాణం",
        spacingAdjust: "అక్షరాల దూరం",
        lineAdjust: "లైన్ దూరం",
        resetAll: "రీసెట్ చేయండి",
        statusActive: "యాక్టివ్",
        statusOff: "ఆఫ్",
        speechTapInfo: "చదవడానికి టెక్స్ట్ పై క్లిక్ చేయండి",
        voiceCommandsInfo: "ట్రై: 'కిందకి స్క్రోల్', 'పైకి స్క్రోల్', 'క్లిక్ [లింక్]'",
        voiceCommandMatched: "ఆదేశం అమలైంది: ",
        voiceCommandError: "వాయిస్ కమాండ్ లోపం: ",
        voiceListening: "వాయిస్ వింటోంది...",
        contrastOff: "సాధారణం / ఆఫ్",
        contrastYellow: "నలుపుపై పసుపు",
        contrastInverted: "వ్యతిరేక రంగులు",
        contrastGrayscale: "గ్రేస్కేల్",
        contrastDarkMono: "డార్క్ మోనో"
      },
      bn: {
        headerText: "সহায়তা সাথি",
        zoomText: "লেখা বড় করুন [ + ]",
        shrinkText: "লেখা ছোট করুন [ - ]",
        highContrast: "উচ্চ বৈপরীত্য [ C ]",
        bigCursor: "বড় কার্সার [ M ]",
        dyslexicFont: "ডিসলেক্সিয়া ফন্ট [ D ]",
        adhdFocus: "ADHD ফোকাস শাটার [ A ]",
        readingRuler: "পঠন রুলার [ R ]",
        textReader: "স্ক্রীন রিডার [ S ]",
        highlightLinks: "লিঙ্ক হাইলাইট করুন [ L ]",
        highlightHeadings: "শিরোনাম হাইলাইট [ H ]",
        keyboardHelper: "কীবোর্ড সাহায্যকারী [ K ]",
        stopAnimations: "অ্যানিমেশন বন্ধ করুন [ P ]",
        imageHide: "টেক্সট-অনলি ইমেজ [ I ]",
        voiceCommands: "ভয়েস কমান্ড [ V ]",
        fontAdjust: "ফন্টের আকার",
        spacingAdjust: "অক্ষরের দূরত্ব",
        lineAdjust: "লাইনের দূরত্ব",
        resetAll: "সব রিসেট করুন",
        statusActive: "সক্রিয়",
        statusOff: "বন্ধ",
        speechTapInfo: "শুনতে টেক্সটের ওপর ক্লিক করুন",
        voiceCommandsInfo: "বলুন: 'নিচে স্ক্রোল', 'উপরে স্ক্রোল', 'ক্লিক [লিঙ্ক]'",
        voiceCommandMatched: "কমান্ড চালিত: ",
        voiceCommandError: "ভয়েস কমান্ড ত্রুটি: ",
        voiceListening: "ভয়েস শুনছে...",
        contrastOff: "স্বাভাবিক / বন্ধ",
        contrastYellow: "কালোতে হলুদ",
        contrastInverted: "বিপরীত রং",
        contrastGrayscale: "গ্রেস্কেল",
        contrastDarkMono: "ডার্ক মনো"
      },
      mr: {
        headerText: "अॅक्सेसिबिलिटी साथीदार",
        zoomText: "मजकूर मोठा करा [ + ]",
        shrinkText: "मजकूर लहान करा [ - ]",
        highContrast: "उच्च कॉन्ट्रास्ट [ C ]",
        bigCursor: "मोठा कर्सर [ M ]",
        dyslexicFont: "डिस्लेक्सिया फॉन्ट [ D ]",
        adhdFocus: "ADHD शटर [ A ]",
        readingRuler: "वाचन रूलर [ R ]",
        textReader: "स्क्रीन वाचक [ S ]",
        highlightLinks: "लिंक्स हायलाइट करा [ L ]",
        highlightHeadings: "शीर्षके हायलाइट करा [ H ]",
        keyboardHelper: "कीबोर्ड मदतनीस [ K ]",
        stopAnimations: "अॅनिमेशन थांबवा [ P ]",
        imageHide: "फक्त मजकूर चित्रे [ I ]",
        voiceCommands: "आवाज आदेश [ V ]",
        fontAdjust: "फॉन्ट आकार",
        spacingAdjust: "अक्षर अंतर",
        lineAdjust: "ओळ अंतर",
        resetAll: "सर्व रीसेट करा",
        statusActive: "सक्रिय",
        statusOff: "बंद",
        speechTapInfo: "वाचण्यासाठी मजकुरावर क्लिक करा",
        voiceCommandsInfo: "प्रयत्न: 'खाली स्क्रॉल करा', 'वर स्क्रॉल करा', 'क्लिक [नाव]'",
        voiceCommandMatched: "आदेश यशस्वी: ",
        voiceCommandError: "आवाज आदेश त्रुटी: ",
        voiceListening: "आवाज ऐकत आहे...",
        contrastOff: "सामान्य / बंद",
        contrastYellow: "काळ्यावर पिवळा",
        contrastInverted: "उलट रंग",
        contrastGrayscale: "ग्रेस्केल",
        contrastDarkMono: "डार्क मोनो"
      },
      kn: {
        headerText: "ಪ್ರವೇಶಿಸುವಿಕೆ ಸಹಾಯಕ",
        zoomText: "ಪಠ್ಯ ದೊಡ್ಡದಾಗಿಸು [ + ]",
        shrinkText: "ಪಠ್ಯ ಚಿಕ್ಕದಾಗಿಸು [ - ]",
        highContrast: "ಹೆಚ್ಚಿನ ಕಾಂಟ್ರಾಸ್ಟ್ [ C ]",
        bigCursor: "ದೊಡ್ಡ ಕರ್ಸರ್ [ M ]",
        dyslexicFont: "ಡಿಸ್ಲೆಕ್ಸಿಯಾ ಫಾಂಟ್ [ D ]",
        adhdFocus: "ADHD ಫೋಕಸ್ ಶಟರ್ [ A ]",
        readingRuler: "ಓದುವ ರೂಲರ್ [ R ]",
        textReader: "ಸ್ಕ್ರೀನ್ ರೀಡರ್ [ S ]",
        highlightLinks: "ಲಿಂಕ್ ಹೈಲೈಟ್ ಮಾಡಿ [ L ]",
        highlightHeadings: "ಹೆಡ್ಡಿಂಗ್ ಹೈಲೈಟ್ [ H ]",
        keyboardHelper: "ಕೀಬೋರ್ಡ್ ಸಹಾಯಕ [ K ]",
        stopAnimations: "ಅನಿಮೇಷನ್ ನಿಲ್ಲಿಸು [ P ]",
        imageHide: "ಪಠ್ಯ ಮಾತ್ರ ಚಿತ್ರಗಳು [ I ]",
        voiceCommands: "ಧ್ವನಿ ಆಜ್ಞೆಗಳು [ V ]",
        fontAdjust: "ಅಕ್ಷರದ ಗಾತ್ರ",
        spacingAdjust: "ಅಕ್ಷರಗಳ ಅಂತರ",
        lineAdjust: "ಸಾಲಿನ ಅಂತರ",
        resetAll: "ಮರುಹೊಂದಿಸಿ",
        statusActive: "ಸಕ್ರಿಯ",
        statusOff: "ಆಫ್",
        speechTapInfo: "ಓದಲು ಪಠ್ಯದ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ",
        voiceCommandsInfo: "ಹೇಳಿ: 'ಕೆಳಗೆ ಸ್ಕ್ರಾಲ್ ಮಾಡಿ', 'ಮೇಲೆ ಸ್ಕ್ರಾಲ್ ಮಾಡಿ', 'ಕ್ಲಿಕ್ [ಲಿಂಕ್]'",
        voiceCommandMatched: "ಆಜ್ಞೆ ಚಾಲನೆಗೊಂಡಿದೆ: ",
        voiceCommandError: "ಧ್ವನಿ ಆಜ್ಞೆ ದೋಷ: ",
        voiceListening: "ಧ್ವನಿ ಆಲಿಸುತ್ತಿದೆ...",
        contrastOff: "ಸಾಮಾನ್ಯ / ಆಫ್",
        contrastYellow: "ಕಪ್ಪು ಮೇಲೆ ಹಳದಿ",
        contrastInverted: "ವಿಲೋಮ ಬಣ್ಣಗಳು",
        contrastGrayscale: "ಗ್ರೇಸ್ಕೇಲ್",
        contrastDarkMono: "ಡಾರ್ಕ್ ಮೋನೋ"
      },
      ml: {
        headerText: "പ്രവേശനക്ഷമതാ സഹായി",
        zoomText: "വലിപ്പം കൂട്ടുക [ + ]",
        shrinkText: "വലിപ്പം കുറയ്ക്കുക [ - ]",
        highContrast: "ഉയർന്ന കോൺത്രാസ്റ്റ് [ C ]",
        bigCursor: "വലിയ കേഴ്സർ [ M ]",
        dyslexicFont: "ഡിസ്‌ലെക്സിയ ഫോണ്ട് [ D ]",
        adhdFocus: "ADHD ഫോക്കസ് ഷട്ടർ [ A ]",
        readingRuler: "റീഡിംഗ് റൂലർ [ R ]",
        textReader: "സ്ക്രീൻ റീഡർ [ S ]",
        highlightLinks: "ലിങ്കുകൾ ഹൈലൈറ്റ് [ L ]",
        highlightHeadings: "തലക്കെട്ട് ഹൈലൈറ്റ് [ H ]",
        keyboardHelper: "കീബോർഡ് സഹായി [ K ]",
        stopAnimations: "ആനിമേഷൻ നിർത്തുക [ P ]",
        imageHide: "ടെക്സ്റ്റ് മാത്രം ചിത്രങ്ങൾ [ I ]",
        voiceCommands: "വോയ്സ് കമാൻഡുകൾ [ V ]",
        fontAdjust: "അക്ഷര വലിപ്പം",
        spacingAdjust: "അക്ഷര അകലം",
        lineAdjust: "വരി അകലം",
        resetAll: "റീസെറ്റ് ചെയ്യുക",
        statusActive: "സജീവം",
        statusOff: "ഓഫ്",
        speechTapInfo: "വായിക്കാൻ ടെക്സ്റ്റിൽ ക്ലിക്ക് ചെയ്യുക",
        voiceCommandsInfo: "പറയുക: 'താഴേക്ക് സ്ക്രോൾ', 'മുകളിലേക്ക് സ്ക്രോൾ', 'ക്ലിക് [ലിങ്ക്]'",
        voiceCommandMatched: "കമാൻഡ് പ്രവർത്തിച്ചു: ",
        voiceCommandError: "വോയ്സ് കമാൻഡ് പിശക്: ",
        voiceListening: "ശബ്ദം ശ്രദ്ധിക്കുന്നു...",
        contrastOff: "സാധാരണ / ഓഫ്",
        contrastYellow: "കറുപ്പിൽ മഞ്ഞ",
        contrastInverted: "വിപരീത നിറങ്ങൾ",
        contrastGrayscale: "ഗ്രേസ്കെയിൽ",
        contrastDarkMono: "ഡാർക്ക് മോണോ"
      },
      gu: {
        headerText: "એક્સેસિબિલિટી સાથી",
        zoomText: "લખાણ મોટું કરો [ + ]",
        shrinkText: "લખાણ નાનું કરો [ - ]",
        highContrast: "ઉચ્ચ કોન્ટ્રાસ્ટ [ C ]",
        bigCursor: "મોટો કર્સર [ M ]",
        dyslexicFont: "ડિસ્લેક્સિયા ફોન્ટ [ D ]",
        adhdFocus: "ADHD ફોકસ શટર [ A ]",
        readingRuler: "વાંચન પટ્ટી [ R ]",
        textReader: "સ્ક્રીન રીડર [ S ]",
        highlightLinks: "લિંક્સ હાઇલાઇટ કરો [ L ]",
        highlightHeadings: "હેડિંગ હાઇલાઇટ [ H ]",
        keyboardHelper: "કીબોર્ડ સહાયક [ K ]",
        stopAnimations: "એનિમેશન બંધ કરો [ P ]",
        imageHide: "માત્ર લખાણ ચિત્રો [ I ]",
        voiceCommands: "વોઇસ કમાન્ડ [ V ]",
        fontAdjust: "ફોન્ટ માપ",
        spacingAdjust: "અક્ષર અંતર",
        lineAdjust: "લાઇન અંતર",
        resetAll: "બધું રીસેટ કરો",
        statusActive: "સક્રિય",
        statusOff: "બંધ",
        speechTapInfo: "વાંચવા માટે લખાણ પર ક્લિક કરો",
        voiceCommandsInfo: "પ્રયત્ન: 'નીચે સ્ક્રોલ કરો', 'ઉપર સ્ક્રોલ કરો', 'ક્લિક [લિંક]'",
        voiceCommandMatched: "આદેશ અમલીકૃત: ",
        voiceCommandError: "વોઇસ કમાન્ડ ખામી: ",
        voiceListening: "આવાજ સાંભળી રહ્યા છીએ...",
        contrastOff: "સામાન્ય / બંધ",
        contrastYellow: "કાળા પર પીળો",
        contrastInverted: "વિપરીત રંગો",
        contrastGrayscale: "ગ્રેસ્કેલ",
        contrastDarkMono: "ડાર્ક મોનો"
      },
      ur: {
        headerText: "رسائی ساتھی",
        zoomText: "تحریر بڑی کریں [ + ]",
        shrinkText: "تحریر چھوٹی کریں [ - ]",
        highContrast: "اعلی کنٹراسٹ [ C ]",
        bigCursor: "بڑا کرسر [ M ]",
        dyslexicFont: "ڈیسلیکسیا فونٹ [ D ]",
        adhdFocus: "ADHD فوکس شٹر [ A ]",
        readingRuler: "ریڈنگ رولر [ R ]",
        textReader: "اسکرین ریڈر [ S ]",
        highlightLinks: "لنکس نمایاں کریں [ L ]",
        highlightHeadings: "سرخیوں کی نشاندہی [ H ]",
        keyboardHelper: "کی بورڈ مددگار [ K ]",
        stopAnimations: "حرکت روکیں [ P ]",
        imageHide: "صرف تحریری تصاویر [ I ]",
        voiceCommands: "صوتی احکامات [ V ]",
        fontAdjust: "تحریر का आकार",
        spacingAdjust: "حروف का فاصلہ",
        lineAdjust: "لائنوں का फासला",
        resetAll: "ترتیبات بحال کریں",
        statusActive: "سرگرم",
        statusOff: "بند",
        speechTapInfo: "سننے کے لیے تحریر پر کلک کریں",
        voiceCommandsInfo: "بولیں: 'نیچے اسکرول'، 'اوپر اسکرول'، 'کلک کریں [لنک का नाम]'",
        voiceCommandMatched: "حکم چلایا گیا: ",
        voiceCommandError: "صوتی حکم میں خرابی: ",
        voiceListening: "صدا سنی جا رہی ہے...",
        contrastOff: "عام / بند",
        contrastYellow: "کالے پر پیلا",
        contrastInverted: "عکسی رنگ",
        contrastGrayscale: "گریسکیل",
        contrastDarkMono: "ڈارک مونو"
      }
    };

    // Auto-detect page language from html tag or fallback to browser language
    function detectPageLanguage() {
        let lang = document.documentElement.lang || document.body?.getAttribute('lang') || navigator.language || 'en';
        lang = lang.substring(0, 2).toLowerCase();
        return translations[lang] ? lang : 'en';
    }

    const pageLanguage = detectPageLanguage();
    const t = translations[pageLanguage];

    // 2. Global State Storage
    let state = {
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

    let fontOriginalSizes = new Map();
    let letterOriginalSpacings = new Map();
    let lineOriginalHeights = new Map();

    let synth = window.speechSynthesis;
    let utterance = null;
    
    let adhdMaskTop = null;
    let adhdMaskBottom = null;
    let readingRulerEl = null;
    const slitHeight = 110;

    let voiceToast = null;
    let voiceToastTimeout = null;
    let recognition = null;

    // Injected widget DOM elements
    let widgetButton = null;
    let mainPanel = null;

    // Initialize overlay UI
    function initInjectedUI() {
        // Create widget button
        widgetButton = document.createElement('div');
        widgetButton.className = 'access-companion-btn';
        widgetButton.innerHTML = '♿';
        widgetButton.title = t.headerText;
        document.body.appendChild(widgetButton);

        // Create main control panel
        mainPanel = document.createElement('div');
        mainPanel.className = 'access-companion-panel';
        document.body.appendChild(mainPanel);

        // Create ADHD Shutter elements
        adhdMaskTop = document.createElement('div');
        adhdMaskTop.className = 'adhd-shutter-layer';
        adhdMaskTop.style.top = '0';
        
        adhdMaskBottom = document.createElement('div');
        adhdMaskBottom.className = 'adhd-shutter-layer';
        adhdMaskBottom.style.bottom = '0';

        document.body.appendChild(adhdMaskTop);
        document.body.appendChild(adhdMaskBottom);

        // Create Reading Ruler element
        readingRulerEl = document.createElement('div');
        readingRulerEl.className = 'accessibility-reading-ruler';
        document.body.appendChild(readingRulerEl);

        // Wire click handler
        widgetButton.onclick = (e) => {
            e.stopPropagation();
            const isVisible = mainPanel.style.display === 'flex';
            mainPanel.style.display = isVisible ? 'none' : 'flex';
        };

        document.addEventListener('click', (e) => {
            if (mainPanel && !mainPanel.contains(e.target) && e.target !== widgetButton) {
                mainPanel.style.display = 'none';
            }
        });

        // Load setting initial states from storage and render panel
        chrome.storage.local.get(['accessibilityState'], (result) => {
            if (result.accessibilityState) {
                state = result.accessibilityState;
                applyState(state);
            }
            renderDashboard();
        });
    }

    // 3. Main Dashboard Rendering (Adopting native language)
    function renderDashboard() {
        if (!mainPanel) return;

        mainPanel.innerHTML = `
            <div class="access-companion-header">
                <div class="access-companion-header-title">
                    <span>♿</span>
                    <span>${t.headerText}</span>
                </div>
                <span id="access-close-btn" class="access-companion-close">&times;</span>
            </div>
            
            <div class="access-companion-body">
                <!-- Text Scale, spacing adjusters -->
                <div class="access-companion-adjusters">
                    <div class="access-companion-adjuster-row">
                        <span class="access-companion-adjuster-label">${t.fontAdjust}</span>
                        <div class="access-companion-adjuster-controls">
                            <button id="adjust-font-down" class="access-companion-btn-small">-</button>
                            <span class="access-companion-adjuster-value">${state.fontSizeDelta > 0 ? '+' : ''}${state.fontSizeDelta}</span>
                            <button id="adjust-font-up" class="access-companion-btn-small">+</button>
                        </div>
                    </div>
                    
                    <div class="access-companion-adjuster-row">
                        <span class="access-companion-adjuster-label">${t.spacingAdjust}</span>
                        <div class="access-companion-adjuster-controls">
                            <button id="adjust-spacing-down" class="access-companion-btn-small">-</button>
                            <span class="access-companion-adjuster-value">${state.letterSpacingDelta > 0 ? '+' : ''}${state.letterSpacingDelta}</span>
                            <button id="adjust-spacing-up" class="access-companion-btn-small">+</button>
                        </div>
                    </div>

                    <div class="access-companion-adjuster-row">
                        <span class="access-companion-adjuster-label">${t.lineAdjust}</span>
                        <div class="access-companion-adjuster-controls">
                            <button id="adjust-line-down" class="access-companion-btn-small">-</button>
                            <span class="access-companion-adjuster-value">${state.lineHeightDelta > 0 ? '+' : ''}${state.lineHeightDelta}</span>
                            <button id="adjust-line-up" class="access-companion-btn-small">+</button>
                        </div>
                    </div>
                </div>

                <div class="access-companion-grid">
                    <div class="access-contrast-card-wrapper">
                        <div id="card-contrast"
                             class="access-companion-card ${state.highContrast !== 'off' ? 'enabled' : ''}"
                             role="button"
                             aria-haspopup="listbox"
                             aria-expanded="false"
                             aria-label="High Contrast mode: ${state.highContrast === 'off' ? (t.contrastOff || 'Off') : state.highContrast}"
                             tabindex="0">
                            <div class="icon">🌗</div>
                            <div class="title">${t.highContrast}</div>
                            <div class="status">${state.highContrast !== 'off' ? ({
                                'high-contrast': t.contrastYellow || 'Yellow on Black',
                                'inverted': t.contrastInverted || 'Inverted',
                                'grayscale': t.contrastGrayscale || 'Grayscale',
                                'dark-mono': t.contrastDarkMono || 'Dark Mono'
                            }[state.highContrast] || state.highContrast) : (t.statusOff || 'Off')}</div>
                        </div>
                    </div>
                    
                    <div id="card-cursor" class="access-companion-card ${state.largeCursor ? 'enabled' : ''}">
                        <div class="icon">🏹</div>
                        <div class="title">${t.bigCursor}</div>
                        <div class="status">${state.largeCursor ? t.statusActive : t.statusOff}</div>
                    </div>

                    <div id="card-dyslexia" class="access-companion-card ${state.dyslexicFont ? 'enabled' : ''}">
                        <div class="icon">📖</div>
                        <div class="title">${t.dyslexicFont}</div>
                        <div class="status">${state.dyslexicFont ? t.statusActive : t.statusOff}</div>
                    </div>

                    <div id="card-adhd" class="access-companion-card ${state.adhdMode ? 'enabled' : ''}">
                        <div class="icon">🎯</div>
                        <div class="title">${t.adhdFocus}</div>
                        <div class="status">${state.adhdMode ? t.statusActive : t.statusOff}</div>
                    </div>

                    <div id="card-ruler" class="access-companion-card ${state.readingRuler ? 'enabled' : ''}">
                        <div class="icon">📏</div>
                        <div class="title">${t.readingRuler}</div>
                        <div class="status">${state.readingRuler ? t.statusActive : t.statusOff}</div>
                    </div>

                    <div id="card-links" class="access-companion-card ${state.highlightLinks ? 'enabled' : ''}">
                        <div class="icon">🔗</div>
                        <div class="title">${t.highlightLinks}</div>
                        <div class="status">${state.highlightLinks ? t.statusActive : t.statusOff}</div>
                    </div>

                    <div id="card-headings" class="access-companion-card ${state.highlightHeadings ? 'enabled' : ''}">
                        <div class="icon">🏷️</div>
                        <div class="title">${t.highlightHeadings}</div>
                        <div class="status">${state.highlightHeadings ? t.statusActive : t.statusOff}</div>
                    </div>

                    <div id="card-keyboard" class="access-companion-card ${state.keyboardHelper ? 'enabled' : ''}">
                        <div class="icon">⌨️</div>
                        <div class="title">${t.keyboardHelper}</div>
                        <div class="status">${state.keyboardHelper ? t.statusActive : t.statusOff}</div>
                    </div>

                    <div id="card-animations" class="access-companion-card ${state.stopAnimations ? 'enabled' : ''}">
                        <div class="icon">🛑</div>
                        <div class="title">${t.stopAnimations}</div>
                        <div class="status">${state.stopAnimations ? t.statusActive : t.statusOff}</div>
                    </div>

                    <div id="card-imagehide" class="access-companion-card ${state.imageHide ? 'enabled' : ''}">
                        <div class="icon">🖼️</div>
                        <div class="title">${t.imageHide}</div>
                        <div class="status">${state.imageHide ? t.statusActive : t.statusOff}</div>
                    </div>
                </div>

                <!-- Text Reader & Speech Controls -->
                <div id="card-speech" class="access-companion-fullcard ${state.speechActive ? 'enabled' : ''}">
                    <div class="icon">🔊</div>
                    <div class="access-companion-fullcard-info">
                        <div class="title">${t.textReader}</div>
                        <div class="desc">${state.speechActive ? t.speechTapInfo : t.statusOff}</div>
                    </div>
                    <div class="status">${state.speechActive ? t.statusActive : t.statusOff}</div>
                </div>

                <!-- Voice Recognition Control -->
                <div id="card-voice" class="access-companion-fullcard ${state.voiceCommands ? 'enabled' : ''}">
                    <div class="icon">🎙️</div>
                    <div class="access-companion-fullcard-info">
                        <div class="title">${t.voiceCommands}</div>
                        <div class="desc">${state.voiceCommands ? t.voiceCommandsInfo : t.statusOff}</div>
                    </div>
                    <div class="status">${state.voiceCommands ? t.statusActive : t.statusOff}</div>
                </div>

                <div class="access-companion-footer">
                    <button id="access-reset-btn" class="access-companion-reset-btn">${t.resetAll}</button>
                </div>
            </div>
        `;

        // Wire UI events
        document.getElementById('access-close-btn').onclick = () => mainPanel.style.display = 'none';
        
        // Adjusters
        document.getElementById('adjust-font-up').onclick = () => updateStateField('fontSizeDelta', Math.min(6, state.fontSizeDelta + 1));
        document.getElementById('adjust-font-down').onclick = () => updateStateField('fontSizeDelta', Math.max(-3, state.fontSizeDelta - 1));
        document.getElementById('adjust-spacing-up').onclick = () => updateStateField('letterSpacingDelta', Math.min(6, state.letterSpacingDelta + 1));
        document.getElementById('adjust-spacing-down').onclick = () => updateStateField('letterSpacingDelta', Math.max(0, state.letterSpacingDelta - 1));
        document.getElementById('adjust-line-up').onclick = () => updateStateField('lineHeightDelta', Math.min(6, state.lineHeightDelta + 1));
        document.getElementById('adjust-line-down').onclick = () => updateStateField('lineHeightDelta', Math.max(0, state.lineHeightDelta - 1));

        // Toggles — Contrast uses custom accessible picker
        const contrastOptions = [
            { value: 'off',           label: t.contrastOff    || 'Normal / Off',          desc: 'Default website colours',       swatch: '⬜', bg: '#f8fafc', fg: '#0f172a' },
            { value: 'high-contrast', label: t.contrastYellow || 'Yellow on Black',        desc: 'Maximum visibility, WCAG AAA',  swatch: '🟡', bg: '#000000', fg: '#ffff00' },
            { value: 'inverted',      label: t.contrastInverted || 'Inverted Colors',      desc: 'Colours flipped for dark pages', swatch: '🔄', bg: '#ffffff', fg: '#000000' },
            { value: 'grayscale',     label: t.contrastGrayscale || 'Grayscale',           desc: 'Remove all colour distraction',  swatch: '🩶', bg: '#888888', fg: '#ffffff' },
            { value: 'dark-mono',     label: t.contrastDarkMono || 'Dark Monochromatic',   desc: 'Soft dark theme, easy on eyes',  swatch: '🌑', bg: '#121212', fg: '#b3b3b3' }
        ];

        function openContrastPicker() {
            closeContrastPicker();
            const wrapper = document.querySelector('.access-contrast-card-wrapper');
            if (!wrapper) return;

            const picker = document.createElement('div');
            picker.className = 'access-contrast-picker';
            picker.id = 'access-contrast-picker';
            picker.setAttribute('role', 'listbox');
            picker.setAttribute('aria-label', t.highContrast || 'High Contrast Mode');

            const header = document.createElement('div');
            header.className = 'access-contrast-picker-header';
            header.textContent = t.highContrast || 'Choose Contrast Mode';
            picker.appendChild(header);

            contrastOptions.forEach((opt, idx) => {
                const row = document.createElement('div');
                row.className = 'access-contrast-option' + (state.highContrast === opt.value ? ' selected' : '');
                row.setAttribute('role', 'option');
                row.setAttribute('aria-selected', state.highContrast === opt.value ? 'true' : 'false');
                row.setAttribute('tabindex', state.highContrast === opt.value ? '0' : '-1');
                row.dataset.value = opt.value;
                row.innerHTML = `
                    <div class="access-contrast-swatch" style="background:${opt.bg}; color:${opt.fg}; font-size:12px;">${opt.swatch}</div>
                    <div class="access-contrast-option-text">
                        <div class="access-contrast-option-label">${opt.label}</div>
                        <div class="access-contrast-option-desc">${opt.desc}</div>
                    </div>
                    <div class="access-contrast-check">✓</div>
                `;
                row.addEventListener('click', () => {
                    updateStateField('highContrast', opt.value);
                    closeContrastPicker();
                });
                row.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        updateStateField('highContrast', opt.value);
                        closeContrastPicker();
                    } else if (e.key === 'ArrowDown') {
                        e.preventDefault();
                        const opts = picker.querySelectorAll('.access-contrast-option');
                        const next = opts[idx + 1];
                        if (next) next.focus();
                    } else if (e.key === 'ArrowUp') {
                        e.preventDefault();
                        const opts = picker.querySelectorAll('.access-contrast-option');
                        const prev = opts[idx - 1];
                        if (prev) prev.focus();
                    } else if (e.key === 'Escape') {
                        closeContrastPicker();
                        document.getElementById('card-contrast')?.focus();
                    }
                });
                picker.appendChild(row);
            });

            wrapper.appendChild(picker);
            document.getElementById('card-contrast').setAttribute('aria-expanded', 'true');

            // Focus the currently selected option
            const selected = picker.querySelector('.access-contrast-option.selected');
            if (selected) selected.focus();
            else picker.querySelector('.access-contrast-option')?.focus();
        }

        function closeContrastPicker() {
            const existing = document.getElementById('access-contrast-picker');
            if (existing) existing.remove();
            document.getElementById('card-contrast')?.setAttribute('aria-expanded', 'false');
        }

        document.getElementById('card-contrast').onclick = (e) => {
            e.stopPropagation();
            const picker = document.getElementById('access-contrast-picker');
            if (picker) { closeContrastPicker(); }
            else { openContrastPicker(); }
        };
        document.getElementById('card-contrast').addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openContrastPicker(); }
        });

        document.getElementById('card-cursor').onclick = () => updateStateField('largeCursor', !state.largeCursor);
        document.getElementById('card-dyslexia').onclick = () => updateStateField('dyslexicFont', !state.dyslexicFont);
        document.getElementById('card-adhd').onclick = () => updateStateField('adhdMode', !state.adhdMode);
        document.getElementById('card-ruler').onclick = () => updateStateField('readingRuler', !state.readingRuler);
        document.getElementById('card-links').onclick = () => updateStateField('highlightLinks', !state.highlightLinks);
        document.getElementById('card-headings').onclick = () => updateStateField('highlightHeadings', !state.highlightHeadings);
        document.getElementById('card-keyboard').onclick = () => updateStateField('keyboardHelper', !state.keyboardHelper);
        document.getElementById('card-animations').onclick = () => updateStateField('stopAnimations', !state.stopAnimations);
        document.getElementById('card-imagehide').onclick = () => updateStateField('imageHide', !state.imageHide);
        document.getElementById('card-speech').onclick = () => updateStateField('speechActive', !state.speechActive);
        document.getElementById('card-voice').onclick = () => updateStateField('voiceCommands', !state.voiceCommands);
        document.getElementById('access-reset-btn').onclick = resetAllSettings;
    }

    // 4. Feature Implementation & CSS Class Manipulation
    function applyState(newState) {
        state = newState;

        // Apply visual classes to HTML root node
        document.documentElement.classList.toggle('dyslexia-override', state.dyslexicFont);
        document.documentElement.classList.toggle('large-cursor-override', state.largeCursor);
        document.documentElement.classList.toggle('highlight-links-override', state.highlightLinks);
        document.documentElement.classList.toggle('highlight-headings-override', state.highlightHeadings);
        document.documentElement.classList.toggle('keyboard-helper-override', state.keyboardHelper);
        document.documentElement.classList.toggle('stop-animations-override', state.stopAnimations);
        document.documentElement.classList.toggle('image-hide-override', state.imageHide);

        // Apply contrast classes
        document.documentElement.classList.remove('contrast-high', 'contrast-inverted', 'contrast-grayscale', 'contrast-darkmono');
        if (state.highContrast === 'high-contrast') {
            document.documentElement.classList.add('contrast-high');
        } else if (state.highContrast === 'inverted') {
            document.documentElement.classList.add('contrast-inverted');
        } else if (state.highContrast === 'grayscale') {
            document.documentElement.classList.add('contrast-grayscale');
        } else if (state.highContrast === 'dark-mono') {
            document.documentElement.classList.add('contrast-darkmono');
        }

        // Apply adjusters
        applyFontSizes(state.fontSizeDelta);
        applyLetterSpacings(state.letterSpacingDelta);
        applyLineHeights(state.lineHeightDelta);

        // ADHD Focus Mode setup
        if (state.adhdMode) {
            adhdMaskTop.style.display = 'block';
            adhdMaskBottom.style.display = 'block';
            document.addEventListener('mousemove', updateADHDSpotlight);
            document.addEventListener('touchmove', updateADHDSpotlightTouch, {passive: false});
        } else {
            adhdMaskTop.style.display = 'none';
            adhdMaskBottom.style.display = 'none';
            document.removeEventListener('mousemove', updateADHDSpotlight);
            document.removeEventListener('touchmove', updateADHDSpotlightTouch);
        }

        // Reading Ruler Mode setup
        if (state.readingRuler) {
            readingRulerEl.style.display = 'block';
            document.addEventListener('mousemove', updateReadingRuler);
        } else {
            readingRulerEl.style.display = 'none';
            document.removeEventListener('mousemove', updateReadingRuler);
        }

        // Text to Speech Screen Reader Mode
        if (state.speechActive) {
            document.addEventListener('click', parseTextForSpeech);
        } else {
            document.removeEventListener('click', parseTextForSpeech);
            if (synth) synth.cancel();
        }

        // Voice Command Listening
        initVoiceCommands(state.voiceCommands);
    }

    // Adjust font size scaling safely
    function applyFontSizes(delta) {
        const elements = document.querySelectorAll('p, span, a, li, h1, h2, h3, h4, h5, h6, label, button, input, select, textarea');
        elements.forEach(el => {
            if (el.closest('.access-companion-panel') || el.closest('.access-companion-btn') || el.closest('.access-voice-toast')) return;
            if (!fontOriginalSizes.has(el)) {
                let val = window.getComputedStyle(el).fontSize;
                fontOriginalSizes.set(el, parseFloat(val) || 16);
            }
            let orig = fontOriginalSizes.get(el);
            el.style.fontSize = `${orig + (delta * 2)}px`;
        });
    }

    // Adjust letter spacing scaling safely
    function applyLetterSpacings(delta) {
        const elements = document.querySelectorAll('p, span, a, li, h1, h2, h3, h4, h5, h6, label');
        elements.forEach(el => {
            if (el.closest('.access-companion-panel') || el.closest('.access-companion-btn') || el.closest('.access-voice-toast')) return;
            if (!letterOriginalSpacings.has(el)) {
                let val = window.getComputedStyle(el).letterSpacing;
                letterOriginalSpacings.set(el, val === 'normal' ? 0 : parseFloat(val) || 0);
            }
            let orig = letterOriginalSpacings.get(el);
            el.style.letterSpacing = `${orig + (delta * 0.5)}px`;
        });
    }

    // Adjust line height scaling safely
    function applyLineHeights(delta) {
        const elements = document.querySelectorAll('p, span, a, li, h1, h2, h3, h4, h5, h6, label');
        elements.forEach(el => {
            if (el.closest('.access-companion-panel') || el.closest('.access-companion-btn') || el.closest('.access-voice-toast')) return;
            if (!lineOriginalHeights.has(el)) {
                let val = window.getComputedStyle(el).lineHeight;
                let fontSize = parseFloat(window.getComputedStyle(el).fontSize);
                if (val === 'normal') {
                    lineOriginalHeights.set(el, 1.3 * fontSize);
                } else {
                    lineOriginalHeights.set(el, parseFloat(val) || (1.3 * fontSize));
                }
            }
            let orig = lineOriginalHeights.get(el);
            el.style.lineHeight = `${orig + (delta * 4)}px`;
        });
    }

    // Shutter rendering for ADHD Focus
    function recalculateSpotlightWindows(clientY) {
        if (!adhdMaskTop || !adhdMaskBottom) return;
        const topHeight = clientY - (slitHeight / 2);
        const bottomTopValue = clientY + (slitHeight / 2);
        adhdMaskTop.style.height = `${Math.max(0, topHeight)}px`;
        adhdMaskBottom.style.top = `${bottomTopValue}px`;
        adhdMaskBottom.style.height = `${window.innerHeight - bottomTopValue}px`;
    }

    // Reading Ruler tracker
    function updateReadingRuler(e) {
        if (readingRulerEl) {
            readingRulerEl.style.top = `${e.clientY}px`;
        }
    }

    function updateADHDSpotlight(e) { recalculateSpotlightWindows(e.clientY); }
    function updateADHDSpotlightTouch(e) {
        if (e.touches.length > 0) {
            e.preventDefault();
            recalculateSpotlightWindows(e.touches[0].clientY);
        }
    }

    // Screen text reading logic
    function parseTextForSpeech(e) {
        if (!mainPanel || mainPanel.contains(e.target) || e.target === widgetButton || e.target.closest('.access-voice-toast')) return;
        
        let targetText = e.target.innerText || e.target.textContent;
        if (targetText && targetText.trim().length > 1) {
            e.preventDefault();
            if (synth) synth.cancel();
            
            utterance = new SpeechSynthesisUtterance(targetText.trim());
            
            // Set speech language based on page lang
            let currentLang = detectPageLanguage();
            if (currentLang === 'hi') utterance.lang = 'hi-IN';
            else if (currentLang === 'ta') utterance.lang = 'ta-IN';
            else if (currentLang === 'te') utterance.lang = 'te-IN';
            else if (currentLang === 'bn') utterance.lang = 'bn-IN';
            else if (currentLang === 'mr') utterance.lang = 'mr-IN';
            else if (currentLang === 'kn') utterance.lang = 'kn-IN';
            else if (currentLang === 'ml') utterance.lang = 'ml-IN';
            else if (currentLang === 'gu') utterance.lang = 'gu-IN';
            else if (currentLang === 'ur') utterance.lang = 'ur-IN';
            else utterance.lang = 'en-IN'; // Indian accent English

            // Try to find a matching system voice
            if (synth) {
                let voices = synth.getVoices();
                let matchingVoice = voices.find(v => v.lang.startsWith(currentLang));
                if (matchingVoice) utterance.voice = matchingVoice;
            }

            synth.speak(utterance);
        }
    }

    // 5. Voice Navigation (Speech Recognition) Engine
    function initVoiceCommands(enable) {
        if (!enable) {
            if (recognition) {
                try {
                    recognition.stop();
                } catch(e) {}
                recognition = null;
            }
            removeVoiceToast();
            return;
        }

        if (recognition) return;

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            console.warn("Speech Recognition not supported in this browser.");
            return;
        }

        recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = false;
        
        // Choose locale dialect matching the active page
        const currentLang = detectPageLanguage();
        if (currentLang === 'hi') recognition.lang = 'hi-IN';
        else if (currentLang === 'ta') recognition.lang = 'ta-IN';
        else if (currentLang === 'te') recognition.lang = 'te-IN';
        else if (currentLang === 'bn') recognition.lang = 'bn-IN';
        else if (currentLang === 'mr') recognition.lang = 'mr-IN';
        else if (currentLang === 'kn') recognition.lang = 'kn-IN';
        else if (currentLang === 'ml') recognition.lang = 'ml-IN';
        else if (currentLang === 'gu') recognition.lang = 'gu-IN';
        else if (currentLang === 'ur') recognition.lang = 'ur-IN';
        else recognition.lang = 'en-IN';

        showVoiceToast(t.voiceListening);

        recognition.onresult = (event) => {
            const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase().trim();
            handleVoiceCommand(transcript);
        };

        recognition.onerror = (event) => {
            console.error("Speech Recognition System Error:", event.error);
            if (event.error === 'not-allowed') {
                showVoiceToast(t.voiceCommandError + "Mic Blocked", true);
                updateStateField('voiceCommands', false);
            }
        };

        recognition.onend = () => {
            // Auto-restart listener loop if setting is still active
            chrome.storage.local.get(['accessibilityState'], (result) => {
                const current = result.accessibilityState || {};
                if (current.voiceCommands && recognition) {
                    try {
                        recognition.start();
                    } catch(e) {}
                } else {
                    removeVoiceToast();
                }
            });
        };

        try {
            recognition.start();
        } catch(e) {
            console.error("Speech Start Failed: ", e);
        }
    }

    // Voice command router matching regional words
    function handleVoiceCommand(cmd) {
        showVoiceToast(t.voiceCommandMatched + `"${cmd}"`);

        // Common scrolling translations
        const scrollDownWords = ['scroll down', 'नीचे', 'नीचे स्क्रॉल', 'கீழே', 'కిందికి', 'নিচে', 'खाली', 'கீழே போ'];
        const scrollUpWords = ['scroll up', 'ऊपर', 'ऊपर स्क्रॉल', 'மேலே', 'పైకి', 'উপরে', 'वर', 'மேலே போ'];
        const scrollTopWords = ['scroll to top', 'scroll top', 'सबसे ऊपर', 'மேலே செல்', 'పైకి వెళ్ళు', 'সবার উপরে', 'शीर्षक', 'वर जा'];
        const scrollBottomWords = ['scroll to bottom', 'scroll bottom', 'सबसे नीचे', 'கீழே செல்', 'కిందికి వెళ్ళు', 'সবার নিচে', 'तळ', 'खाली जा'];

        if (scrollDownWords.some(w => cmd.includes(w))) {
            window.scrollBy({ top: window.innerHeight * 0.6, behavior: 'smooth' });
            return;
        }
        if (scrollUpWords.some(w => cmd.includes(w))) {
            window.scrollBy({ top: -window.innerHeight * 0.6, behavior: 'smooth' });
            return;
        }
        if (scrollTopWords.some(w => cmd.includes(w))) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        if (scrollBottomWords.some(w => cmd.includes(w))) {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            return;
        }

        // Action routing: Highlight Links
        if (cmd.includes('highlight links') || cmd.includes('लिंक हाइलाइट') || cmd.includes('இணைப்பு') || cmd.includes('లింకులు')) {
            updateStateField('highlightLinks', !state.highlightLinks);
            return;
        }

        // Action routing: Reset settings
        if (cmd.includes('reset') || cmd.includes('रीसेट') || cmd.includes('மீட்டமை')) {
            resetAllSettings();
            return;
        }

        // Click command parser (English/Hindi/Tamil etc.)
        let clickTarget = '';
        if (cmd.startsWith('click ')) {
            clickTarget = cmd.replace('click ', '').trim();
        } else if (cmd.includes('क्लिक') || cmd.includes('क्लिक करें')) {
            clickTarget = cmd.replace(/क्लिक करें|क्लिक/g, '').trim();
        } else if (cmd.includes('கிளிக்')) {
            clickTarget = cmd.replace('கிளிக்', '').trim();
        } else if (cmd.includes('క్లిక్')) {
            clickTarget = cmd.replace('క్లిక్', '').trim();
        } else if (cmd.includes('ক্লিক')) {
            clickTarget = cmd.replace('ক্লিক', '').trim();
        }

        if (clickTarget) {
            const clickables = Array.from(document.querySelectorAll('a, button, [role="button"], input[type="button"], input[type="submit"]'));
            let found = null;
            
            // Exact text matching
            found = clickables.find(el => (el.innerText || el.value || "").toLowerCase().trim() === clickTarget);
            
            // Fuzzy/Partial text matching
            if (!found) {
                found = clickables.find(el => (el.innerText || el.value || "").toLowerCase().includes(clickTarget));
            }

            if (found) {
                found.focus();
                // Visual flashing outline helper
                found.style.outline = "6px solid #e11d48";
                found.style.outlineOffset = "4px";
                setTimeout(() => {
                    found.style.outline = "";
                    found.click();
                }, 800);
            }
        }
    }

    // Voice Feedback Toast
    function showVoiceToast(message, isError = false) {
        removeVoiceToast();

        voiceToast = document.createElement('div');
        voiceToast.className = 'access-voice-toast';
        if (isError) {
            voiceToast.style.borderColor = '#ef4444';
            voiceToast.style.color = '#f87171';
        }
        voiceToast.innerText = message;
        document.body.appendChild(voiceToast);

        // Auto fadeout unless it's the continuous listening status
        if (message !== t.voiceListening) {
            voiceToastTimeout = setTimeout(() => {
                removeVoiceToast();
                // Return to listening text indicator
                if (state.voiceCommands) {
                    showVoiceToast(t.voiceListening);
                }
            }, 3000);
        }
    }

    function removeVoiceToast() {
        if (voiceToast) {
            if (voiceToast.parentNode) {
                voiceToast.parentNode.removeChild(voiceToast);
            }
            voiceToast = null;
        }
        if (voiceToastTimeout) {
            clearTimeout(voiceToastTimeout);
            voiceToastTimeout = null;
        }
    }

    // 6. Keyboard Shortcut Listeners (Compliance standard shortcuts)
    document.addEventListener('keydown', function(e) {
        // Bypass shortcuts if focus is in a form field
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) return;

        const key = e.key.toLowerCase();

        if (key === '+') {
            e.preventDefault();
            updateStateField('fontSizeDelta', Math.min(6, state.fontSizeDelta + 1));
        } else if (key === '-') {
            e.preventDefault();
            updateStateField('fontSizeDelta', Math.max(-3, state.fontSizeDelta - 1));
        } else if (key === 'c') {
            const contrastList = ['off', 'high-contrast', 'inverted', 'grayscale', 'dark-mono'];
            let currentIdx = contrastList.indexOf(state.highContrast);
            let nextMode = contrastList[(currentIdx + 1) % contrastList.length];
            updateStateField('highContrast', nextMode);
        } else if (key === 'm') {
            updateStateField('largeCursor', !state.largeCursor);
        } else if (key === 'd') {
            updateStateField('dyslexicFont', !state.dyslexicFont);
        } else if (key === 'a') {
            updateStateField('adhdMode', !state.adhdMode);
        } else if (key === 'r') {
            updateStateField('readingRuler', !state.readingRuler);
        } else if (key === 's') {
            updateStateField('speechActive', !state.speechActive);
        } else if (key === 'l') {
            updateStateField('highlightLinks', !state.highlightLinks);
        } else if (key === 'h') {
            updateStateField('highlightHeadings', !state.highlightHeadings);
        } else if (key === 'k') {
            updateStateField('keyboardHelper', !state.keyboardHelper);
        } else if (key === 'p') {
            updateStateField('stopAnimations', !state.stopAnimations);
        } else if (key === 'i') {
            updateStateField('imageHide', !state.imageHide);
        } else if (key === 'v') {
            updateStateField('voiceCommands', !state.voiceCommands);
        }
    });

    // 7. State Update & Reset helpers
    function updateStateField(field, value) {
        state[field] = value;
        chrome.storage.local.set({ accessibilityState: state }, () => {
            applyState(state);
            renderDashboard();
        });
    }

    function resetAllSettings() {
        // Reset all styles
        fontOriginalSizes.forEach((origSize, el) => { el.style.fontSize = ''; });
        letterOriginalSpacings.forEach((origSpacing, el) => { el.style.letterSpacing = ''; });
        lineOriginalHeights.forEach((origHeight, el) => { el.style.lineHeight = ''; });

        fontOriginalSizes.clear();
        letterOriginalSpacings.clear();
        lineOriginalHeights.clear();

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
            applyState(defaultState);
            renderDashboard();
        });
    }

    // 8. Storage synchronization listener
    chrome.storage.onChanged.addListener((changes, namespace) => {
        if (namespace === 'local' && changes.accessibilityState) {
            applyState(changes.accessibilityState.newValue);
            renderDashboard();
        }
    });

    // Initial check for native overlays on the page
    const nativeOverlaySelectors = [
        '#userway', '.userway', '[src*="userway"]',
        '#accessibe', '.accessibe', '[src*="accessibe"]',
        '#asb-menu', '#asb-btn',
        '#equalweb', '[src*="equalweb"]',
        '#audioeye', '[src*="audioeye"]'
    ];

    function hasNativeAccessibility() {
        for (let selector of nativeOverlaySelectors) {
            try {
                if (document.querySelector(selector)) return true;
            } catch(e) {}
        }
        return false;
    }

    // Run overlay initialization
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        if (!hasNativeAccessibility()) initInjectedUI();
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            if (!hasNativeAccessibility()) initInjectedUI();
        });
    }

    // Message receiver for language query
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.action === "getLanguage") {
            sendResponse({ lang: pageLanguage });
        }
        return true;
    });
})();
