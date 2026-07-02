import entradasImg from "../assets/categories/entradas.jpg";
import alitasImg from "../assets/categories/alitas.jpg";
import arrocesImg from "../assets/categories/arroces.jpg";
import rollosNaturalesImg from "../assets/categories/rollos-naturales.jpg";
import rollosTropicalesImg from "../assets/categories/rollos-tropicales.jpg";
import especialesImg from "../assets/categories/especiales.jpg";
import rollosEmpanizadosImg from "../assets/categories/rollos-empanizados.jpg";
import rollosHorneadosImg from "../assets/categories/rollos-horneados.jpg";
import extrasImg from "../assets/categories/extras.jpg";
import bebidasImg from "../assets/categories/bebidas.jpg";

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
}

export interface MenuCategory {
  id: string;
  label: string;
  icon: string;
  image: string;
  note?: string;
  items: MenuItem[];
}

export const menu: MenuCategory[] = [
  {
    id: "entradas",
    label: "Entradas",
    icon: "🍤",
    image: entradasImg,
    items: [
      {
        id: "chiles-empanizados",
        name: "Chiles Empanizados",
        description:
          "Chile caribe relleno de philadelphia, queso manchego y camarón empanizado.",
        price: 70,
      },
      {
        id: "dedos-de-queso",
        name: "Dedos de Queso",
        description: "4 piezas de dedos de queso manchego empanizado.",
        price: 60,
      },
      {
        id: "kushiague-queso-platano",
        name: "Kushiague Queso y Plátano",
        description:
          "Trocitos de plátano macho y queso manchego empanizado bañado en salsa de anguila.",
        price: 70,
      },
      {
        id: "esferas-del-dragon",
        name: "Esferas del Dragón",
        description: "6 bolitas de arroz rellenas de philadelphia y camarón empanizado.",
        price: 75,
      },
      {
        id: "bomba-especial",
        name: "Bomba Especial",
        description:
          "Bola de arroz rellena de philadelphia, tampico, carne, camarón y aguacate empanizado.",
        price: 90,
      },
      {
        id: "rollito-de-camaron",
        name: "Rollito de Camarón",
        description: "Tortilla de harina rellena de philadelphia y camarón.",
        price: 30,
      },
      {
        id: "dedos-de-camaron",
        name: "Dedos de Camarón",
        description: "4 piezas de camarón rellenas de philadelphia y queso manchego empanizado.",
        price: 70,
      },
      {
        id: "camarones-kanikama",
        name: "Camarones Kanikama",
        description:
          "4 piezas de camarón rellenas de philadelphia empanizado. Encima: spicy de kanikama.",
        price: 85,
      },
    ],
  },
  {
    id: "alitas",
    label: "Alitas",
    icon: "🍗",
    image: alitasImg,
    note: "Salsas: BBQ, Búfalo, Mango Habanero, BBQ Hot, Salsa de Fresa, Lemon Pepper.",
    items: [
      {
        id: "alitas-10pz",
        name: "Orden de Alitas (10pz)",
        description: "Acompañado c/ papas, aderezo ranch y vegetales.",
        price: 120,
      },
      {
        id: "alitas-20pz",
        name: "Orden de Alitas (20pz)",
        description: "Acompañado c/ papas, aderezo ranch y vegetales.",
        price: 210,
      },
      {
        id: "alitas-30pz",
        name: "Orden de Alitas (30pz)",
        description: "Acompañado c/ papas, aderezo ranch y vegetales.",
        price: 280,
      },
      {
        id: "orden-boneless",
        name: "Orden de Boneless",
        description: "Acompañado c/ papas, aderezo ranch y vegetales.",
        price: 100,
      },
      {
        id: "orden-papas",
        name: "Orden de Papas",
        price: 65,
      },
    ],
  },
  {
    id: "arroces",
    label: "Arroces",
    icon: "🍚",
    image: arrocesImg,
    items: [
      {
        id: "yakimeshi-sencillo",
        name: "Yakimeshi Sencillo",
        description: "Arroz frito, zanahoria, calabaza, carne y pollo.",
        price: 75,
      },
      {
        id: "yakimeshi-especial",
        name: "Yakimeshi Especial",
        description:
          "Arroz frito, zanahoria y calabaza. Encima: salsa de anguila, tampico y philadelphia coronado con camarón empanizado, aguacate y furikake.",
        price: 95,
      },
      {
        id: "yakimeshi-mixto",
        name: "Yakimeshi Mixto",
        description:
          "Arroz frito, zanahoria, calabaza, res, pollo y tocino. Encima: tampico, philadelphia coronado con camarón empanizado, aguacate y furikake.",
        price: 100,
      },
      {
        id: "gohan-sencillo",
        name: "Gohan Sencillo",
        description: "Arroz blanco, tampico, philadelphia, aguacate y furikake.",
        price: 70,
      },
      {
        id: "gohan-especial",
        name: "Gohan Especial",
        description:
          "Arroz blanco, tampico, philadelphia, pollo, carne, camarón, aguacate, salsa de anguila y furikake.",
        price: 90,
      },
      {
        id: "gohan-super-especial",
        name: "Gohan Super Especial",
        description:
          "Arroz blanco, tampico, philadelphia, carne, pollo coronado con camarón empanizado, aguacate y furikake.",
        price: 95,
      },
      {
        id: "gohan-hot",
        name: "Gohan Hot",
        description:
          "Arroz blanco, tampico y philadelphia. Encima: spicy horneado de camarón, aguacate bañado en salsa de anguila y ajonjolí.",
        price: 100,
      },
    ],
  },
  {
    id: "rollos-naturales",
    label: "Rollos Naturales",
    icon: "🍣",
    image: rollosNaturalesImg,
    items: [
      {
        id: "california-roll",
        name: "California Roll",
        description: "Por dentro: philadelphia, aguacate, pepino y camarón. Afuera: ajonjolí.",
        price: 100,
      },
      {
        id: "philadelphia-roll",
        name: "Philadelphia Roll",
        description: "Por dentro: aguacate, pepino y camarón. Afuera: philadelphia y ajonjolí.",
        price: 100,
      },
      {
        id: "veggie-roll",
        name: "Veggie Roll",
        description:
          "Por dentro: philadelphia, zanahoria, pepino y aguacate. Afuera: ajonjolí.",
        price: 80,
      },
      {
        id: "eby-oshi",
        name: "Eby Oshi",
        description:
          "Por dentro: camarón empanizado y pepino. Afuera: philadelphia, aguacate y camarón. Encima: tampico.",
        price: 100,
      },
      {
        id: "gusano-roll",
        name: "Gusano Roll",
        description:
          "Por dentro: camarón empanizado, surimi y pepino. Afuera: philadelphia, tampico, aguacate y masago.",
        price: 100,
      },
      {
        id: "nori-roll",
        name: "Nori Roll",
        description: "Por dentro: philadelphia, aguacate, pepino y camarón. Alga por fuera.",
        price: 100,
      },
      {
        id: "avocado-roll",
        name: "Avocado Roll",
        description: "Por dentro: camarón, surimi y pepino. Afuera: philadelphia y aguacate.",
        price: 100,
      },
      {
        id: "akami-roll",
        name: "Akami Roll",
        description: "Por dentro: aguacate, pepino y camarón. Afuera: philadelphia y surimi.",
        price: 100,
      },
      {
        id: "salmon-roll",
        name: "Salmon Roll",
        description:
          "Por dentro: aguacate, pepino y camarón. Afuera: philadelphia y salmón. Encima: tampico y salsa de anguila.",
        price: 105,
      },
      {
        id: "casu-roll",
        name: "Casu Roll",
        description:
          "Por dentro: surimi, pepino y aguacate. Afuera: philadelphia y camarón. Encima: tampico.",
        price: 100,
      },
    ],
  },
  {
    id: "rollos-tropicales",
    label: "Rollos Tropicales",
    icon: "🍍",
    image: rollosTropicalesImg,
    items: [
      {
        id: "banana-roll",
        name: "Banana Roll",
        description:
          "Por dentro: philadelphia, aguacate y camarón empanizado. Afuera: plátano macho bañado en salsa de anguila.",
        price: 90,
      },
      {
        id: "fresita-roll",
        name: "Fresita Roll",
        description:
          "Por dentro: aguacate y surimi capeado. Afuera: philadelphia, fresa. Encima: trocitos de fresa bañado en salsa de fresa y shichimi.",
        price: 90,
      },
      {
        id: "manguito-especial",
        name: "Manguito Especial",
        description:
          "Por dentro: aguacate, camarón empanizado. Afuera: philadelphia y mango. Encima: trocitos de mango bañado en salsa de mango y shichimi.",
        price: 95,
      },
    ],
  },
  {
    id: "especiales",
    label: "Especiales",
    icon: "⭐",
    image: especialesImg,
    items: [
      {
        id: "gomez-especial",
        name: "Gomez Especial",
        description:
          "Por dentro: philadelphia, aguacate, camarón y pulpo empanizado. Encima: queso manchego gratinado, tocino, coronado con camarones roca bañado en aderezo roca, salsa de anguila y cebollín.",
        price: 145,
      },
      {
        id: "crab-roll",
        name: "Crab Roll",
        description:
          "Por dentro: aguacate, pepino y camarón. Afuera: philadelphia y salmón. Encima: spicy de kanikama.",
        price: 135,
      },
      {
        id: "sensei-roll",
        name: "Sensei Roll",
        description:
          "Por dentro: aguacate, pepino, camarón y callo. Afuera: philadelphia, camarón y salmón. Encima: spicy de tampico, camarón, callo, salmón y furikake.",
        price: 135,
      },
      {
        id: "tuna-roll",
        name: "Tuna Roll",
        description:
          "Por dentro: aguacate, pepino y camarón. Afuera: philadelphia y atún. Encima: spicy camarón empanizado.",
        price: 140,
      },
      {
        id: "spicy-roll",
        name: "Spicy Roll",
        description:
          "Por dentro: philadelphia, aguacate, pepino y camarón. Afuera: ajonjolí. Encima: spicy a elegir (camarón, callo, salmón, pulpo y atún).",
        price: 135,
      },
      {
        id: "maza-roll",
        name: "Maza Roll",
        description:
          "Por dentro: philadelphia, aguacate, camarón y pulpo. Encima: tampico, aguacate y camarón acompañado con spicy crunch de camarón, pulpo y tampico bañado en salsa de anguila y ajonjolí.",
        price: 155,
      },
      {
        id: "avocado-supremo",
        name: "Avocado Supremo",
        description:
          "Por dentro: pepino, camarón y surimi. Afuera: philadelphia y aguacate. Encima: spicy de kanikama coronado con camarón empanizado bañado en salsa de anguila y ajonjolí.",
        price: 140,
      },
      {
        id: "poncho-roll",
        name: "Poncho Roll",
        description:
          "Por dentro: aguacate, pepino y surimi. Afuera: philadelphia y camarón. Encima: spicy de callo, pulpo, tampico y furikake.",
        price: 135,
      },
      {
        id: "corona-especial",
        name: "Corona Especial",
        description:
          "Por dentro: aguacate, pepino y camarón. Afuera: philadelphia, camarón y pulpo. Encima: spicy de pulpo, callo, salmón y trocitos de camarón empanizado y furikake.",
        price: 155,
      },
    ],
  },
  {
    id: "rollos-empanizados",
    label: "Rollos Empanizados",
    icon: "🧀",
    image: rollosEmpanizadosImg,
    items: [
      {
        id: "mar-y-tierra",
        name: "Mar y Tierra",
        description: "Por dentro: philadelphia, aguacate, camarón y carne.",
        price: 105,
      },
      {
        id: "3-quesos",
        name: "3 Quesos",
        description:
          "Por dentro: aguacate y camarón. Encima: philadelphia, queso amarillo y manchego.",
        price: 105,
      },
      {
        id: "camaron-blue",
        name: "Camarón Blue",
        description: "Por dentro: philadelphia, aguacate, manchego, tocino y camarón.",
        price: 105,
      },
      {
        id: "cordon-blue",
        name: "Cordon Blue",
        description: "Por dentro: philadelphia, aguacate, manchego, tocino y pollo.",
        price: 105,
      },
      {
        id: "res-blue",
        name: "Res Blue",
        description: "Por dentro: philadelphia, aguacate, manchego, tocino y carne.",
        price: 105,
      },
      {
        id: "serranito-roll",
        name: "Serranito Roll",
        description:
          "Por dentro: philadelphia, aguacate y res. Afuera: queso manchego gratinado y serrano.",
        price: 110,
      },
      {
        id: "banadito-roll",
        name: "Bañadito Roll",
        description:
          "Por dentro: philadelphia, aguacate y camarón. Encima: aderezo chipotle, sriracha, aguacate y shichimi.",
        price: 105,
      },
      {
        id: "gordo-roll",
        name: "Gordo Roll",
        description:
          "Por dentro: aguacate, camarón y res. Afuera: philadelphia, queso manchego y surimi.",
        price: 105,
      },
      {
        id: "wanda-roll",
        name: "Wanda Roll",
        description: "Por dentro: philadelphia, aguacate y camarón.",
        price: 100,
      },
      {
        id: "roco",
        name: "Roco",
        description:
          "Por dentro: philadelphia, camarón, surimi y pulpo. Encima: tampico, aguacate bañado en salsa de anguila.",
        price: 110,
      },
      {
        id: "cielo-mar-y-tierra",
        name: "Cielo Mar y Tierra",
        description: "Por dentro: philadelphia, aguacate, camarón, pollo y carne.",
        price: 105,
      },
      {
        id: "chipotle-chesse",
        name: "Chipotle Chesse",
        description:
          "Por dentro: philadelphia, aguacate y pollo. Encima: queso manchego gratinado, aderezo chipotle y tocino.",
        price: 110,
      },
      {
        id: "bacon",
        name: "Bacon",
        description:
          "Por dentro: philadelphia, aguacate y res. Encima: queso manchego gratinado y tocino.",
        price: 110,
      },
    ],
  },
  {
    id: "rollos-horneados",
    label: "Rollos Horneados",
    icon: "🔥",
    image: rollosHorneadosImg,
    items: [
      {
        id: "pulpo-magno",
        name: "Pulpo Magno",
        description:
          "Por dentro: philadelphia, aguacate y pepino. Afuera: philadelphia y pulpo. Encima: toping de pulpo bañado en salsa de anguila y ajonjolí.",
        price: 165,
      },
      {
        id: "banana-hot",
        name: "Banana Hot",
        description:
          "Por dentro: philadelphia, aguacate y camarón. Afuera: plátano macho. Encima: toping de camarón bañado en salsa de anguila y ajonjolí.",
        price: 155,
      },
      {
        id: "salmoncito-hot",
        name: "Salmóncito Hot",
        description:
          "Por dentro: aguacate, pepino y camarón. Afuera: philadelphia y salmón. Encima: toping de camarón bañado en salsa de anguila.",
        price: 160,
      },
      {
        id: "avocado-hot",
        name: "Avocado Hot",
        description:
          "Por dentro: pepino y camarón. Afuera: philadelphia y aguacate. Encima: toping de camarón coronado con camarón empanizado, bañado en salsa de anguila y ajonjolí.",
        price: 160,
      },
      {
        id: "3-carnes",
        name: "3 Carnes",
        description:
          "Por dentro: philadelphia, aguacate y carne empanizado. Encima: toping de carne bañada en salsa de anguila y ajonjolí.",
        price: 160,
      },
      {
        id: "hiroshima-hot",
        name: "Hiroshima Hot",
        description:
          "Por dentro: philadelphia, aguacate y surimi. Encima: toping mixto (camarón, pulpo, salmón, callo y queso manchego gratinado).",
        price: 165,
      },
      {
        id: "beluma",
        name: "Beluma",
        description:
          "Por dentro: philadelphia, aguacate y camarón. Afuera: philadelphia y salmón. Encima: aderezo massago y sriracha bañado en salsa de anguila y ajonjolí.",
        price: 160,
      },
      {
        id: "capi-hot",
        name: "Capi Hot",
        description:
          "Por dentro: philadelphia, aguacate y camarón capeado. Afuera: philadelphia y camarón. Encima: toping de camarón y callo.",
        price: 155,
      },
    ],
  },
  {
    id: "extras",
    label: "Extras",
    icon: "➕",
    image: extrasImg,
    items: [
      { id: "extra-res", name: "Res", price: 25 },
      { id: "extra-pollo", name: "Pollo", price: 20 },
      { id: "extra-camaron", name: "Camarón", price: 25 },
      { id: "extra-salmon", name: "Salmón", price: 30 },
      { id: "extra-callo", name: "Callo", price: 30 },
      { id: "extra-tampico", name: "Tampico", price: 25 },
      { id: "extra-anguila", name: "Anguila", price: 10 },
      { id: "extra-chipotle", name: "Aderezo Chipotle", price: 10 },
      { id: "extra-ranch", name: "Ranch", price: 10 },
    ],
  },
  {
    id: "bebidas",
    label: "Bebidas",
    icon: "🥤",
    image: bebidasImg,
    items: [
      {
        id: "te-helado",
        name: "Té Helado (Jazmín o Jamaica)",
        description: "Litro",
        price: 35,
      },
      {
        id: "refresco",
        name: "Refresco",
        price: 35,
      },
    ],
  },
];
