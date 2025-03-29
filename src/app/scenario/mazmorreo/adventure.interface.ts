
export interface Adventure {
    name: string;
    description: string;
    events: Event[];
}


export interface Event {
    cause: string;
    effects: string[];
}