const Table = () => {
    const dataset = [
        {
          Name: 'Based on premium',
          Calmar_Ratio: 2.02,
          Overall_Profit: 194096.05,
          Avg_Daily_Profit: 158.45,
          Win_Pcn_Day: 0.62,
          Price: 500,
          Action: 'View'
        },
        {
          Name: 'Based on premium',
          Calmar_Ratio: 2.02,
          Overall_Profit: 194096.05,
          Avg_Daily_Profit: 158.45,
          Win_Pcn_Day: 0.62,
          Price: 500,
          Action: 'View'
        },
        {
          Name: 'Based on premium',
          Calmar_Ratio: 2.02,
          Overall_Profit: 194096.05,
          Avg_Daily_Profit: 158.45,
          Win_Pcn_Day: 0.62,
          Price: 500,
          Action: 'View'
        },
        {
          Name: 'Based on premium',
          Calmar_Ratio: 2.02,
          Overall_Profit: 194096.05,
          Avg_Daily_Profit: 158.45,
          Win_Pcn_Day: 0.62,
          Price: 500,
          Action: 'View'
        },
      ]
    return (
        <div>
            <div className="relative overflow-x-auto drop-shadow-basic bg-white rounded-lg w-full">

                <div className="p-4 border-b font-semibold">Basic Backtest</div>
                <div className="px-4 pb-4 w-full ">
                    <table className=" w-full text-[15px] text-left rtl:text-right text-gray-700 ">
                        <thead className="text-[15px] text-gray-900 ">
                            <tr>
                                <th scope="col" className="px-6 py-6 whitespace-nowrap  w-[2vw] min-w-[20px]">
                                    Rank
                                </th>
                                <th scope="col" className="px-6 py-6 whitespace-nowrap ">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-6 whitespace-nowrap ">
                                    Calmar Ratio
                                </th>
                                <th scope="col" className="px-6 py-6 whitespace-nowrap ">
                                    Overall Profit
                                </th>
                                <th scope="col" className="px-6 py-6 whitespace-nowrap ">
                                    Avg. Daily Profit
                                </th>
                                <th scope="col" className="px-6 py-6 whitespace-nowrap ">
                                    Win %(Day)
                                </th>
                                <th scope="col" className="px-6 py-6 whitespace-nowrap ">
                                    Price (Rs)
                                </th>
                                <th scope="col" className="px-6 py-6 whitespace-nowrap ">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                // eslint-disable-next-line react/prop-types
                                dataset?.map((data, id) => {
                                    return (
                                        <tr className="even:bg-white  odd:bg-pink-base rounded hover:scale-x-[1.01] duration-300" key={id}>
                                            <th scope="row" className="px-6 py-6 whitespace-nowrap font-medium text-gray-900 rounded-l-lg ">
                                                {id + 1}
                                            </th>
                                            <td className="px-6 py-6 whitespace-nowrap">
                                                {data.Name}
                                            </td>
                                            <td className="px-6 py-6 whitespace-nowrap">
                                                {data.Calmar_Ratio}
                                            </td>
                                            <td className="px-6 py-6 whitespace-nowrap">
                                                {data.Overall_Profit}
                                            </td>
                                            <td className="px-6 py-6 whitespace-nowrap">
                                                {data.Avg_Daily_Profit}
                                            </td>
                                            <td className="px-6 py-6 whitespace-nowrap">
                                                {data.Win_Pcn_Day}
                                            </td>
                                            <td className="px-6 py-6 whitespace-nowrap">
                                                {data.Price}
                                            </td>
                                            <th className="px-6 py-6 whitespace-nowrap rounded-r-lg">
                                                <a href="#" className="font-medium text-blue-600  hover:underline">{data.Action}</a>
                                            </th>
                                        </tr>
                                    )
                                })
                            }



                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    )
}

export default Table