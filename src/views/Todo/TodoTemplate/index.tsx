import React, { ReactNode } from 'react'
import  styled  from 'styled-components';

const TodoTemplateBlock = styled.div`
    width: 512px;
    height: 768px;

    position: relative;
    background: white;
    border-redius: 15px;
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.04);

    margin: 0 auto;

    margin-top: 100px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
`;

interface TodoTemplatePros {
    children: ReactNode;
}
function TodoTemplate({children}: TodoTemplatePros) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>
}

export default TodoTemplate