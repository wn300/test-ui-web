
export interface Products {
    id: number;
    name: string;
    categories: number[];
    available: boolean;
    bestSeller: boolean;
    price: string;
    img: string;
    description: string;
}

export interface Categories {
    id: number;
    name: string;
}
