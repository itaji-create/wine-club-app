import { NextPage } from "next";
import Nav from "../components/nav";
import fetchWineApi from "../services/fetchWineApi";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from "next/link";

const CatalogPage: NextPage = () => {
  const [wines, setWines] = useState([{ id: 0, name: 'Loading', image: '' }]);
  const api =   
  useEffect(() => {
    fetchWineApi().then((data) => setWines(data.items));
  }, [])
  console.log(wines);
  
  return (
    <div>
      <Nav />
      <h1>Bem vindo ao catalogo</h1>
      <div>
        {wines.map((e) => (   
          <div key={ e.id }>
            <Image
              src={ e.image } 
              alt={ e.name }
              width={150}
              height={150}
            />
            <Link
                href={ `/wine-details/${e.id}` }
            >
                <p style={ { maxWidth: '150px' } }>{ e.name }</p>
            </Link>
            </div>
        ))}
      </div>
    </div>
  )
}

export default CatalogPage;
