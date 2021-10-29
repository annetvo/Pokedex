class Pokemon {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.sprite = data.sprites.front_default;
        this.type = data.types[0].type.name;
        this.ability = data.abilities[0].ability.name;
        this.ability2 = data.abilities[1].ability.name;
        this.move = data.moves[0].move.name;
        this.move2 = data.moves[1].move.name;
        this.move3 = data.moves[2].move.name;
        this.move4 = data.moves[3].move.name;
    }
}

export default Pokemon;