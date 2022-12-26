import React from 'react'
import './indexTabOption.css'

const IndexTabOption = ({ activeTab, setActiveTab }) => {

  const tabOption = [
    {
      id: 1,
      name: "Delivery",
      active_img: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp",
      backdrop: '#FCEEC0',
      inActive_img: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
    },

    {
      id: 2,
      name: "Dining Out",
      active_img: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
      backdrop: '#E5F3F3',
      inActive_img: "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
    },

    {
      id: 3,
      name: "Nightlife",
      active_img: "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
      backdrop: '#EDF4FF',
      inActive_img: "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"
    },

  ]

  return (
    <div className='tabOption'>
      <div className="max-width option-wrapper">
        {tabOption.map((tab) => {
          return <div onClick={() => setActiveTab(tab.name)}
            className={`tab-items all-center cur-po ${activeTab === tab.name && 'active-tab'} `} >
            <div className="tab-image-container all-center" style={{ backgroundColor: `${activeTab === tab.name ? tab.backdrop : " "}` }}>
              <img src={activeTab === tab.name ? tab.active_img : tab.inActive_img} className='tab-image' alt={tab.name} />
            </div>
            <div className="tab-name">{tab.name}</div>
          </div>

        })}
      </div>
    </div>



    //   {/* <button onClick={() => setActiveTab("Nightlife")}>On nightLife</button>
    // <button onClick={() => setActiveTab("Deliver")}>On delivery</button> */}
  )
}

export default IndexTabOption