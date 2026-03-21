import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Contact from '../Contact';

describe('Contact', () => {
    it('renders Contact section correctly', () => {
        render(<Contact />);

        expect(screen.getByText(/Get in touch with me/i)).toBeInTheDocument();
        expect(screen.getByText('anasarifin1995@gmail.com')).toBeInTheDocument();
        expect(screen.getByText('+62 897-5926-544')).toBeInTheDocument();
    });
});
