import { Inject, Injectable } from '@angular/core';
import ITEMS_LIST from '../../../public/data/items.json';


@Injectable({ providedIn: 'root' }) 
export class ItemService {
  
  public itemList: object[] = ITEMS_LIST; //! SIN USO, VIENE DEL JSON

  public tiposDeObjetos: string[] = tiposDeObjetos;
  public sobrenombres: string[] = sobrenombres;
  public materiales: string[] = materiales;
  public efectosMagicos: string[]= efectosMagicos;


  constructor() {
    const itemList = localStorage.getItem('itemList');
    if (itemList) {
      this.itemList = JSON.parse(itemList);
    }
  }
}


const tiposDeObjetos = [
    "Espada", "Escudo", "Poción", "Armadura", "Anillo", 
    "Mandoble", "Cimitarra", "Lanza", "Daga", "Arco", 
    "Flecha", "Ballesta", "Hacha", "Maza", "Martillo de guerra",
    "Casco", "Grebas", "Guantelete", "Cota de malla", "Yelmo",
    "Espada corta", "Espada larga", "Alabarda", "Pica", "Hacha de batalla",
    "Espada bastarda", "Cuchillo", "Báculo", "Varita", "Bastón",
    "Cruz", "Talisman", "Amuleto", "Collar", "Brazalete",
    "Cinturón", "Botas", "Sandalias", "Manto", "Túnica",
    "Ropaje", "Chaleco de cuero", "Gorro", "Faja", "Capa",
    "Capucha", "Camisón", "Escarcela", "Calzas", "Zapatos",
    "Zapatillas", "Pantuflas", "Espuelas", "Fajín", "Hombreras",
    "Escarcelas", "Rodilleras", "Tobilleras", "Musleras", "Brazales",
    "Antorcha", "Linterna", "Candelabro", "Cuerda", "Grillete",
    "Llave", "Mapa", "Brújula", "Frasco", "Botella",
    "Cantimplora", "Bolsa de monedas", "Saco", "Mochila", "Pergamino",
    "Libro", "Manuscrito", "Estilete", "Cinco", "Dardo",
    "Carcaj", "Rodela", "Rodelín", "Targe", "Kite",
    "Rodela", "Pavés", "Targa", "Escudo pavesino", "Tablilla",
    "Escudo de bronce", "Escudo de hierro", "Escudo de acero", "Escudo de plata", "Escudo de oro",
    "Espada de bronce", "Espada de hierro", "Espada de acero", "Espada de plata", "Espada de oro"
  ];

const sobrenombres = [   
    "(común)", "(común)", "(común)", "(común)", "(común)", "(común)", "(común)", 
    "(objeto desgastado)", "(objeto desgastado)", "(objeto desgastado)", "(objeto desgastado)", 
    "(vulgar)",  "(vulgar)", "(vulgar)", "(vulgar)", "(vulgar)", "(vulgar)", 
    "(peculiar)", "(peculiar)", "(peculiar)", "(peculiar)", "(peculiar)", 
    "costumbrista", "costumbrista", "costumbrista", 
    "(especial)", "(especial)", "(especial)", "(especial)", "(especial)", "(especial)", 
    "(inusual)", "(inusual)", "(inusual)", "(inusual)", "(inusual)", "(inusual)", 
    "con recubrimiento mohoso", "con recubrimiento mohoso",  "con recubrimiento mohoso",  "con moho", "con moho", "con moho", 
    "en desuso", "en desuso", "en desuso", "en desuso", "en desuso", 
    "con óxido", "con óxido", "con óxido", "con óxido", "con óxido", "con óxido", 
    "normal", "habitual", "al uso", "de uso frecuente", "vulgar", "de uso típico", "costumbrista",
     "del Olvido",   "Celestial",   "del Alquimista",   "de los Druidas",   "Infernal",   "de la Luna",   
    "de la Tormenta",   "del Dragón",   "de las Sombras",   "del Viento",   "del Mar",   "del Bosque",   
    "de los Titanes",   "de la Montaña",   "del Sol",   "de la Noche",   "de la Luz",   "de la Oscuridad",   
    "del Fuego",   "del Hielo",   "del Trueno",   "del Destino",   "de la Eternidad",   "de la Magia",   "del Guerrero",   
    "del Mago",   "del Rey",   "de la Reina",   "del Caos",   "de la Paz",   "de la Guerra",   "del Enigma",   "de la Ilusión",   
    "de la Realidad",   "del Espíritu",   "del Tiempo",   "del Espacio",   "del Infinito",   "de la Vida",   "de la Muerte",   
    "del Renacimiento",   "del Horizonte",   "del Abismo",   "de la Verdad",   "de la Mentira",   "del Silencio",   
    "de la Canción",   "del Corazón",   "de la Mente",   "del Alma",   "del Espíritu",   "del Universo",   "del Cosmos",   
    "universal",   "de la Estrella",   "del Cometa",   "del Fénix",   "de la Hidra",   "del Grifo",   "del Unicornio",   
    "del Basilisco",   "del Centauro",   "del Minotauro",   "del Pegaso",   "del Kraken",   "del Leviatán",   "del Vampiro",   
    "del Hombre Lobo",   "del Fantasma",   "del Zombi",   "de la Calavera",   "de la Gárgola",   "del Espectro",   "del Demonio",   
    "del Ángel",   "del Hechicero",   "del Sabio",   "del Protector",   "del Conquistador",   "del Explorador",   "del Viajero",   
    "del Navegante",   "del Arquero",   "del Caballero",   "del Mercenario",   "del Bárbaro",   "del Monje",   "del Asesino",   
    "del Pícaro",   "del Paladín",   "del Druida",   "del Chamán",   "del Sumo Sacerdote",   "del Oráculo",   "del Guardián",   
    "del Custodio",   "del Vigilante",   "del Centinela",   "del Exiliado",   "del Cazador",   "del Templario" ];

    const materiales = [
        "Madera común", "Madera tallada", "Tela", "Cuero", "Piel", "Seda", "Piedra", "Hierro", 
        "Acero", "Madera antigua", "Bronce", "Plata", "Oro", "Cobre", "Marfil", 
        "Hierro refinado", "Acero templado", "Madera encantada", "Oro puro", "Plata celestial", 
        "Hierro oscuro", "Acero mágico", "Oro maldito", "Plata lunar", 
        "Madera de abedul", "Cristales extraños", "Gemas variopintas", 
        "Telas de araña", "Cuero de dragón", "Piel de basilisco", 
        "Seda lunar", "Piedra volcánica", "Hierro forjado en fuego eterno", 
        "Acero de los ancestros", "Madera del árbol del mundo", 
        "Bronce antiguo", "Plata de las estrellas", "Oro celestial", 
        "Cobre ennegrecido", "Marfil sagrado", "Hierro negro azabache", 
        "Acero de la forja olvidada", "Madera bendecida por los dioses", 
        "Cristales de la aurora boreal", "Gemas de los reyes perdidos", 
        "Telas del reino de las sombras", "Cuero de la bestia primigenia", 
        "Piel de la serpiente cósmica", "Seda de los sueños", 
        "Piedra de la montaña divina", "Hierro del dragón ancestral", 
        "Acero encantado por la luna", "Madera del bosque encantado", 
        "Bronce de la era dorada", "Plata de la luna llena", 
        "Oro bendito por los arcángeles", "Cobre de las profundidades", 
        "Marfil de la criatura primordial", "Hierro sagrado de los santuarios", 
        "Acero de los titanes", "Madera del espíritu antiguo", 
        "Cristales de la tormenta celestial", "Gemas del océano profundo", 
        "Telas del viento veloz", "Cuero de la bestia devoradora de mundos", 
        "Piel de la criatura de las sombras", "Seda del rey fantasma", 
        "Piedra de la montaña sagrada", "Hierro de la estrella fugaz", 
        "Acero de la forja del tiempo perdido", "Madera de los árboles eternos", 
        "Bronce de la era de los dioses", "Plata de la galaxia lejana", 
        "Oro de los cielos etéreos", "Cobre de las ruinas olvidadas", 
        "Marfil de la bestia cósmica", "Hierro fundido en el corazón del volcán", 
        "Acero templado por los dioses antiguos", "Madera imbuida de magia arcana", 
        "Cristales de la fuente de la vida eterna", "Gemas de la corona de los reyes perdidos", 
        "Telas de la noche eterna", "Cuero de la bestia del abismo", 
        "Piel de la criatura de la oscuridad", "Seda del río de los sueños eternos", 
        "Piedra del monte celestial", "Hierro del dragón cósmico", 
        "Acero forjado por la estrella fugaz", "Madera de los árboles ancestrales", 
        "Bronce del rey caído", "Plata de la galaxia escondida", 
        "Oro de la luz eterna", "Cobre de las minas de las almas perdidas", 
        "Marfil de la bestia primigenia", "Hierro de los santuarios olvidados", 
        "Acero de los titanes dormidos", "Madera del bosque de los espíritus antiguos", 
        "Cristales del mar profundo", "Gemas de la estrella fugaz", 
        "Telas del viento del norte", "Cuero de la bestia de la noche eterna", 
        "Piel de la sombra de la luna", "Seda de los sueños olvidados"
      ];

  const efectosMagicos = [ 
    "Aumenta la debilidad del portador",
    "Reduce la resistencia del portador",
    "Aumenta la fatiga del portador",
    "Reduce la velocidad del portador",
    "Provoca mareos en el portador",
    "Causa dolor en el portador",
    "Aumenta la vulnerabilidad a los ataques",
    "Disminuye la capacidad de concentración del portador",
    "Aumenta la irritabilidad del portador",
    "Causa confusión al portador",
    "Reduce la precisión en el combate",
    "Disminuye la resistencia mágica del portador",
    "Aumenta la susceptibilidad a enfermedades",
    "Produce insomnio en el portador",
    "Causa alergias en el portador",
    "Disminuye la capacidad de sanación natural",
    "Aumenta el hambre del portador",
    "Provoca pesadillas en el portador",
    "Aumenta la probabilidad de accidentes",
    "Disminuye la esperanza de vida del portador",
    "Aumenta el nivel de ansiedad", // 1
    "Ninguno", "Ninguno", "Ninguno", "Ninguno", "Ninguno", "Ninguno", "Ninguno", "Ninguno", "Ninguno", "Ninguno", "Ninguno", "Ninguno", "Ninguno", "Ninguno", "Ninguno", "Ninguno", "Ninguno", 
    "Potencia el Veneno", // 2
    "Potencia el fuego", // 3
    "Potencia el Hielo", // 4
    "Reducir tristeza", // 5
    "Reducir miedo", // 6
    "Reducir ansiedad", // 7
    "El personaje equipado se siente saciado", // 8
    "Ofrece cierta comodidad", // 9
    "Da suerte", // 10
    "Curar heridas leves", // 11
    "Curar heridas graves", // 12
    "Curar enfermedades", // 13
    "Curar envenenamiento", // 14
    "Cura", // 15
    "Aumenta la Fuerza", // 16
    "Regeneración", // 17
    "Agilidad", // 18
    "Velocidad", // 19
    "Invisibilidad", // 20
    "Protección", // 21
    "Resistencia al fuego", // 22
    "Resistencia al hielo", // 23
    "Resistencia al veneno", // 24
    "Resistencia a la electricidad", // 25
    "Resistencia a la magia", // 26
    "Inmunidad a enfermedades", // 27
    "Inmunidad al veneno", // 28
    "Inmunidad al fuego", // 29
    "Inmunidad al hielo", // 30
    "Inmunidad a la electricidad", // 31
    "Absorción de magia", // 32
    "Reflejar daño", // 33
    "Absorción de vida", // 34
    "Absorción de mana", // 35
    "Reflejar hechizos", // 36
    "Clarividencia", // 37
    "Telequinesis", // 38
    "Levitar", // 39
    "Teletransportación", // 40
    "Visión nocturna", // 41
    "Aumentar inteligencia", // 42
    "Aumentar sabiduría", // 43
    "Aumentar carisma", // 44
    "Aumentar destreza", // 45
    "Aumentar constitución", // 46
    "Aumentar percepción", // 47
    "Aumentar suerte", // 48
    "Aumentar creatividad", // 49
    "Aumentar concentración", // 50
    "Aumentar energía", // 51
    "Aumentar moral", // 52
    "Aumentar valentía", // 53
    "Aumentar serenidad", // 54
    "Aumentar felicidad", // 55
    "Aumentar amor", // 56
    "Aumentar compasión", // 57
    "Aumentar empatía", // 58
    "Aumentar paciencia", // 59
    "Aumentar autocontrol", // 60
    "Aumentar autodisciplina", // 61
    "Aumentar equilibrio", // 62
    "Aumentar paz interior", // 63
    "Aumentar espiritualidad", // 64
    "Aumentar conocimiento", // 65
    "Aumentar sabiduría antigua", // 66
    "Aumentar intuición", // 67
    "Aumentar sexto sentido", // 68
    "Aumentar percepción del tiempo", // 69
    "Aumentar percepción del espacio", // 70
    "Aumentar percepción de la realidad", // 71
    "Aumentar percepción de la verdad", // 72
    "Aumentar percepción de las mentiras", // 73
    "Aumentar percepción de las intenciones", // 74
    "Aumentar percepción de los sentimientos", // 75
    "Aumentar percepción de los pensamientos", // 76
    "Aumentar percepción de la naturaleza", // 77
    "Aumentar percepción de los espíritus", // 78
    "Aumentar percepción de los elementos", // 79
    "Aumentar percepción de la magia", // 80
    "Aumentar percepción del cosmos", // 81
    "Aumentar percepción del universo", // 82
    "Aumentar percepción del tiempo y espacio", // 83
    "Aumentar percepción de la vida y la muerte", // 84
    "Aumentar percepción de los sueños", // 85
    "Aumentar percepción de las pesadillas", // 86
    "Aumentar percepción de las ilusiones", // 87
    "Aumentar percepción de las realidades alternativas", // 88
    "Aumentar percepción de las dimensiones paralelas", // 89
    "Aumentar percepción de los planos astrales", // 90
    "Aumentar percepción de los planos etéreos", // 91
    "Aumentar percepción de los planos infernales", // 92
    "Aumentar percepción de los planos celestiales" // 93
  ];
  
  console.log(efectosMagicos);
  
