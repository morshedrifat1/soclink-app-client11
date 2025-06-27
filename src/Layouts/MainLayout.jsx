import React from 'react';
import Header from '../components/Header';
import { Outlet,  useNavigation } from 'react-router';
import Footer from '../components/Footer';
import LoadingSpiner from '../components/LoadingSpiner';

const MainLayout = () => {
    const navigation = useNavigation();
    return (
        <div>
            <header className='sticky top-0 z-40 bg-base-200 backdrop-blur-md backdrop-saturate-150'>
                <Header></Header>
            </header>
            <main>
                {navigation.state==='loading'?<LoadingSpiner></LoadingSpiner>:<Outlet></Outlet>}
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;