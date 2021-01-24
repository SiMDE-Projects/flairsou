import {
  Entity, Enum, ManyToOne, PrimaryKey, Property,
} from '@mikro-orm/core';

export enum AccountType {
    Credit = 'credit',
    Debit = 'debit',
    Recettes = 'recettes',
    Depenses = 'depenses'
}

@Entity()
class Account {
    @PrimaryKey()
    name!:string

    @Property()
    generic!: boolean

    @Enum()
    type!: AccountType

    @ManyToOne()
    parent?: Account
}

export default Account;
