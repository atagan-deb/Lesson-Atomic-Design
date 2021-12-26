import React, { memo } from "react";
import styled from "styled-components";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";

export const SearchInput = memo(() => {
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButtonWapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWapper>
    </SContainer>
  );
});

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SButtonWapper = styled.div`
  padding-left: 8px;
`;
