import Header from './components/layout/header/Header'
import Crypt from './components/layout/crypt/Crypt'
import Wether from './components/layout/crypt/wether/Wether'
import styles from './App.module.scss'

function App() {
	return (
		<div className={styles.container}>
			<Header />
			<div className={styles.content}>
				<Crypt />
				<Wether />
			</div>
		</div>
	)
}

export default App
