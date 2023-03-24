export const getActivePanels = ({ color, size, type }) => {
  return Object.values({
    color: color && "color",
    size: size && "size",
    type: type && "type",
  });
};
