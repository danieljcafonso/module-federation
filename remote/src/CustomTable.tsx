import React from "react";

interface RowData {
  name: string;
  surname: string;
  id?: number;
}

type TableData = { data?: Array<RowData> };

const CustomRow = ({ name, surname }: RowData) => {
  return (
    <tr>
      <td> {name} </td>
      <td> {surname} </td>
    </tr>
  );
};

const CustomTable = ({ data = [] }: TableData) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ name, surname, id }) => (
          <CustomRow key={id} name={name} surname={surname} />
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
