import { test, expect } from 'vitest';
import React from 'react';
import { Text } from 'ink';
import { render } from 'ink-testing-library';

const Counter = ({ count }) => <Text>Count: {count}</Text>;

const { lastFrame, rerender } = render(<Counter count={0} />);

test('Count: 0', () => {
    expect(lastFrame() === 'Count: 0').toBeTruthy()
})

test('Count: 1', () => {
    rerender(<Counter count={1} />);
    expect(lastFrame() === 'Count: 1').toBeTruthy()
})
