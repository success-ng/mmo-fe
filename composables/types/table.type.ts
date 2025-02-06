export type TableProps = {
  class?: string;
  fetch: () => void;
  edit: () => void;
  delete: () => void;
  create: () => void;
  data: any[];
  columns: Column[];
  isEdit: boolean;
  isLoading: boolean;
};

export type Column = {
  key: string;
  label: string;
};