import Head from 'next/head'
import Image from 'next/image'
import { PixelInitial } from '../facebook/PixelInitial'
import styles from './home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Larissa Silberman</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="facebook-domain-verification" content="6k4rvkgksvwv05x05bwu68ke0fc7db" />
        <PixelInitial />
      </Head>

      <div className={styles.sectionsContainer}>
        <section className={styles.firstSection}>
          <div className={styles.lariImage}>
          </div>
          <div className={styles.header}>
            <img src="/lari.jpg" alt="Larissa Silberman"/>
            <h1>Larissa Silberman</h1>
          </div>
        </section>

        <section className={styles.secondSection}>
          <ul>
            <li>
              <a href="#">Método Mulher Milionária: Ganhe dinheiro pela internet de forma segura</a>
            </li>
            <li>
              <a href="#">Dropshipping: Monte sua loja online sem estoque</a>
            </li>
            <li>
              <a href="#">Canva para negócios</a>
            </li>
          </ul>
        </section>
      </div>
      
    </div>
  )
}
