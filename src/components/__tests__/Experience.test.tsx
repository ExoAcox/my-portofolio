import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Experience from '../Experience';
import React from 'react';

// Mock experiences constant to isolate test
vi.mock('@constants/experiences', () => ({
    default: [
        {
            title: 'Test Experience',
            date: '2023 - Present',
            desc: 'Test Description',
            links: [{ label: 'Link 1', href: '#' }]
        }
    ]
}));

describe('Experience', () => {
    it('renders Experience section correctly', () => {
        const ref = React.createRef<HTMLDivElement>();
        render(<Experience ref={ref} />);

        expect(screen.getByText('EXPERIENCE')).toBeInTheDocument();
        expect(screen.getByText('Test Experience')).toBeInTheDocument();
        expect(screen.getByText('2023 - Present')).toBeInTheDocument();
        expect(screen.getByText('Test Description')).toBeInTheDocument();
        expect(screen.getByText('Link 1')).toBeInTheDocument();
    });
});