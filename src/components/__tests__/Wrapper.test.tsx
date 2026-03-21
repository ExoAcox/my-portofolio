import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Wrapper from '../Wrapper';

// Mock useScroll and useMotionValueEvent
vi.mock('motion/react', async (importOriginal) => {
    const mod = await importOriginal<typeof import('motion/react')>();
    return {
        ...mod,
        useScroll: () => ({ scrollY: { get: () => 0, onChange: () => () => { } } }),
        useMotionValueEvent: () => { }
    };
});

describe('Wrapper', () => {
    it('renders children correctly', () => {
        render(
            <Wrapper contactInView={false}>
                <div>Test Child</div>
            </Wrapper>
        );

        expect(screen.getByText('Test Child')).toBeInTheDocument();
    });
});
