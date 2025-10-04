import { fetchNoteById } from "@/lib/api"

import css from './NotesPreview.module.css'

interface ModalProps{
    params: Promise<{id: string}>
}

const ModalPage = async ({params}: ModalProps) => {
  
    const {id} = await params
    const note = fetchNoteById(id)
    return (
     <div className={css.container}>
            <div className={css.item}>
    	  <div className={css.header}>
            <h2>{(await note).title}</h2>
    	  </div>
            <p className={css.content}>{(await note).content}</p>
            <p className={css.date}>{ (await note).createdAt}</p>
    	</div>
        </div>
 )
}

export default ModalPage