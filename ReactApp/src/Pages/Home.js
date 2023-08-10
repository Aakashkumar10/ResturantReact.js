import React from 'react'
import { Fragment } from 'react'
import Layout from '../Component/Layout/Layout' 
import Banner from "../images/banner.jpeg";
// import '../Styles/HomeStyle.css';
import "../Styles/HomeStyle.css";
import { Link  } from 'react-router-dom'

const Home = () => {
  return (
    <Layout>
      {/* <div className="home" style ={{backgroundImage: `url(${Banner})` }}> */}
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1> Resturant website </h1>
          <p> Best Food in India </p>
          <Link to="/menu">
            <button>
              ORDER NOW
            </button>
          </Link>

        </div>
      </div>

    </Layout>
  )
}

export default Home