import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Uploader from './Uploader';

describe('<Uploader />', () => {
  test('it should mount', () => {
    render(<Uploader />);
    
    const uploader = screen.getByTestId('Uploader');

    expect(uploader).toBeInTheDocument();
  });
});