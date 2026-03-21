import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Hero from '../Hero';
import userEvent from '@testing-library/user-event';

describe('Hero', () => {
    it('renders Hero section correctly', () => {
        render(<Hero active="about" />);

        expect(screen.getByText('Anas Arifin')).toBeInTheDocument();
        expect(screen.getByText('Front End Developer')).toBeInTheDocument();
        expect(screen.getByText('ABOUT')).toBeInTheDocument();
        expect(screen.getByText('EXPERIENCE')).toBeInTheDocument();
        expect(screen.getByText('PROJECTS')).toBeInTheDocument();
    });

    it('handles navigation clicks', async () => {
        render(<Hero active="about" />);

        const scrollIntoViewMock = vi.fn();
        const el = document.createElement('div');
        el.id = 'project';
        el.scrollIntoView = scrollIntoViewMock;
        document.body.appendChild(el);

        const projectLink = screen.getByText('PROJECTS');
        await userEvent.click(projectLink);

        expect(scrollIntoViewMock).toHaveBeenCalled();
        document.body.removeChild(el);
    });
});
