import styled from "styled-components";
import { BaseButton } from "./BaseButton";
export const PrimaryButton = (props) => {
  // コンポーネントの役割は？
  // 画面の主要となるボタンのデザインを提供すること

  const { children } = props;
  return <SButton>{children}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
