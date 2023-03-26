export const getActivePanels = ({ color, size, type }) => {
  return Object.values({
    color: color && "color",
    size: size && "size",
    type: type && "type",
  });
};

export const handleResponse = async (res) => {
  try {
    const result = await res;
    return [result.data, null];
  } catch (error) {
    return [null, error.response.data];
  }
};
