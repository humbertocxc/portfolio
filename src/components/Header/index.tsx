import Link from 'next/link';
import Image from 'next/image';

import styles from './header.module.scss';


export default function Header() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <Image
          className={styles.content}
          src="/Logo.svg"
          alt="</> spacetraveling."
          width={100}
          height={100}
        />
      </Link>
    </div>
  )
}
