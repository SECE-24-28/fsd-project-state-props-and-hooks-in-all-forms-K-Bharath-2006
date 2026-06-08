
const Table = ({ headers, children }) => {
  return (
    <div className="w-full overflow-x-auto border border-slate-200/60 rounded-2xl shadow-sm bg-white">
      <table className="w-full border-collapse text-left text-sm text-slate-600 font-sans min-w-[700px]">
        <thead className="bg-slate-50 border-b border-slate-100 text-slate-700 uppercase text-xs font-bold tracking-wider">
          <tr>
            {headers.map((header, idx) => (
              <th key={idx} className="px-6 py-4 font-semibold text-primary-navy">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {children}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
