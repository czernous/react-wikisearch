import React from 'react';
import ReactAutocomplete from 'react-autocomplete';

import Input from '../Input';

import './styles.scss';

const Autocomplete = ({ articles, searchValue, onSearchChange }) => (
    <ReactAutocomplete
        items={articles}
        renderInput={Input}
        inputProps={{ placeholder: 'Enter a search term...' }}
        getItemValue={(item) => item.label}
        renderMenu={(children, value, style) => {
            return articles && articles.length ? (
                <div style={{ ...style }} className="input-suggestions">
                    {children}
                    <a
                        href={`/search?query=${value}`}
                        rel="noreferrer"
                        className="search-link"
                    >
                        See all results
                    </a>
                </div>
            ) : (
                <></>
            );
        }}
        renderItem={(item, highlighted) => (
            <div
                className="input-suggestions__item"
                key={item.id}
                style={{
                    backgroundColor: highlighted ? '#eee' : 'transparent',
                }}
            >
                <a className="search-link" href={item.id} target="_blank">
                    {item.label}
                </a>
            </div>
        )}
        value={searchValue}
        onChange={onSearchChange}
    />
);

export default Autocomplete;
