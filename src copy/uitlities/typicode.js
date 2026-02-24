
import queryClient from '../queryclient';
import { redirect } from 'react-router';

export async function getUsers() {

    const token = sessionStorage.getItem('token');

    if (!token) redirect('/login');

    return queryClient.fetchQuery({
        queryKey: ['users'],
        queryFn: async function () {
            const response = await fetch('http://localhost:4000/api/v1/testimonials');
            if (!response.ok) {
                throw new Error('den er helt gal');
            }
            return response.json();
        }
    });
}

export async function getUser({ params }) {
    const response = await fetch(`http://localhost:4000/api/v1/testimonials/${params.id}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return response.json();
}   




