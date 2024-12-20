import styles from './list.module.css'
type Props = {
  numbers: number[]
}

const List = ({ numbers }: Props) => {
  // const List = numbers.entries;
  return (
    <div className={styles.ListWrapper}>
      {numbers.map((value, index) => (
        <div key={index} className="p-4">
          <h2 className={styles.font}>{value}</h2>
        </div>
      ))}
    </div>
  )
}

export default List
