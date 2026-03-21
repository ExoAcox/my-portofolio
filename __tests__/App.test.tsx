import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import App from '../src/App';

describe('App Component', () => {
  it('renders without crashing', () => {
    // Intercept default matchMedia if needed for motion/react
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // deprecated
        removeListener: vi.fn(), // deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });

    // IntersectionObserver mock since we are using useInView from motion/react
    class MockIntersectionObserver {
      observe = vi.fn()
      unobserve = vi.fn()
      disconnect = vi.fn()
    }
    window.IntersectionObserver = MockIntersectionObserver as unknown as typeof window.IntersectionObserver;

    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });
});
