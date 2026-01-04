# Learning Color Picker - Plan Progressif

> **Légende** : `--Y` = Étape complétée | Rien = Pas encore fait

---

## Objectif

Apprendre le développement web en construisant un color picker étape par étape, de la page blanche au projet final.

---

## Etape 1 : Page HTML de base --Y

**Concepts** : DOCTYPE, html, head, body, title, meta charset

- Créer un fichier HTML vide avec la structure minimale
- Comprendre le rôle de chaque balise

**Fichier** : `index.html`

---

## Etape 2 : Premier contenu --Y

**Concepts** : h1, texte

- Ajouter un titre "Color Picker"
- Comprendre les balises de titre h1-h6

---

## Etape 3 : Premier style --Y

**Concepts** : balise style, sélecteur body, propriétés CSS de base

- Changer la couleur de fond (background)
- Changer la couleur du texte (color)
- Centrer le texte (text-align)
- Ajouter du padding

---

## Etape 4 : Input couleur --Y

**Concepts** : input type="color", attributs id et value

- Ajouter le sélecteur de couleur natif
- Comprendre les attributs HTML

---

## Etape 5 : Zone de prévisualisation

**Concepts** : div, style inline, width, height, margin, border-radius

- Créer un carré/cercle qui affichera la couleur
- Découvrir les unités CSS (px)

---

## Etape 6 : Premier JavaScript

**Concepts** : balise script, const, document.getElementById

- Récupérer l'élément color picker
- Récupérer l'élément preview
- Console.log pour débugger

---

## Etape 7 : Lier couleur et preview

**Concepts** : .value, .style.background, événement oninput

- Quand la couleur change, mettre à jour le preview
- Comprendre les événements

---

## Etape 8 : Champ texte hex

**Concepts** : input type="text", attributs maxlength

- Ajouter un champ pour afficher/éditer le code hex
- Synchroniser avec le color picker

---

## Etape 9 : Validation du hex

**Concepts** : conditions if, .match(), regex basique

- Vérifier si le texte entré est un code hex valide
- Introduction aux expressions régulières

---

## Etape 10 : Slider contraste

**Concepts** : input type="range", min, max, label, filter CSS

- Ajouter un slider pour ajuster le contraste
- Découvrir les filtres CSS

---

## Etape 11 : Slider opacité

**Concepts** : opacity CSS, conversion hex-pourcentage

- Ajouter un slider d'opacité
- Math.round, parseInt, toString(16)

---

## Etape 12 : Événements clavier

**Concepts** : onkeydown, e.key, e.preventDefault()

- Appliquer la couleur quand on appuie sur Entrée
- Comprendre l'objet événement

---

## Etape 13 : Finitions

**Concepts** : box-shadow, organisation du code

- Ajouter des ombres pour le style
- Nettoyer et organiser le code

---

## Mapping avec apprentissage-web.md

| Étape | Sujets couverts |
|-------|-----------------|
| 1-2 | HTML Bases |
| 3-5 | CSS Bases + Box Model |
| 6-7 | JS Bases + DOM + Événements |
| 8-9 | HTML Formulaires + JS Conditions |
| 10-12 | CSS Filtres + JS Événements avancés |
| 13 | Bonnes pratiques |

---

## Progression

> **Étapes complétées** : 4 / 13

