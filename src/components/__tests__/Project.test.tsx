import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Project from '../Project';
import React from 'react';

// Mock projects constant to isolate test
vi.mock('@constants/projects', () => ({
    default: [
        {
            title: 'Test Project',
            desc: 'Test project description',
            image: '/test.jpg',
            href: 'https://test.com',
            stacks: ['react'],
            links: [{ label: 'GitHub', href: 'https://github.com' }]
        }
    ]
}));

vi.mock('@constants/stacks', () => ({
    default: {
        react: { label: 'React', href: '#' }
    }
}));

describe('Project', () => {
    it('renders Project section correctly when contact is not in view', () => {
        const ref = React.createRef<HTMLDivElement>();
        render(<Project ref={ref} contactInView={false} />);

        expect(screen.getByText('PROJECTS')).toBeInTheDocument();
        expect(screen.getByText('Test Project')).toBeInTheDocument();
        expect(screen.getByText('Test project description')).toBeInTheDocument();
        expect(screen.getByText('React')).toBeInTheDocument();
    });
});
