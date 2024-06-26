Resource:
https://www.iconfinder.com/search?q=medieval


# Plan y Propuesta de Arquitectura
## Componentes Principales

    Escenarios
        Listado de escenarios.
        Detalle de un escenario seleccionado.
        Generación aleatoria de un nuevo escenario.

    Personajes
        Listado de personajes.
        Detalle de un personaje seleccionado.
        Generación aleatoria de un nuevo personaje.

    Objetos
        Listado de objetos.
        Detalle de un objeto seleccionado.
        Generación aleatoria de un nuevo objeto.

## Componentes Adicionales

    1. Partidas
        Listado de partidas generadas.
        Detalle de una partida.
        Generación aleatoria de una nueva partida combinando escenarios, personajes y objetos.

    2. Home 
        Página de inicio con una introducción y navegación a las diferentes secciones (Escenarios, Personajes, Objetos, Partidas).

    3 Navbar
        Barra de navegación para acceder a las diferentes secciones de la aplicación.

## Arquitectura

1. Módulos: Organiza tu aplicación en módulos para mejorar la mantenibilidad y la escalabilidad.
        AppModule: Módulo principal.
        ScenarioModule: Módulo para los componentes relacionados con escenarios.
        CharacterModule: Módulo para los componentes relacionados con personajes.
        ItemModule: Módulo para los componentes relacionados con objetos.
        GameModule: Módulo para los componentes relacionados con partidas.

2. Servicios: Utiliza servicios para gestionar la lógica de negocio y la comunicación con APIs (mock o reales).
        ScenarioService
        CharacterService
        ItemService
        GameService

3. Routing: Configura el enrutamiento para navegar entre los diferentes componentes.
        /scenarios
        /characters
        /items
        /games
        /home

## Retos Técnicos

1. Host, Child View, y Two-Way Binding
    -Escenario: En el componente ScenarioDetailComponent, implementa una vista hijo que muestre los detalles del escenario seleccionado.
    -Reto: Utiliza el decorador @ViewChild para acceder a la vista hija desde el componente padre ScenarioListComponent.
    -Two-Way Binding: Implementa un formulario en ScenarioDetailComponent que permita editar los detalles del escenario utilizando ngModel.

2. Services e Injection
    -Reto: Crea el servicio ScenarioService que maneje la lógica de creación y obtención de escenarios. Inyecta este servicio en -ScenarioListComponent y ScenarioDetailComponent.
    -Adicional: Realiza la inyección de dependencias en el constructor y utiliza el servicio para gestionar el estado de los escenarios.

3. Life Cycle Hooks
    -Escenario: En CharacterComponent, implementa los métodos ngOnInit, ngOnChanges y ngOnDestroy.
    -Reto: Utiliza ngOnInit para inicializar datos, ngOnChanges para responder a cambios en las propiedades de entrada, y ngOnDestroy para limpiar suscripciones o recursos.

4. Effect Function para Mejorar la Experiencia de Usuario
    -Escenario: Implementa una función de efecto en ItemListComponent para mostrar una animación de carga mientras se obtienen los datos de los objetos.
    -Reto: Utiliza la función of de RxJS para simular una llamada a la API con un retardo, y muestra una animación mientras esperas la respuesta.


src/
├── app/
│   ├── core/
│   │   ├── services/
│   │   │   ├── scenario.service.ts
│   │   │   ├── character.service.ts
│   │   │   ├── item.service.ts
│   │   │   └── game.service.ts
│   ├── modules/
│   │   ├── scenario/
│   │   │   ├── scenario.module.ts
│   │   │   ├── components/
│   │   │   │   ├── scenario-list/
│   │   │   │   │   ├── scenario-list.component.ts
│   │   │   │   │   └── scenario-list.component.html
│   │   │   │   ├── scenario-detail/
│   │   │   │   │   ├── scenario-detail.component.ts
│   │   │   │   │   └── scenario-detail.component.html
│   │   ├── character/
│   │   │   ├── character.module.ts
│   │   │   ├── components/
│   │   │   │   ├── character-list/
│   │   │   │   │   ├── character-list.component.ts
│   │   │   │   │   └── character-list.component.html
│   │   │   │   ├── character-detail/
│   │   │   │   │   ├── character-detail.component.ts
│   │   │   │   │   └── character-detail.component.html
│   │   ├── item/
│   │   │   ├── item.module.ts
│   │   │   ├── components/
│   │   │   │   ├── item-list/
│   │   │   │   │   ├── item-list.component.ts
│   │   │   │   │   └── item-list.component.html
│   │   │   │   ├── item-detail/
│   │   │   │   │   ├── item-detail.component.ts
│   │   │   │   │   └── item-detail.component.html
│   │   ├── game/
│   │   │   ├── game.module.ts
│   │   │   ├── components/
│   │   │   │   ├── game-list/
│   │   │   │   │   ├── game-list.component.ts
│   │   │   │   │   └── game-list.component.html
│   │   │   │   ├── game-detail/
│   │   │   │   │   ├── game-detail.component.ts
│   │   │   │   │   └── game-detail.component.html
│   ├── app.module.ts
│   ├── app-routing.module.ts
│   ├── components/
│   │   ├── navbar/
│   │   │   ├── navbar.component.ts
│   │   │   └── navbar.component.html
│   │   ├── home/
│   │   │   ├── home.component.ts
│   │   │   └── home.component.html

### *Consejos Adicionales*

1. Mock Data: Al comenzar, puedes utilizar datos simulados (mock data) para cada servicio. Esto te permitirá enfocarte en la estructura y funcionalidades sin depender de una API real.

2. Estilos y UX: Implementa estilos básicos utilizando CSS o un framework como Angular Material para mejorar la presentación y la experiencia de usuario.



### Diseño narrativo:
1. Tener una trama -eventos.
2. Tener  un subtexto -las circunstancias, lo que te quieren contar.
3. Planificación:
    -Define un objetivo.
    -Define qué obstáculo se van a superar.
    -Defie al protoagnista o personaje.
    -Define el conflicto. 

### Esquema típico:
-El camino del héroe. 

Acto 1
    -Presentación
    -Catalizador -> el evento que introduce en la trama.

Acto 2
    -Subramas y desarrollo de otros personajes.
    -Tsunami narrativo
        |_Hacia el final del acto, la crisis.

Acto 3
    -Resolución de subtramas.
    -Clímax
    -Evolución del personaje.
    -Resolución final -> subtexto


Para crear un personaje vamos a basarnos en los siguientes principios

1. Su situación presente
    "Actualmente trabaja en una floristería a un par de calles, suele tener un trato cercano con los clientes.".
    
2. Un evento del pasado. 
    "Hace unos años empezó a estudiar derecho, aunque por diversas circunstancias tuvo que dejarlo".
    "Tras un tiempo viviendo en la capital, decidió que quería un cambio de aires".
    "Cuenta que en su infancia tenía un perro llamado 'Lulu', un día desapareció sin dejar rastro".

3. Intenciones
    "Parece una persona normal y corriente". 
    "No hay nada en su comportamiento que sugiera otra cosa que no sea lo que ves."