export const httpGet = async (url: string, headers?: Record<string, string>) => {

    try {
        const response = await fetch(url, { headers: new Headers(headers) });
        return await response.json();
    }
    catch (error) {
        console.log('une erreur survien', error);
        //throw error;
    }

}