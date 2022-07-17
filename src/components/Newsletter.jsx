import { Send } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Title = styled.h1``;
const Desc = styled.div``;
const InputContainer = styled.div``;
const Input = styled.input``;
const Button = styled.button``;

function NewsLetter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>뉴스레터를 통해 최신 정보를 받아보세요.</Desc>
      <InputContainer>
        <Input placeholder="이메일을 입력하세요" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
}

export default NewsLetter;
