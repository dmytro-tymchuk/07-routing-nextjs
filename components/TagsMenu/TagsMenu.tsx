import { NoteTag } from '@/types/note';
import css from './TagsMenu.module.css'
import Link from 'next/link';

const TagsMenu = () => {
    const tags: NoteTag[] = ['Todo', 'Work', 'Personal', 'Meeting', 'Shopping'];

    return (
        <div className={css.menuContainer}>
  <button className={css.menuButton}>
    Notes ▾
  </button>
    <ul className={css.menuList}>
                {/* список тегів */}
                <li  className={css.menuItem}>
        <Link 
              href={`/notes/filter/all`} 
              className={css.menuLink}
            >
             All Notes
            </Link>
      </li>

    {tags.map((tag, index) => <li key={index} className={css.menuItem}>
        <Link 
              href={`/notes/filter/${tag}`} 
              className={css.menuLink}
            >
              {tag}
            </Link>
      </li>)}
      
    </ul>
</div>
    )
}

export default TagsMenu