import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
    
      
       <div className={styles.page_wrapper}>
          <div className={styles.blur}>
            <h1>Strona w budowie</h1>
            <img className={styles.rotate} src="/loading.png"/>
            <img className={styles.absolute} src="/crane.png"/>
            </div>
       </div>

     
    </div>
  )
}
