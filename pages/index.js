
import css from '../styles/Home.module.scss'
import { useStore, withStore } from '../addons/allStates.js'
import { useState, useEffect } from 'react'

import useInView from 'react-cool-inview'
import dynamic from 'next/dynamic'
const Projects = dynamic(_ => import('../addons/Projects.js'))

export default function Home() {
  const { observe, unobserve, inView, scrollDirection, entry } = useInView()
  const [isMenuOpen, setMenu] = useState(false)
  const [isProjectsSeen, setIsProjectsSeen] = useState(false)
  function openMenu() {setMenu(evt => !evt)}
  
  useEffect(() => {
    inView && setIsProjectsSeen(evt => true)
  }, [inView])
  
  return (
<div className={css.container}>

  <div className={css.topbar}>
    <h3>Misdar</h3>
    <img src={isMenuOpen ? '/close.svg' : '/menu.svg'} className={css.menuButton} width="30" height="30" onClick={openMenu}/>
    <div className={isMenuOpen ? css.menusClose :css.menusOpen}>
      <li>Beranda</li>
      <li>Project</li>
      <li>Portofolio</li>
      <li>Tentang</li>
    </div>
  </div>
  
  <div className={css.body1}>
    <p className={css.introduction}>Hai Namaku Misdar</p>
    <p>
      Aku seorang developer muda, pemuda tersesat :v, serta procastinator handal yang menyukai banyak hal. Aku juga merupakan seorang introvert, yang mampu bekerja baik secara individu maupun berkelompok. Ingin berkolaborasi denganku?
    </p>
    <div className={css.sociallink}>
        <a href="https://github.com/digitmisdar">
          <img src="/github.svg" width="21" height="21"/>
        </a>
        <a href="https://instagram.com/misdar.k">
          <img src="/instagram.svg" width="25" height="25"/>
        </a>
        <a href="https://trakteer.id/misdar/tip">
          <img src="/globe.svg" width="25" height="25"/>
        </a>
    </div>
  </div>
  
  <div className={css.body2} ref={observe}>
    <p className={css.introduction}>Hasil Karyaku</p>
    <p>
      Beberapa hasil dari proyek yang kubuat baik yang sudah selesai maupun yang tengah dalam proses. Karyaku ini merupakan 100% dari ide yang kudapat, sembari menikmati secangkir kopi panas :v
    </p>
    {isProjectsSeen && <Projects />}
  </div>
  
  <div className={css.body3}>
    End
  </div>
</div>
  )
}