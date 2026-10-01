// Diccionario de contenido del sitio en Español, English e Italiano.
// Todo el copy vive acá para que sea fácil de editar / mandar a traducir profesionalmente más adelante.

export const languages = {
  es: "Español",
  en: "English",
  it: "Italiano",
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "es";
export const showDefaultLangInUrl = true;

export const ui = {
  es: {
    meta: {
      title: "La Candelaria — Carne de llama de altura",
      description:
        "Cabaña La Candelaria: carne de llama 100% orgánica de la puna jujeña, con más de 100 años de trayectoria familiar.",
    },
    nav: {
      inicio: "Inicio",
      historia: "Nuestra Historia",
      productos: "Productos",
      contacto: "Contacto",
      tagline: "CRIADERO DE LLAMAS · JUJUY, ARGENTINA",
    },
    common: {
      ctaProducts: "Ver productos",
      ctaHistory: "Conocer la historia",
      skipToContent: "Saltar al contenido",
    },
    home: {
      eyebrow: "GANADERÍA DE ALTURA · MÁS DE 100 AÑOS EN LA PUNA",
      h1: ["Carne de llama de", "altura, criada como", "se hizo siempre."],
      intro:
        "Cabaña La Candelaria produce carne de llama 100% orgánica en la Cuenca de Pozuelos, Jujuy, a 3600 msnm. Ganadería extensiva y pastoril, con la misma tierra que trabajaron nuestros abuelos.",
      stats: [
        { num: "100+", label: "años de trayectoria" },
        { num: "3600m", label: "altura de cría" },
        { num: "1°", label: "faena SENASA del país" },
      ],
      historyEyebrow: "NUESTRA HISTORIA",
      historyTitle: "De la puna jujeña a la mesa",
      historyText1:
        "Todo nace en 1950, con el matrimonio de nuestros abuelos Primitivo Alfonso Maidana y Julia Marcelina Calizaya, hija de Victoriano Calizaya: el criador que a comienzos del siglo XX cruzó alpacas de Oruro con llamas de la puna jujeña y dio origen a la llama argentina.",
      historyText2:
        "Hoy seguimos en el mismo territorio, con manejo agroecológico, y llevamos ese trabajo de generaciones a la gastronomía de todo el país.",
      historyLink: "Leer nuestra historia completa",
      productsEyebrow: "NUESTROS PRODUCTOS",
      productsTitle: "Cortes y embutidos de carne de llama",
      products: [
        { name: "RES", weight: "42 kg aprox.", desc: "Media res entera, para carnicerías y restaurantes que trabajan despiece propio.", img: "salame2" },
        { name: "1/2 RES", weight: "21 kg aprox.", desc: "El corte más elegido por cocinas profesionales de todo el país.", img: "david" },
        { name: "CORTE PISTOLA", weight: "18 kg aprox.", desc: "Pierna trasera deshuesada, lista para cocina y charcutería.", img: "salame3" },
        { name: "SALAME DE LLAMA", weight: "Venta por peso", desc: "75% carne de llama y 25% tocino de cerdo. Estacionado a la manera tradicional.", img: "salame1" },
      ],
      quote: "Es una carne magra, jugosa y de sabor delicado: permite jugar con crudos, semicrudos y bajas temperaturas.",
      quoteAuthor: "Elegida por cocinas de alta gastronomía en toda Argentina",
    },
    historia: {
      eyebrow: "NUESTRA HISTORIA",
      h1a: "Cuatro generaciones",
      h1b: "cuidando la misma tierra",
      introText:
        "Somos una familia dedicada a la cría de llamas en la puna jujeña desde hace más de un siglo. David Alfonso Dentice, Licenciado en Ciencias y Tecnología de los Alimentos, continúa hoy el trabajo de sus abuelos y bisabuelos, agregando valor a la carne de llama y llevándola a cocinas de todo el país.",
      timelineEyebrow: "LÍNEA DE TIEMPO",
      timelineTitle: "Un recorrido de más de 100 años",
      events: [
        {
          year: "Inicios del siglo XX",
          title: "El origen de la llama argentina",
          desc: "Victoriano Calizaya, comerciante y criador de camélidos, realiza la primera cruza entre alpacas de Oruro (Bolivia) y llamas de la puna jujeña. De esa cruza nace la llama argentina, reconocida mundialmente.",
        },
        {
          year: "1950",
          title: "Nace Cabaña La Candelaria",
          desc: "Primitivo Alfonso Maidana y Julia Marcelina Calizaya —hija de Victoriano— se casan y fundan la cabaña familiar en la Cuenca de Pozuelos, a 3600 msnm, al norte de Jujuy.",
        },
        {
          year: "2006",
          title: "Reconocimiento internacional",
          desc: "La genética de nuestras llamas obtiene el 1° y 2° premio en el IV Congreso Mundial de Camélidos (Catamarca) y premios nacionales en la Feria Andina de la Llama.",
        },
        {
          year: "2018",
          title: "Primer permiso de faena SENASA del país",
          desc: "Gestionamos y logramos, por primera vez en la historia argentina, el permiso de faena de llama del SENASA, en el Frigorífico Bella Vista (Tucumán), de la Cooperativa Agropecuaria 20 de Junio.",
        },
        {
          year: "2021",
          title: "Valor agregado y trabajo genuino",
          desc: "Instalamos la sala de fabricación de embutidos en Tucumán y formamos la cooperativa Mi Pueblo Florecerá junto a productores de Rodeo Grande, para reintroducir la llama a la región y generar trabajo para mujeres y jóvenes.",
        },
      ],
      impactEyebrow: "MI PUEBLO FLORECERÁ",
      impactTitle: "Una cooperativa que devuelve las llamas al territorio",
      impactText:
        "En Rodeo Grande, Choromoro (Tucumán), trabajamos junto a productores locales para reintroducir la llama a la región, capacitar esquiladores y construir una sala de faena propia, generando trabajo genuino para mujeres y jóvenes.",
    },
    productos: {
      eyebrow: "NUESTROS PRODUCTOS",
      h1: "Carne de llama y embutidos",
      intro:
        "100% orgánica, de ganadería extensiva y pastoril en la puna jujeña a 3600 msnm. Venta por res, media res, corte pistola y salame artesanal.",
      cortesEyebrow: "CORTES",
      cortesTitle: "Res, media res y corte pistola",
      cortes: [
        { name: "RES", weight: "42 kg aprox.", img: "salame2", feats: ["Media res entera", "Ideal para despiece propio", "Venta a carnicerías y restaurantes"] },
        { name: "1/2 RES", weight: "21 kg aprox.", img: "david", feats: ["El corte más elegido", "Rinde para cocinas medianas", "Excelente relación uso / precio"] },
        { name: "CORTE PISTOLA", weight: "18 kg aprox.", img: "chef", feats: ["Pierna trasera deshuesada", "Lista para cocina y charcutería", "Ideal para crudos y curados"] },
      ],
      salameEyebrow: "EMBUTIDO ARTESANAL",
      salameTitle: "Salame de llama",
      salameText:
        "Elaborado con 75% de carne de llama y 25% de tocino de cerdo, siguiendo el método tradicional de estacionado: curado, secado y maduración.",
      salameSpecs: [
        { k: "Proteínas", v: "20,3 g /100g — la más alta entre carnes comparadas" },
        { k: "Grasas", v: "4,3 g /100g — carne magra" },
        { k: "Colesterol", v: "29,3 mg /100g — el más bajo de la comparativa" },
      ],
      qualityEyebrow: "POR QUÉ ELEGIR CARNE DE LLAMA",
      qualityTitle: "Más proteína, menos grasa y colesterol",
      qualityRows: [
        { title: "Proteínas totales (g/100g)", items: [["Llama", 20.3], ["Bovino", 19], ["Ovino", 18], ["Porcino", 16.5], ["Ave", 18.5]] },
        { title: "Grasas (g/100g)", items: [["Llama", 4.3], ["Bovino", 13], ["Ovino", 10], ["Porcino", 22.7], ["Ave", 5.6]] },
        { title: "Colesterol (mg/100g)", items: [["Llama", 29.3], ["Bovino", 90], ["Ovino", 70], ["Porcino", 70], ["Ave", 74]] },
      ],
      gastroEyebrow: "EN LA COCINA",
      gastroTitle: "Elegida por cocinas de alta gastronomía",
      gastroText:
        "Su textura magra y jugosa permite crudos, semicrudos y cocciones a baja temperatura, con un sabor suave y delicado.",
    },
    contacto: {
      eyebrow: "CONTACTO",
      h1: "Hablemos",
      intro: "Consultas por productos, volúmenes y distribución. Respondemos por WhatsApp, email o redes.",
      formTitle: "Envianos un mensaje",
      formFields: { name: "Nombre", namePh: "Tu nombre", email: "Email", emailPh: "tu@email.com", subject: "Asunto", subjectPh: "Consulta por productos", message: "Mensaje", messagePh: "Contanos qué necesitás...", submit: "Enviar mensaje", sending: "Enviando...", success: "¡Gracias! Te vamos a responder a la brevedad.", error: "Hubo un problema al enviar. Probá de nuevo o escribinos por WhatsApp." },
      infoTitle: "Datos de contacto",
      infoItems: [
        { k: "EMAIL", v: "llamaslacandelaria@gmail.com" },
        { k: "TELÉFONO / WHATSAPP", v: "+54 9 381 401 2399" },
        { k: "INSTAGRAM", v: "@llamaslacandelaria" },
        { k: "SITIO", v: "www.llama.com.ar" },
      ],
      socialTitle: "Redes sociales",
      locEyebrow: "DÓNDE ESTAMOS",
      locTitle: "Origen en Jujuy, elaboración en Tucumán",
      locations: [
        { tag: "ORIGEN · CRÍA", title: "Cabaña La Candelaria", desc: "Cuenca de Pozuelos, Pasajes — Jujuy. Pastoril de altura a 3600 msnm." },
        { tag: "ELABORACIÓN", title: "Sala de faena y fábrica", desc: "San Miguel de Tucumán, Tucumán. Faena SENASA y valor agregado." },
        { tag: "COOPERATIVA", title: "Mi Pueblo Florecerá", desc: "Rodeo Grande, Choromoro — Tucumán. Trabajo genuino con productores locales." },
      ],
    },
    footer: {
      addr: "Cabaña La Candelaria · Cuenca de Pozuelos, Pasajes, Jujuy — 3600 msnm. Elaboración de productos en San Miguel de Tucumán.",
      siteTitle: "Sitio",
      contactTitle: "Contacto",
      legal: "© " + new Date().getFullYear() + " La Candelaria. Todos los derechos reservados.",
    },
  },

  en: {
    meta: {
      title: "La Candelaria — High-altitude llama meat",
      description:
        "Cabaña La Candelaria: 100% organic llama meat from the Jujuy highlands, with over 100 years of family tradition.",
    },
    nav: {
      inicio: "Home",
      historia: "Our Story",
      productos: "Products",
      contacto: "Contact",
      tagline: "LLAMA RANCH · JUJUY, ARGENTINA",
    },
    common: {
      ctaProducts: "See products",
      ctaHistory: "Discover our story",
      skipToContent: "Skip to content",
    },
    home: {
      eyebrow: "HIGH-ALTITUDE RANCHING · OVER 100 YEARS IN THE HIGHLANDS",
      h1: ["High-altitude llama", "meat, raised the way", "it's always been."],
      intro:
        "Cabaña La Candelaria produces 100% organic llama meat in the Cuenca de Pozuelos, Jujuy, 3,600 m above sea level. Extensive, pastoral ranching on the same land our grandparents worked.",
      stats: [
        { num: "100+", label: "years of tradition" },
        { num: "3600m", label: "altitude" },
        { num: "1st", label: "SENASA-certified plant in the country" },
      ],
      historyEyebrow: "OUR STORY",
      historyTitle: "From the Jujuy highlands to the table",
      historyText1:
        "It all began in 1950, with the marriage of our grandparents Primitivo Alfonso Maidana and Julia Marcelina Calizaya, daughter of Victoriano Calizaya — the breeder who, in the early 20th century, crossed alpacas from Oruro with llamas from the Jujuy highlands, giving rise to the Argentine llama.",
      historyText2:
        "Today we still work the same land, with agroecological management, bringing generations of work to kitchens across the country.",
      historyLink: "Read our full story",
      productsEyebrow: "OUR PRODUCTS",
      productsTitle: "Llama meat cuts and cured products",
      products: [
        { name: "WHOLE CARCASS", weight: "approx. 42 kg", desc: "Whole carcass, for butchers and restaurants that handle their own cutting.", img: "salame2" },
        { name: "HALF CARCASS", weight: "approx. 21 kg", desc: "The cut most chosen by professional kitchens nationwide.", img: "david" },
        { name: "BONELESS LEG", weight: "approx. 18 kg", desc: "Boneless hind leg, ready for the kitchen or charcuterie.", img: "salame3" },
        { name: "LLAMA SALAMI", weight: "Sold by weight", desc: "75% llama meat and 25% pork fat, cured the traditional way.", img: "salame1" },
      ],
      quote: "A lean, juicy meat with a delicate flavor — perfect for raw, cured, or low-temperature preparations.",
      quoteAuthor: "Chosen by fine-dining kitchens across Argentina",
    },
    historia: {
      eyebrow: "OUR STORY",
      h1a: "Four generations",
      h1b: "caring for the same land",
      introText:
        "We are a family devoted to raising llamas in the Jujuy highlands for over a century. David Alfonso Dentice, a Food Science and Technology graduate, now continues the work of his grandparents and great-grandparents, adding value to llama meat and bringing it to kitchens across the country.",
      timelineEyebrow: "TIMELINE",
      timelineTitle: "Over 100 years in the making",
      events: [
        {
          year: "Early 20th century",
          title: "The origin of the Argentine llama",
          desc: "Victoriano Calizaya, a camelid trader and breeder, made the first cross between alpacas from Oruro (Bolivia) and llamas from the Jujuy highlands. That cross gave rise to the Argentine llama, recognized worldwide.",
        },
        {
          year: "1950",
          title: "Cabaña La Candelaria is founded",
          desc: "Primitivo Alfonso Maidana and Julia Marcelina Calizaya — Victoriano's daughter — marry and found the family ranch in the Cuenca de Pozuelos, 3,600 m above sea level, in northern Jujuy.",
        },
        {
          year: "2006",
          title: "International recognition",
          desc: "Our llamas' genetics win 1st and 2nd prize at the 4th World Camelid Congress (Catamarca) and national awards at the Andean Llama Fair.",
        },
        {
          year: "2018",
          title: "First SENASA slaughter permit in the country",
          desc: "We secured — for the first time in Argentine history — the SENASA llama slaughter permit, at the Bella Vista plant (Tucumán), owned by the Cooperativa Agropecuaria 20 de Junio.",
        },
        {
          year: "2021",
          title: "Added value and genuine work",
          desc: "We opened a cured-meats production facility in Tucumán and formed the Mi Pueblo Florecerá cooperative with producers from Rodeo Grande, reintroducing llamas to the region and creating work for women and young people.",
        },
      ],
      impactEyebrow: "MI PUEBLO FLORECERÁ",
      impactTitle: "A cooperative bringing llamas back to the land",
      impactText:
        "In Rodeo Grande, Choromoro (Tucumán), we work with local producers to reintroduce llamas to the region, train local shearers, and build our own slaughter facility — creating genuine work for women and young people.",
    },
    productos: {
      eyebrow: "OUR PRODUCTS",
      h1: "Llama meat and cured products",
      intro:
        "100% organic, from extensive, pastoral ranching in the Jujuy highlands at 3,600 m. Sold as whole carcass, half carcass, boneless leg, and artisanal salami.",
      cortesEyebrow: "CUTS",
      cortesTitle: "Whole carcass, half carcass and boneless leg",
      cortes: [
        { name: "WHOLE CARCASS", weight: "approx. 42 kg", img: "salame2", feats: ["Whole carcass", "Ideal for your own cutting", "Sold to butchers and restaurants"] },
        { name: "HALF CARCASS", weight: "approx. 21 kg", img: "david", feats: ["The most popular cut", "Right-sized for mid-size kitchens", "Excellent value"] },
        { name: "BONELESS LEG", weight: "approx. 18 kg", img: "chef", feats: ["Boneless hind leg", "Ready for kitchen or charcuterie", "Ideal for raw and cured preparations"] },
      ],
      salameEyebrow: "ARTISANAL CURED MEAT",
      salameTitle: "Llama salami",
      salameText:
        "Made with 75% llama meat and 25% pork fat, following the traditional curing method: curing, drying and aging.",
      salameSpecs: [
        { k: "Protein", v: "20.3 g /100g — the highest among the compared meats" },
        { k: "Fat", v: "4.3 g /100g — a lean meat" },
        { k: "Cholesterol", v: "29.3 mg /100g — the lowest in the comparison" },
      ],
      qualityEyebrow: "WHY CHOOSE LLAMA MEAT",
      qualityTitle: "More protein, less fat and cholesterol",
      qualityRows: [
        { title: "Total protein (g/100g)", items: [["Llama", 20.3], ["Beef", 19], ["Lamb", 18], ["Pork", 16.5], ["Poultry", 18.5]] },
        { title: "Fat (g/100g)", items: [["Llama", 4.3], ["Beef", 13], ["Lamb", 10], ["Pork", 22.7], ["Poultry", 5.6]] },
        { title: "Cholesterol (mg/100g)", items: [["Llama", 29.3], ["Beef", 90], ["Lamb", 70], ["Pork", 70], ["Poultry", 74]] },
      ],
      gastroEyebrow: "IN THE KITCHEN",
      gastroTitle: "Chosen by fine-dining kitchens",
      gastroText:
        "Its lean, juicy texture works beautifully raw, cured, or slow-cooked at low temperatures, with a mild, delicate flavor.",
    },
    contacto: {
      eyebrow: "CONTACT",
      h1: "Let's talk",
      intro: "Questions about products, volumes and distribution. We reply via WhatsApp, email or social media.",
      formTitle: "Send us a message",
      formFields: { name: "Name", namePh: "Your name", email: "Email", emailPh: "you@email.com", subject: "Subject", subjectPh: "Product inquiry", message: "Message", messagePh: "Tell us what you need...", submit: "Send message", sending: "Sending...", success: "Thanks! We'll get back to you shortly.", error: "Something went wrong. Please try again or message us on WhatsApp." },
      infoTitle: "Contact details",
      infoItems: [
        { k: "EMAIL", v: "llamaslacandelaria@gmail.com" },
        { k: "PHONE / WHATSAPP", v: "+54 9 381 401 2399" },
        { k: "INSTAGRAM", v: "@llamaslacandelaria" },
        { k: "WEBSITE", v: "www.llama.com.ar" },
      ],
      socialTitle: "Social media",
      locEyebrow: "WHERE WE ARE",
      locTitle: "Raised in Jujuy, produced in Tucumán",
      locations: [
        { tag: "ORIGIN · RANCH", title: "Cabaña La Candelaria", desc: "Cuenca de Pozuelos, Pasajes — Jujuy. High-altitude pastoral ranching, 3,600 m." },
        { tag: "PRODUCTION", title: "Slaughter and processing facility", desc: "San Miguel de Tucumán, Tucumán. SENASA-certified, added value." },
        { tag: "COOPERATIVE", title: "Mi Pueblo Florecerá", desc: "Rodeo Grande, Choromoro — Tucumán. Genuine work with local producers." },
      ],
    },
    footer: {
      addr: "Cabaña La Candelaria · Cuenca de Pozuelos, Pasajes, Jujuy — 3,600 m. Products made in San Miguel de Tucumán.",
      siteTitle: "Site",
      contactTitle: "Contact",
      legal: "© " + new Date().getFullYear() + " La Candelaria. All rights reserved.",
    },
  },

  it: {
    meta: {
      title: "La Candelaria — Carne di lama d'alta quota",
      description:
        "Cabaña La Candelaria: carne di lama 100% biologica dall'altopiano di Jujuy, con oltre 100 anni di tradizione familiare.",
    },
    nav: {
      inicio: "Home",
      historia: "La Nostra Storia",
      productos: "Prodotti",
      contacto: "Contatti",
      tagline: "ALLEVAMENTO DI LAMA · JUJUY, ARGENTINA",
    },
    common: {
      ctaProducts: "Vedi i prodotti",
      ctaHistory: "Scopri la storia",
      skipToContent: "Vai al contenuto",
    },
    home: {
      eyebrow: "ALLEVAMENTO D'ALTA QUOTA · OLTRE 100 ANNI SULL'ALTOPIANO",
      h1: ["Carne di lama d'alta", "quota, allevata come", "si è sempre fatto."],
      intro:
        "Cabaña La Candelaria produce carne di lama 100% biologica nella Cuenca de Pozuelos, Jujuy, a 3.600 m s.l.m. Allevamento estensivo e pastorale, sulla stessa terra lavorata dai nostri nonni.",
      stats: [
        { num: "100+", label: "anni di storia" },
        { num: "3600m", label: "altitudine di allevamento" },
        { num: "1°", label: "macello SENASA del paese" },
      ],
      historyEyebrow: "LA NOSTRA STORIA",
      historyTitle: "Dall'altopiano di Jujuy alla tavola",
      historyText1:
        "Tutto nasce nel 1950, con il matrimonio dei nostri nonni Primitivo Alfonso Maidana e Julia Marcelina Calizaya, figlia di Victoriano Calizaya: l'allevatore che agli inizi del XX secolo incrociò alpaca di Oruro con lama dell'altopiano di Jujuy, dando origine alla lama argentina.",
      historyText2:
        "Oggi lavoriamo ancora sullo stesso territorio, con gestione agroecologica, portando questo lavoro di generazioni nelle cucine di tutto il paese.",
      historyLink: "Leggi la nostra storia completa",
      productsEyebrow: "I NOSTRI PRODOTTI",
      productsTitle: "Tagli e insaccati di carne di lama",
      products: [
        { name: "MEZZENA INTERA", weight: "42 kg circa", desc: "Mezzena intera, per macellerie e ristoranti che gestiscono il proprio sezionamento.", img: "salame2" },
        { name: "MEZZA MEZZENA", weight: "21 kg circa", desc: "Il taglio più scelto dalle cucine professionali di tutto il paese.", img: "david" },
        { name: "TAGLIO COSCIA", weight: "18 kg circa", desc: "Coscia posteriore disossata, pronta per cucina e salumeria.", img: "salame3" },
        { name: "SALAME DI LAMA", weight: "Vendita al peso", desc: "75% carne di lama e 25% pancetta di maiale. Stagionato secondo il metodo tradizionale.", img: "salame1" },
      ],
      quote: "Una carne magra e succosa, dal sapore delicato: perfetta per crudi, semicrudi e cotture a bassa temperatura.",
      quoteAuthor: "Scelta dalle cucine dell'alta gastronomia in tutta l'Argentina",
    },
    historia: {
      eyebrow: "LA NOSTRA STORIA",
      h1a: "Quattro generazioni",
      h1b: "sulla stessa terra",
      introText:
        "Siamo una famiglia dedicata all'allevamento di lama sull'altopiano di Jujuy da oltre un secolo. David Alfonso Dentice, laureato in Scienze e Tecnologie Alimentari, continua oggi il lavoro dei suoi nonni e bisnonni, dando valore aggiunto alla carne di lama e portandola nelle cucine di tutto il paese.",
      timelineEyebrow: "LINEA DEL TEMPO",
      timelineTitle: "Un percorso di oltre 100 anni",
      events: [
        {
          year: "Inizio del XX secolo",
          title: "L'origine della lama argentina",
          desc: "Victoriano Calizaya, commerciante e allevatore di camelidi, realizza il primo incrocio tra alpaca di Oruro (Bolivia) e lama dell'altopiano di Jujuy. Da quell'incrocio nasce la lama argentina, riconosciuta in tutto il mondo.",
        },
        {
          year: "1950",
          title: "Nasce Cabaña La Candelaria",
          desc: "Primitivo Alfonso Maidana e Julia Marcelina Calizaya — figlia di Victoriano — si sposano e fondano l'allevamento di famiglia nella Cuenca de Pozuelos, a 3.600 m s.l.m., nel nord di Jujuy.",
        },
        {
          year: "2006",
          title: "Riconoscimento internazionale",
          desc: "La genetica delle nostre lama ottiene il 1° e 2° premio al IV Congresso Mondiale dei Camelidi (Catamarca) e premi nazionali alla Fiera Andina della Lama.",
        },
        {
          year: "2018",
          title: "Primo permesso di macellazione SENASA del paese",
          desc: "Otteniamo, per la prima volta nella storia argentina, il permesso di macellazione della lama da parte del SENASA, presso il Frigorifico Bella Vista (Tucumán), della Cooperativa Agropecuaria 20 de Junio.",
        },
        {
          year: "2021",
          title: "Valore aggiunto e lavoro genuino",
          desc: "Apriamo lo stabilimento di produzione di insaccati a Tucumán e fondiamo la cooperativa Mi Pueblo Florecerá insieme ai produttori di Rodeo Grande, per reintrodurre la lama nella regione e creare lavoro per donne e giovani.",
        },
      ],
      impactEyebrow: "MI PUEBLO FLORECERÁ",
      impactTitle: "Una cooperativa che riporta le lama sul territorio",
      impactText:
        "A Rodeo Grande, Choromoro (Tucumán), lavoriamo insieme ai produttori locali per reintrodurre la lama nella regione, formare i tosatori locali e costruire un proprio stabilimento di macellazione, generando lavoro genuino per donne e giovani.",
    },
    productos: {
      eyebrow: "I NOSTRI PRODOTTI",
      h1: "Carne di lama e insaccati",
      intro:
        "100% biologica, da allevamento estensivo e pastorale sull'altopiano di Jujuy a 3.600 m. Vendita a mezzena intera, mezza mezzena, taglio coscia e salame artigianale.",
      cortesEyebrow: "TAGLI",
      cortesTitle: "Mezzena, mezza mezzena e taglio coscia",
      cortes: [
        { name: "MEZZENA INTERA", weight: "42 kg circa", img: "salame2", feats: ["Mezzena intera", "Ideale per sezionamento proprio", "Vendita a macellerie e ristoranti"] },
        { name: "MEZZA MEZZENA", weight: "21 kg circa", img: "david", feats: ["Il taglio più scelto", "Adatto a cucine di media grandezza", "Ottimo rapporto uso/prezzo"] },
        { name: "TAGLIO COSCIA", weight: "18 kg circa", img: "chef", feats: ["Coscia posteriore disossata", "Pronta per cucina e salumeria", "Ideale per crudi e stagionati"] },
      ],
      salameEyebrow: "INSACCATO ARTIGIANALE",
      salameTitle: "Salame di lama",
      salameText:
        "Realizzato con 75% carne di lama e 25% pancetta di maiale, secondo il metodo tradizionale di stagionatura: cura, essiccazione e maturazione.",
      salameSpecs: [
        { k: "Proteine", v: "20,3 g /100g — la più alta tra le carni confrontate" },
        { k: "Grassi", v: "4,3 g /100g — carne magra" },
        { k: "Colesterolo", v: "29,3 mg /100g — il più basso del confronto" },
      ],
      qualityEyebrow: "PERCHÉ SCEGLIERE LA CARNE DI LAMA",
      qualityTitle: "Più proteine, meno grassi e colesterolo",
      qualityRows: [
        { title: "Proteine totali (g/100g)", items: [["Lama", 20.3], ["Bovino", 19], ["Ovino", 18], ["Suino", 16.5], ["Pollame", 18.5]] },
        { title: "Grassi (g/100g)", items: [["Lama", 4.3], ["Bovino", 13], ["Ovino", 10], ["Suino", 22.7], ["Pollame", 5.6]] },
        { title: "Colesterolo (mg/100g)", items: [["Lama", 29.3], ["Bovino", 90], ["Ovino", 70], ["Suino", 70], ["Pollame", 74]] },
      ],
      gastroEyebrow: "IN CUCINA",
      gastroTitle: "Scelta dalle cucine dell'alta gastronomia",
      gastroText:
        "La sua consistenza magra e succosa si presta a crudi, semicrudi e cotture a bassa temperatura, con un sapore delicato.",
    },
    contacto: {
      eyebrow: "CONTATTI",
      h1: "Parliamone",
      intro: "Richieste su prodotti, volumi e distribuzione. Rispondiamo via WhatsApp, email o social.",
      formTitle: "Inviaci un messaggio",
      formFields: { name: "Nome", namePh: "Il tuo nome", email: "Email", emailPh: "tu@email.com", subject: "Oggetto", subjectPh: "Richiesta informazioni prodotti", message: "Messaggio", messagePh: "Raccontaci di cosa hai bisogno...", submit: "Invia messaggio", sending: "Invio in corso...", success: "Grazie! Ti risponderemo al più presto.", error: "Si è verificato un problema. Riprova o scrivici su WhatsApp." },
      infoTitle: "Dati di contatto",
      infoItems: [
        { k: "EMAIL", v: "llamaslacandelaria@gmail.com" },
        { k: "TELEFONO / WHATSAPP", v: "+54 9 381 401 2399" },
        { k: "INSTAGRAM", v: "@llamaslacandelaria" },
        { k: "SITO", v: "www.llama.com.ar" },
      ],
      socialTitle: "Social",
      locEyebrow: "DOVE SIAMO",
      locTitle: "Origine a Jujuy, produzione a Tucumán",
      locations: [
        { tag: "ORIGINE · ALLEVAMENTO", title: "Cabaña La Candelaria", desc: "Cuenca de Pozuelos, Pasajes — Jujuy. Allevamento pastorale d'alta quota, 3.600 m." },
        { tag: "PRODUZIONE", title: "Stabilimento di macellazione", desc: "San Miguel de Tucumán, Tucumán. Certificazione SENASA, valore aggiunto." },
        { tag: "COOPERATIVA", title: "Mi Pueblo Florecerá", desc: "Rodeo Grande, Choromoro — Tucumán. Lavoro genuino con produttori locali." },
      ],
    },
    footer: {
      addr: "Cabaña La Candelaria · Cuenca de Pozuelos, Pasajes, Jujuy — 3.600 m. Prodotti realizzati a San Miguel de Tucumán.",
      siteTitle: "Sito",
      contactTitle: "Contatti",
      legal: "© " + new Date().getFullYear() + " La Candelaria. Tutti i diritti riservati.",
    },
  },
} as const;
