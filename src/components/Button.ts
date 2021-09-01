import { styled } from '../stitches.config'

const Button = styled('button', {
	backgroundColor: 'gainsboro',
	borderRadius: '9999px',
	fontSize: '13px',
	padding: '10px 15px',
	'&:hover': {
		backgroundColor: 'lightgray',
	},
})

export default Button
