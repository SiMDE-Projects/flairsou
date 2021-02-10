import {
  Entity, ManyToOne, PrimaryKey,
} from '@mikro-orm/core';

  @Entity()
class Entite {
      @PrimaryKey()
      name!:string

      @ManyToOne()
      parent?:Entite
  }

export default Entite;
