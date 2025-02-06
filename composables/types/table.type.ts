export type TableProps<T> = {
  class?: string;
  fetch: () => void;
  edit: (model: T) => void;
  remove: (model: T) => void;
  create: (model: T) => void;
  show: (model: T) => void;
  data: T[];
  columns: Column[];
  isEdit: boolean;
  isLoading: boolean;
};

export type Column = {
  key: string;
  label: string;
};