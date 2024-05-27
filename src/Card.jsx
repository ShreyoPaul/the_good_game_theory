import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const Card = () => {
    let { id } = useParams();
    const [data, setData] = useState({})
    console.log(id)
    useEffect(() => {
        const fetchData = async () => {
            const res = await (await fetch(`https://api.sampleapis.com/beers/ale/${id}`)).json()
            if (res) {
                setData(res)
            }
        }
        fetchData()
    }, [id])
    return (
        <div className="w-full h-screen flex flex-row justify-center items-center bg-[#eff2f7]">
            {
                data
                    ? <div className="flex flex-row flex-wrap justify-center items-center p-8 rounded-md bg-white gap-12">
                        <img src={data.image} alt={data.name} className="w-[300px] " />
                        <div className="w-[20vw]">
                            <div className="text-xl font-semibold">{data.name}</div>
                            <div className="text-2xl font-bold">{data.price}</div>
                            <div className="text-lg font-semibold">Average: {Math.floor(data?.rating?.average)}</div>
                            <div className="text-lg font-semibold">Reviews: {data?.rating?.reviews}</div>
                        </div>
                    </div>
                    : <div>Loading...</div>
            }
        </div>
    )
}

export default Card