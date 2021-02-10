import {
  Entity, Enum, ManyToOne, PrimaryKey, Property,
} from '@mikro-orm/core';
import Entite from './Entite';

export enum AccountType {
    Recettes = 'recettes',
    Depenses = 'depenses',
    Actifs = 'actifs',
    Passifs = 'passfis',
    CapitauxPropres = 'capitauxPropres'
  }

@Entity()
class Account {
    @PrimaryKey()
    name!: string

    @Property()
    generic!: boolean

    @Enum()
    type!: AccountType

    @ManyToOne()
    entite!: Entite

    @ManyToOne()
    parent?: Account
}

export default Account;
