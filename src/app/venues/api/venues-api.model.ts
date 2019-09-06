export namespace API {
  export interface Venues {
    response: {
      groups: {
        items: {
            venue: {
              id: string;
              name: string;
              location: {
                address: string;
                crossStreet: string;
                lat: string;
                lng: string;
                distance: string;
                postalCode: string;
                cc: string;
                city: string;
                formattedAddress: string[];
              };
              categories: {
                id: string;
                name: string;
                icon: {
                  prefix: string;
                  suffix: string;
                }
              }[];
            }
          }[];
      }[];
    };
  }
}
