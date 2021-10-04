import React from 'react';

import Container from '../../components/Container';
import Autocomplete from '../../components/Autocomplete';

import './styles.scss';

const Home = () => {
    return (
        <div className="home-page">
            <img
                className="home-page__logo"
                src={`./img/logo.png`}
                alt="logo"
            />
            <Container>
                {({ searchValue, onSearchChange, articles }) => (
                    <Autocomplete
                        articles={articles}
                        searchValue={searchValue}
                        onSearchChange={onSearchChange}
                    />
                )}
            </Container>
        </div>
    );
};

export default Home;
