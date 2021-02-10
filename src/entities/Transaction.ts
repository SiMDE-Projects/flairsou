import {
  Entity, ManyToMany, PrimaryKey, Property,
} from '@mikro-orm/core';

import Account from './Account';

@Entity()
class Transaction {
    @PrimaryKey()
    id!: number

    @ManyToMany()
    compte!: Account

    @Property()
    date!: Date

    @Property()
    rapproche!: boolean

    @Property()
    url?:string
}

export default Transaction;
