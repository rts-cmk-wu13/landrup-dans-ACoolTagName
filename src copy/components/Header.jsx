import { useLocation } from 'react-router';
import LogoutButton from '../components/LogoutButton';
import Navigation from './Navigation';

export default function Header() {
    const location = useLocation();

    console.log(location.pathname);


    return location.pathname !== "/login" ? (

        <header>
            <Navigation />
        </header>
    ) : null


    /*
        return (
            <header>
                <h1>My App</h1>
                {location.pathname !== "/login" && (
                    <>
                        <Navigation />
                        <LogoutButton />
                    </>
                )}
            </header>
        )
    */

}



