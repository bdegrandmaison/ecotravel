import{ar as e}from"./index-DnihTXp9.js";import{u as a,a as o}from"./axios-T0xKdPBW.js";import{L as r,D as d}from"./DestinationCard-D3Oq86O_.js";import{N as m}from"./App-CVDNZEVp.js";import{A as u}from"./utils-zWh6GGqi.js";const c=async()=>{const{data:t}=await o.get("/api/destinations");return t},j=()=>{const{data:t=[],error:s,isLoading:i}=a({queryKey:["destinations"],queryFn:c});return i?e.jsx(m,{}):s?e.jsx("div",{children:"Erreur lors du chargement des destinations"}):e.jsxs("div",{style:{padding:"24px"},children:[e.jsx(u,{message:"Les bloqueurs de pubs peuvent parfois interférer avec le fonctionnement de l'application, si c'est votre cas, merci d'ouvrir le lien en navigation privée",type:"warning",showIcon:!0,style:{padding:" 1rem O",margin:"0 0 2rem"}}),e.jsx(r,{grid:{gutter:16,xs:1,sm:2,md:4,lg:4,xl:6,xxl:3},dataSource:t,renderItem:n=>e.jsx(r.Item,{children:e.jsx(d,{destination:n})})})]})};export{j as default};
