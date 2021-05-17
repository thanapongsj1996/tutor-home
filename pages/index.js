import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../src/components/shared/Navbar'
import styles from '../styles/Home.module.css'
import MainLayout from '../src/components/layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      <div className={styles.container}>
        <h1>Hello, Tutor Home</h1>
      </div>
    </MainLayout>
  )
}
