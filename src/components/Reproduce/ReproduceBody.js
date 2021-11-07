import { useRef } from 'react';
import Card from "./Card";
import './ReproduceBody.css'
import './Button.css'

const ReproduceBody = () => {

    const fileInputRef = useRef(null);

    const uploadClickHandler = (event) => {
        fileInputRef.current.click();
    };

    const uploadHandler = (event) => {
        console.log('watsup')
    };


	return (
		<div>
			<Card>
				<img src="" alt=""/>
			</Card>
			<button className="button__upload" onClick={uploadClickHandler}>
				Upload
                <input type="file" ref={fileInputRef} onChange={uploadHandler} />
			</button>


		</div>
	);
};

export default ReproduceBody;
