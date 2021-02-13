import React, { useState } from 'react'
import Marked from 'marked'
import Layout from "../components/layout"
import '../components/global.css'
import image from '../data/about/images/scenery.jpg'
import Data from '../data/about'

export default function About() {
  const [data, setData] = useState(Data)

  return (
      <Layout title="About">
        <article>
            <h1>About</h1>
            <br />
            <img src={image} alt="avout-pic" />
            <br />
            {data.map((datas) => {
              return (
                <section key={datas.id}>
                  <h3> {datas.title ? datas.title : null} </h3>
                  <p> {datas.desc} </p>
                </section>
              )
            })}
        </article>
      </Layout>
  );
};
