import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

import useUserStore from "../../../stores/user.store";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Cookies, useCookies } from "react-cookie";

// useState를 통한 상태관리
// 회원 아이디: userId
// 회원 비밀번호: userPassword

// signInHandler 함수
// userId와 userPassword가 공백일 경우 alert '아이디와 비밀번호를 입력하세요'
// userId와 userPassword를 data 변수에서 관리

export default function SignIn() {
  //! Link: 페이지 이동 시 사용 - 단순한 페이지 이동
  //* Link컴포넌트 클릭 시 URL 경로가 바뀌면서
  //* 해당 경로로 지정된 컴포넌트가 랜더링
  //* 프로젝트 내에서 페이지 전환 시 사용 (a태그 - 외부 프로젝트와 연결 시 사용)
  //* react-router-dom에서 import하여 사용

  //! useNavigate(): 페이지 이동 시 사용
  //* - 특정 이벤트가 실행됐을 때 동작하거나 추가적인 로직이 필요한 경우
  //* react-router-dom에서 import하여 사용

  const navigator = useNavigate();
  // ? 첫 번째 인자로 이동시킬 페이지의 주소(URL)를 넣거나
  // ? -1 과 같은 값을 넣어서 페이지 히스토리가 뒤로가기 버튼과 같은 동작을 구현 가능

  // useState를 사용한 사용자 입력관리
  const [userId, setUserId] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  // ! useCookie 훅
  // npm install react-cookie
  const [cookie, setCookies] = useCookies();

  // 회원의 데이터를 store에서 관리
  const { user, setUser } = useUserStore();

  // 로그인 함수
  const signInHandler = () => {
    // 유효성 검사: 입력값이 없는 경우에 alert알림
    if (userId.length === 0 || userPassword.length === 0) {
      alert("아이디와 비밀번호를 입력하세요.");
      return;
    }

    // 입력한 데이터를 전송하기 위해 data에 담기
    const data = {
      userId,
      userPassword,
    };

    // 로그인 정보(data)를 전송 -post(URL경로, data)
    axios
      .post("http://localhost:4080/api/auth/signIn", data)
      .then((response) => {
        const responseData = response.data;
        console.log(responseData);

        // 로그인에 실패할 경우, alert알림
        if (!responseData.result) {
          alert("로그인에 실패했습니다.");
          return;
        }

        // 로그인 성공 시, cookies와 회원 data를 설정
        const { token, exprTime, user } = responseData.data;
        const expires = new Date();
        expires.setMilliseconds(expires.getMilliseconds() + exprTime);

        setCookies("token", token, { expires });

        setUser(user);
      })
      .catch((error) => {
        alert("로그인에 실패했습니다.");
      });
  };

  return (
    <>
      {/* 
      아이디와 비밀번호를 입력 받는 창
      로그인 버튼
    */}
      <Typography variant="h3" paddingTop={"2vw"} textAlign={"center"}>
        로그인
      </Typography>
      <Box display={"flex"} justifyContent={"center"} paddingTop={"3vw"}>
        <Card
          variant="outlined"
          sx={{ width: "30vw", height: "40vw", marginBottom: "5vw" }}
        >
          <CardContent>
            <TextField
              fullWidth
              label="아이디"
              name="userId"
              type="id"
              variant="standard"
              onChange={(event) => setUserId(event.target.value)}
            />
            <TextField
              fullWidth
              label="비밀번호"
              name="userPassword"
              type="password"
              variant="standard"
              onChange={(event) => setUserPassword(event.target.value)}
            />
          </CardContent>
          <CardActions>
            <Box component={"div"} sx={{ width: "100vw" }}>
              {/* Link컴포넌트는 페이지 경로를 지정하는 to속성이 필수 */}
              <Link to={"/"}>
                <Button
                  fullWidth
                  onClick={() => signInHandler()}
                  variant="contained"
                  sx={{ bgcolor: "#f0a500", marginTop: "2vw" }}
                >
                  로그인
                </Button>
              </Link>
            </Box>
          </CardActions>
          <Box
            component="div"
            display="flex"
            justifyContent={"space-between"}
            margin={5}
          >
            <Typography>신규 사용자이신가요?</Typography>
            <Typography onClick={() => navigator("/signUp")}>
              회원가입
            </Typography>
          </Box>
        </Card>
      </Box>
    </>
  );
}
