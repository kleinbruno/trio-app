const useRentBike = () => ({
  mutate: jest.fn((_data, { onSuccess }) => {
    onSuccess?.({
      rentAmount: 400,
      fee: 60,
      totalAmount: 460,
    });
  }),
});
export default useRentBike;