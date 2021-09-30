import React, {useContext} from "react";
import TodoContext from "../../context/TodoContext";
import "../../css/TodoList.css"

import TodoItem from "./TodoItem";


function TodoList() {

	// 전달받은 todo 데이터 사용하기 위해 변수로 선언
	const {todoList, level_Change} = useContext(TodoContext);

	const todoBody = todoList.map((todo_Levels)=> {

		return <TodoItem todo_Levels={todo_Levels} level_Change={level_Change}/>

	});


	return (
		<table>
			<thead>
				<tr>
					<th>Level</th>
					<th>Start-Date</th>
					<th>Todo</th>
					<th>End-Date</th>
					<th>Cancel</th>
				</tr>
			</thead>
			<tbody>
				{todoBody}
			</tbody>
		</table>
	);
};

export default TodoList
