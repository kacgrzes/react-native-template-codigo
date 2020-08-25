/**
 * @format
 */

import React from 'react';
import { render, waitFor } from '@testing-library/react-native';

import App from '../src/App';

it('renders correctly', async () => {
  render(<App />);
  waitFor(() => true);
});
