import { useRef, useState } from "react";
import Card from "./Card";
import ImageCard from "./ImageCard";
import "./ReproduceBody.css";
import "./Button.css";

import axios from "../../axios.js";

const ReproduceBody = () => {
	// target hidden input
	const fileInputRef = useRef(null);

	// form input
	let [haveImage, setHaveImage] = useState(false);
	let [generation, setGeneration] = useState(0);
	let [split, setSplit] = useState(0);
	let [imageURL, setImageURL] = useState("");
	let [filename, setFilename] = useState("");
	let [fitness, setFitness] = useState(0)
	let [generated, setGenerated] = useState(0)
	let [status, setStatus] = useState('')
	let [imageArray, setImageArray] = useState([])
	var intervalID

	
	const uploadClickHandler = (event) => {
		fileInputRef.current.click();
	};

	// upload image
	// then get image
	const uploadHandler = (event) => {
		const file = event.target.files[0];
		let formData = new FormData();

		let tempBlob = new Blob([file], { type: "image/jpeg" });
		formData.append("file", tempBlob, file.name);
		axios
			.post("/image", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((res) => {
				console.log(res)
				filename = res.data.filename
				let currentImage = `${axios.defaults.baseURL}/image?filename=${filename}`;
				setFilename(filename)
				setImageURL(currentImage)
				setHaveImage(true);
			})
			.catch((err) => {
				console.log(err);
				alert("เกิดข้อผิดพลาด");
			});

	};

	const startHandler = () => {
		console.log({
					filename: filename,
					generation: Number(generation),
					split: Number(split)
				})
		axios
			.post(
				"/run",
				{
					"filename": filename,
					"generation": Number(generation),
					"split": Number(split)
				}
			)
			.then((res) => {
				console.log(res)
				let taskID = res.data.task_id
				// start getting status
				intervalID = setInterval(() => {
					fetchStatus(taskID)
				}, 2000);

				// setTimeout(() => {
				// undo fetchStatus
				// 	clearInterval(intervalID)
				// },4000)
			})
			.catch((err) => {
				// this.$refs.fileInput.remove();
				console.log(err);
			});

	};

	const generationHandler = (event) => {
		setGeneration(event.target.value);
	};

	const splitHandler = (event) => {
		setSplit(event.target.value);
	};

	const fetchStatus = (taskID) => {
		axios.get(`/status/${taskID}` ).then(
			(res) => {
				setFitness(res.data.current_fitness)
				setGenerated(res.data.current_generation)
				setStatus(res.data.status)
				setImageArray(res.data.sol_img)
				console.log((res.data.status === 'Completed'))
				if(res.data.status === 'Completed'){
					clearInterval(intervalID)
				}
			}
		)
	};

	// const fetchStatus = () => {
		
	// }

	return (
		<div className="reproduce__container">
			<Card image={imageURL} />;
			<section className="form__container">
				Generation: <input type="number" onChange={generationHandler} />
				Split: <input type="number" onChange={splitHandler} />
			</section>

			<div className="button-row">
				<button className="button__upload" onClick={uploadClickHandler}>
					Upload
					<input
						type="file"
						ref={fileInputRef}
						onChange={uploadHandler}
					/>
				</button>

				<button
					disabled={!(haveImage && split > 0 && generation > 0)}
					className={
						(haveImage && split > 0 && generation > 0)
							? "button__start"
							: "button__disable"
					}
					onClick={startHandler}
				>
					Start
				</button>
			</div>

			<p>Generated Picture:</p>

			<div>
				<p>Current Generation: {generated}</p>
				<p>Fitness: {fitness}</p>
				<p>Status: {status}</p>
			</div>

			<div className="image__items">
				{imageArray.map((item, index) => {
					return (
						<ImageCard
							key={index}
							item={item}
							generation={(generation/split)*index}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default ReproduceBody;
