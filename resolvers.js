const resolvers = {
  Query: {
    pokemonList: (_, __, { dataSources }) => {
      return dataSources.pokemonAPI.getPokemonList();
    },
    pokemon: (_, { id }, { dataSources }) => {
      return dataSources.pokemonAPI.getSinglePokemon(id);
    },
    abilitiy: (_, { id }, { dataSources }) => {
      return dataSources.pokemonAPI.getSingleAbility(id);
    },
    pokemonForm: (_, { id }, { dataSources }) => {
      return dataSources.pokemonAPI.getSingleForm(id);
    },
    type: (_, { id }, { dataSources }) => {
      return dataSources.pokemonAPI.getSingleType(id);
    },
  },

  PokemonListItem: {
    pokemon: ({ url }, _, { dataSources }) => {
      return dataSources.pokemonAPI.getPokemon(url);
    },
  },

  Pokemon: {
    abilities: ({ abilities }, _, { dataSources }) => {
      return dataSources.pokemonAPI.getAbilities(abilities);
    },
    forms: ({ forms }, _, { dataSources }) => {
      return dataSources.pokemonAPI.getPokemonForms(forms);
    },
    types: ({ types }, _, { dataSources }) => {
      return dataSources.pokemonAPI.getPokemonTypes(types);
    },
  },
};

module.exports = resolvers;
