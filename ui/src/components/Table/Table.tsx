import React, { Fragment } from 'react';
import { Button } from '../../components';

export const Table = ({ columns, data }: { columns: any; data: any }) => {
  return (
    <div className="overflow-x-auto">
      <div className="min-w-screen min-h-screen  flex q justify-center  font-sans overflow-hidden">
        <div className="w-full lg:w-5/6">
          <div className="bg-white shadow-md rounded my-6">
            <table className="min-w-max w-full table-auto">
              <thead className="bg-gray-50">
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  {columns.map((column: any) => (
                    <th
                      key={column.id}
                      className="py-3 px-6 text-center uppercase"
                    >
                      {column.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {data.map((rowData: any) => (
                  <tr
                    key={rowData._id}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    {columns.map(({ id }: { id: any }) => (
                      <td
                        key={id}
                        className="py-3 px-6 text-center whitespace-nowrap"
                      >
                        {id !== 'action' ? (
                          rowData[id]
                        ) : (
                          <Fragment>
                            <Button>Edytuj</Button>
                            <Button color="red">Usuń</Button>
                          </Fragment>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
