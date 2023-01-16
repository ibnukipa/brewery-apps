/**
 * @format
 */

import React from 'react';
import {render, screen} from '../jest/test-utils';
import Breweries from '../src/screens/Breweries';

it('renders Breweries correctly', () => {
  render(<Breweries />);

  expect(screen.toJSON()).toMatchSnapshot();
});
