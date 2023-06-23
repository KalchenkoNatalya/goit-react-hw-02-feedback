import css from '../Section/Section.module.css'
export const Section =({title, children}) => {
return (
    <div className={css.wrapSection}>
    <h2 className={css.title}>{title}</h2>
    {children}
    </div>
)
} 