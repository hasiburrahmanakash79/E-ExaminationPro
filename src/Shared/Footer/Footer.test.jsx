import React from 'react';
import { render,screen } from '@testing-library/react';
import Footer from './Footer';
import { describe, expect } from 'vitest';

describe("Footer component", () => {
  it('renders text content in Footer', () => {
    render(<Footer />);
    expect(screen.getByText("Exam Platform")).toBeInTheDocument()
  });
})
