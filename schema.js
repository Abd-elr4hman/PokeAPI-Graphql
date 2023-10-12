const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    "A list of pokemons."
    pokemonList: [PokemonListItem!]!

    "Pokémon are the creatures that inhabit the world of the Pokémon games."
    pokemon(id: ID!): Pokemon

    "Abilities provide passive effects for Pokémon in battle or in the overworld."
    abilitiy(id: ID!): Ability

    "Some Pokémon may appear in one of multiple, visually different forms."
    pokemonForm(id: ID!): PokemonForm

    "Types are properties for Pokémon and their moves."
    type(id: ID!): Type
  }

  "A list of pokemons."
  type PokemonListItem {
    name: String!
    pokemon: Pokemon
  }

  "Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See Bulbapedia for greater detail."
  type Pokemon {
    id: ID!
    name: String!
    base_experience: String
    height: Int
    weight: Int
    abilities: [Ability]
    forms: [PokemonForm]
    types: [Type]
  }

  "Abilities provide passive effects for Pokémon in battle or in the overworld. Pokémon have multiple possible abilities but can have only one ability at a time. Check out Bulbapedia for greater detail."
  type Ability {
    id: ID
    name: String
  }

  "Some Pokémon may appear in one of multiple, visually different forms. These differences are purely cosmetic. For variations within a Pokémon species, which do differ in more than just visuals, the 'Pokémon' entity is used to represent such a variety."
  type PokemonForm {
    id: ID!
    name: String!
    is_mega: Boolean
    # types: [Type]
  }

  "Types are properties for Pokémon and their moves. Each type has three properties: which types of Pokémon it is super effective against, which types of Pokémon it is not very effective against, and which types of Pokémon it is completely ineffective against."
  type Type {
    id: ID!
    name: String!
    damage_relations: DamageRelations
  }

  "Damage relations describe the damage relationship between types, each type has properties: which types of Pokémon it is super effective against, which types of Pokémon it is not very effective against, and which types of Pokémon it is completely ineffective against."
  type DamageRelations {
    no_damage_to: [TypesListItem]
    half_damage_to: [TypesListItem]
    double_damage_to: [TypesListItem]
    no_damage_from: [TypesListItem]
    half_damage_from: [TypesListItem]
    double_damage_from: [TypesListItem]
  }

  "A list of types."
  type TypesListItem {
    name: String
  }
`;

module.exports = typeDefs;
