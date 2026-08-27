// ─────────────────────────────────────────────────────────────────────────
// Données de l'événement et du menu — SOURCE UNIQUE utilisée par les pages
// Serveurs, Cuisine et Chef (le Bar n'a besoin que des boissons, via DRINKS).
//
// Pour un nouvel événement : c'est ICI, et nulle part ailleurs, qu'on change
// le nombre de tables/convives, les plats, boissons, extras et leurs prix.
// Voir guide.html pour le détail de chaque champ.
// ─────────────────────────────────────────────────────────────────────────

const EVENT_LABEL = '25 avril 2025';
const EVENT_SLUG  = EVENT_LABEL.toLowerCase().replace(/[^a-z0-9]+/g, ''); // pour les noms de fichiers exportes

const T = 8;   // nombre de tables
const G = 7;   // nombre de convives par table

// Accompagnements inclus dans le menu (1 riz + 1 frite offerts au 1er service)
const ACC = [
  { id: 'riz',      label: 'Riz pilaf',                 emoji: '🍚' },
  { id: 'igname',   label: "Frites d'ignames",          emoji: '🍟' },
  { id: 'plantain', label: 'Frites de banane plantain', emoji: '🍌' }
];

// Boissons — softs inclus au menu, mocktails et cocktails payants
const SOFTS = [
  { id: 'bissape',   label: 'Bissap' },
  { id: 'gingembre', label: 'Jus de gingembre' }
];
const MOCKTAILS = [
  { id: 'mocktail1', label: "Reine d'Akwaba" },
  { id: 'mocktail2', label: 'Zénith' },
  { id: 'mocktail3', label: 'Soleil Épicé' }
];
const COCKTAILS = [
  { id: 'cocktail1', label: 'Rubis Flower' },
  { id: 'cocktail2', label: 'Gold District' },
  { id: 'cocktail3', label: 'La Surprise — cocktail sur mesure' }
];
const DRINKS = [...SOFTS, ...MOCKTAILS, ...COCKTAILS];

// Portions supplémentaires et autres extras (payants dès la 1ère unité)
// "pk" = identifiant du prix dans PRICES quand il diffère de l'id de l'item
const ACC_EX = [
  { id: 'riz-supp',      label: 'Riz pilaf supplémentaire',                  pk: 'riz-extra', emoji: '🍚' },
  { id: 'igname-supp',   label: "Frites d'ignames supplémentaires",          pk: 'igname',     emoji: '🍟' },
  { id: 'plantain-supp', label: 'Frites de banane plantain supplémentaires', pk: 'plantain',   emoji: '🍌' }
];
const OTH_EX = [
  { id: 'viande-extra', label: 'Portion assortiment viandes', pk: 'viande-extra', emoji: '🥩' },
  { id: 'degue-extra',  label: 'Dégué supplémentaire',        pk: 'degue-extra',  emoji: '🥣' }
];
const ALL_EX = [...ACC_EX, ...OTH_EX];

// Prix par défaut (€) — modifiables ensuite en direct depuis Serveurs > ⚙ Prix
const DEFAULT_PRICES = {
  igname: 4, plantain: 3, 'riz-extra': 2,
  bissape: 2, gingembre: 2,
  mocktail1: 4, mocktail2: 4, mocktail3: 4,
  cocktail1: 5, cocktail2: 5, cocktail3: 5,
  'viande-extra': 7, 'degue-extra': 4
};

// Articles "aliments" que la Cuisine peut marquer en rupture de stock (bouton
// 🚫 Stock sur cuisine.html) — se répercute en direct sur l'écran des serveurs.
const FOOD_SOLDOUT_ITEMS = [
  { id: 'viande',   label: 'Assortiment de viandes' },
  { id: 'riz',      label: 'Riz pilaf' },
  { id: 'igname',   label: "Frites d'ignames" },
  { id: 'plantain', label: 'Frites de banane plantain' },
  { id: 'degue',    label: 'Dégué' }
];

// Libellés du menu enfant (attaché à la commande d'un adulte, 15€)
const CHILD_MOCKTAILS = { mocktail1: "Reine d'Akwaba", mocktail2: 'Zénith', mocktail3: 'Soleil Épicé' };
const CHILD_ACC_LABELS = { riz: 'Riz pilaf', igname: "Frites d'ignames", plantain: 'Frites de banane plantain' };
const CHILD_ACC_EMOJI  = { riz: '🍚', igname: '🍟', plantain: '🍌' };

function drinkLabel(id) {
  const item = DRINKS.find(i => i.id === id);
  return item ? item.label : id;
}
