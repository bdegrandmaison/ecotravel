const mockDestinations = [
  {
    id: 1,
    name: "Nettoyer la plage de Nice",
    description: "Ramasser les déchets sur la plage de Nice.",
    location: "Nice, France",
    image: {
      src: "/images/nice.jpg",
      altText: "Plage de Nice",
    },
    price: 50,
    startDate: "2024-08-01",
    endDate: "2024-08-07",
    maxParticipants: 20,
    currentParticipants: 10,
    summary: {
      why: "Les plages de Nice sont des destinations touristiques populaires, mais elles souffrent de la pollution par les déchets plastiques. Nettoyer ces plages aide à préserver l'environnement et à protéger la faune marine.",
      action:
        "Vous passerez vos journées à ramasser les déchets sur les plages, à les trier pour le recyclage et à sensibiliser les touristes à l'importance de garder les plages propres.",
    },
    additionalImages: [
      {
        src: "/images/nice1.jpg",
        altText: "Vue aérienne de la plage de Nice",
      },
      {
        src: "/images/nice2.jpg",
        altText: "Volontaires ramassant des déchets à Nice",
      },
      {
        src: "/images/nice3.jpg",
        altText: "Coucher de soleil sur la plage de Nice",
      },
    ],
  },
  {
    id: 2,
    name: "Plantation d'arbres à Lyon",
    description: "Participer à une campagne de plantation d'arbres.",
    location: "Lyon, France",
    image: {
      src: "/images/lyon.jpg",
      altText: "Parc à Lyon",
    },
    price: 30,
    startDate: "2024-09-15",
    endDate: "2024-09-22",
    maxParticipants: 15,
    currentParticipants: 5,
    summary: {
      why: "La plantation d'arbres est essentielle pour combattre le changement climatique et améliorer la qualité de l'air. Les arbres fournissent également des habitats pour de nombreuses espèces.",
      action:
        "Vous serez impliqué dans la plantation de jeunes arbres dans les parcs urbains de Lyon, en aidant à creuser des trous, planter des arbres et les arroser.",
    },
    additionalImages: [
      { src: "/images/lyon1.jpg", altText: "Plantation d'arbres à Lyon" },
      {
        src: "/images/lyon2.jpg",
        altText: "Volontaires plantant des arbres à Lyon",
      },
      { src: "/images/lyon3.jpg", altText: "Jeunes arbres plantés à Lyon" },
    ],
  },
  {
    id: 3,
    name: "Nettoyage de la Seine à Paris",
    description: "Ramasser les déchets dans et autour de la Seine.",
    location: "Paris, France",
    image: {
      src: "/images/paris.jpg",
      altText: "Bord de la Seine à Paris",
    },
    price: 40,
    startDate: "2024-07-20",
    endDate: "2024-07-27",
    maxParticipants: 25,
    currentParticipants: 18,
    summary: {
      why: "La Seine est un symbole de Paris, mais elle est souvent polluée par des déchets qui peuvent nuire à l'écosystème aquatique. Nettoyer ses berges aide à préserver cet important cours d'eau.",
      action:
        "Vous passerez vos journées à ramasser les déchets sur les berges de la Seine et à les trier pour le recyclage, tout en sensibilisant les passants à l'importance de maintenir la rivière propre.",
    },
    additionalImages: [
      {
        src: "/images/paris1.jpg",
        altText: "Volontaires ramassant des déchets le long de la Seine",
      },
      {
        src: "/images/paris2.jpg",
        altText: "Berges de la Seine après le nettoyage",
      },
      { src: "/images/paris3.jpg", altText: "Pont sur la Seine à Paris" },
    ],
  },
  {
    id: 4,
    name: "Protection des tortues à Bali",
    description: "Aider à la protection des tortues marines.",
    location: "Bali, Indonésie",
    image: {
      src: "/images/bali.jpg",
      altText: "Plage à Bali",
    },
    price: 70,
    startDate: "2024-10-01",
    endDate: "2024-10-15",
    maxParticipants: 10,
    currentParticipants: 4,
    summary: {
      why: "Les tortues marines sont menacées par la pollution plastique et la perte d'habitat. Protéger ces créatures est crucial pour maintenir l'équilibre des écosystèmes marins.",
      action:
        "Vous aiderez à surveiller les plages de nidification, à protéger les nids contre les prédateurs et à relâcher les bébés tortues dans l'océan.",
    },
    additionalImages: [
      { src: "/images/bali1.jpg", altText: "Tortue marine à Bali" },
      {
        src: "/images/bali2.jpg",
        altText: "Volontaires surveillant une plage à Bali",
      },
      { src: "/images/bali3.jpg", altText: "Coucher de soleil à Bali" },
    ],
  },
  {
    id: 5,
    name: "Nettoyage des plages de Barcelone",
    description: "Ramasser les déchets sur les plages de Barcelone.",
    location: "Barcelone, Espagne",
    image: {
      src: "/images/barcelone.jpg",
      altText: "Plage de Barcelone",
    },
    price: 50,
    startDate: "2024-08-05",
    endDate: "2024-08-12",
    maxParticipants: 20,
    currentParticipants: 12,
    summary: {
      why: "Les plages de Barcelone attirent de nombreux touristes, mais elles sont souvent polluées par les déchets laissés derrière. Nettoyer ces plages aide à préserver leur beauté et à protéger la faune marine.",
      action:
        "Vous passerez vos journées à ramasser les déchets sur les plages, à les trier pour le recyclage et à sensibiliser les touristes à l'importance de garder les plages propres.",
    },
    additionalImages: [
      {
        src: "/images/barcelone1.jpg",
        altText: "Volontaires nettoyant une plage à Barcelone",
      },
      {
        src: "/images/barcelone2.jpg",
        altText: "Déchets ramassés sur une plage de Barcelone",
      },
      {
        src: "/images/barcelone3.jpg",
        altText: "Plage de Barcelone au coucher du soleil",
      },
    ],
  },
  {
    id: 6,
    name: "Reforestation en Amazonie",
    description: "Participer à la reforestation en Amazonie.",
    location: "Amazonie, Brésil",
    image: {
      src: "/images/amazonie.jpg",
      altText: "Forêt amazonienne",
    },
    price: 80,
    startDate: "2024-11-01",
    endDate: "2024-11-14",
    maxParticipants: 10,
    currentParticipants: 6,
    summary: {
      why: "L'Amazonie est souvent appelée le poumon de la Terre, mais elle est gravement menacée par la déforestation. Replanter des arbres aide à restaurer l'écosystème et à lutter contre le changement climatique.",
      action:
        "Vous aiderez à planter des arbres, à entretenir les jeunes plants et à surveiller la santé de la forêt en collaboration avec les communautés locales.",
    },
    additionalImages: [
      {
        src: "/images/amazonie1.jpg",
        altText: "Plantation d'arbres en Amazonie",
      },
      {
        src: "/images/amazonie2.jpg",
        altText: "Jeunes arbres plantés en Amazonie",
      },
      {
        src: "/images/amazonie3.jpg",
        altText: "Vue aérienne de la forêt amazonienne",
      },
    ],
  },
  {
    id: 7,
    name: "Nettoyage du parc Yosemite",
    description: "Aider à nettoyer le parc national de Yosemite.",
    location: "Yosemite, États-Unis",
    image: {
      src: "/images/yosemite.jpg",
      altText: "Parc national de Yosemite",
    },
    price: 60,
    startDate: "2024-07-10",
    endDate: "2024-07-17",
    maxParticipants: 30,
    currentParticipants: 20,
    summary: {
      why: "Le parc national de Yosemite est l'un des joyaux naturels des États-Unis, mais il est souvent pollué par les déchets des visiteurs. Nettoyer le parc aide à préserver sa beauté naturelle et à protéger sa faune.",
      action:
        "Vous ramasserez les déchets le long des sentiers, des aires de pique-nique et des rivières, et participerez à des campagnes de sensibilisation auprès des visiteurs du parc.",
    },
    additionalImages: [
      {
        src: "/images/yosemite1.jpg",
        altText: "Volontaires nettoyant le parc Yosemite",
      },
      {
        src: "/images/yosemite2.jpg",
        altText: "Déchets ramassés dans le parc Yosemite",
      },
      {
        src: "/images/yosemite3.jpg",
        altText: "Cascade dans le parc Yosemite",
      },
    ],
  },
  {
    id: 8,
    name: "Protection des éléphants au Kenya",
    description: "Participer à la protection des éléphants.",
    location: "Kenya",
    image: {
      src: "/images/kenya.jpg",
      altText: "Éléphants au Kenya",
    },
    price: 90,
    startDate: "2024-12-01",
    endDate: "2024-12-15",
    maxParticipants: 8,
    currentParticipants: 5,
    summary: {
      why: "Les éléphants sont menacés par le braconnage et la perte d'habitat. Protéger ces majestueux animaux est crucial pour la biodiversité et les écosystèmes.",
      action:
        "Vous aiderez à surveiller les éléphants, à collecter des données sur leur comportement et à participer à des initiatives de sensibilisation pour protéger les éléphants du braconnage.",
    },
    additionalImages: [
      {
        src: "/images/kenya1.jpg",
        altText: "Volontaires surveillant des éléphants au Kenya",
      },
      {
        src: "/images/kenya2.jpg",
        altText: "Éléphants dans la savane kenyane",
      },
      {
        src: "/images/kenya3.jpg",
        altText: "Éléphants marchant dans la savane",
      },
    ],
  },
  {
    id: 9,
    name: "Nettoyage du lac Baïkal",
    description: "Ramasser les déchets autour du lac Baïkal.",
    location: "Sibérie, Russie",
    image: {
      src: "/images/baikal.jpg",
      altText: "Lac Baïkal",
    },
    price: 70,
    startDate: "2024-09-01",
    endDate: "2024-09-10",
    maxParticipants: 12,
    currentParticipants: 7,
    summary: {
      why: "Le lac Baïkal est le plus ancien et le plus profond lac du monde, mais il est menacé par la pollution. Nettoyer ses rives aide à préserver ce trésor naturel unique.",
      action:
        "Vous ramasserez les déchets le long des rives du lac, participerez à des projets de recyclage et aiderez à sensibiliser les communautés locales à l'importance de protéger le lac Baïkal.",
    },
    additionalImages: [
      {
        src: "/images/baikal1.jpg",
        altText: "Volontaires nettoyant le lac Baïkal",
      },
      {
        src: "/images/baikal2.jpg",
        altText: "Déchets ramassés autour du lac Baïkal",
      },
      { src: "/images/baikal3.jpg", altText: "Paysage du lac Baïkal" },
    ],
  },
  {
    id: 10,
    name: "Reforestation en Islande",
    description: "Aider à planter des arbres en Islande.",
    location: "Islande",
    image: {
      src: "/images/islande.jpg",
      altText: "Paysage en Islande",
    },
    price: 60,
    startDate: "2024-08-20",
    endDate: "2024-08-30",
    maxParticipants: 15,
    currentParticipants: 10,
    summary: {
      why: "L'Islande a perdu la plupart de ses forêts à cause de la déforestation historique. Replanter des arbres aide à restaurer les habitats naturels et à lutter contre l'érosion des sols.",
      action:
        "Vous participerez à la plantation de jeunes arbres, aiderez à entretenir les plantations existantes et apprendrez des techniques de reforestation adaptées au climat islandais.",
    },
    additionalImages: [
      {
        src: "/images/islande1.jpg",
        altText: "Volontaires plantant des arbres en Islande",
      },
      {
        src: "/images/islande2.jpg",
        altText: "Jeunes arbres plantés en Islande",
      },
      {
        src: "/images/islande3.jpg",
        altText: "Paysage de reforestation en Islande",
      },
    ],
  },
  {
    id: 11,
    name: "Nettoyage des plages de Sydney",
    description: "Ramasser les déchets sur les plages de Sydney.",
    location: "Sydney, Australie",
    image: {
      src: "/images/sydney.jpg",
      altText: "Plage à Sydney",
    },
    price: 50,
    startDate: "2024-10-10",
    endDate: "2024-10-17",
    maxParticipants: 20,
    currentParticipants: 8,
    summary: {
      why: "Les plages de Sydney sont célèbres dans le monde entier, mais elles sont souvent polluées par les déchets. Nettoyer ces plages aide à protéger la faune marine et à maintenir la beauté naturelle des côtes.",
      action:
        "Vous ramasserez les déchets sur les plages de Sydney, aiderez à trier les déchets pour le recyclage et sensibiliserez les baigneurs à l'importance de garder les plages propres.",
    },
    additionalImages: [
      {
        src: "/images/sydney1.jpg",
        altText: "Volontaires nettoyant une plage à Sydney",
      },
      {
        src: "/images/sydney2.jpg",
        altText: "Déchets ramassés sur une plage de Sydney",
      },
      {
        src: "/images/sydney3.jpg",
        altText: "Plage de Sydney au coucher du soleil",
      },
    ],
  },
  {
    id: 12,
    name: "Conservation des récifs coralliens aux Maldives",
    description: "Participer à la conservation des récifs coralliens.",
    location: "Maldives",
    image: {
      src: "/images/maldives.jpg",
      altText: "Récifs coralliens aux Maldives",
    },
    price: 100,
    startDate: "2024-11-20",
    endDate: "2024-11-30",
    maxParticipants: 10,
    currentParticipants: 4,
    summary: {
      why: "Les récifs coralliens sont essentiels pour la biodiversité marine, mais ils sont menacés par le changement climatique et la pollution. Protéger ces récifs aide à préserver de nombreux habitats marins.",
      action:
        "Vous participerez à des plongées de surveillance des récifs, aiderez à planter des coraux et travaillerez avec les communautés locales pour sensibiliser à la protection des récifs coralliens.",
    },
    additionalImages: [
      {
        src: "/images/maldives1.jpg",
        altText: "Volontaires surveillant les récifs coralliens aux Maldives",
      },
      { src: "/images/maldives2.jpg", altText: "Coraux aux Maldives" },
      { src: "/images/maldives3.jpg", altText: "Plage des Maldives" },
    ],
  },
  {
    id: 13,
    name: "Nettoyage du parc Kruger",
    description: "Aider à nettoyer le parc national Kruger.",
    location: "Parc Kruger, Afrique du Sud",
    image: {
      src: "/images/kruger.jpg",
      altText: "Parc national Kruger",
    },
    price: 70,
    startDate: "2024-09-15",
    endDate: "2024-09-25",
    maxParticipants: 12,
    currentParticipants: 6,
    summary: {
      why: "Le parc national Kruger est l'une des plus grandes réserves de faune en Afrique. Il est essentiel de le maintenir propre pour protéger les habitats naturels des nombreux animaux qui y vivent.",
      action:
        "Vous ramasserez les déchets dans le parc, participerez à des projets de recyclage et aiderez à sensibiliser les visiteurs à l'importance de préserver cet environnement naturel.",
    },
    additionalImages: [
      {
        src: "/images/kruger1.jpg",
        altText: "Volontaires nettoyant le parc Kruger",
      },
      {
        src: "/images/kruger2.jpg",
        altText: "Déchets ramassés dans le parc Kruger",
      },
      { src: "/images/kruger3.jpg", altText: "Animaux dans le parc Kruger" },
    ],
  },
  {
    id: 14,
    name: "Plantation d'arbres en Nouvelle-Zélande",
    description: "Participer à une campagne de reforestation.",
    location: "Nouvelle-Zélande",
    image: {
      src: "/images/nouvelle-zelande.jpg",
      altText: "Forêt en Nouvelle-Zélande",
    },
    price: 80,
    startDate: "2024-12-10",
    endDate: "2024-12-20",
    maxParticipants: 10,
    currentParticipants: 5,
    summary: {
      why: "La Nouvelle-Zélande a une biodiversité unique, mais elle est menacée par la déforestation. Planter des arbres aide à restaurer les habitats naturels et à protéger la faune endémique.",
      action:
        "Vous aiderez à planter des arbres indigènes, à entretenir les jeunes plants et à surveiller la santé des forêts en collaboration avec les communautés locales.",
    },
    additionalImages: [
      {
        src: "/images/nouvelle-zelande1.jpg",
        altText: "Volontaires plantant des arbres en Nouvelle-Zélande",
      },
      {
        src: "/images/nouvelle-zelande2.jpg",
        altText: "Jeunes arbres plantés en Nouvelle-Zélande",
      },
      {
        src: "/images/nouvelle-zelande3.jpg",
        altText: "Paysage de reforestation en Nouvelle-Zélande",
      },
    ],
  },
  {
    id: 15,
    name: "Nettoyage des plages de Phuket",
    description: "Ramasser les déchets sur les plages de Phuket.",
    location: "Phuket, Thaïlande",
    image: {
      src: "/images/phuket.jpg",
      altText: "Plage à Phuket",
    },
    price: 50,
    startDate: "2024-08-01",
    endDate: "2024-08-08",
    maxParticipants: 20,
    currentParticipants: 10,
    summary: {
      why: "Les plages de Phuket sont parmi les plus belles du monde, mais elles sont souvent polluées par les déchets. Nettoyer ces plages aide à préserver leur beauté naturelle et à protéger la faune marine.",
      action:
        "Vous ramasserez les déchets sur les plages de Phuket, aiderez à trier les déchets pour le recyclage et sensibiliserez les baigneurs à l'importance de garder les plages propres.",
    },
    additionalImages: [
      {
        src: "/images/phuket1.jpg",
        altText: "Volontaires nettoyant une plage à Phuket",
      },
      {
        src: "/images/phuket2.jpg",
        altText: "Déchets ramassés sur une plage de Phuket",
      },
      {
        src: "/images/phuket3.jpg",
        altText: "Plage de Phuket au coucher du soleil",
      },
    ],
  },
  {
    id: 16,
    name: "Reforestation au Canada",
    description: "Aider à planter des arbres au Canada.",
    location: "Ontario, Canada",
    image: {
      src: "/images/canada.jpg",
      altText: "Forêt au Canada",
    },
    price: 70,
    startDate: "2024-07-15",
    endDate: "2024-07-25",
    maxParticipants: 15,
    currentParticipants: 12,
    summary: {
      why: "Les forêts canadiennes sont vitales pour la biodiversité et le climat, mais elles sont menacées par la déforestation. Planter des arbres aide à restaurer ces écosystèmes importants.",
      action:
        "Vous aiderez à planter des arbres, à entretenir les jeunes plants et à surveiller la santé des forêts en collaboration avec les communautés locales.",
    },
    additionalImages: [
      {
        src: "/images/canada1.jpg",
        altText: "Volontaires plantant des arbres au Canada",
      },
      {
        src: "/images/canada2.jpg",
        altText: "Jeunes arbres plantés au Canada",
      },
      {
        src: "/images/canada3.jpg",
        altText: "Paysage de reforestation au Canada",
      },
    ],
  },
  {
    id: 17,
    name: "Nettoyage des plages de Rio de Janeiro",
    description: "Ramasser les déchets sur les plages de Rio.",
    location: "Rio de Janeiro, Brésil",
    image: {
      src: "/images/rio.jpg",
      altText: "Plage à Rio de Janeiro",
    },
    price: 60,
    startDate: "2024-09-01",
    endDate: "2024-09-08",
    maxParticipants: 25,
    currentParticipants: 18,
    summary: {
      why: "Les plages de Rio de Janeiro sont célèbres, mais elles sont souvent polluées par les déchets. Nettoyer ces plages aide à préserver leur beauté naturelle et à protéger la faune marine.",
      action:
        "Vous ramasserez les déchets sur les plages de Rio, aiderez à trier les déchets pour le recyclage et sensibiliserez les baigneurs à l'importance de garder les plages propres.",
    },
    additionalImages: [
      {
        src: "/images/rio1.jpg",
        altText: "Volontaires nettoyant une plage à Rio",
      },
      {
        src: "/images/rio2.jpg",
        altText: "Déchets ramassés sur une plage de Rio",
      },
      {
        src: "/images/rio3.jpg",
        altText: "Plage de Rio de Janeiro au coucher du soleil",
      },
    ],
  },
  {
    id: 18,
    name: "Conservation des pandas en Chine",
    description: "Aider à la conservation des pandas.",
    location: "Chine",
    image: {
      src: "/images/pandas.jpg",
      altText: "Pandas en Chine",
    },
    price: 100,
    startDate: "2024-10-05",
    endDate: "2024-10-15",
    maxParticipants: 10,
    currentParticipants: 7,
    summary: {
      why: "Les pandas sont une espèce en danger critique d'extinction, et leur protection est essentielle pour préserver la biodiversité. Participer à leur conservation aide à assurer leur survie.",
      action:
        "Vous aiderez à surveiller les pandas, à collecter des données sur leur comportement et à participer à des initiatives de sensibilisation pour protéger les pandas et leur habitat.",
    },
    additionalImages: [
      {
        src: "/images/pandas1.jpg",
        altText: "Volontaires surveillant des pandas en Chine",
      },
      {
        src: "/images/pandas2.jpg",
        altText: "Pandas dans leur habitat naturel",
      },
      {
        src: "/images/pandas3.jpg",
        altText: "Jeune panda mangeant du bambou",
      },
    ],
  },
  {
    id: 19,
    name: "Nettoyage des plages de Cancún",
    description: "Ramasser les déchets sur les plages de Cancún.",
    location: "Cancún, Mexique",
    image: {
      src: "/images/cancun.jpg",
      altText: "Plage à Cancún",
    },
    price: 50,
    startDate: "2024-11-01",
    endDate: "2024-11-10",
    maxParticipants: 20,
    currentParticipants: 10,
    summary: {
      why: "Les plages de Cancún attirent de nombreux touristes, mais elles sont souvent polluées par les déchets. Nettoyer ces plages aide à préserver leur beauté naturelle et à protéger la faune marine.",
      action:
        "Vous ramasserez les déchets sur les plages de Cancún, aiderez à trier les déchets pour le recyclage et sensibiliserez les baigneurs à l'importance de garder les plages propres.",
    },
    additionalImages: [
      {
        src: "/images/cancun1.jpg",
        altText: "Volontaires nettoyant une plage à Cancún",
      },
      {
        src: "/images/cancun2.jpg",
        altText: "Déchets ramassés sur une plage de Cancún",
      },
      {
        src: "/images/cancun3.jpg",
        altText: "Plage de Cancún au coucher du soleil",
      },
    ],
  },
  {
    id: 20,
    name: "Reforestation en Inde",
    description: "Participer à une campagne de reforestation en Inde.",
    location: "Inde",
    image: {
      src: "/images/inde.jpg",
      altText: "Forêt en Inde",
    },
    price: 60,
    startDate: "2024-08-15",
    endDate: "2024-08-25",
    maxParticipants: 15,
    currentParticipants: 10,
    summary: {
      why: "L'Inde est l'un des pays les plus peuplés du monde, et la déforestation y est un problème majeur. Planter des arbres aide à restaurer les écosystèmes et à lutter contre la pollution.",
      action:
        "Vous aiderez à planter des arbres, à entretenir les jeunes plants et à surveiller la santé des forêts en collaboration avec les communautés locales.",
    },
    additionalImages: [
      {
        src: "/images/inde1.jpg",
        altText: "Volontaires plantant des arbres en Inde",
      },
      {
        src: "/images/inde2.jpg",
        altText: "Jeunes arbres plantés en Inde",
      },
      {
        src: "/images/inde3.jpg",
        altText: "Paysage de reforestation en Inde",
      },
    ],
  },
];

export default mockDestinations;
