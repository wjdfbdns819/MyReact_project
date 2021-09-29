import React from "react";
import "../../css/TodoInput.css";

function TodoInput() {

	const onKeyDown = (e) => {
		
		if(e.keyCode === 13) {
			// 확인용 : alert("Enter");

			
		}
	};

	return (

	<>
		<div className="todo_input_box">
			<input onKeyDown={onKeyDown} placeholder="할일을 입력하세요 :D"/>
		</div>
		
	</>	
		
	);
};

export default TodoInput