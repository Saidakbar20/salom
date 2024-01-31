import { Apartment } from "./components/apartment"
import { Assemble } from "./components/assemle"
import { Bestseller } from "./components/bestseller"
import { Bussines } from "./components/bussines"
import { Enjoy } from "./components/enjoy"
import { Floyd } from "./components/featherb"
import { Furniture } from "./components/furniture"
import { Garage } from "./components/garage"
import { Header } from "./components/header"
import { Hero } from "./components/hero"
import { Person } from "./components/person"
import Rewievs from "./components/rawies"
import { Room } from "./components/room"


function App() {

  return (
    <>
    <Header/>
    <main>
      <Hero/>
      <Room/>
      <Furniture/>
      <Enjoy/>
      <Garage/>
      <Bussines/>
      <Assemble/>
      <Bestseller/>
      <Floyd/>
      <Rewievs/>
      <Apartment/>
      <Person/>
    </main>
    </>
  )
}

export default App
