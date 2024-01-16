# Réservation Spectacles

Cette application permet la réservation de spectacles, en générant des tickets.
La réservation est effectuée sous forme de formulaire contenant un champ du type select pour sélectionner une date et un champ du type entier qui permet de renseigner la quantité de places souhaités.

## Description

Chaque ticket contient une date et une quantité de places. Une date n’est disponible que pour un seul ticket (si l’utilisateur sélectionne une date dans un ticket, elle ne sera plus disponible sur les autres tickets de cette réservation). Il est possible d’ajouter plusieurs tickets sur une seule réservation. Et de supprimer les tickets ajoutés.


## Fonctionalitées

- Suppression de tickets ajoutés
- Choix d'une date disponible pour un seul ticket
- Le formulaire ne pas être validé si tous les champs ne sont pas renseignés
- Un nouveau ticket ne peut être ajouté si tous les champs ne sont pas renseignés
- Dates de la liste trier par ordre chronologique croissant
- Le bouton d'ajout de ticket disparaît lorsqu'il n'y a plus qu'une seule date dans la liste
- Si une date est sélectionné dans un ticket alors elle disparaît de la liste


## Roadmap

- Gérer les dates de la liste

- Ajout de ticket en fonction des dates disponibles
