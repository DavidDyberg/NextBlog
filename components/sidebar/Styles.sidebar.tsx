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
        gap: 5px;
        background: none;
    }
`;

export const SidebarItem = styled.button`
  font-size: 16px;
  margin: 0;
  width: 100%;
  border: none;
  cursor: pointer;
  background-color: #5F9EA0;
  color: white;
  padding: 5px 20px;

  

@media (max-width:500px) {
        font-size: 14px;
        margin: 2px;
    }
`;