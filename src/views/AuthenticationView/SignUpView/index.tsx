import React, { useState } from "react";
import { Box, Card, CardContent, TextField, Typography } from "@mui/material";

export default function SignUP() {
  // 회원가입하는 user의 정보의 State를 하나의 객체로 관리
  const [userInfo, setUserInfo] = useState({
    userId: "",
    userPassword: "",
    userPasswordCheck: "",
    userName: "",
    userPhone: "",
    userEmail: "",
    userAddress: "",
    userAddressDetail: "",
    userKidBirth: "",
    recommendedUserId: "",
  });

  // 회원가입 시 유효성 검사 확인 에러
  // 유호성 검사: 특정 규칙에 맞게 입력되었는지 검증하는 것
  const [errors, setErrors] = useState({
    userId: true,
    userPassword: true,
    userPasswordCheck: true,
    userEmail: true,
  });

  // 정규 표현식: 문자열에서 특정 패턴을 찾거나 일치시키기 위한 문자열

  const idRegExp = /^[a-zA-Z0-9]{4,8}$/;
  // 4 ~ 8글자의 알파벳(대소문자) 및 숫자로 구성된 문자열

  const pwRegExp = /^[a-zA-Z0-9!@]{8,12}$/;
  // 8 ~ 12글자의 알파벳(대소문자), 숫자, 느낌표, @로 구성된 문자열

  const emailRegExp = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  // 이메일 주소 형식의 문자열

  return (
    <>
      <Typography variant="h3" paddingTop={"2vw"} textAlign={"center"}>
        회원 가입
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
              type="id"
              variant="standard"
              error={idError}
              helperText={
                idError
                  ? "영어 대소문자 및 숫자로 4 ~ 8자리 입력하세요."
                  : false
              }
            ></TextField>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

// sx: prop으로 편리한 스타일링 솔루션을 제공
//     여러 스타일 규칙을 하나의 prop으로 결합 가능
//     색상, 마진, 패딩, 타이포그래피 등 다양한 스타일을 한 번에 지정 가능
