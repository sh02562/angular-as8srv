

    export interface Latlng {
        lat: number;
        lng: number;
    }

    export interface IRestaurant {
        id: number;
        name: string;
        photograph: string;
        address: string;
        rating: number;
        phoneNo: string;
        order: string;
        locatedIn: string;
        latlng: Latlng;
    }

    export interface RootObject {
        restaurants: IRestaurant[];
    }


