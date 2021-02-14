import React, { useState } from 'react'
import Marked from 'marked';
import { navigate } from 'gatsby';
import Layout from "../components/layout"
import '../components/global.css'
import image from '../data/about/images/scenery.jpg'
import Data from '../data/about'

export default function About() {
  const [data, setData] = useState(Data)

  return (
      <Layout title="About">
        <article>
            <h1 style={{fontWeight: '500', fontSize: '3rem'}}>About</h1>
            <br />
            <img src={image} alt="avout-pic" />
            <br />
            {data.map((datas) => {
              return (
                <section key={datas.id}>
                  <h3 style={{fontFamily: 'sans-serif'}}> {datas.title ? datas.title : null} </h3>
                  <p style={{fontSize: '14px', fontWeight: 100, letterSpacing: '0.5px', wordSpacing: '2px'}}> {datas.desc} </p>
                </section>
              )
            })}
            <div className="post-footer">
      <h1 onClick={() => navigate('/')} className="list-head2" style={{fontSize: '14px', fontWeight: 600, letterSpacing: '-1px', cursor: 'pointer', marginLeft: '10px'}}>Fragments</h1>
      <h1 onClick={() => navigate('/about')} className="list-head2" style={{fontSize: '14px', fontWeight: 600, letterSpacing: '-1px', cursor: 'pointer', marginLeft: '10px'}}>About</h1>
      </div>
        </article>
      </Layout>
  );
};
