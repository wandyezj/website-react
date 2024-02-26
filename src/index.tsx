import { website, clock } from "./website";
import React from 'react'
import { createRoot } from 'react-dom/client'

clock();
console.log(website());


const container = document.getElementById('react-root')!
const root = createRoot(container)
root.render(<h1>Hello React!</h1>)