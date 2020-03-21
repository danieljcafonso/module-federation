/// <reference types="react" />

type TableData = {
  data: Array<{ name: string; surname: string; id?: number }>;
};

declare module "remote/Table" {
  const Table: React.FC<TableData>;

  export default Table;
}
