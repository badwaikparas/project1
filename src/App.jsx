import { useEffect, useState } from 'react'
import './App.css'
import hamburger from './assets/bars-solid.svg'
import search from './assets/magnifying-glass-solid.svg'
import Map from './Map';



function extractLatLong(coordinates) {
    const [latitude, longitude] = coordinates.split(',').map(coord => parseFloat(coord.trim()));
    return { latitude: latitude, longitude: longitude };
}

function App() {
    const [clicked, setClicked] = useState(false);
    const [text, setText] = useState("");
    const [latitude, setLatitude] = useState(21.1458);
    const [longitude, setLongitude] = useState(79.0882);

    useEffect(() => {
        console.log(latitude)
        console.log(longitude)
    }, [latitude, longitude])

    return (
        <>
            <div className='flex justify-center' style={{ display: 'flex' }}>
                <div className='w-screen h-screen absolute' style={{ zIndex: -1 }}>
                    <Map latitude={latitude} longitude={longitude} />
                </div>
                <div className='header flex justify-evenly' style={{ gap: '50px', float: 'right', width: '100%' }}>
                    <div className='searchBar m-5 border-blue-400 border-2 ' style={{ background: 'red', width: '30%', height: '6vh', borderRadius: '50px', display: 'flex' }}>
                        <input className='p-5 h-auto' value={text} onChange={(e) => { setText(e.target.value) }} type="text" placeholder='Search' style={{ width: '100%', borderRadius: '50px 0 0 50px' }} />
                        <img className='w-5 mx-4' src={search} alt="search icon"
                            onClick={() => {
                                const coords = extractLatLong(text);
                                setLatitude(coords.latitude);
                                setLongitude(coords.longitude);
                                console.log(JSON.stringify(coords))
                            }}
                        />
                    </div>
                    <div className='layers flex absolute right-0 top-0 m-5 flex-col gap-4 items-end'
                        onClick={() => setClicked(clicked => !clicked)}
                    >
                        <div className='flex items-center gap-2 bg-slate-600 p-4 rounded-full'>
                            {/* <div className=''>Layers</div> */}
                            <img className='w-4' src={hamburger} alt="hamburger" />
                        </div>
                        {
                            clicked &&
                            <div className='bg-slate-500 rounded-xl px-5'>
                                <ul>
                                    <li className='p-4 border-b-2 border-blue-400 font-bold'>Layer 1</li>
                                    <li className='p-4 border-b-2 border-blue-400 font-bold'>Layer 2</li>
                                    <li className='p-4 font-bold'>Layer 3</li>
                                </ul>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
