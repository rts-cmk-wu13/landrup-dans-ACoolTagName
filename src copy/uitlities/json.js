import queryClient from '../queryclient';
import { redirect } from 'react-router';

export async function getCards() {


    return queryClient.fetchQuery({
        queryKey: ['activities'],
        queryFn: async function () {
            const response = await fetch('src/data/cards');
            if (!response.ok) {
                throw new Error('den er helt gal');
            }
            return response.json();
        }
    });
}



