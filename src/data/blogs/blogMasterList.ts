export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    description: string;
    categoryId: string; // 'ac-repair', 'ro-service', 'washing-machine', etc.
    targetKeywords: string[];
    status: 'draft' | 'published';
}

export const blogMasterList: BlogPost[] = [
    // --- AC REPAIR (15 Posts) ---
    {
        id: "ac-1",
        slug: "ac-not-cooling-bikaner-solutions",
        title: "AC Cooling Nahi Kar Raha? Bikaner Ki Garmi Me 3 Sabse Bade Kaaran Aur Ilaj",
        description: "Bikaner ki tez garmi me AC cooling kyu chhod deta hai? Janiye gas leakage aur mitti se block filters ka sach aur ise kaise theek karein.",
        categoryId: "ac-repair-service",
        targetKeywords: ["ac not cooling", "ac gas leak repair bikaner", "ac repair near me"],
        status: "draft"
    },
    {
        id: "ac-2",
        slug: "ac-repair-service-cost-bikaner",
        title: "Bikaner Me AC Repair Aur Service Ka Sahi Cost Kitna Hai? (2026 Rate List)",
        description: "AC service ya repair me overcharging se bachein. Fix Bikaner ki official transparent rate list dekhein (Starting ₹199).",
        categoryId: "ac-repair-service",
        targetKeywords: ["ac service cost in bikaner", "ac repair charges list", "ac installation price"],
        status: "draft"
    },
    {
        id: "ac-3",
        slug: "why-jet-pump-ac-service-important-bikaner",
        title: "Bikaner Me Har Garmi Se Pehle AC Ki 'Jet Pump Service' Kyu Zaruri Hai?",
        description: "Normal paani ki service aur Jet Pump Foam service me kya farq hai? Janiye kaise Jet service aapka electricity bill bacha sakti hai.",
        categoryId: "ac-repair-service",
        targetKeywords: ["ac deep foam service bikaner", "ac deep clean", "ac jet pump service"],
        status: "draft"
    },
    {
        id: "ac-4",
        slug: "ac-water-leakage-indoor-unit",
        title: "AC Ke Andar Se Paani Kyu Tapakta Hai? 5 Minute Me Fix Karein",
        description: "Indoor unit se paani girne ka sabse bada kaaran kya hai aur ise bina kisi pipe ko tode kaise theek kiya jata hai.",
        categoryId: "ac-repair-service",
        targetKeywords: ["ac water dropping inside", "ac leaking water", "ac repair bikaner"],
        status: "draft"
    },
    {
        id: "ac-5",
        slug: "best-temperature-for-ac-in-bikaner",
        title: "Bikaner Me AC Ko Kis Temperature Par Chalana Sabse Sahi Hai?",
        description: "45 degree temp me AC ko 16 par chalane se kya compressor jal sakta hai? Bijli bachane ka best AC temperature janiye.",
        categoryId: "ac-repair-service",
        targetKeywords: ["best ac temperature", "save electricity ac", "compressor heating up"],
        status: "draft"
    },
    {
        id: "ac-6",
        slug: "split-vs-window-ac-for-bikaner",
        title: "Bikaner Ke Liye Konsa AC Better Hai? Split vs Window AC",
        description: "Dhool bhari aandhi aur extreme garmi me konsa AC zyada din chalta hai? Detailed comparison padhein.",
        categoryId: "ac-repair-service",
        targetKeywords: ["split vs window ac", "best ac for heavy summer", "ac installation bikaner"],
        status: "draft"
    },
    {
        id: "ac-7",
        slug: "ac-compressor-not-working-reasons",
        title: "AC Ka Compressor Start Kyu Nahi Hota? Sirf Fan Chalne Ke 4 Kaaran",
        description: "Agar AC se sirf normal hawa aa rahi hai aur outer unit start nahi ho raha, toh ye capacitor ka fault ho sakta hai.",
        categoryId: "ac-repair-service",
        targetKeywords: ["ac compressor not starting", "ac capacitor change", "outer unit not working"],
        status: "draft"
    },
    {
        id: "ac-8",
        slug: "how-often-ac-gas-refill-needed",
        title: "AC Me Gas (Refrigerant) Kitne Saal Me Dalwani Chahiye?",
        description: "Kya har saal AC gas dalwani padhti hai? Janiye AC mechanic ke is sabse aam jhooth ka sach.",
        categoryId: "ac-repair-service",
        targetKeywords: ["ac gas filling", "ac gas top up bikaner", "ac refrigerant leak"],
        status: "draft"
    },
    {
        id: "ac-9",
        slug: "ac-making-loud-noise-solutions",
        title: "Aapka AC Bohot Zyada Aawaz Kyu Kar Raha Hai? Ise Kaise Rokein",
        description: "Vibration, rat-cuttings ya fan motor damage? Janiye AC ki zor daar aawaz ko kaise pehchane aur theek karein.",
        categoryId: "ac-repair-service",
        targetKeywords: ["ac making noise", "indoor unit vibration", "blower fan repair"],
        status: "draft"
    },
    {
        id: "ac-10",
        slug: "copper-vs-aluminium-coil-ac",
        title: "Copper Ya Aluminium Coil: Bikaner Ke Liye Konsa AC Sahi Hai?",
        description: "Khare paani aur dust me aluminium coil kyu jaldi leak hota hai. Samajhiye 100% copper coil ki importance.",
        categoryId: "ac-repair-service",
        targetKeywords: ["copper vs aluminium coil", "ac coil replacement", "ac gas trace"],
        status: "draft"
    },
    {
        id: "ac-11",
        slug: "protect-ac-from-bikaner-dust-storms",
        title: "Bikaner Ki Aandhi Se Apne AC Ke Outer Unit Ko Kaise Bachayein?",
        description: "Tez aandhi me AC ka istemal karna chahiye ya nahi? Outdoor unit ko choke hone se bachane ke simple tips.",
        categoryId: "ac-repair-service",
        targetKeywords: ["protect ac from dust", "ac outdoor unit cover", "ac repair jnv colony"],
        status: "draft"
    },
    {
        id: "ac-12",
        slug: "ac-remote-not-working",
        title: "AC Ka Remote Kaam Nahi Kar Raha? Ye 3 Cheezein Ghar Par Check Karein",
        description: "Sensor fault hai ya sirf battery ka issue? Mechanic bulane se pehle khud ye basic checks zarur karein.",
        categoryId: "ac-repair-service",
        targetKeywords: ["ac remote app", "ac not responding to remote", "pcb repair bikaner"],
        status: "draft"
    },
    {
        id: "ac-13",
        slug: "inverter-vs-non-inverter-ac-service",
        title: "Inverter vs Non-Inverter AC: Kiski Servicing aur Repairing Mehngi Hai?",
        description: "Kya Inverter AC ke PCB board jaldi kharab hote hain? Janiye service cost aur total ownership charge ka sach.",
        categoryId: "ac-repair-service",
        targetKeywords: ["inverter ac repair bikaner", "pcb repair cost", "fixed visiting charge"],
        status: "draft"
    },
    {
        id: "ac-14",
        slug: "bad-smell-from-ac-bikaner",
        title: "AC Chalane Par Gन्दी Badbu (Smell) Kyu Aati Hai? Iska Permanent Ilaj",
        description: "Mold, fungus ya mara hua chuha? AC ki vents se aane wali badbu ko deep foam cleaning se kaise hatayein.",
        categoryId: "ac-repair-service",
        targetKeywords: ["ac smelling bad", "ac deep cleaning bikaner", "ac fungus removal"],
        status: "draft"
    },
    {
        id: "ac-15",
        slug: "moving-shifting-ac-bikaner",
        title: "Bikaner Me Ghar Shift Kar Rahe Hain? AC Safe Uninstallation Ke Tips",
        description: "Bina gas udaye AC ko nikalna kyu zaroori hai? Professional AC shifting aur re-installation services ki jankari.",
        categoryId: "ac-repair-service",
        targetKeywords: ["ac shifting bikaner", "ac installation charges", "ac uninstallation safely"],
        status: "draft"
    },


    // --- RO SERVICE (10 Posts) ---
    {
        id: "ro-1",
        slug: "best-ro-for-high-tds-bikaner",
        title: "Bikaner Ke Khare Paani (High TDS) Ke Liye Sabse Best RO Konsa Hai?",
        description: "Bikaner ke outer areas me groundwater me TDS 1500+ hota hai. Janiye aisi jagah kis filter technology ka use karna chahiye.",
        categoryId: "ro-service-repair",
        targetKeywords: ["best ro for high tds", "ro service bikaner", "water purifier for hard water"],
        status: "draft"
    },
    {
        id: "ro-2",
        slug: "ro-membrane-replacement-cost",
        title: "RO Ki Membrane Kab Badli Jati Hai Aur Iska Asli Cost Kya Hai?",
        description: "Kya aapka paani kadwa lagne laga hai? RO membrane filter ke life-cycle aur Bikaner me iski genuine price janiye.",
        categoryId: "ro-service-repair",
        targetKeywords: ["ro membrane price", "ro filter change cost", "ro repair near me"],
        status: "draft"
    },
    {
        id: "ro-3",
        slug: "ro-making-noise-not-filtering",
        title: "RO Motor Se Aawaz Aa Rahi Hai Par Paani Filter Nahi Ho Raha? Kya Karein?",
        description: "Booster pump kharab hai ya koi block filter? RO machine se aane wali thak-thak ki aawaz ko identify karna seekhein.",
        categoryId: "ro-service-repair",
        targetKeywords: ["ro pump not working", "ro repair bikaner", "ro making noise"],
        status: "draft"
    },
    {
        id: "ro-4",
        slug: "ro-reject-water-not-coming",
        title: "RO Se Waste Paani (Reject Water) Bahar Kyu Nahi Aa Raha?",
        description: "FR (Flow Restrictor) block hone se RO ki life aadhi rah jati hai. Janiye in choti prablems ka hal.",
        categoryId: "ro-service-repair",
        targetKeywords: ["ro waste water not coming", "ro flow restrictor", "ro check up visit"],
        status: "draft"
    },
    {
        id: "ro-5",
        slug: "ro-service-charges-bikaner",
        title: "Bikaner Me RO Service Aur Filter Change Ka Standard Charge (2026)",
        description: "Fix Bikaner ki RO service rate list dekhein. Sirf ₹149 me complete deep inspection aur filter checkup.",
        categoryId: "ro-service-repair",
        targetKeywords: ["ro service charges", "ro amc bikaner", "transparent pricing ro"],
        status: "draft"
    },
    {
        id: "ro-6",
        slug: "how-to-clean-ro-water-tank",
        title: "RO Ka Water Tank Kab Aur Kaise Saaf Karwana Chahiye?",
        description: "Plastic tank me algae (kai) jamne se paani me kitanu aa sakte hain. Professional tank cleaning kyu zaroori hai.",
        categoryId: "ro-service-repair",
        targetKeywords: ["ro tank cleaning", "ro maintenance", "ro deep clean service"],
        status: "draft"
    },
    {
        id: "ro-7",
        slug: "water-tasting-bitter-ro",
        title: "RO Ka Paani Achanak Kadwa (Bitter) Kyu Lagne Laga Hai?",
        description: "Alkaline cartridge expired, membrane damage ya carbon filter failure? Kadwe paani ko 30 minute me fix karwayein.",
        categoryId: "ro-service-repair",
        targetKeywords: ["ro water tastes bad", "ro membrane failure", "ro filter check"],
        status: "draft"
    },
    {
        id: "ro-8",
        slug: "ro-vs-uv-uf-purifier-bikaner",
        title: "RO vs UV vs UF: Bikaner Ki Municipality Water Ke Liye Best Konsa?",
        description: "Agar aapke ghar Indira Gandhi Nahar (Canal) ka paani aata hai, toh aapko RO ki zarurat hai ya nahi? Fact check!",
        categoryId: "ro-service-repair",
        targetKeywords: ["canal water purifier", "ro vs uf uv", "bikaner water quality"],
        status: "draft"
    },
    {
        id: "ro-9",
        slug: "diy-vs-professional-ro-service",
        title: "Ghar Par Khud RO Filter Change Karna Safe Hai Ya Expert Ko Bulayein?",
        description: "YouTube dekh kar filter badalne me kya risk hota hai. Spanner tools aur leakage problems ka expert view.",
        categoryId: "ro-service-repair",
        targetKeywords: ["change ro filter at home", "professional ro check", "ro technician in bikaner"],
        status: "draft"
    },
    {
        id: "ro-10",
        slug: "alkaline-ro-benefits-bikaner",
        title: "Alkaline RO Purifier Lagwana Bikaner Me Kyu Trend Kar Raha Hai?",
        description: "Immunity badhane aur acidity kam karne ke liye Alkaline water ke fayde. Apne normal RO ko Alkaline me upgrade karein.",
        categoryId: "ro-service-repair",
        targetKeywords: ["alkaline filter upgrade", "copper ro bikaner", "healthy drinking water"],
        status: "draft"
    },

    // --- WASHING MACHINE REPAIR (10 Posts) ---
    {
        id: "wm-1",
        slug: "washing-machine-not-spinning-bikaner",
        title: "Washing Machine Chalna (Spin Karna) Band Kyu Kar Deti Hai? 4 Main Reasons",
        description: "Kapde ghum nahi rahe ya dryer kaam nahi kar raha? Belt tuta hai ya motor me dikkat? Janiye inke solutions.",
        categoryId: "washing-machine-repair",
        targetKeywords: ["washing machine not spinning", "machine drum not rotating", "washing machine repair bikaner"],
        status: "draft"
    },
    {
        id: "wm-2",
        slug: "washing-machine-water-leakage",
        title: "Washing Machine Se Paani Leak Hone Ke Sabse Common Kaaran",
        description: "Pipe cut gaya hai ya seal tut gayi hai? Kapde dhote waqt paani leakage rokiye Fix Bikaner ke sath.",
        categoryId: "washing-machine-repair",
        targetKeywords: ["washer leaking water", "drain pipe repair", "door seal replacement"],
        status: "draft"
    },
    {
        id: "wm-3",
        slug: "washing-machine-vibrating-loudly",
        title: "Washing Machine Dhote Waqt Bohot Zor Se Vibrate/Uchhalti Kyu Hai?",
        description: "Shock absorbers weak ya uneven floor? Overloading ke nuksan aur vibration fix karne ke engineering tareeqey.",
        categoryId: "washing-machine-repair",
        targetKeywords: ["washing machine making noise", "machine shaking violently", "drum bearing repair"],
        status: "draft"
    },
    {
        id: "wm-4",
        slug: "front-load-vs-top-load-washing-machine-bikaner",
        title: "Front Load vs Top Load: Bikaner Ki Hard Water Ke Liye Best Konsi?",
        description: "Khare paani me Front load ka heater jaldi kyu kharab hota hai? Nayi machine kharidne se pehle ye facts zarur jan lein.",
        categoryId: "washing-machine-repair",
        targetKeywords: ["front load vs top load", "hard water washing machine", "washing machine scaling"],
        status: "draft"
    },
    {
        id: "wm-5",
        slug: "washing-machine-bad-smell",
        title: "Washing Machine Me Se Gandi Smell (Badbu) Kyu Aati Hai? Use Kaise Rokein",
        description: "Bikaner ke temperature me moisture se tub me mold jam jata hai. Drum descaling process ki poori jankari.",
        categoryId: "washing-machine-repair",
        targetKeywords: ["smelly washing machine", "washing machine tub cleaning", "descaling service"],
        status: "draft"
    },
    {
        id: "wm-6",
        slug: "washing-machine-repair-cost-bikaner",
        title: "Bikaner Me Washing Machine Repair Rate List 2026 (Fix Bikaner Guide)",
        description: "PCB failure se le kar drain motor replacement tak, jaanein transparent charges aur visit cost.",
        categoryId: "washing-machine-repair",
        targetKeywords: ["washing machine repair cost", "pcb board price", "door lock error fix"],
        status: "draft"
    },
    {
        id: "wm-7",
        slug: "washing-machine-water-not-draining",
        title: "Machine Ka Paani Bahar Nahi Nikal Raha (Drain Problem)? Isko Clear Karein",
        description: "Sikke, baal ya pin phansne se drain pump ruk jata hai. Ghar par coin filter saaf karne ka tarika aur expert helpline.",
        categoryId: "washing-machine-repair",
        targetKeywords: ["washer not draining", "drain pump replacement", "E2 error code fix"],
        status: "draft"
    },
    {
        id: "wm-8",
        slug: "semi-automatic-washing-machine-problems",
        title: "Semi-Automatic Washing Machine Ki 3 Sabse Badi Problems Our Unke Solution",
        description: "Dryer spinner motor burn aur timer faults. Bikaner me semi-automatic machines ko lamba chalane ke tips.",
        categoryId: "washing-machine-repair",
        targetKeywords: ["semi automatic repair", "dryer not working", "wash timer replacement"],
        status: "draft"
    },
    {
        id: "wm-9",
        slug: "washing-machine-showing-error-codes",
        title: "Washing Machine Ki Display Par IE, OE, dE Error Codes Ka Matlab Kya Hai?",
        description: "Sensors aur locks ke fault codes ko kaise samjhein. Smart machines ke motherboard repair ke bare me jankari.",
        categoryId: "washing-machine-repair",
        targetKeywords: ["LG error codes", "Samsung OE error", "washing machine pcb repair"],
        status: "draft"
    },
    {
        id: "wm-10",
        slug: "extend-washing-machine-lifespan",
        title: "Washing Machine Ki Umar 10 Saal Tak Kaise Badhayein? (Maintenance Tips)",
        description: "Apni premium washing machine ko local cover se dhakne se lekar zip checking tak, zaroori maintenance steps.",
        categoryId: "washing-machine-repair",
        targetKeywords: ["increase washer lifespan", "washing machine service near me", "appliance maintenance bikaner"],
        status: "draft"
    },


    // --- GEYSER REPAIR (8 Posts) ---
    {
        id: "gy-1",
        slug: "geyser-not-heating-water-bikaner",
        title: "Sardiyon Me Geyser Paani Garam Kyu Nahi Kar Raha? Heating Element Ka Sach",
        description: "Bikaner me Geysers kharab hone ka No. 1 reason hard water scaling hai. Janiye coil jalne se kaise bachayein.",
        categoryId: "geyser-heater-repair",
        targetKeywords: ["geyser not heating", "water heater repair bikaner", "geyser thermostat replace"],
        status: "draft"
    },
    {
        id: "gy-2",
        slug: "geyser-tank-leakage-danger",
        title: "Geyser Se Paani Tapak (Leak) Raha Hai? Ignore Mat Karein, Ye Khatarnak Hai!",
        description: "Tank burst hone ka khatra aur rusted geyser ko theek karne vs exchange karne ka guide.",
        categoryId: "geyser-heater-repair",
        targetKeywords: ["geyser water leaking", "rusted geyser tank", "geyser replacement bikaner"],
        status: "draft"
    },
    {
        id: "gy-3",
        slug: "safely-install-geyser-in-bathroom",
        title: "Bathroom Me Naya Geyser Safe Tarike Se Kaise Install Kare?",
        description: "Electric shock aur short circuit se bachne ke liye earthing aur proper fitting ki ahmeyat.",
        categoryId: "geyser-heater-repair",
        targetKeywords: ["geyser installation bikaner", "electrical safety heater", "geyser fixing near me"],
        status: "draft"
    },
    {
        id: "gy-4",
        slug: "gas-geyser-vs-electric-geyser-bikaner",
        title: "Gas Geyser ya Electric Geyser: Bikaner Me Konsa Kamyab Hai?",
        description: "Janiye Gas geyser ke bathroom me asphyxiation dangers aur electric geyser ki reliable performance.",
        categoryId: "geyser-heater-repair",
        targetKeywords: ["gas vs electric geyser", "gas heater repair", "geyser service cost"],
        status: "draft"
    },
    {
        id: "gy-5",
        slug: "geyser-making-hissing-noise",
        title: "Geyser On Karte Hi 'Hissing' Ya Boiling Ki Aawaz Aati Hai? Iska Matlab?",
        description: "CaCo3 (Scaling) jama hone ka alarm. Janiye deep scaling service book karna kyu zaruri ho gaya hai.",
        categoryId: "geyser-heater-repair",
        targetKeywords: ["geyser making noise", "geyser descaling service", "geyser cleaning"],
        status: "draft"
    },
    {
        id: "gy-6",
        slug: "reducing-geyser-electricity-bill",
        title: "Sardiyon Me Geyser Ke High Electricity Bill (Bijli Kharche) Ko Kaise Kam Kare?",
        description: "Thermostat settings aur usage habits jisse aap geyser chalate hue bhi 30% bijli bacha sakte hain.",
        categoryId: "geyser-heater-repair",
        targetKeywords: ["geyser thermostat setting", "save geyser electricity", "geyser repair bill"],
        status: "draft"
    },
    {
        id: "gy-7",
        slug: "geyser-giving-shocks",
        title: "Bathroom Nalke Ya Paani Me Current (Shock) Aa Raha Hai? Turant Ye Karein",
        description: "Ye element leak ya earthing fault ka nishana hai. Bina jan jokhim me dale expert electrician aur plumber ko bulayein.",
        categoryId: "geyser-heater-repair",
        targetKeywords: ["current in bath water", "geyser shock problem", "emergency geyser repair"],
        status: "draft"
    },
    {
        id: "gy-8",
        slug: "geyser-repair-service-charges-bikaner",
        title: "Service Rate Card: Bikaner Me Geyser Repair And Installation Cost",
        description: "Thermostat, pure element change ya regular service ke genuine daam. Fix Bikaner ke sath local dhokhe se bachiye.",
        categoryId: "geyser-heater-repair",
        targetKeywords: ["geyser repair cost bikaner", "heating element price", "instant heater repair"],
        status: "draft"
    },

    // --- ELECTRICIAN (7 Posts) ---
    {
        id: "el-1",
        slug: "mcb-tripping-frequently-bikaner",
        title: "Ghar Ki MCB Bar-Bar Trip / Gir Kyu Rahi Hai? Iske Khatarnak Causes",
        description: "Overloading, short circuit, ya faulty wiring? AC chalate hi MCB girne ke problems ko permanently fix karein.",
        categoryId: "expert-electrician",
        targetKeywords: ["mcb tripping", "electrician bikaner", "short circuit tracking"],
        status: "draft"
    },
    {
        id: "el-2",
        slug: "electrical-safety-audit-old-homes",
        title: "Purane Gharo Me Aag Lagne Ka Darr! Electrical Safety Audit Kyu Zaruri Hai?",
        description: "Bikaner ki purani haveliyon ya 20 saal purane gharo me wiring ki life. Kab nayi wiring dalwana samajhdari hai.",
        categoryId: "expert-electrician",
        targetKeywords: ["house rewiring cost", "old wiring hazards", "home electrical checking"],
        status: "draft"
    },
    {
        id: "el-3",
        slug: "install-inverter-battery-bikaner",
        title: "Ghar Par Naya Inverter-Battery Set Lagawate Waqt 3 Baato Ka Dhyan Rakhein",
        description: "Load calculation kaise karein aur inverter connection me galatiya jisse bijli ka upkaran fuunk sakta hai.",
        categoryId: "expert-electrician",
        targetKeywords: ["inverter installation", "electrician for inverter", "battery connection fix"],
        status: "draft"
    },
    {
        id: "el-4",
        slug: "fixing-flickering-led-lights",
        title: "Ghar Ki LED Lights Bar-Bar Lafke Maar Rahi Hai (Flicker)? Fix It Now",
        description: "Loose connections ya phase voltage drops? Light fixtures aur switches repair ke baare me jankari.",
        categoryId: "expert-electrician",
        targetKeywords: ["flickering lights repair", "switchboard repair", "ceiling light installation"],
        status: "draft"
    },
    {
        id: "el-5",
        slug: "ceiling-fan-speed-slow-bikaner",
        title: "Pankhe (Ceiling Fan) Ki Speed Bahut Dheemi Ho Gayi Hai? Capacitor Ka Chakkar!",
        description: "Fan capacitor ko safely kaise badlein aur 5 minute me fan ki aandhi jesi speed wapas kaise payein.",
        categoryId: "expert-electrician",
        targetKeywords: ["ceiling fan slow", "fan capacitor change", "fan bearing repair"],
        status: "draft"
    },
    {
        id: "el-6",
        slug: "electrician-visit-charges-bikaner",
        title: "Bikaner Ke Electricians Ka Visit Charge Aur Fixing Rate List 2026",
        description: "Switchboard badalne se lekar fan latkane tak ka transparent price. Har jagah Fix Bikaner ka verified mechanic.",
        categoryId: "expert-electrician",
        targetKeywords: ["electrician visiting charge", "electrician cost bikaner", "book electrician online"],
        status: "draft"
    },
    {
        id: "el-7",
        slug: "importance-of-proper-earthing",
        title: "Barish Me Gharo Ki Deewar Par Current (Shock) Aane Se Kaise Bachein?",
        description: "Earthing pit setup kyu zaroori hai. Bikaner me proper earthing wire connecting system ke fayde.",
        categoryId: "expert-electrician",
        targetKeywords: ["home earthing installation", "wall current problem", "expert electrician services"],
        status: "draft"
    },

    // --- CCTV DEALER & INSTALLATION (8 Posts) ---
    {
        id: "cctv-1",
        slug: "cp-plus-vs-hikvision-bikaner",
        title: "CP Plus vs Hikvision: Bikaner Ke Ghar/Dukaan Ke Liye Best CCTV Konsa Hai?",
        description: "IP cameras vs Analog cameras me kya farq hai? Janiye Bikaner ke market me best security performance kis brand ki hai.",
        categoryId: "cctv-installation-dealer",
        targetKeywords: ["cp plus vs hikvision", "best cctv camera for home", "cctv dealer bikaner"],
        status: "draft"
    },
    {
        id: "cctv-2",
        slug: "cctv-camera-offline-mobile-app",
        title: "CCTV Camera Mobile App Par 'Offline' Kyu Dikh Raha Hai? Ise Kaise Fix Karein",
        description: "Wi-Fi connection error ya DVR offline issue? Hik-Connect aur gCMOB app par cameras wapas online laane ka step-by-step guide.",
        categoryId: "cctv-installation-dealer",
        targetKeywords: ["cctv camera offline", "hik connect offline", "dvr not connecting to internet"],
        status: "draft"
    },
    {
        id: "cctv-3",
        slug: "night-vision-camera-not-working",
        title: "Raat Me CCTV Camera Clear Kyo Nahi Dikhata? (Night Vision Problems)",
        description: "ColorHunter aur InfraRed (IR) cameras ka sach. Raat ke andhere me black and white ya dhundhla kyun dikhta hai.",
        categoryId: "cctv-installation-dealer",
        targetKeywords: ["night vision camera repair", "cctv not clear at night", "color cctv bikaner"],
        status: "draft"
    },
    {
        id: "cctv-4",
        slug: "cctv-installation-cost-bikaner",
        title: "Bikaner Me 4 CCTV Camera Setup Lagaane Ka Asli Kharcha (2026 Price List)",
        description: "Hard drive, wire, aur installation labour ke saath complete 4-camera setup ka estimate.",
        categoryId: "cctv-installation-dealer",
        targetKeywords: ["cctv installation cost", "4 camera setup price", "cctv wiring charges"],
        status: "draft"
    },
    {
        id: "cctv-5",
        slug: "cctv-hdd-not-recording",
        title: "CCTV DVR Recording Kyu Nahi Kar Raha? (Hard Drive Errors)",
        description: "Beep-beep ki aawaz aur 'No HDD' error. Janiye security footage bachane ke liye hard disk errors kaise theek karein.",
        categoryId: "cctv-installation-dealer",
        targetKeywords: ["dvr not recording", "cctv hard disk error", "dvr beeping sound fix"],
        status: "draft"
    },
    {
        id: "cctv-6",
        slug: "wireless-wifi-camera-vs-wired",
        title: "Wi-Fi (Wireless) Camera Lagaaye Ya Wired CCTV? Bikaner Ke Liye Konsa Sahi Milyega?",
        description: "Kya Wi-Fi camera bar-bar disconnect hota hai? 360-degree cameras aur proper DVR system me antar.",
        categoryId: "cctv-installation-dealer",
        targetKeywords: ["wifi camera disadvantages", "wired vs wireless cctv", "ezviz camera setup"],
        status: "draft"
    },
    {
        id: "cctv-7",
        slug: "cctv-video-loss-no-video",
        title: "Screen Par 'Video Loss' Ya 'No Video' Error Kyu Aata Hai?",
        description: "BNC connector fault ya supply box damage? Janiye in common wiring problems ka quick fix.",
        categoryId: "cctv-installation-dealer",
        targetKeywords: ["cctv video loss", "no video in camera", "bnc connector repair"],
        status: "draft"
    },
    {
        id: "cctv-8",
        slug: "protect-cctv-from-dust-bikaner",
        title: "Bikaner Ki Aandhi Me External CCTV Cameras Ko Kharaab Hone Se Kaise Bachaayein?",
        description: "IP67 rating kya hoti hai aur outdoor installation karte waqt proper box fitment ki kitni ahmiyat hai.",
        categoryId: "cctv-installation-dealer",
        targetKeywords: ["outdoor cctv installation", "weatherproof camera", "cctv repair near me"],
        status: "draft"
    }

    // This data structure provides 50 total blogs mapped strictly to Bikaner target segments
];
