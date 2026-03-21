import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SectionTitle from '../SectionTitle';

describe('SectionTitle', () => {
    it('renders SectionTitle correctly', () => {
        render(<SectionTitle>TEST TITLE</SectionTitle>);

        expect(screen.getByText('TEST TITLE')).toBeInTheDocument();
    });
});
