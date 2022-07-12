
const ShowData = ({ data }: any) => {
  const total = data.quantity* data.price;

  return (
    <>
      <tr key={data?.productId}>
        <td className="border border-slate-300 py-10 md:px-2 xl:px-10">
          {data?.name}
        </td>
        <td className="border border-slate-300 px-6 py-14 ">
          <span className="flex justify-center"> ${data?.price}</span>
        </td>
        <td className="border border-slate-300 px-6 py-14 ">
          <span className="flex justify-center"> ${data?.quantity}</span>
        </td>
        <td className="border border-slate-300 px-6 py-14 ">
          <span className="flex justify-center"> ${total}</span>
        </td>
      </tr>
    </>
  );
};

export default ShowData;
