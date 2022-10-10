const PLUS_ONE = "PLUS_ONE";
const MINUS_ONE = "MINUS_ONE";

export const plusOne = () => {
  return {
    type: PLUS_ONE,
  }
}

export const minusOne = () => {
  return {
    type: MINUS_ONE,
  }
}

// 초기 상태값
const initialState = {
  number: 0,
};

// 리듀서는 함수.
const counter = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "PLUS_ONE": 
    // PLUS_ONE이라는 case를 추가한다.
    // 여기서 말하는 case란, action.type을 의미한다.
    // dispatch로부터 전달받은 action의 type이 "PLUS_ONE" 일 때
		// 아래 return 절이 실행된다. 
      return {
        number: state.number +1
      };

    case "MINUS_ONE":
      return {
        number: state.number -1
      };  

    default:
      return state;
  }
};

// 모듈파일에서는 리듀서를 export default 한다.
export default counter;