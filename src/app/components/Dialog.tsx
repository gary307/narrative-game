"use client";

import { useState } from "react";
import styled from "styled-components";

const TextArea = styled.div<{ isActive: boolean }>`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  opacity: ${(props) => (props.isActive ? "1" : "0.5")};

  padding: 20px;
  animation: fadeIn 1s ease;
`;

const Button = styled.button`
  border-radius: 20px;
  padding: 10px;
  border: 1px solid white;
  margin-right: 10px;
  margin-bottom: 10px;
`;

const Buttons = styled.div`
  margin: 20px 0;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 50px;
`;

export const Dialog = ({
  allDialogfields,
}: {
  allDialogfields: {
    name: string;
    content: string;
    options: Array<{ name: string; copy: string; nextStep: { name: string } }>;
  }[];
}) => {
  // const localStorageFields = window?.localStorage.getItem("fields");

  // const [textFieldsToShow, setTextFieldsToShow] = useState(
  //   localStorageFields ? [...localStorageFields.split(",")] : ["Introduction"]
  // );

  const [textFieldsToShow, setTextFieldsToShow] = useState(["Introduction"]);

  const textFieldsFiltered = allDialogfields.filter((text) =>
    textFieldsToShow.includes(text.name)
  );

  return textFieldsFiltered.length ? (
    <Wrapper>
      {textFieldsFiltered.map((text, i) => (
        <TextArea
          key={text.name}
          isActive={i === textFieldsFiltered.length - 1}
        >
          <div>{text.content}</div>

          <Buttons>
            {text.options.map((option) => (
              <Button
                key={option.name}
                onClick={() => {
                  i === textFieldsFiltered.length - 1 &&
                    setTimeout(() => {
                      setTextFieldsToShow([
                        ...textFieldsToShow,
                        option.nextStep.name,
                      ]);
                      // localStorage.setItem("fields", [
                      //   ...textFieldsToShow,
                      //   // option.nextStep.name as string,
                      // ]);
                    }, 1000);
                }}
              >
                {option.copy}
              </Button>
            ))}
          </Buttons>
        </TextArea>
      ))}
    </Wrapper>
  ) : (
    "loading"
  );
};
