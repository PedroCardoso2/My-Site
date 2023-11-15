import Image from 'next/image'
import styles from './page.module.css'
import NavBar from './components/NavBar/NavBar'
export default function page() {
  return (
    <main className={styles.main}>
      <NavBar/>
    </main>
  )
}
