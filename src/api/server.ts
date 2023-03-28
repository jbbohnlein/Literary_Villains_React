// This document has the rules for communicating with database

// TODO: gets token from database, also need to create that call in Flask
//TODO: Look up JSON Web tokens or maybe look at Digital Ocean login authentication (Brandon mentions in video 14)
// Maybe this is where I want to use my openlibrary url to search for stuff

// TODO: Delete this:
const token = 'e70a065efe48fa0b06dc3c126c49d666a9f9fd80976a1153'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://ordinary-peppered-harpymimus.glitch.me/api/bookshelf`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': 'Bearer e70a065efe48fa0b06dc3c126c49d666a9f9fd80976a1153',
                    // 'Access-Control-Allow-Origin': '*',
                }
            });
        
        if (!response.ok) {
            throw new Error('Failed to fetch data from the server');
        }

        return await response.json();
    },

// Need way to pass the search term into here:

    // results: async () => {
    //     const response = await fetch(`https://openlibrary.org/search.json?q=${search}&fields=key%20title%20author_name%20first_publish_year%20ratings_average&limit=9`,
    //     {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             // 'x-access-token': 'Bearer 94d41fb2a1a6a1cebc3df4d7ffb400863944b812d3f82c37',
    //             'Access-Control-Allow-Origin': '*',
    //         }
    //     });

    //     if (!response.ok) {
    //         throw new Error('Failed to fetch data from the server');
    //     }

    //     return await response.json();
    // },

    create: async (data: any = {}) => {
        const response = await fetch(`https://ordinary-peppered-harpymimus.glitch.me/api/bookshelf`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': 'Bearer e70a065efe48fa0b06dc3c126c49d666a9f9fd80976a1153',
                    // 'Access-Control-Allow-Origin': '*',
                },
                body: JSON.stringify(data)
            });

        if (!response.ok) {
            throw new Error('Failed to create new data on the server');
        }

        return await response.json();
    },

    update: async (key: string, data: any = {}) => {
        const response = await fetch(`https://ordinary-peppered-harpymimus.glitch.me/api/bookshelf/${key}`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': 'Bearer e70a065efe48fa0b06dc3c126c49d666a9f9fd80976a1153',
                    // 'Access-Control-Allow-Origin': '*',
                },
                body: JSON.stringify(data)
            });

        if (!response.ok) {
            throw new Error('Failed to update data on server');
        }

        return await response.json();
    },

    delete: async (key: string) => {
        const response = await fetch(`https://ordinary-peppered-harpymimus.glitch.me/api/bookshelf/${key}`,
            {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': 'Bearer e70a065efe48fa0b06dc3c126c49d666a9f9fd80976a1153',
                    // 'Access-Control-Allow-Origin': '*',
                }
            });

        if (!response.ok) {
            throw new Error('Failed to delete data on server');
        }

        return;
    }
}



