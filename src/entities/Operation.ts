import {
  Entity, ManyToOne, OneToOne, PrimaryKey, Property,
} from '@mikro-orm/core';

import Transaction from './Transaction';
import Account from './Account';

@Entity()
class Operation {
    @PrimaryKey()
    id!: number

    @OneToOne()
    compte!: Account

    @Property()
    credit?: number

    @Property()
    debit?: number

    @ManyToOne()
    transaction!:Transaction
}

export default Operation;
