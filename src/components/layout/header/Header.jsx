import styles from './Header.module.scss'
import { ImSpades } from 'react-icons/im'
import Stack from '@mui/material/Stack'

import Button from '@mui/material/Button'

function Header() {
	return (
		<div className={styles.main}>
			<ImSpades />
			<Stack spacing={2} direction='row'>
				<Button href='https://mui.com/material-ui/react-button/' variant='text'>
					Text
				</Button>
			</Stack>
		</div>
	)
}

export default Header
