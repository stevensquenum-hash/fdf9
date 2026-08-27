// ─────────────────────────────────────────────────────────────────────────
// Petites fonctions utilitaires partagées par plusieurs pages.
// ─────────────────────────────────────────────────────────────────────────

// Horodatage "HH:MM" + date FR, utilisé pour tracer service/paiement/cuisine
function stamp() {
  const now = new Date();
  return {
    at: now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0'),
    date: now.toLocaleDateString('fr-FR')
  };
}

// Formate une liste d'items commandés en texte lisible : "Riz pilaf, Bissap ×2"
function fmtList(list, qobj, lbl) {
  return list
    .filter(i => (qobj[i.id] || 0) > 0)
    .map(i => (lbl ? lbl(i) : i.label) + (qobj[i.id] > 1 ? ' ×' + qobj[i.id] : ''))
    .join(', ');
}
