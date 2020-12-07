---
title: plantuml flairsou
tags:
---

## Plantuml BDD flairsou

```plantuml

@startuml

'Classes

class Entité {
    nom: string
}

class EntitéParent
class EntitéEnfant

class Compte {
    nom: string
    generic: bool

    /solde
}

class CompteActif
class ComptePassif
class CompteRevenus
class CompteDepenses
class CompteCapitauxPropres

class Transaction{
    fichier: url
    date: date
    rapprochée: bool
}

class Opération {
    Crédit: uint
    Débit: uint
    Pointé: bool
}

class AccèsParticuliers {
    acces: bool
}

' Héritages

EntitéParent --|> Entité
EntitéEnfant --|> Entité

CompteActif --|> Compte
ComptePassif --|> Compte
CompteRevenus --|> Compte
CompteDepenses --|> Compte
CompteCapitauxPropres --|> Compte

' Associations

Opération "2..*" --* Transaction
Opération "*" --* Compte
EntitéEnfant "*" --* EntitéParent
Compte "*" --* Compte
Compte "*" --* EntitéParent

AccèsParticuliers "*" --* Compte
AccèsParticuliers "*" --* EntitéEnfant


@enduml

```

Accès :

Accès « Communs »
Ex: tous enfants de PVDC ont accès à PVDC:Dépenses:Fournisseurs

Accès « Particuliers »
Ex : l'enfant PVDC:Pic a accès à PVDC:Actifs:Pic (compte en banque)

Récupérer comptes Accès génériques + Accès persos