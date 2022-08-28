import React from "react"
import { Route, Routes } from "react-router-dom"
import { Cart } from "./Cart"
import { Home } from "./Home"
import { Kids } from "./Kids"
import { Login } from "./Login"
import { Men } from "./Men"
import { ProductsDetail } from "./ProductsDetail"
import { Search } from "./Search"
import { Signup } from "./Signup"
import { Women } from "./Women"

export const AllRoutes=()=>{
return  <Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path="/login"  element={<Login/>}/>
    <Route path="/women"  element={<Women/>}/>
    <Route path="/men"  element={<Men/>}/>
    <Route path="/kids"  element={<Kids/>}/>
    <Route path="/productsDetails/:id"  element={<ProductsDetail/>}/>
    <Route path="/cart"  element={<Cart/>}/>
    <Route path="/register"  element={<Signup/>}/>
    <Route path="/search"  element={<Search/>}/>
</Routes>
}