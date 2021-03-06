import { Add, Remove } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 400;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 30px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  border: 2px solid;
  border-radius: 1px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 3px solid;
  background-color: white;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    background-color: #f8f4f4;
  }
`;

function Product() {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://cdn.shopify.com/s/files/1/0099/5708/1143/products/CT4310-045_OFFN_3_1e7bca8d-6672-49d3-8c23-3a942a10c6dc_1024x1024.jpg?v=1610066596" />
        </ImgContainer>
        <InfoContainer>
          <Title>????????? ????????????</Title>
          <Desc>
            ????????? ???????????? ????????? ?????? ????????? ????????? ??????????????? ???????????????
            ???????????????. <br />
            ????????? ???????????? ????????? ?????? ???????????? ????????? ????????? ???????????? ????????????
            ???????????????.
          </Desc>
          <Price>??? 20000</Price>

          {/* ???????????? */}
          <FilterContainer>
            <Filter>
              <FilterTitle>??????</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="gray" />
              <FilterColor color="blue" />
            </Filter>
            <Filter>
              <FilterTitle>?????????</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          {/* ???????????? */}
          <AddContainer>
            <AmountContainer>
              <Add />
              <Amount>1</Amount>
              <Remove />
            </AmountContainer>
            <Button>???????????? ??????</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default Product;
