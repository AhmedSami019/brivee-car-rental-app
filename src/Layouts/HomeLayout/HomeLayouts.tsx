
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router';

const HomeLayouts = () => {
    return (
        <div>
            <header>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>

            <main className='mt-5 mx-auto px-10'>
                <Outlet></Outlet>
            </main>

            <footer>

            </footer>
        </div>
    );
};

export default HomeLayouts;