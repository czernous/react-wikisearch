import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Input from '.';

const renderer = new ShallowRenderer();

describe('Input component', () => {
    let sut;
    let props;

    describe('without props', () => {
        beforeEach(() => {
            sut = renderer.render(<Input className="input-field" {...props} />);
        });

        it('should match snapshot', () => {
            expect(sut).toMatchSnapshot();
        });
    });

    describe('with props', () => {
        beforeEach(() => {
            props = {
                placeholder: 'Enter your data',
                name: 'search bar',
            };

            sut = renderer.render(<Input className="input-field" {...props} />);
        });

        it('should match snapshot', () => {
            expect(sut).toMatchSnapshot();
        });
    });
});
