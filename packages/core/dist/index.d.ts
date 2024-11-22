interface Guest {
    id: string;
    name: string;
    email: string;
    confirmed: boolean;
    hasACompanions: boolean;
    amountOfCompanions: number;
}

interface IEvent {
    id: string;
    date: Date;
    name: string;
    image: string;
    slug: string;
    location: string;
    password: string;
    description: string;
    imageBackground: string;
    expectedAudience: number;
    guests: Guest[];
}

declare function complementGuest(partial: Partial<Guest>): Guest;

declare function complementEvent(partial: Partial<IEvent>): IEvent;

declare function createEmptyEvent(): Partial<IEvent>;

declare function createEmptyGuest(): Partial<Guest>;

declare namespace Id {
    function New(): string;
    function Validate(id: string): boolean;
}

declare namespace Slug {
    function format(value: string): string;
}

declare namespace Password {
    function New(_length?: number): string;
}

declare namespace DateUtils {
    function format(date: Date): string;
    function parse(date: string): Date;
}

declare const events: IEvent[];

export { DateUtils, type Guest, type IEvent, Id, Password, Slug, complementEvent, complementGuest, createEmptyEvent, createEmptyGuest, events };
