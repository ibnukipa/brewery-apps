/**
 * @format
 */

import React from 'react';
import {render, screen} from '../jest/test-utils';
import Brewery from '../src/screens/Brewery';

it('renders Breweries correctly', () => {
  render(<Brewery />);

  expect(screen.toJSON()).toMatchSnapshot();
});
