// Platsunderlag kontrollerat 2026-09-13. Koordinater © OpenStreetMap contributors (ODbL).
const extraPlaces = [
  {
    "id": "waitsee",
    "name": "Wait and See",
    "category": "Shopping",
    "icon": "🌈",
    "lat": 45.4618257,
    "lng": 9.1829529,
    "address": "Via Santa Marta 14, Milano",
    "description": "Här får garderoben semesterhumör. En personlig butik där vi kan leta efter något roligare än ännu en svart topp. Nära vårt hotell – farligt bekvämt!",
    "source": "https://waitandsee.it/",
    "tag": "Personlig butik · nära hotellet",
    "tip": "Avsätt tid för att prova och kika ordentligt.",
    "excursion": false,
    "coordinateNote": "Adresspunkt från OpenStreetMap; kontrollera entrén."
  },
  {
    "id": "cavalli",
    "name": "Cavalli e Nastri – Brera",
    "category": "Shopping",
    "icon": "👗",
    "lat": 45.4693182,
    "lng": 9.1882193,
    "address": "Via Brera 2, Milano",
    "description": "Vintage med huvudrollskänsla. Kläder och accessoarer med historia, från ett namn som lockar både stylister och modeälskare. Dagens lek: välj en outfit åt varandra.",
    "source": "https://www.breradesigndistrict.it/en/location/cavalli-e-nastri/",
    "tag": "Utvald vintage",
    "tip": "Utbud och storlekar varierar – här är själva letandet halva nöjet.",
    "excursion": false,
    "coordinateNote": "Adresspunkt från OpenStreetMap; kontrollera entrén."
  },
  {
    "id": "tearose",
    "name": "Tearose",
    "category": "Shopping",
    "icon": "🌸",
    "lat": 45.4704065,
    "lng": 9.192489,
    "address": "Via Croce Rossa 2, Milano",
    "description": "Blommor, dofter, mode och design i samma lilla drömvärld. Ett stopp för att bli inspirerad och kanske hitta resans mest onödiga, underbara souvenir.",
    "source": "https://www.tearose.it/boutiques/it/index.html",
    "tag": "Mode · dofter · design",
    "tip": "Passar ihop med en runda i modekvarteren.",
    "excursion": false,
    "coordinateNote": "Adresspunkt från OpenStreetMap; kontrollera entrén."
  },
  {
    "id": "rossana",
    "name": "Galleria Rossana Orlandi",
    "category": "Shopping",
    "icon": "🪑",
    "lat": 45.4637662,
    "lng": 9.1671816,
    "address": "Via Matteo Bandello 14, Milano",
    "description": "När shopping övergår i ”vad ÄR det där, jag älskar det!”. Designgalleri för nyfikna ögon och oväntade föremål. Vi behöver inte köpa en stol för att få en bra historia.",
    "source": "https://www.rossanaorlandi.com/contacts/",
    "tag": "Designgalleri",
    "tip": "Kontrollera öppetdag och besöksvillkor, särskilt under helger.",
    "excursion": false,
    "coordinateNote": "Adresspunkt från OpenStreetMap; kontrollera entrén."
  },
  {
    "id": "eastmarket",
    "name": "East Market",
    "category": "Shopping",
    "icon": "🪩",
    "lat": 45.4472,
    "lng": 9.247,
    "address": "Via Mecenate 88/A, Milano",
    "description": "Skattjakt bland vintage och second hand i en stor inomhusmarknad. Vi delar upp oss, hittar något knasigt och möts för att jämföra fynd.",
    "source": "https://eastmarketmilano.com/en/shop/",
    "tag": "Kolla datum · marknad",
    "tip": "Evenemang vissa söndagar, inte en butik som är öppen varje dag. Kontrollera kalender och entrébiljett.",
    "excursion": false,
    "coordinateNote": "Ungefärlig kartpunkt; kontrollera entrén."
  },
  {
    "id": "salvagente",
    "name": "Il Salvagente",
    "category": "Outlets",
    "icon": "🏷",
    "lat": 45.4656586,
    "lng": 9.214429,
    "address": "Via Fratelli Bronzetti 16, Milano",
    "description": "Designerjakt inne i stan! Här får tålamodet följa med mellan galgarna. Uppdrag: hitta ett plagg som får oss att säga ”den ser betydligt dyrare ut”.",
    "source": "https://www.salvagente.com/it/dove-siamo",
    "tag": "Outlet i Milano",
    "tip": "Lager, storlekar och rabatter varierar. Jämför priset innan ni slår till.",
    "excursion": false,
    "coordinateNote": "Adresspunkt från OpenStreetMap; kontrollera entrén."
  },
  {
    "id": "dmag",
    "name": "DMAG – Manzoni",
    "category": "Outlets",
    "icon": "🛍",
    "lat": 45.4715916,
    "lng": 9.1945474,
    "address": "Via Alessandro Manzoni 44, Milano",
    "description": "Designermärken på outletvis mitt i modeområdet. Ett bra stopp för vår inre fynddetektiv – och för att testa om drömjackan faktiskt är drömjackan.",
    "source": "https://www.dmag.eu/2-home",
    "tag": "Designeroutlet i city",
    "tip": "Den här kartnålen gäller Manzoni-butiken. Sortimentet varierar.",
    "excursion": false,
    "coordinateNote": "Adresspunkt från OpenStreetMap; kontrollera entrén."
  },
  {
    "id": "scalo",
    "name": "Scalo Milano Outlet & More",
    "category": "Outlets",
    "icon": "🛍",
    "lat": 45.3610562,
    "lng": 9.2158632,
    "address": "Via Milano 5, Locate di Triulzi",
    "description": "För dagen då vi går all in på shopping. En outletutflykt utanför stan med plats för både provrum och matpaus. En egen liten expedition med påsar som souvenir.",
    "source": "https://www.scalomilano.it/en/contacts/",
    "tag": "Utflykt utanför Milano",
    "tip": "Planera transport till Locate di Triulzi och kontrollera aktuella förbindelser på outletens webbplats.",
    "excursion": true,
    "coordinateNote": "Adresspunkt från OpenStreetMap; kontrollera entrén."
  },
  {
    "id": "serravalle",
    "name": "Serravalle Designer Outlet",
    "category": "Outlets",
    "icon": "👠",
    "lat": 44.7350776,
    "lng": 8.8372996,
    "address": "Via della Moda 1, Serravalle Scrivia",
    "description": "Den stora shoppingutflykten. Här avsätter vi en egen dag, tar på bekväma skor och utser en smakrådgivare med vetorätt över impulsköpen.",
    "source": "https://www.mcarthurglen.com/en/outlets/it/designer-outlet-serravalle/plan-your-visit/",
    "tag": "Heldagsidé · utanför Milano",
    "tip": "Kräver transport. Officiella sidan har shuttle och tåg/bussalternativ. Läggs inte i en gångrunda genom Milano.",
    "excursion": true,
    "coordinateNote": "Adresspunkt från OpenStreetMap; kontrollera entrén."
  },
  {
    "id": "oscar",
    "name": "Da Oscar – Porta Venezia",
    "category": "Restauranger",
    "icon": "🍝",
    "lat": 45.4764141,
    "lng": 9.2059528,
    "address": "Via Lazzaro Palazzi 4, Milano",
    "description": "En familjedriven trattoria som gillar både mat och skratt. Hit går vi för italiensk husmanskänsla och en kväll där det får vara lite liv runt bordet.",
    "source": "https://www.ristorantedaoscar.it/ristorante/",
    "tag": "Trattoria med personlighet",
    "tip": "Boka gärna. Den här platsen gäller Porta Venezia, inte deras andra restaurang.",
    "excursion": false,
    "coordinateNote": "Adresspunkt från OpenStreetMap; kontrollera entrén."
  },
  {
    "id": "barluce",
    "name": "Bar Luce",
    "category": "Mat & fika",
    "icon": "🍰",
    "lat": 45.4443737,
    "lng": 9.2053306,
    "address": "Largo Isarco 2, Milano",
    "description": "Fika med filmkänsla! Wes Anderson har formgett det här retrokaféet vid Fondazione Prada. Pasteller, kaffe och en paus som gärna får bli lite längre.",
    "source": "https://www.fondazioneprada.org/barluce-en/%3Flang%3Den",
    "tag": "Wes Anderson · retrokafé",
    "tip": "Kombinera med Fondazione Prada om ni vill lägga till konst. Kontrollera deras separata öppettider.",
    "excursion": false,
    "coordinateNote": "Adresspunkt från OpenStreetMap; kontrollera entrén."
  },
  {
    "id": "dry",
    "name": "DRY Milano – Solferino",
    "category": "Restauranger",
    "icon": "🍕",
    "lat": 45.479061,
    "lng": 9.1884259,
    "address": "Via Solferino 33, Milano",
    "description": "Pizza möter cocktails och ingen behöver välja sida. Ett bra förslag när vi vill börja kvällen med något gott och låta nästa stopp bestämmas senare.",
    "source": "https://www.breradesigndistrict.it/location/dry-milano/",
    "tag": "Pizza + cocktails",
    "tip": "Boka gärna bord och kontrollera öppettider för både kök och bar.",
    "excursion": false,
    "coordinateNote": "Adresspunkt från OpenStreetMap; kontrollera entrén."
  },
  {
    "id": "ratana",
    "name": "Ratanà",
    "category": "Restauranger",
    "icon": "🍽",
    "lat": 45.485315,
    "lng": 9.192935,
    "address": "Via Gaetano de Castillia 28, Milano",
    "description": "Milanos mattradition i modern tappning, i ett äldre hus mitt bland stadens nya silhuett. Kandidaten för middagen vi bokar lite extra omsorgsfullt.",
    "source": "https://www.ratana.it/",
    "tag": "Modern milanesisk mat",
    "tip": "Boka i förväg. Läs aktuell meny – den följer säsongen.",
    "excursion": false,
    "coordinateNote": "Ungefärlig kartpunkt; kontrollera entrén."
  },
  {
    "id": "lubar",
    "name": "LùBar – Palestro",
    "category": "Restauranger",
    "icon": "🌿",
    "lat": 45.4725327,
    "lng": 9.199676,
    "address": "Via Palestro 16, Milano",
    "description": "Medelhavsmat och en grön paus vid konstgalleriet GAM. Här kan vi landa mellan butikssvängarna och låtsas att en lång lunch var planen hela tiden.",
    "source": "https://lubar.it/en/pages/lubar",
    "tag": "Grön miljö · medelhavsmat",
    "tip": "Boka gärna för lunch eller middag. Event och livemusik varierar med datum.",
    "excursion": false,
    "coordinateNote": "Adresspunkt från OpenStreetMap; kontrollera entrén."
  },
  {
    "id": "torre",
    "name": "Ristorante Torre",
    "category": "Restauranger",
    "icon": "🌇",
    "lat": 45.4437,
    "lng": 9.2058,
    "address": "Via Lorenzini 14, Milano",
    "description": "Middag på sjätte våningen i Fondazione Pradas torn. För kvällen då vi vill klä upp oss lite och låta både arkitekturen och maten vara en del av upplevelsen.",
    "source": "https://www.fondazioneprada.org/domande-frequenti/",
    "tag": "Middag i konstmiljö",
    "tip": "Boka bord och kontrollera aktuell meny och öppetdag. Restaurangens entré är på Via Lorenzini.",
    "excursion": false,
    "coordinateNote": "Ungefärlig kartpunkt; kontrollera entrén."
  },
  {
    "id": "backdoor",
    "name": "Backdoor43",
    "category": "Aperitivo",
    "icon": "🗝",
    "lat": 45.451322,
    "lng": 9.1734295,
    "address": "Ripa di Porta Ticinese 43, Milano",
    "description": "En pytteliten cocktailbar vid Navigli med stor hemlig-klubb-känsla. För oss tre låter en intim stund vid bardisken som ett ganska bra alternativ till en stökig bar.",
    "source": "https://www.finedininglovers.it/ristoranti/backdoor-43",
    "tag": "Liten cocktailupplevelse",
    "tip": "Kontakta baren och bekräfta bokning för tre innan ni går. Väldigt få platser.",
    "excursion": false,
    "coordinateNote": "Adresspunkt från OpenStreetMap; kontrollera entrén."
  },
  {
    "id": "ceresio",
    "name": "Ceresio 7",
    "category": "Aperitivo",
    "icon": "🥂",
    "lat": 45.4835174,
    "lng": 9.1803112,
    "address": "Via Ceresio 7, Milano",
    "description": "Rooftop, pooler och kvällskänsla. Här tar vi den där skålen som får hela resan att kännas lite mer filmisk. Ett förslag till vår uppklädda kväll.",
    "source": "https://www.ceresio7.com/milano/contatti/",
    "tag": "Rooftop · festligare kväll",
    "tip": "Boka gärna. Poolbad har egna tider, säsong och villkor; det ingår inte automatiskt i ett barbesök.",
    "excursion": false,
    "coordinateNote": "Adresspunkt från OpenStreetMap; kontrollera entrén."
  },
  {
    "id": "basso",
    "name": "Bar Basso",
    "category": "Aperitivo",
    "icon": "🍸",
    "lat": 45.4767746,
    "lng": 9.2175792,
    "address": "Via Plinio 39, Milano",
    "description": "Ett klassiskt Milanostopp för en Negroni Sbagliato – varianten med bubbel. Med PROSECCO på hatten känns det nästan som ett tematiskt studiebesök.",
    "source": "https://www.ied.edu/news/communication-design-students-explore-milan-outdoor-lessons-and-a-visit-to-the-legendary-bar-basso",
    "tag": "Milanoklassiker · bubbelcocktail",
    "tip": "Kontrollera aktuella öppettider innan ni går.",
    "excursion": false,
    "coordinateNote": "Adresspunkt från OpenStreetMap; kontrollera entrén."
  },
  {
    "id": "camparino",
    "name": "Camparino in Galleria",
    "category": "Aperitivo",
    "icon": "🍹",
    "lat": 45.4649201,
    "lng": 9.1898776,
    "address": "Piazza Duomo 21, Milano",
    "description": "En aperitivo med Milano mitt framför näsan. Historisk miljö vid Gallerian och Duomo – bra när vi vill avsluta centrumslingan med en skål.",
    "source": "https://www.camparino.com/location/",
    "tag": "Klassisk aperitivo · Duomo",
    "tip": "Olika delar av baren har olika upplägg. Kontrollera meny och bokningsmöjlighet.",
    "excursion": false,
    "coordinateNote": "Adresspunkt från OpenStreetMap; kontrollera entrén."
  },
  {
    "id": "officina",
    "name": "Officina Milano",
    "category": "Aperitivo",
    "icon": "🍸",
    "lat": 45.4495967,
    "lng": 9.1846265,
    "address": "Via Giovenale 7, Milano",
    "description": "Cocktails i en miljö med egen personlighet. En kandidat för kvällens ”vi provar något annat” när vi vill sitta ner, prata och låta drinklistan överraska.",
    "source": "https://officinamilano.eu/",
    "tag": "Cocktailbar · retrostil",
    "tip": "Kontrollera aktuell kvällsöppning. Söndagsbrunch är ett separat alternativ.",
    "excursion": false,
    "coordinateNote": "Adresspunkt från OpenStreetMap; kontrollera entrén."
  },
  {
    "id": "spirit",
    "name": "Spirit de Milan",
    "category": "Upplevelser",
    "icon": "🎷",
    "lat": 45.5067143,
    "lng": 9.1584748,
    "address": "Via Bovisasca 59, Milano",
    "description": "En kväll i de gamla kristallverkstäderna med musik i fokus. Välj en kväll ur programmet och ge shoppingfötterna ett nytt jobb på dansgolvet.",
    "source": "https://spiritdemilan.it/spaces/spirit-de-milan/",
    "tag": "Livemusik · kolla programmet",
    "tip": "Kontrollera kvällens program, entré och eventuell bordsbokning. Planera transport hem.",
    "excursion": false,
    "coordinateNote": "Adresspunkt från OpenStreetMap; kontrollera entrén."
  },
  {
    "id":"atelier-vm","name":"Atelier VM","category":"Shopping","icon":"✨","lat":45.4751,"lng":9.1838,"address":"Corso Garibaldi 127, Milano","description":"Små, fina smycken med stor personlighet. Ett perfekt stopp för ett diskret systertrio-minne – eller tre olika charms som hör ihop.","source":"https://www.ateliervm.com/","tag":"Smycken · personlig present","tip":"Kolla om ni vill boka deras populära smyckesupplevelse."
  },
  {
    "id":"serendeepity","name":"Serendeepity","category":"Shopping","icon":"🎶","lat":45.4533,"lng":9.1727,"address":"Corso di Porta Ticinese 100, Milano","description":"Vintagekläder, vinyl och teknik i samma skattkammare. Här kan var och en hitta något som matchar sin egen Milano-version.","source":"https://www.serendeepity.net/","tag":"Vintage · vinyl · second hand","tip":"Bra att kombinera med promenad vid Colonne di San Lorenzo."
  },
  {
    "id":"dmag-bigli","name":"DMAG – Bigli","category":"Outlets","icon":"🏷","lat":45.4696,"lng":9.1921,"address":"Via Bigli 4, Milano","description":"En extra designerjakt i modekvarteren. Smidigt när vi redan är i närheten av Montenapoleone och vill kika efter fynd.","source":"https://www.dmag.eu/","tag":"Designeroutlet · city","tip":"Sortiment och rabatter skiftar – gå in med öppna fyndögon."
  },
  {
    "id":"scalo-vintage","name":"The Vintage Project – Scalo Milano","category":"Outlets","icon":"🧥","lat":45.3612,"lng":9.2162,"address":"Scalo Milano, Via Milano 5, Locate di Triulzi","description":"Lägg till ett vintageuppdrag när ni ändå gör outletutflykten. Leta efter den mest oväntade jackan eller accessoaren.","source":"https://www.scalomilano.it/en/","tag":"Vintage · utflykt","tip":"Utanför Milano – planera transport och kontrollera butikens aktuella utbud.","excursion":true
  },
  {
    "id":"zaza","name":"Zazà Ramen","category":"Restauranger","icon":"🍜","lat":45.4793,"lng":9.1881,"address":"Via Solferino 48, Milano","description":"Ramen med designkänsla i Brera. Ett kul avbrott från pasta och pizza när vi vill prova något med sked och mycket smak.","source":"https://www.zaz ramen.it/","tag":"Ramen · designmiljö","tip":"Boka eller kom tidigt – Brera-kvällar fylls snabbt."
  },
  {
    "id":"conchetta","name":"Osteria Conchetta","category":"Restauranger","icon":"🍚","lat":45.4488,"lng":9.1806,"address":"Via Conchetta 8, Milano","description":"Milanesisk husmanskost nära Naviglio Pavese. Här går vi för risotto, ossobuco och den där varma känslan av en middag som får ta tid.","source":"https://osteriaconchetta.it/index.html","tag":"Äkta milanesisk osteria","tip":"Boka i förväg och kika på kvällens meny."
  },
  {
    "id":"marchesi","name":"Pasticceria Marchesi","category":"Mat & fika","icon":"🍰","lat":45.4669,"lng":9.1901,"address":"Galleria Vittorio Emanuele II 11, Milano","description":"Elegant kaffepaus i pastell. Beställ något litet, sitt länge och låtsas att vi är på casting för en italiensk livsstilsfilm.","source":"https://www.marchesi1824.com/","tag":"Klassisk konditoriupplevelse","tip":"Centralt stopp – perfekt mellan Duomo och shopping."
  },
  {
    "id":"lu-bar","name":"LùBar – Villa Reale","category":"Mat & fika","icon":"🌿","lat":45.4725,"lng":9.1997,"address":"Via Palestro 16, Milano","description":"En grön, lugn paus vid GAM. Medelhavssmaker, vacker miljö och en bra plats för att summera dagens bästa köp.","source":"https://lubar.it/en/pages/lubar","tag":"Trädgårdskänsla · lunch","tip":"Boka gärna om ni vill äta på populär tid."
  },
  {
    "id":"1930","name":"1930 Cocktail Bar","category":"Aperitivo","icon":"🕰","lat":45.4513,"lng":9.1734,"address":"Ripa di Porta Ticinese 43, Milano","description":"Hemligt, tidskapselaktigt och väldigt Milano. En bar för när vi vill göra kvällen till en liten berättelse.","source":"https://www.1930milano.it/","tag":"Speakeasy · hemlig entré","tip":"Bokning och dresscode kan gälla – kontrollera innan ni planerar kvällen."
  },
  {
    "id":"campari","name":"Camparino in Galleria","category":"Aperitivo","icon":"🍹","lat":45.4649,"lng":9.1899,"address":"Piazza Duomo 21, Milano","description":"En klassisk skål mitt i Gallerian. Beställ något bubbligt och låt Duomo vara kvällens bakgrund.","source":"https://www.camparino.com/location/","tag":"Historisk aperitivo","tip":"Olika salar har olika upplägg – kontrollera bokning och meny."
  },
  {
    "id":"fondazione","name":"Fondazione Prada","category":"Upplevelser","icon":"🧡","lat":45.4440,"lng":9.2043,"address":"Largo Isarco 2, Milano","description":"Konst, guldiga byggnader och Bar Luce på samma stopp. Ett måste när vi vill ha bilder som inte ser ut som alla andras Milano-bilder.","source":"https://www.fondazioneprada.org/","tag":"Samtidskonst · arkitektur","tip":"Kontrollera utställningar, biljetter och tisdagens stängning."
  },
  {
    "id":"san-siro","name":"San Siro Stadium Tour","category":"Upplevelser","icon":"⚽","lat":45.4781,"lng":9.1240,"address":"Piazzale Angelo Moratti, Milano","description":"En guidad titt bakom kulisserna på en av Europas mest ikoniska arenor. Även vi som inte kan offside-regeln får en bra story här.","source":"https://www.sansirostadium.com/","tag":"Stadion · guidad tur","tip":"Kontrollera matchdagar och turens tillgänglighet före besöket."
  },
  {
    "id":"trippa","name":"Trippa","category":"Restauranger","icon":"🍽","lat":45.4510,"lng":9.2044,"address":"Via Giorgio Vasari 1, Milano","description":"En avslappnad trattoria med mycket personlighet och smaker från hela Italien. Michelin Bib Gourmand gör den till en stark kandidat för vår mest prisvärda middag.","source":"https://guide.michelin.com/it/en/lombardia/milano/restaurant/trippa","tag":"MICHELIN Bib Gourmand · italienskt","tip":"Boka i god tid – restaurangen är liten och populär."
  },
  {
    "id":"aimo","name":"Il Luogo Aimo e Nadia","category":"Restauranger","icon":"⭐","lat":45.4614,"lng":9.1110,"address":"Via Privata Raimondo Montecuccoli 6, Milano","description":"För en kväll när maten får vara huvudnumret. Michelin-stjärnad italiensk gastronomi med fokus på råvaror, tradition och en riktigt minnesvärd middag.","source":"https://www.aimoenadia.com/en/il-luogo-aimo-e-nadia/","tag":"MICHELIN-stjärna · festmiddag","tip":"Det här är en planerad kväll: boka bord och välj meny i förväg."
  },
  {
    "id":"berton","name":"Berton","category":"Restauranger","icon":"🌟","lat":45.4813,"lng":9.1920,"address":"Via Mike Bongiorno 13, Milano","description":"Modern italiensk fine dining i Porta Nuova. Ett elegant alternativ när vi vill klä upp oss och prova en av Milanos mest omtalade matupplevelser.","source":"https://www.ristoranteberton.com/","tag":"MICHELIN-stjärna · modern meny","tip":"Kontrollera aktuell avsmakningsmeny, pris och bokningsvillkor."
  },
  {
    "id":"marta","name":"Marta – Rossana Orlandi","category":"Restauranger","icon":"🍷","lat":45.4638,"lng":9.1672,"address":"Via Matteo Bandello 14, Milano","description":"Litet och ombonat designstopp mitt i Rossana Orlandis kreativa värld. Perfekt när vi vill kombinera märkliga prylar, vacker miljö och en lugn middag.","source":"https://www.rossanaorlandi.com/contacts/","tag":"Designmiljö · middag","tip":"Boka bord separat från galleribesöket."
  },
  {
    "id":"motta","name":"Motta Milano 1928","category":"Restauranger","icon":"🍝","lat":45.4645,"lng":9.1902,"address":"Piazza del Duomo 21, Milano","description":"En klassisk paus precis vid Duomo när vi vill sitta centralt men ändå äta ordentligt. Bra kandidat för lunch mellan två shoppingpass.","source":"https://www.motta.com/","tag":"Duomo-läge · italienskt","tip":"Centralt läge innebär att öppettider och köer kan variera."
  },
  {
    "id":"osteria-conchetta-2","name":"Osteria Conchetta","category":"Restauranger","icon":"🍚","lat":45.4488,"lng":9.1806,"address":"Via Conchetta 8, Milano","description":"En högt uppskattad milanesisk osteria vid Naviglio Pavese med risotto, ossobuco och genuin kvarterskänsla. Här får vi smaka på den gamla Milano-traditionen.","source":"https://osteriaconchetta.it/index.html","tag":"Högt uppskattad · milanesisk","tip":"Boka i förväg och kontrollera kvällens meny."
  },
  {"id":"ombra","name":"N’Ombra de Vin","category":"Aperitivo","icon":"🍷","lat":45.4748,"lng":9.1883,"address":"Via San Marco 2, Milano","description":"En historisk vinkällare under San Marco med tusentals etiketter. Mysigt, lite dramatiskt och perfekt för att prova ett glas ni aldrig beställt förut.","source":"https://www.nombradevin.it/about","tag":"Vinbar · historisk källare","tip":"Be personalen rekommendera ett glas från Lombardiet."},
  {"id":"winemilano","name":"Wine Milano","category":"Aperitivo","icon":"🍇","lat":45.4848,"lng":9.1887,"address":"Viale Monte Grappa 16, Milano","description":"Wine boutique där ni kan ta ett glas, dela en flaska eller boka en provning. Bra när vi vill göra en hel kväll av att upptäcka nya bubblor.","source":"https://www.winemilano.it/","tag":"Vinprovning · Champagne","tip":"Boka provning om ni vill ha hjälp att välja viner."},
  {"id":"remedy","name":"Remedy Milano","category":"Aperitivo","icon":"🍾","lat":45.4742,"lng":9.2040,"address":"Viale Luigi Majno 26, Milano","description":"En elegant vinbar med enorm vinkällare, provningsrum och små tilltugg. För den kväll då vi vill känna oss som tre mycket kunniga vinkritiker.","source":"https://remedymilano.it/en/homepage-en/","tag":"Vinbar · provningsrum","tip":"Öppet kvällstid och bokning rekommenderas."},
  {"id":"terrazza-aperol","name":"Terrazza Aperol","category":"Aperitivo","icon":"🧡","lat":45.4647,"lng":9.1908,"address":"Galleria Vittorio Emanuele II, Milano","description":"Aperol Spritz med Duomo-vy. Färgen matchar resans humör och läget gör det till ett självklart stopp när vi redan är vid Gallerian.","source":"https://terrazza.aperol.com/location/","tag":"Aperol-bar · Duomo-vy","tip":"Gå dit tidigt eller boka – utsikten är populär."},
  {"id":"signorvino","name":"Signorvino – Duomo","category":"Aperitivo","icon":"🥂","lat":45.4643,"lng":9.1904,"address":"Piazza del Duomo, Milano","description":"Vinbutik och vinbar i ett. Välj en flaska från Italien, beställ något att äta och gör en spontan mini-provning för tre.","source":"https://www.signorvino.com/it/","tag":"Vinbutik · prosecco","tip":"Fråga efter lokala Franciacorta om ni vill prova lombardiska bubblor."},
  {"id":"pupi","name":"Pupi Solari","category":"Shopping","icon":"🧸","lat":45.4632,"lng":9.1518,"address":"Piazza Tommaseo 2, Milano","description":"En liten, personlig boutique med noga utvalda plagg och accessoarer. Perfekt för den som vill hitta något mer speciellt än en kedjebutik.","source":"https://pupisolari.com/pages/chi-siamo","tag":"Liten boutique · personlig stil","tip":"Lägg besöket i en lugn dag – här vill man titta ordentligt."},
  {"id":"antonioli","name":"Antonioli","category":"Shopping","icon":"🖤","lat":45.4536,"lng":9.1702,"address":"Via P. Paoli 1, Milano","description":"Avantgarde-mode och design för den som vill gå hem med ett samtalsämne. Fönstershopping räknas också som kultur.","source":"https://www.antonioli.eu/","tag":"Avantgarde · independent fashion","tip":"Kontrollera aktuell butikslokal och öppettider före besöket."},
  {"id":"brera-boutiques","name":"Brera småbutiker","category":"Shopping","icon":"🌼","lat":45.4712,"lng":9.1880,"address":"Via Fiori Chiari, Brera, Milano","description":"En kvartersrunda bland små gallerier, smyckesbutiker och udda design. Sätt en timer på 45 minuter och se vem som hittar det finaste skyltfönstret.","source":"https://www.yesmilano.it/en/neighborhoods","tag":"Boutiquerunda · Brera","tip":"Områdespunkt – låt promenaden styra och spara favoriter i rutten."},
  {"id":"santambrogio","name":"Mercato di Sant’Ambrogio","category":"Mat & fika","icon":"🍋","lat":45.4661,"lng":9.1751,"address":"Piazza Sant’Ambrogio, Milano","description":"En lokal marknad för färg, dofter och små smakprov. Ett kul morgonstopp när vi vill köpa något till picknick eller hotellrummet.","source":"https://www.yesmilano.it/en/neighborhoods","tag":"Marknad · lokala smaker","tip":"Marknadsdagar kan variera – kontrollera aktuellt schema."},
  {"id":"eataly","name":"Eataly Milano Smeraldo","category":"Mat & fika","icon":"🧀","lat":45.4802,"lng":9.1880,"address":"Piazza XXV Aprile 10, Milano","description":"Italiensk mathimmel under ett tak. Gå runt och plocka små favoriter – ett enkelt sätt att smaka mycket utan att boka en lång middag.","source":"https://www.eataly.net/it_it/negozi/milano","tag":"Italiensk mathall","tip":"Kolla dagens kurser, provningar och restaurangplatser."},
  {"id":"funicolare","name":"City sightseeing med spårvagn 1","category":"Upplevelser","icon":"🚋","lat":45.4761,"lng":9.1829,"address":"Piazza Castello, Milano","description":"En billig liten stadstur med gammal spårvagnskänsla. Perfekt när fötterna behöver paus men vi fortfarande vill se Milano genom fönstret.","source":"https://www.yesmilano.it/en","tag":"Lokal upplevelse · budget","tip":"Köp biljett enligt ATM:s aktuella regler och kontrollera linjeförändringar."},
  {"id":"pinacoteca","name":"Pinacoteca di Brera","category":"Upplevelser","icon":"🖼","lat":45.4720,"lng":9.1881,"address":"Via Brera 28, Milano","description":"Konst i ett av Milanos vackraste kvarter. Gör det till en lek: varje person väljer ett favoritverk och försvarar sitt val över aperitivo.","source":"https://pinacotecabrera.org/","tag":"Konst · Brera","tip":"Kontrollera biljetter och bokningsregler före besöket."}
];
