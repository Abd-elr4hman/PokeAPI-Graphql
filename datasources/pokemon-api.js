const { RESTDataSource } = require("@apollo/datasource-rest");

class PokemonAPI extends RESTDataSource {
  baseURL = "https://pokeapi.co/api/v2/";

  async getPokemonList() {
    const result = await this.get("pokemon");
    return result.results;
  }

  getPokemon(url) {
    const SplitUrl = url.split("/");
    const pokemonId = SplitUrl.at(-2);
    return this.get(`pokemon/${pokemonId}`);
  }

  getAbilities(abilities) {
    let returns = [];
    abilities.forEach((value, key) => {
      const url = value.ability.url;
      const SplitUrl = url.split("/");
      const abilityId = SplitUrl.at(-2);
      returns.push(this.get(`ability/${abilityId}`));
    });
    return returns;
  }

  getPokemonForms(forms) {
    let returns = [];
    forms.forEach((value, key) => {
      const url = value.url;
      const SplitUrl = url.split("/");
      const formId = SplitUrl.at(-2);
      returns.push(this.get(`pokemon-form/${formId}`));
    });
    return returns;
  }

  getPokemonTypes(types) {
    let returns = [];
    types.forEach((value, key) => {
      const url = value.type.url;
      const SplitUrl = url.split("/");
      const typeID = SplitUrl.at(-2);
      returns.push(this.get(`type/${typeID}`));
    });
    return returns;
  }

  getSinglePokemon(pokemonId) {
    return this.get(`pokemon/${pokemonId}`);
  }

  getSingleAbility(abilityId) {
    return this.get(`ability/${abilityId}`);
  }

  getSingleForm(formId) {
    return this.get(`pokemon-form/${formId}`);
  }

  getSingleType(typeId) {
    return this.get(`type/${typeId}`);
  }
}

module.exports = PokemonAPI;
