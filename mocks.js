// type Pokemon {
//     id: ID!
//     name: String!
//     base_experience: String!
//     height: Int!
//     weight: Int!
//     abilities: [Ability]
//     forms: [PokemonForm]
//     types: [Type]
//   }

const mocks = {
  Pokemon: () => ({
    id: () => 35,
    name: () => "clefairy",
    base_experience: () => 113,
    height: () => 6,
    weight: () => 75,
    abilities: () => {
      return [
        {
          id: 1,
          name: "stench",
        },
        {
          id: 2,
          name: "drizzle",
        },
      ];
    },
  }),
};

module.exports = mocks;
