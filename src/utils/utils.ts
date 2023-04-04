import { AxiosResponse } from "axios";

export const getActivePanels = ({ color, size, type }) => {
  return Object.values({
    color: color && 'color',
    size: size && 'size',
    type: type && 'type',
  });
};

export const handleResponse = async <T>(res: Promise<AxiosResponse<T>>): Promise<[T | null, string | null]> => {
  try {
    const result = await res;
    return [result.data, null];
  } catch (error) {
    return [null, error?.message || ""];
  }
};
