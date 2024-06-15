import { useState } from "react"
import { useQuery } from "react-query"
import { Drawer, LinearProgress, Grid, Badge } from "@mui/material"
import { AddShoppingCart } from "@mui/icons-material"
import { Wrapper } from "./App.styles"

export type CartItemType = {
  id: number,
  category: string,
  description: string,
  image: string,
  price: number,
  title: string,
  amount: number,
}

function App() {

  const getProduct = async (): Promise<CartItemType> => {
    return(
    await (await fetch("https://fakestoreapi.com/products")).json()
  )}

  return (
    <div>Start
    </div>
  )
}

export default App
