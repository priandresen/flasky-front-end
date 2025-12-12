import Cat from './Cat';
import PropTypes from 'prop-types';

const CatList = ({ cats }) => {
	const catComponents = cats.map((cat, i) => {
		return (
			<Cat
			key={i}
			name={cat.name} 
			personality={cat.personality} 
			caretaker={cat.caretaker}
			color={cat.color}
			/>
		);
});
		return (
			<>
        <h1>Cat List</h1>
        <ul>
					{catComponents}
				</ul>
    </>
    );
};

export default CatList;
