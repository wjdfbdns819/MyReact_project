import React, { useState } from "react";
import {Route} from "react-router-dom"
import TodoContext from "../context/TodoContext";
import TodoInput from "./todo/TodoInput";
import TodoList from "./todo/TodoList";

function AllMain() {

	// todo 테스트 데이터 1개
	const [todoList, setTodoList] = useState([{

		// 리스트 데이터이기 때문에 [{ }]로 묶어줘야함
		t_id: 0,
		t_level: 0,
		t_start_date : "2021년 09월 16일",
		t_text : "React 공부",
		t_end_date : false,
		t_cancel : false,
		
	}]);

	// level 클릭시 변화시킬 이벤트 설정
	const level_Change = (id) => {
		const L_flag = todoList.map((todo) =>{
			// 확인용 :alert(todo.t_level);

			/*전달 받은 id와 같은 항목의 level를 1씩 증가시켜야함*/ 
			if(todo.t_id === id) {
				return {
					...todo,
					t_level : todo.t_level + 1,
				}
			} else {
				return todo
			}
		});
		setTodoList(L_flag);
	};

	// 데이터 간소화
	const proiderData = {todoList, setTodoList, level_Change}

	return ( 
		<>
			<TodoContext.Provider value={proiderData}>
				<Route path="/" exact>
					홈화면
				</Route>

				<Route path="/todo/list" exact>
					<TodoInput/>
					<TodoList/>
				</Route>

				<Route path="/buket/list" exact>
					여기는 buket
				</Route>
			</TodoContext.Provider>
		</>
	);
};

export default AllMain