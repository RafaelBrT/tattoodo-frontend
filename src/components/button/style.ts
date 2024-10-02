import styled from "styled-components";

export const CustomButton = styled.button`
  border: none;
  background-color: #000;
  width: 100%;
  color: #fff;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.25rem;
  outline: none;
  font-family: 'IBM Plex Mono', monospace;

  &:hover {
    opacity: 0.8;
    transition: opacity 0.2s ease-in-out;
  }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
