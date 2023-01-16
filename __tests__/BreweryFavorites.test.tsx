/**
 * @format
 */

import React from 'react';
import {render, screen} from '../jest/test-utils';
import BreweryFavorites from '../src/screens/BreweryFavorites';

it('renders Breweries correctly', () => {
  render(<BreweryFavorites />);

  expect(screen.toJSON()).toMatchSnapshot();
});
