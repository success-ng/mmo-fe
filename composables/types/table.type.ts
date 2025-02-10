export type TableProps<T> = {
  title?: string;
  class?: string;
  fetch: () => void;
  edit?: (model: T) => void;
  remove?: (model: T) => void;
  create?: (model: T) => void;
  show?: (model: T) => void;
  data: T[];
  columns: Column[];
  isLoading: boolean;
};

export type Column = {
  key: string;
  label: string;
};