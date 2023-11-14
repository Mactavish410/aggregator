import styles from './CryptPrice.module.scss'

function CryptPrice( item) {
	// console.log(item)
	return (
		<div className={styles.main}>
			<p>{item.name}</p>
			<p>
				{item.values.USD.price.toFixed(2)}$ <span>123</span>
			</p>
		</div>
	)
}

export default CryptPrice
