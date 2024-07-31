const UserSkeleton = () => (
  <table className="w-full table-auto">
    <tbody>
      {[...Array(5)].map((_, index) => (
        <tr
          key={index}
          className="flex flex-col sm:flex-row items-start sm:items-center sm:gap-10 pr-8 md:pr-0 justify-between p-0 sm:p-4 border-b border-gray-200 bg-gray-100"
        >
          <td className="flex items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-lg mr-4 animate-pulse" />
          </td>
          <td className="text-sm w-full truncate mb-4 sm:mb-0">
            <div className="h-4 bg-gray-300 rounded-md animate-pulse w-full" />
          </td>
          <td className="text-sm w-full truncate mb-4 sm:mb-0">
            <div className="h-4 bg-gray-300 rounded-md animate-pulse w-full" />
          </td>
          <td className="text-sm w-full truncate mb-4 sm:mb-0">
            <div className="h-4 bg-gray-300 rounded-md animate-pulse w-full" />
          </td>
          <td className="w-full sm:w-1/12">
            <div className="w-6 h-6 bg-gray-300 rounded-full animate-pulse" />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default UserSkeleton;
