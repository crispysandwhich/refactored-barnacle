import { Link } from 'react-router-dom'
import raffi from '../../assets/LoneyTom.png'
import classes from './hero.module.css'
import { useEffect, useState } from 'react'

export default function Hero() {

  const [coins, setCoins] = useState([])
  const [nfts, setNfts] = useState([])




  useEffect( () => {

    const getCoinGekodata = async () => {

      const res = await fetch('https://api.coingecko.com/api/v3/search/trending')
      const data = await res.json()

      setCoins(data.coins)
      setNfts(data.nfts)
    }

    getCoinGekodata()


  },[])

  console.log(coins)

  return (
      <div className={classes.wrapper}>
      
        <div className={classes.content}>
          <h2>Are you lost?</h2>
          <p>
            If not then I hope you know what you are looking for. If you would
            like to contact me, I think you will find out how
          </p>
          <Link to='/blogs'>Check it</Link>
        </div>

        <div className={classes.right}>
          {
            coins ? (
              <div className={classes.trending}>
                <h2>Trending</h2>
                {
                  coins.map(coin => (
                    <div key={coin.item.coin_id} className={classes.trendCoin}>
                      <img src={coin.item.small} />
                      <span>Name: <br /> {coin.item.name}</span>
                      <span>BTC Price: <br /> {coin.item.price_btc.toString().slice(0, 8)}</span>
                    </div>
                  ))
                }
              </div>
            ) : (
              <div className={classes.flower}>
                <h3>New things to come</h3>
                <div className={classes.logo}>
                  <img src={raffi} alt="just a small little bot"/>
                </div>
              </div>
            )
          }
          
          
        </div>

    </div>
  )
}
