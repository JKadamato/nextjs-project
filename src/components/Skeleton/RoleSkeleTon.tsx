const RoleSkeleton = () => (
  <table className="min-w-full bg-white border border-gray-200">
    <thead>
      <tr>
        <th className="py-2 px-4 border-b bg-gray-100 w-[5%]">
          <div className="h-4 bg-gray-300 rounded-md animate-pulse" />
        </th>
        <th className="py-2 px-4 border-b bg-gray-100">
          <div className="h-4 bg-gray-300 rounded-md animate-pulse" />
        </th>
        <th className="py-2 px-4 border-b bg-gray-100">
          <div className="h-4 bg-gray-300 rounded-md animate-pulse" />
        </th>
        <th className="py-2 px-4 border-b bg-gray-100" />
      </tr>
    </thead>
    <tbody>
      {[...Array(5)].map((_, index) => (
        <tr key={index} className="text-center hover:bg-gray-100">
          <td className="py-2 px-4 border-b">
            <div className="h-4 bg-gray-300 rounded-md animate-pulse" />
          </td>
          <td className="py-2 px-4 border-b">
            <div className="h-4 bg-gray-300 rounded-md animate-pulse" />
          </td>
          <td className="py-2 px-4 border-b">
            <div className="h-4 bg-gray-300 rounded-md animate-pulse" />
          </td>
          <td className="py-2 px-4 border-b">
            <div className="w-6 h-6 bg-gray-300 rounded-full animate-pulse" />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default RoleSkeleton;
