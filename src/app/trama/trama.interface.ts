export interface TramaConstruida{
    descripcion:Descripciones;
    detonante:Detonantes;
    inicio:Inicios;
    objetivo:Objetivo;
    involucrado:Involucrados
}



export interface Descripciones{
    nombre:string;
    descripcion:string;
    historia:string;
    economia:string;
    antiguedad:string;
    clases_sociales:string;
}

export interface Detonantes{
    detonante:string;
    descripcion:string;
}

export interface Inicios{
    punto_de_inicio:string;
    descripcion_del_lugar:string;
    eventos_anteriores:string;
    otros_personajes:string;
}

export interface Objetivo{
    objetivo:string;
    descripcion:string;
    detalles:string;
    rumores:string[];
}

export interface Involucrados{
    nombre:string;
    descripcion_fisica:string;
    personalidad:string;
    ultimo_visto:string;
}

export interface Rumores{

}