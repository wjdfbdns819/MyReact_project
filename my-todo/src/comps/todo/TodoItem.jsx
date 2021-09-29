import React from "react";

const t_level_step = [ 
	"★", 
	"★★",
	"★★★",
	"★★★★",
	"★★★★★",

];

// todo list 데이터를 직접 사용하도록 변수 생성
function TodoItem ({todo, level_Change}) {
	
	// onClick시 level_Change에 id값을 매개변수로 전달해야 함
	return (
		<tr>
			{/*클릭시 level 변경*/}
			<td onClick={()=>{level_Change(todo.t_id)}}>

				{/*배열 문자열 코드 표시하기*/}
				{/*클릭 하다보면 글자가 사라지기 때문에 초기화?시켜줘야함*/}
				{t_level_step[todo.t_level % 5]}
			</td>

			<td>{todo.t_start_date}</td>
			<td>{todo.t_text}</td>
			<td>{todo.t_end_date}</td>
			<td>
				<input type="checkbox"/>
			</td>
		</tr>
	);
};

export default TodoItem