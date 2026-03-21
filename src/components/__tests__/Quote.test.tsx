import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Quote from '../Quote';

describe('Quote', () => {
    it('renders Quote section correctly', () => {
        render(<Quote />);

        expect(screen.getByText(/I understand that front-end tech evolves fast/i)).toBeInTheDocument();
    });
});
