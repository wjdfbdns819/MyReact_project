import React, { useState } from "react";

const t_level_step = [ 
	"★", 
	"★★",
	"★★★",
	"★★★★",
	"★★★★★",

];

// 별 색상 변경
const level_style = {
	color: "#ffdd50"
}

// todo list 데이터를 직접 사용하도록 변수 생성
function TodoItem ({todo_Levels, level_Change}) {

	const [todo_input_text, setTodoInputText] = useState({
		t_title : "",
		SubEdit: false,
	})
	
	// onClick시 level_Change에 id값을 매개변수로 전달해야 함
	return (

		// 키값을 넣어주지 않으면 웹에 오류가 뜸 
		<tr key={todo_Levels_t_id}>

			{/*클릭시 level 변경*/}
			<td onClick={()=>{level_Change(todo_Levels.t_id)}} style={level_style}>

				{/*배열 문자열 코드 표시하기*/}
				{/*클릭 하다보면 글자가 사라지기 때문에 초기화?시켜줘야함*/}
				{t_level_step[todo_Levels.t_level % 5]}
			</td>

			<td>{todo_Levels.t_start_date}</td>

			<td onClick={()=>{setTodoInputText({...todo_input_text, SubEdit: !todo_input_text.SubEdit})}}>
				{todo_Levels.t_title}
			</td>
			<td>{todo_Levels.t_end_date}</td>
			<td>
				<input type="checkbox"/>
			</td>
		</tr>
	);
};

export default TodoItem