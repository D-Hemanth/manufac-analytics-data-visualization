import data from '../Wine-Data.json'
import '../styles.css'
import { useState, useEffect } from 'react'
import Table from './Table'

const App = () => {
  // create a new instance to store the different classes of Alcohol
  const [class1, setClass1] = useState()
  const [class2, setClass2] = useState()
  const [class3, setClass3] = useState()
  // create new states instance to store the gamma values calculated for each data point
  const [gamma1, setGamma1] = useState()
  const [gamma2, setGamma2] = useState()
  const [gamma3, setGamma3] = useState()

  useEffect(() => {
    // filter out the data based on different Alcohol value property
    const drinks1 = data.filter((drink) => drink['Alcohol'] === 1)
    const drinks2 = data.filter((drink) => drink['Alcohol'] === 2)
    const drinks3 = data.filter((drink) => drink['Alcohol'] === 3)

    // calculate the gamma values for each drink from Ash, Hue and Magnesium values
    setGamma1(
      drinks1.map(
        (drink) => (Number(drink['Ash']) * drink['Hue']) / drink['Magnesium']
      )
    )
    setGamma2(
      drinks2.map(
        (drink) => (Number(drink['Ash']) * drink['Hue']) / drink['Magnesium']
      )
    )

    setGamma3(
      drinks3.map(
        (drink) => (Number(drink['Ash']) * drink['Hue']) / drink['Magnesium']
      )
    )

    // set the classes state to mapped Flavanoids value for each drink
    setClass1(drinks1.map((drink) => drink['Flavanoids']))
    setClass2(drinks2.map((drink) => drink['Flavanoids']))
    setClass3(drinks3.map((drink) => drink['Flavanoids']))
  }, [])

  return (
    <>
      <h1>Manufac Analytics - Data Visualization Task</h1>
      <Table
        class1={class1}
        class2={class2}
        class3={class3}
        text={'Flavanoids'}
      />
      <Table class1={gamma1} class2={gamma2} class3={gamma3} text={'Gamma'} />
    </>
  )
}

export default App
