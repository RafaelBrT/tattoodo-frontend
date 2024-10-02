import { Griffy } from "next/font/google";

import styles from './styles.module.scss'

const griffy = Griffy({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
  display: 'swap',
});


const Logo = () => {
  return <p className={`${griffy.className} ${styles.logo}`}>TattooDo</p>
}

export default Logo