export default class Service {
  static async getHeroes() {
    return await fetch(
      `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json`,
    ).then((value) => value.json());
  }

  static async getHero(id: number) {
    return await fetch(
      `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`,
    ).then((value) => value.json());
  }
}
