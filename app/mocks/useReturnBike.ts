const useReturnBike = () => ({
  mutate: jest.fn((_data, { onSuccess }) => {
    onSuccess?.({});
  }),
});
export default useReturnBike;