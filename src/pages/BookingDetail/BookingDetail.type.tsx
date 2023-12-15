import { render, screen, fireEvent, act } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';
import BookingDetail from '.';


jest.mock('../../hooks/Bookings/useBookings');
jest.mock('react-bootstrap-hooks-alert', () => ({
  useAlert: jest.fn(),
}));

const mockUseBooking = require('../../hooks/Bookings/useBookings');

describe('BookingDetail component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    fetchMock.resetMocks();
  });

  it('renders BookingDetail component', async () => {
    const mockContextData = {
      detailBooking: jest.fn(() => Promise.resolve({})),
      deleteBooking: jest.fn(),
    };
    mockUseBooking.useBooking.mockReturnValueOnce(mockContextData);

    render(
      <MemoryRouter initialEntries={['/booking-detail/123']}>
        <Route path="/booking-detail/:id">
          <BookingDetail />
        </Route>
      </MemoryRouter>
    );

    await act(() => Promise.resolve());

    expect(mockUseBooking.useBooking).toHaveBeenCalledTimes(1);
    expect(mockUseBooking.useBooking).toHaveBeenCalledWith();
  });

  it('deletes booking and navigates to home on button click', async () => {
    const mockContextData = {
      detailBooking: jest.fn(() =>
        Promise.resolve({
          book: { city: 'New York' },
          hotel: { price: 150 },
        })
      ),
      deleteBooking: jest.fn(),
    };
    mockUseBooking.useBooking.mockReturnValueOnce(mockContextData);

    render(
      <MemoryRouter initialEntries={['/booking-detail/123']}>
        <Route path="/booking-detail/:id">
          <BookingDetail />
        </Route>
      </MemoryRouter>
    );

    await act(() => Promise.resolve());

    const cancelButton = screen.getByText('Cancel Booking');
    fireEvent.click(cancelButton);

    expect(mockUseBooking.useBooking).toHaveBeenCalledTimes(1);
    expect(mockUseBooking.useBooking).toHaveBeenCalledWith();
    expect(mockContextData.deleteBooking).toHaveBeenCalledTimes(1);
    expect(mockContextData.deleteBooking).toHaveBeenCalledWith(123);
  });
});