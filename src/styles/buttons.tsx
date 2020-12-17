import { FC } from 'react';
import styled from 'styled-components/native';

const SButton = styled.TouchableOpacity`
  background: #333;
`;

const SButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
`;

type TButtonProps = {
  text: string;
};

export const StyledButton: FC<Partial<TButtonProps>> = ({
  text = 'button',
}) => {
  return (
    <SButton>
      <SButtonText>{text}</SButtonText>
    </SButton>
  );
};
