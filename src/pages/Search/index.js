/**
 *  Search results page
 *
 */

import React from 'react';

import Container from '../../components/Container';
import Autocomplete from '../../components/Autocomplete';
import ListItem from '../../components/ListItem';

import { useSearch } from '../../hooks';

const Search = ({ ...props }) => {
    const search = props.location.search;
    const params = new URLSearchParams(search);
    const query = params.get('query');

    const { articles } = useSearch(query, 50);

    return (
        <div>
            <Container>
                {({ searchValue, onSearchChange, articles }) => (
                    <Autocomplete
                        articles={articles}
                        searchValue={searchValue}
                        onSearchChange={onSearchChange}
                    />
                )}
            </Container>

            {!articles.length ? (
                <h3>No articles for found query: {query}</h3>
            ) : (
                articles.map((article) => (
                    <ListItem {...article} key={article.id} />
                ))
            )}
        </div>
    );
};

export default Search;
