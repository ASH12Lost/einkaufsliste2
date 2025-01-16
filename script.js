// Einkaufsliste-Array
let einkaufsliste = [];

// Funktion zum Hinzufügen eines Artikels
function addArtikel() {
  const artikel = document.getElementById('einkaufsliste-input').value;
  const stückzahl = document.getElementById('stückzahl-input').value;
  if (artikel) {
    if (stückzahl) {
      einkaufsliste.push({ artikel, stückzahl });
    } else {
      einkaufsliste.push({ artikel, stückzahl: 1 });
    }
    updateEinkaufsliste();
    document.getElementById('einkaufsliste-input').value = '';
    document.getElementById('stückzahl-input').value = '';
  }
}

// Funktion zum Löschen eines Artikels
function deleteArtikel(index) {
  einkaufsliste.splice(index, 1);
  updateEinkaufsliste();
}

// Funktion zum Aktualisieren der Einkaufsliste
function updateEinkaufsliste() {
  const ul = document.getElementById('einkaufsliste-ul');
  ul.innerHTML = '';
  einkaufsliste.forEach((artikel, index) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = `${artikel.stückzahl} x`;
    span.ondblclick = () => {
      const neueStückzahl = prompt('Neue Stückzahl:');
      if (neueStückzahl) {
        artikel.stückzahl = neueStückzahl;
        updateEinkaufsliste();
      }
    };
    li.appendChild(span);
    const artikelSpan = document.createElement('span');
    artikelSpan.textContent = artikel.artikel;
    artikelSpan.ondblclick = () => {
      const neuerArtikel = prompt('Neuer Artikel:');
      if (neuerArtikel) {
        artikel.artikel = neuerArtikel;
        updateEinkaufsliste();
      }
    };
    li.appendChild(artikelSpan);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Löschen';
    deleteButton.onclick = () => deleteArtikel(index);
    li.appendChild(deleteButton);
    ul.appendChild(li);
  });
}

// Event-Listener für das Formular
document.getElementById('einkaufsliste-form').addEventListener('submit', (event) => {
  event.preventDefault();
  addArtikel();
});
