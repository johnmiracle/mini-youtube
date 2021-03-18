/** @format */

import React, { useState } from 'react';

function SearchForm(props) {
	const [query, setQuery] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { onFormSubmit } = props;
		onFormSubmit(query);
	};
	return (
		<>
			<form onSubmit={handleSubmit} className="d-flex input-group w-auto">
				<input
					type="search"
					className="form-control search-bar"
					placeholder="Search..."
					aria-label="Search"
					onChange={(e) => setQuery(e.target.value)}
					value={query}
				/>
				<button className="btn btn-outline-primary" type="submit" data-mdb-ripple-color="dark">
					Search
				</button>
			</form>
		</>
	);
}

export default SearchForm;
