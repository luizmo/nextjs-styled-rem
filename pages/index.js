import Head from 'next/head'
import { GenericRow, HomeWrapper, MainTitle, ViewportRow } from '../styles/homeExampleStyles'

export default function Home() {
  return (
    <HomeWrapper>
      <MainTitle>Título principal</MainTitle>
      <GenericRow>
        <div className="row-square"></div>
        <div className="row-square"></div>
        <div className="row-square"></div>
        <div className="row-square"></div>
      </GenericRow>
      <ViewportRow/>
      <img src="https://dummyimage.com/600x400/000/fff.jpg"/>
    </HomeWrapper>
  )
}
