// ─────────────────────────────────────────────────────────────────────────
// Connexion Firebase — partagée par les 4 postes (serveurs, bar, cuisine, chef).
// Les 4 pages lisent et écrivent dans le MÊME document Firestore
// ("evenement/data"), c'est ce qui les synchronise en temps réel entre elles.
//
// Pour brancher l'outil sur un autre projet Firebase (ex: nouvel événement,
// nouveau client), il suffit de remplacer les valeurs ci-dessous par celles
// de la console Firebase (Paramètres du projet > Vos applications > SDK).
// ─────────────────────────────────────────────────────────────────────────
const FB_CONFIG = {
  apiKey: "AIzaSyBg6vVAIBrmmx23BogWnRx3ZW7BMeSqu7w",
  authDomain: "commandes-25avril.firebaseapp.com",
  projectId: "commandes-25avril",
  storageBucket: "commandes-25avril.firebasestorage.app",
  messagingSenderId: "359129430877",
  appId: "1:359129430877:web:d60ac1a3e6dfc7596746b4"
};
