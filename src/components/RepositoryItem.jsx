import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import StyledText from './StyledText.jsx'
import RepositoryStats from './RepositoryStats'
import theme from '../theme.js'

const RepositoryItemHeader = ({ownerAvatarUrl, id, fullName, description, language}) => {
	return (
		<View style={styles.itemHeader}>
			<View style={{padding: 10}}>
				<Image style={styles.image} source={{uri: ownerAvatarUrl}}/>
			</View>
			<View style={{flex: 1}}>
				<StyledText fontSize='subheading' fontWeight='bold'> Id: {id} </StyledText>
				<StyledText>FullName: {fullName}</StyledText>
				<StyledText>Description: {description}</StyledText>
				<StyledText style={styles.language}>{language}</StyledText>
			</View>
		</View>
	)
}

const RepositoryItem = (props) => {
	return (
		<View key={props.id} style={styles.container} >
			<RepositoryItemHeader {... props}/>
			<RepositoryStats {... props}/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		paddingBottom: 5,
		paddingTop: 5
	},
	language: {
		padding: 4,
		color: theme.colors.white,
		backgroundColor: theme.colors.primary,
		alignSelf: 'flex-start',
		marginVertical: 4,
		borderRadius: 4,
		overflow: 'hidden'
	},
	image: {
		width: 48,
		height: 48,
		borderRadius: 4
	},
	itemHeader: {
		flexDirection: 'row',
		paddingBottom: 2
	}
})


export default RepositoryItem