import React from 'react'

function Home() {
  return (
    <div className='home w-full h-screen flex'>
      <div className='home-left bg-gradient-to-t from-green-200 to-cyan-500 w-7/12 h-screen px-12 flex flex-col gap-32'>
            <div className='left-title  flex pt-28 text-[175px] font-regular text-white gap-y-9'>
                  Flower Pub
            </div>
            <div className='plant-name flex gap-48'>
                <div>
                      <div>Bulbous Type Plants</div>
                      <div>Succulenes</div>
                      <div>Tree Type Plants</div>
                </div>
                <div>
                      <div>Low Light Plants</div>
                      <div>Palm Plants</div>
                      <div>Unusual Plants</div>
                </div>
                <div>
                      <div className='hover:text-white'>Common House Plants</div>
                      <div>Cactus Plants</div>
                </div>
            </div>
            <div className='left-image flex w-full h-full overflow-hidden'>
              <div className=''>
                    <img className='left-left w-2/3'  src="https://www.provincialhomeliving.com.au/media/catalog/product/cache/9d712ef42fc6461913cee12c69c176af/1/1/1117261584_a.jpg" />
              </div>
              <div className='self-end'>
                   <img className='left-right w-2/3 ' src="https://i.pinimg.com/736x/b6/88/44/b688445d0f3c3644b61e175e226ebbea.jpg" />
              </div>
                
            </div>
        
      </div>
      <div className='home-right object-contain w-5/12 h-full'>
          <img className='h-full w-full' src="https://images.pexels.com/photos/18204715/pexels-photo-18204715/free-photo-of-houseplant-in-pot-on-windowsill.jpeg?auto=compress&cs=tinysrgb&w=1260&xh=750&dpr=2" />
      </div>
    </div>
  )
}

export default Home;
