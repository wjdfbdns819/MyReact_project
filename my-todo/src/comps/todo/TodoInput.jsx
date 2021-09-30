import React, { useContext } from "react";
import TodoContext from "../../context/TodoContext";
import "../../css/TodoInput.css";



function TodoInput() {

	const {todoList, setTodoList, todo_insert} = useContext(TodoContext);

	const onKeyDown = (e) => {
		// 확인용 : alert("Enter")
		if(e.keyCode === 13) {

			const todo = e.target.value;

			// 전달받은 todo_insert() 함수에 input에 입력된 todo text를 전달하기
			todo_insert(todo);

			// 입력박스에 있는 내용 초기화 할려고 사용
			e.target.value = "";
		}
	}
	
	return (

		<div className="todo_input_box">
			<input onKeyDown={onKeyDown} placeholder="할일을 입력하세요 :D"/>
		</div>
		
		
	);
};

export default TodoInput