const url = "https://hp-api.onrender.com/api/characters";

export const getInfo = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data.map((character) => {
    return {
      id: character.id,
      name: character.name,
      species: character.species,
      gender: character.gender,
      image: character.image,
      house: character.house,
      ancestry: character.ancestry,
      wand: {
        wood: character.wand.wood,
        length: character.wand.length,
        core: character.wand.core
      },
      alternate_names: character.alternate_names,


    };
  });
};

export const additional_data = {
    "Albus Dumbledore": "https://static.wikia.nocookie.net/harryalbuspotter/images/a/ac/Albus_Dumbledore.jpg",
    "Vernon Dursley": "https://i.pinimg.com/originals/e7/7f/de/e77fded8efd184fd13d2c3b05f004b58.jpg",
    "Petunia Dursley": "https://media.harrypotterfanzone.com/petunia-dursley-prisoner-of-azkaban-portrait.jpg",
    "Dudley Dursley": "https://imagez.tmz.com/image/79/1by1/2021/10/12/7986da88368747a6bed64fb9bfcc4abb_xl.jpg",
    "Lily Potter": "https://static.wikia.nocookie.net/harrypotter/images/c/ce/Lily_Potter1.jpg",
    "James Potter": "https://static.wikia.nocookie.net/harrypotterfanczech/images/5/5a/James_potter_II.jpg"
}

export const sound_effects = {
  "arania exumai": "http://soundfxcenter.com/movies/harry-potter/8d82b5_Harry_Potter_Arania_Exumai_Sound_Effect.mp3",
  "engorgio": "http://soundfxcenter.com/movies/harry-potter/8d82b5_HP_Alastor_Moody_Engorgio_Sound_Effect.mp3",

};

export const intro_sound = {
  "intro": "http://soundfxcenter.com/movies/harry-potter/8d82b5_Harry_Potter_Intro_Sound_Effect.mp3"
}
