// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SwaggerUi title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SwaggerUi/i);
    expect(titleElement).toBeInTheDocument();
});
