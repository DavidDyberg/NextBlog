'use client'

import styled from "styled-components"
import { Button } from "@/styles/button";

export const SidebarContainer = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 20px;
  background-color: rgb(203 213 225);

  @media (max-width: 900px) {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: auto;
    }

    @media (max-width: 500px) {
        gap: 1px;
    }
`;

export const SidebarItem = styled(Button)`
  font-size: 16px;
  margin: 0;
  width: 100%;
  border: none;
  cursor: pointer;
  background-color: lightgray;
  color: white;

  ${({ $primary }) =>
    $primary &&
    `
    background: #5F9EA0;
    color: white;
    border: 2px solid #5F9EA0;
    &:hover {
      padding: 6px 21px;
    }
  `}    
`;