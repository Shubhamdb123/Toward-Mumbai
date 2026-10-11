 document.addEventListener('DOMContentLoaded', () => {
      // 1. Day / Night Theme Switching
      const themeBtn = document.getElementById('themeBtn');
      const body = document.body;

      themeBtn.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        if (currentTheme === 'dark') {
          body.setAttribute('data-theme', 'light');
          themeBtn.textContent = '☼';
        } else {
          body.setAttribute('data-theme', 'dark');
          themeBtn.textContent = '☾';
        }
      });

      // 2. Mobile Responsive Nav Menu Drawer
      const menuToggle = document.getElementById('menuToggle');
      const navLinks = document.getElementById('navLinks');

      menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
      });

      // 3. Accordion Expand/Collapse Logic
      document.querySelectorAll('.accordion-trigger').forEach(trigger => {
        trigger.addEventListener('click', () => {
          const card = trigger.closest('.accordion-card');
          const panel = trigger.nextElementSibling;
          const chevron = trigger.querySelector('.chevron-icon');
          const isCollapsed = card.classList.contains('collapsed');

          if (isCollapsed) {
            card.classList.remove('collapsed');
            trigger.setAttribute('aria-expanded', 'true');
            panel.style.display = 'block';
            if (chevron) chevron.textContent = '▲';
          } else {
            card.classList.add('collapsed');
            trigger.setAttribute('aria-expanded', 'false');
            panel.style.display = 'none';
            if (chevron) chevron.textContent = '▼';
          }
        });
      });

      // 4. Language Selector Toggle
      const langToggle = document.getElementById('langToggle');
      const langDropdown = document.getElementById('langDropdown');

      langToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('open');
      });

      window.addEventListener('click', () => {
        langDropdown.classList.remove('open');
      });

      // 5. Trilingual Translation Dictionary
      const translations = {
        en: {
          ribbonText: "NHAI Project Information Sign Board with QR Code",
          brandTitle: "HIGHWAY INFORMATION",
          brandSubtitle: "Digital Road Services",
          whatsNew: "What's New",
          notices: "Notices",
          helpCenter: "Help Center ▾",
          projectTitle: "New 4-lane Bridge across Varsova Creek and its approaches with Interchange from Km 496.100 to Km 498.350",
          basicInfo: "Basic Project Information",
          highway: "Name of National Highway",
          highwayVal: "NH-48",
          Contractor: "Name of Contractor (Construction)",
          contractorVal: "M/s Vijay M. Mistry Construction Private Limited & N.G. Projects Limited JV",
          omContractor: "Name of Operation & Maintenance Contractor",
          omContractorVal: "M/s Vijay M. Mistry Construction Private Limited & N.G. Projects Limited JV",
          cost: "Civil Construction cost",
          costVal: "Rs. 157.49 Cr.",
          location: "Yours Location, Highway Chainage at",
          locationVal: "Km 498+600",
          highwayNo: "No. of National Highway",
          length: "Project Length",
          lengthVal: "2.25 Km",
          constructionPeriod: "Construction period",
          constructionVal: "From 08.02.2018 to 31.05.2024",
          maintenancePeriod: "Maintenance period",
          maintenanceVal: "From 01.06.2024 to 31.05.2028",
          tollName: "Nearby Toll Plaza name",
          tollNameVal: "Kaniwadi",
          tollAt: "Toll Plaza at",
          tollAtVal: "31 Km ahead",
          tollManagerMobile: "Toll Manager Mobile No.",
          emergency: "Emergency Contacts",
          patrolMobile: "Highway Patrol Mobile No.",
          projManagerMobile: "Project Manager Mobile No.",
          resEngineerMobile: "Resident Engineer Mobile No.",
          nhaiPiuMobile: "NHAI PIU Mobile No.",
          policeTel: "Police Station Telephone No.",
          policeName: "Police Station Name",
          policeNameVal: "Varsova Police Station - Branch of Kashimira & Naigoan",
          policeAt: "Police Station at",
          policeAtVal: "1Km ahead and 14 Km ahead",
          tollFree: "Toll free Number",
          hospitalNames: "Nearby Hospital Names",
          hospitalNamesVal: "Orbit Super Speciality Hospital & Accident Center at Mira Road East",
          hospitalDistance: "Hospital distance",
          hospitalDistanceVal: "3Km behind",
          hospitalContact: "Hospital Contact No.",
          waysideTitle: "Wayside Amenities",
          waysideArea: "Wayside Amenities/Rest Area at",
          waysideAreaVal: "Kaniwadi",
          miniNest: "Highway Mini Nest Area",
          serviceStation: "Nearby Vehicle Service Station/e-charging Station",
          serviceStationVal: "KN Service Center (LMV) 0.5km , NEXA Service Center 0.80km (LMV) & TATA Shaw Motors 0.80km (HMV).",
          truckLayBye: "Truck Lay bye",
          truckLayByeVal: "30Km",
          petrolPump: "Petrol Pump at",
          petrolPumpVal: "IOCL at 0.50Km ahead & at 2.50 Km ahead",
          toilets: "Toilet Facilities",
          toiletsVal: "Walton Katiayawadi at 2.15Km",
          puncherShop: "Puncher Repair Shop",
          puncherShopVal: "0.50 Km ahead",
          restaurants: "Nearby Restaurants",
          restaurantsVal: "Walton Katiayawadi at 2.15Km & Kutch Darbar 2.38Km",
          tollDist: "Toll Plaza Distance",
          tollDistVal: "31 KM",
          town: "Nearby Town/City",
          townVal: "Vasai - Virar"
        },
        hi: {
          ribbonText: "एनएचएआई प्रोजेक्ट सूचना साइन बोर्ड क्यूआर कोड के साथ",
          brandTitle: "राजमार्ग सूचना",
          brandSubtitle: "डिजिटल सड़क सेवाएं",
          whatsNew: "नवीनतम समाचार",
          notices: "सूचनाएं",
          helpCenter: "सहायता केंद्र ▾",
          projectTitle: "वर्सोवा क्रीक पर नया 4-लेन पुल और उसके अप्रोच रोड, साथ ही Km 496.100 से Km 498.350 तक इंटरचेंज।",
          basicInfo: "प्रोजेक्ट की बुनियादी जानकारी",
          highway: "राष्ट्रीय राजमार्ग का नाम",
          highwayVal: "एनएच-48",
          Contractor: "ठेकेदार का नाम (निर्माण)",
          contractorVal: "मेसर्स विजय एम. मिस्त्री कंस्ट्रक्शन प्राइवेट लिमिटेड और एन.जी. प्रोजेक्ट्स लिमिटेड JV",
          omContractor: "ऑपरेशन और मेंटेनेंस कॉन्ट्रैक्टर का नाम",
          omContractorVal: "मेसर्स विजय एम. मिस्त्री कंस्ट्रक्शन प्राइवेट लिमिटेड और एन.जी. प्रोजेक्ट्स लिमिटेड JV",
          cost: "सिविल निर्माण लागत",
          costVal: "₹157.49 करोड़",
          location: "आपका स्थान, राजमार्ग चेनगेज",
          locationVal: "किमी 498+600",
          highwayNo: "राष्ट्रीय राजमार्ग संख्या",
          length: "प्रोजेक्ट की लंबाई",
          lengthVal: "2.25 किमी",
          constructionPeriod: "निर्माण अवधि",
          constructionVal: "08.02.2018 से 31.05.2024",
          maintenancePeriod: "रखरखाव अवधि",
          maintenanceVal: "01.06.2024 से 31.05.2028",
          tollName: "पास के टोल प्लाजा का नाम",
          tollNameVal: "कनीवाड़ी",
          tollAt: "टोल प्लाजा स्थिति",
          tollAtVal: "31 किमी आगे",
          tollManagerMobile: "टोल मैनेजर मोबाइल नंबर",
          emergency: "आपातकालीन संपर्क",
          patrolMobile: "हाइवे पेट्रोल मोबाइल नंबर",
          projManagerMobile: "प्रोजेक्ट मैनेजर मोबाइल नंबर",
          resEngineerMobile: "रेसिडेंट इंजीनियर मोबाइल नंबर",
          nhaiPiuMobile: "एनएचएआई पीआईयू मोबाइल नंबर",
          policeTel: "पुलिस स्टेशन फोन नंबर",
          policeName: "पुलिस स्टेशन का नाम",
          policeNameVal: "वर्सोवा पुलिस स्टेशन - काशीमीरा और नायगांव शाखा",
          policeAt: "पुलिस स्टेशन स्थिति",
          policeAtVal: "1 किमी आगे और 14 किमी आगे",
          tollFree: "टोल-फ्री नंबर",
          hospitalNames: "पास के अस्पताल का नाम",
          hospitalNamesVal: "ऑर्बिट सुपर स्पेशलिटी अस्पताल और एक्सीडेंट सेंटर, मीरा रोड ईस्ट",
          hospitalDistance: "अस्पताल की दूरी",
          hospitalDistanceVal: "3 किमी पीछे",
          hospitalContact: "अस्पताल संपर्क नंबर",
          waysideTitle: "वेसाइड सुविधाएं",
          waysideArea: "वेसाइड सुविधाएं / विश्राम स्थल",
          waysideAreaVal: "कनीवाड़ी",
          miniNest: "राजमार्ग मिनी नेस्ट क्षेत्र",
          serviceStation: "पास का वाहन सर्विस स्टेशन / ई-चार्जिंग स्टेशन",
          serviceStationVal: "KN सर्विस सेंटर (0.5 किमी), NEXA सर्विस सेंटर (0.80 किमी) और टाटा शॉ मोटर्स (0.80 किमी)",
          truckLayBye: "ट्रक ले-बाय",
          truckLayByeVal: "30 किमी",
          petrolPump: "पेट्रोल पंप स्थिति",
          petrolPumpVal: "आईओसीएल 0.50 किमी आगे और 2.50 किमी आगे",
          toilets: "शौचालय सुविधाएं",
          toiletsVal: "वॉल्टन काठियावाड़ी 2.15 किमी पर",
          puncherShop: "पंचर मरम्मत की दुकान",
          puncherShopVal: "0.50 किमी आगे",
          restaurants: "पास के रेस्टोरेंट",
          restaurantsVal: "वॉल्टन काठियावाड़ी (2.15 किमी) और कच्छ दरबार (2.38 किमी)",
          tollDist: "टोल प्लाजा दूरी",
          tollDistVal: "31 किमी",
          town: "पास का शहर",
          townVal: "वसई - विरार"
        },
        mr: {
          ribbonText: "NHAI प्रकल्प माहिती साइन बोर्ड आणि QR कोड",
          brandTitle: "महामार्ग माहिती",
          brandSubtitle: "डिजिटल रस्ते सेवा",
          whatsNew: "नवीन काय आहे",
          notices: "सूचना",
          helpCenter: "मदत केंद्र ▾",
          projectTitle: "वर्सोवा खाडीवरील नवीन ४-पदरी पूल आणि त्याचे जोडमार्ग, तसेच ४९६.१०० किमी ते ४९८.३५० किमी दरम्यान इंटरचेंज.",
          basicInfo: "प्रकल्पाची मूलभूत माहिती",
          highway: "राष्ट्रीय महामार्गाचे नाव",
          highwayVal: "एनएच-४८",
          Contractor: "कंत्राटदाराचे नाव (बांधकाम)",
          contractorVal: "मेसर्स विजय एम. मिस्त्री कन्स्ट्रक्शन प्रायव्हेट लिमिटेड आणि एन.जी. प्रोजेक्ट्स लिमिटेड JV",
          omContractor: "संचालन व देखभाल कंत्राटदाराचे नाव",
          omContractorVal: "मेसर्स विजय एम. मिस्त्री कन्स्ट्रक्शन प्रायव्हेट लिमिटेड आणि एन.जी. प्रोजेक्ट्स लिमिटेड JV",
          cost: "नागरी बांधकाम खर्च",
          costVal: "१५७.४९ कोटी रुपये",
          location: "तुमचे स्थान, महामार्ग चेनगेज",
          locationVal: "किमी ४९८+६००",
          highwayNo: "राष्ट्रीय महामार्ग क्रमांक",
          length: "प्रकल्पाची लांबी",
          lengthVal: "२.२५ किमी",
          constructionPeriod: "बांधकाम कालावधी",
          constructionVal: "०८.०२.२०१८ ते ३१.०५.२०२४",
          maintenancePeriod: "देखभाल कालावधी",
          maintenanceVal: "०१.०६.२०२४ ते ३१.०५.२०२८",
          tollName: "जवळील टोल प्लाझाचे नाव",
          tollNameVal: "कणीवाडी",
          tollAt: "टोल प्लाझा स्थान",
          tollAtVal: "३१ किमी पुढे",
          tollManagerMobile: "टोल व्यवस्थापक मोबाईल क्र.",
          emergency: "आपत्कालीन संपर्क",
          patrolMobile: "हायवे पेट्रोल मोबाईल क्र.",
          projManagerMobile: "प्रकल्प व्यवस्थापक मोबाईल क्र.",
          resEngineerMobile: "रेसिडेंट इंजिनिअर मोबाईल क्र.",
          nhaiPiuMobile: "NHAI PIU मोबाईल क्र.",
          policeTel: "पोलीस ठाणे दूरध्वनी क्र.",
          policeName: "पोलीस ठाण्याचे नाव",
          policeNameVal: "वर्सोवा पोलीस ठाणे - काशीमीरा आणि नायगाव शाखा",
          policeAt: "पोलीस ठाणे स्थान",
          policeAtVal: "१ किमी पुढे आणि १४ किमी पुढे",
          tollFree: "टोल-फ्री क्रमांक",
          hospitalNames: "जवळील रुग्णालयाचे नाव",
          hospitalNamesVal: "ऑर्बिट सुपर स्पेशालिटी हॉस्पिटल आणि ॲक्सिडेंट सेंटर, मीरा रोड ईस्ट",
          hospitalDistance: "रुग्णालयाचे अंतर",
          hospitalDistanceVal: "३ किमी मागे",
          hospitalContact: "रुग्णालय संपर्क क्र.",
          waysideTitle: "वेसाइड सुविधा",
          waysideArea: "वेसाइड सुविधा / विश्रामस्थान",
          waysideAreaVal: "कणीवाडी",
          miniNest: "महामार्ग मिनी नेस्ट क्षेत्र",
          serviceStation: "जवळील वाहन सर्व्हिस स्टेशन / ई-चार्जिंग स्टेशन",
          serviceStationVal: "KN सर्व्हिस सेंटर (०.५ किमी), NEXA सर्व्हिस सेंटर (०.८० किमी) आणि टाटा शॉ मोटर्स (०.८० किमी)",
          truckLayBye: "ट्रक ले-बाय",
          truckLayByeVal: "३० किमी",
          petrolPump: "पेट्रोल पंप स्थान",
          petrolPumpVal: "आयओसीएल ०.५० किमी पुढे आणि २.५० किमी पुढे",
          toilets: "शौचालय सुविधा",
          toiletsVal: "वॉल्टन काठियावाडी २.१५ किमी अंतरावर",
          puncherShop: "पंचर दुरुस्तीचे दुकान",
          puncherShopVal: "०.५० किमी पुढे",
          restaurants: "जवळील रेस्टॉरंट्स",
          restaurantsVal: "वॉल्टन काठियावाडी (२.१५ किमी) आणि कच्छ दरबार (२.३८ किमी)",
          tollDist: "टोल प्लाझा अंतर",
          tollDistVal: "३१ किमी",
          town: "जवळील शहर",
          townVal: "वसई - विरार"
        }
      };

      // Language switch event binding
      document.querySelectorAll('.lang-menu button').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const lang = e.target.getAttribute('data-lang');
          const dict = translations[lang] || translations.en;

          document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) el.textContent = dict[key];
          });

          langDropdown.classList.remove('open');
        });
      });
    });