import ThemeToggle from './components/ThemeToggle'

import styles from './styles.module.scss'

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <p>Chico.ai</p>
        <ThemeToggle />
      </header>
    </>
  )
}

export default Header