import React, { useState, useEffect } from 'react';
import longBeard from './images/Long_Beard.png';
import modernGoatee from './images/Modern_Goatee.png';
import modernMustache from './images/Modern_Mustache.png';
import shortBeard from './images/Short Beard.png';
import stubble from './images/Stubble.png';
import './App.scss';

const imageAssets = [longBeard, modernGoatee, modernMustache, shortBeard, stubble];
const totalRows = 5;

const getRandomImages = () => {
	const randomRowImageGenerator = [];
	for (let index = 0; index < totalRows; index++) {
		let newRandomArray = [];
		for (let index = 0; index < imageAssets.length; index++) {
			const randomNumber = Math.floor(Math.random() * (1 * imageAssets.length));
			newRandomArray.push(imageAssets[randomNumber]);
		}
		randomRowImageGenerator.push(newRandomArray);
	}
	return randomRowImageGenerator;
};

function App() {
	const [randomRows, setRandomRows] = useState(getRandomImages());
	const [shouldSpin, setShouldSpin] = useState(false);

	const handleSpin = () => {
		setTimeout(() => {
			console.log('SETTING THE IMAGES AFTER 1500 ms');
			setShouldSpin(false);
		}, 2000);
		setRandomRows(getRandomImages());
		setShouldSpin(true);
	};

	// useEffect(() => {
	// 	return () => {};
	// }, [shouldSpin]);

	return (
		<div className='App'>
			<h1>Game Title</h1>
			<div className='game-wrapper'>
				{randomRows.map((rowImages, index) => {
					return (
						<div className={`row-wrapper`} key={`row-index-${index + 1}`}>
							<div className={`row-masker ${shouldSpin ? 'active-scroll' : ''}`}>
								{rowImages.map((rowImage, index) => (
									<img key={`image-index-${index + 1}`} width='100' height='100' src={rowImage} alt='random slot' />
								))}
							</div>
						</div>
					);
				})}
			</div>
			<div className='button-wrapper'>
				<button onClick={handleSpin}>Spin</button>
			</div>
		</div>
	);
}

export default App;
