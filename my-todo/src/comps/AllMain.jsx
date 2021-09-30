import React, { useState } from "react";
import {Route} from "react-router-dom"
import TodoContext from "../context/TodoContext";
import TodoInput from "./todo/TodoInput";
import TodoList from "./todo/TodoList"
import UUID from "react-uuid";
import moment from "moment";

function AllMain() {

	/*
		// todo 테스트 데이터 1개
		// 리스트 데이터이기 때문에 [{ }]로 묶어줘야함
		t_id: 0,
		t_level: 0,
		t_start_date : "2021년 09월 16일",
		t_title : "React 공부",
		t_end_date : false,
		t_cancel : false,
		
	}]); */

	const [todoList, setTodoList] = useState([]);

	const todo_insert = (todo_text) => {

		// 저장할 데이터를 생성하고
		const todo = {
			t_id: UUID(),
			t_level : 0,
			t_start_date : moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
			t_title: todo_text,
			t_end_date: "",
			t_end_check: false,
			t_cancel : false,
		};

		// 기존의 배열을 활용하여 새로운 배열(새 데이터) 만들기
		// 즉 원래 있던 todoList에 List를 추가하는 것
		setTodoList([...todoList, todo]);
	};

	// level 클릭시 변화시킬 이벤트 설정
	const level_Change = (id) => {
		const L_flag = todoList.map((todo_Levels) =>{
			// 확인용 :alert(todo.t_level);

			/*전달 받은 id와 같은 항목의 level를 1씩 증가시켜야함*/ 
			if(todo_Levels.t_id === id) {
				return {
					...todo_Levels,
					t_level : todo_Levels.t_level + 1,
				}
			} else {
				return todo_Levels
			}
		});

		// 원래의 todoList를 L_flag로 바꿈
		setTodoList(L_flag);
	};

	// 데이터 간소화
	const proiderData = {todoList, setTodoList, level_Change, todo_insert}

	return ( 
		<>
			<TodoContext.Provider value={proiderData}>
				<Route path="/" exact>
					홈화면
					
				</Route>

				<Route path="/todo/list" exact>
					<div className = "total_todo">
						<TodoInput/>
						<TodoList/>
					</div>
				</Route>

				<Route path="/buket/list" exact>
					여기는 buket
				</Route>
			</TodoContext.Provider>
		</>
	);
};

export default AllMain