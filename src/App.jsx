import { useEffect, useState } from "react"
import { BiSearch } from "react-icons/bi"
import { NavLink } from "react-router-dom"


export default function App() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [searchRes, setSearchRes] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const res = await (await fetch('https://api.sampleapis.com/beers/ale')).json()
      if (res) {
        setData(res)
      }
    }
    fetchData()
  }, [])
  useEffect(() => {
    if (search === "" || !search.trim()) return
    const filteredProducts = data.filter(product =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchRes(filteredProducts)
  }, [data, search])

  return (
    <main className="w-full bg-[#eff2f7] min-h-screen">
      <div>
        <div className="flex flex-row items-center justify-center py-12">
          <div className="p-4 px-5 rounded-l-xl bg-slate-200"><BiSearch /></div>
          <input onChange={(e) => setSearch(e.target.value)} type="text" className="rounded-r-xl p-3 px-6 text-base max-w-[400px] w-[40vw] outline-none" />
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center gap-8 px-12 ">
          {
            !search ? data?.map((item, i) => {
              return (
                <NavLink to={`/${item.id}`} className="rounded-lg p-4  bg-white w-[250px] hover:scale-[1.03] duration-200 transform" key={i}>
                  <img src={item.image} alt={item.name} className=" h-[250px] object-cover w-full" />
                  <div className="flex flex-row justify-between gap-4 mt-4 ">
                    <div className="text-sm font-semibold">{item.name}</div>
                    <div className="text-xl font-bold">{item.price}</div>
                  </div>
                </NavLink>
              )
            })

              : searchRes?.map((item, i) => {
                return (
                  <div className="rounded-lg p-4  bg-white w-[250px] hover:scale-[1.03] duration-200 transform" key={i}>
                    <img src={item.image} alt={item.name} className=" h-[250px] object-cover w-full" />
                    <div className="flex flex-row justify-between gap-4 mt-4 ">
                      <div className="text-sm font-semibold">{item.name}</div>
                      <div className="text-xl font-bold">{item.price}</div>
                    </div>
                  </div>
                )
              })
          }
        </div>
      </div>
    </main>
  )
}