import { render, cleanup } from '@testing-library/react';
import App, { GET_QUERY } from './App';
import { MockedProvider } from '@apollo/client/testing';
import { act } from 'react-dom/test-utils';

afterEach(cleanup);

const dataFixture = {
  capsule: {
    id: '1',
    landings: 0,
    original_launch: {},
    reuse_count: 0,
    missions: [
      {
        flight: 0,
        name: 'test-capsule-mission-name',
      },
    ],
  },
};

const errorMock = {
  request: {
    query: GET_QUERY,
  },
  error: new Error('A test error occurred'),
};

const validMock = {
  request: {
    query: GET_QUERY,
  },
  result: {
    data: dataFixture,
  },
};

test('renders loading screen', () => {
  const { asFragment } = render(
    <MockedProvider mocks={[]} addTypename={false}>
      <App />
    </MockedProvider>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders error screen', async () => {
  const { asFragment } = render(
    <MockedProvider mocks={[errorMock]} addTypename={false}>
      <App />
    </MockedProvider>
  );
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });
  expect(asFragment()).toMatchSnapshot();
});

test('renders app screen', async () => {
  const { asFragment } = render(
    <MockedProvider mocks={[validMock]} addTypename={false}>
      <App />
    </MockedProvider>
  );
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });
  expect(asFragment()).toMatchSnapshot();
});
