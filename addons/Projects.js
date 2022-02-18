import css from '../styles/Home.module.scss'

export default function Projects() {
    return (
    <div className={css.projects}>
      <a className={css.project} href="https://hadits.vercel.app">
        <h3>Pencari Hadits</h3>
        <p>
          Ini merupakan project yang kubuat dengan sederhana, namun memiliki fungsi yang berguna banget untuk kamu mencari hadits.
        </p>
        <embed src="https://hadits.vercel.app" type="text/html" />
      </a>
      <a className={css.project} href="https://ugee.herokuapp.com">
        <h3>Translate bahasa indonesia ke bahasa bugis</h3>
        <p>
          Ini merupakan project awal yang kubuat, meskipun hanya bisa mentranslate perkata saja, namun aplikasi ini bakal jarang kamu temukan diinternet.
        </p>
        <embed src="https://ugee.herokuapp.com" type="text/html" />
      </a>
    </div>
    )
}