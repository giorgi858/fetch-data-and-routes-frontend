import React, { useEffect, useState } from 'react'

const HomePage = () => {
    const API_URL = 'http://localhost:3500/items'
    const [items, setItems] = useState([])
    const [fetchError, setFetchError] = useState(null)
  
  useEffect(() => {
    const fetchdata = async ()=> {
      try {
        const response =  await fetch(API_URL)
        if(!response.ok) throw Error('Did not receive expected data')
        const data = await response.json()
        setItems(data)
  
        setFetchError(null)
      } catch (error) {
        setFetchError(error.message)
      }
    }
    fetchdata()
  
  },[])
  
    return (
      <div>
        {fetchError && <p>{`Error :${fetchError}`}</p>}
        {items && 
          <>
            {items.map((item) =>{
              return (
  
                <React.Fragment key={item.id}>
                  <li>
                    {item.id}
                  </li>
                  <li>
                    {item.title}
                  </li>
                </React.Fragment>
              )
            })}
          </>
        
        }
      </div>
    )
}

export default HomePage