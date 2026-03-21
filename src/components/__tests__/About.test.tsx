import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import About from '../About';
import React from 'react';

describe('About', () => {
    it('renders About section correctly', () => {
        const ref = React.createRef<HTMLDivElement>();
        render(<About ref={ref} />);

        expect(screen.getByText('ABOUT')).toBeInTheDocument();
        expect(screen.getByText(/I’m a Front End Developer/i)).toBeInTheDocument();
    });
});
