"use client";
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

import Login from "../../app/assets/login.png"

import '../Cabecalho/Cabecalho.css';

export default function Cabecalho() {

  const user = JSON.parse(sessionStorage.getItem("user-info"));
  const [usuario] = useState(user);

  const handleLogout = () => {
    sessionStorage.removeItem("token-user");
    sessionStorage.removeItem("user-info");
    window.location.href = "/login";
  }

  if(sessionStorage.getItem("token-user")){
    
    return (
        <header className='cabecalho'>
          
        <nav>
          <Link onClick={handleLogout} href="/">LOGOUT</Link>
          <Link href="/produtos/calca">CALCA</Link>
          <Link href="/produtos/camisa">CAMISA</Link>
          <Link href="/produtos/oculos">OCULOS</Link>
          <Link href="/produtos/sapato">SAPATO</Link>
          <Link href="/tabela/queijo">QUEIJOS</Link>
  
          <div>
            <p>{usuario.name} - {usuario.email}</p>
          </div>
        </nav>
    </header>
  )}else{
   return (
    <header className='cabecalho'>
        <nav>
          <Link href="/login"><Image className='img-login' src={Login} alt="Icone de login em formato de pessoa"/></Link>
        </nav>
    </header>
  ) 
  }
}