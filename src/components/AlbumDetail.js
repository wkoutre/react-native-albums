import React from 'react';
import PropTypes from 'prop-types';
import { Image, Text, View, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = (props) => {
	const { album } = props;
	const { title, artist, thumbnail_image, image, url } = album;
	const {
		thumbnailStyle,
		headerContentStyle,
		thumbnailContainerStyle,
		titleStyle,
		imageStyle
	} = styles;

	return (
			<Card>
				<CardSection>
					<View style={thumbnailContainerStyle}>
						<Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
					</View>
					<View style={headerContentStyle}>
						<Text style={titleStyle}>{title}</Text>	
						<Text>{artist}</Text>
					</View>
				</CardSection>

				<CardSection>
					<Image style={imageStyle} source={{ uri: image }} />
				</CardSection>

				<CardSection>
					<Button onPress={() => Linking.openURL(url)}>
						BUY
					</Button>
				</CardSection>
			</Card>		
	);
};

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	thumbnailStyle: {
		height: 50,
		width: 50
	},
	thumbnailContainerStyle: {
		marginLeft: 10,
		marginRight: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	titleStyle: {
		fontSize: 18,
		fontWeight: 'bold'
	},
	imageStyle: {
		height: 300,
		width: null,
		flex: 1
	}
};

AlbumDetail.PropTypes = {
	album: PropTypes.array.isRequired
};

export default AlbumDetail;
