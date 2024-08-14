import { useState, useEffect } from "react";

interface Post {
	id: number;
	title: string;
	body: string;
}

const DataFetching = () => {
	const initialState: Post = {
		id: 0,
		title: "",
		body: "",
	};

	const [data, setData] = useState<Post[]>([initialState]); // use state to store data and initialize it to an array of initialState
	const fetchUrl = "https://jsonplaceholder.typicode.com/posts";

	//use the useEffect hook to fetch data when the component mounts.
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(fetchUrl);
				const json = await response.json();
				setData(json);
			} catch (error) {
				console.log("error fetching data", error);
			}
		};

		fetchData();

		return () => {};
	}, []); // Empty dependency array to run only once on mount

	return (
		<div>
			<h1>Data Fetching Example</h1>
			{data ? (
				<div>
					{data.map((item) => (
						<div key={item.id}>
							<h3>{item.title}</h3>
							<p>{item.body}</p>
						</div>
					))}
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default DataFetching;
