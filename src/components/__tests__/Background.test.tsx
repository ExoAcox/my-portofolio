import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Background from '../Background';

describe('Background', () => {
    it('renders Background section correctly', () => {
        Object.defineProperty(document.documentElement, 'clientWidth', { value: 1024 });
        Object.defineProperty(document.documentElement, 'clientHeight', { value: 768 });

        const { container } = render(<Background />);

        expect(container).toBeInTheDocument();
        expect(container.querySelector('.backdrop-blur-3xl')).toBeInTheDocument();
    });
});
