import styled from 'styled-components'

export const FormStyled = {
  Container: styled.div`
    background-color:red;
    grid-area: navbar;
  `,

  Main: styled.nav`
    height: 8vh;
    padding: 0 20px;
  `,

  Input: styled.input`
  border: none;
  width: 200px;
  height: 10px;
  margin: 5px;
  border-radius: 3px;
  padding: 15px 10px;
  background-color: #eee;
  font-family: inherit;
  caret-color: #ff9021;
  &:focus {
    border: none;
    outline: none;
  }
  &::placeholder {
    color: #706967;
  }
  &:hover {
    border: none
  }
  &:focus {
    border: none
  }
  `,

  SelectDropdown: styled.div`
  position: relative;
  user-select: none;
  width: 100%;

  & .custom-select {
    position: relative;
    display: flex;
    flex-direction: column;
    border-width: 0 2px 0 2px;
    border-style: solid;
    border-color: #394a6d;
  }
  & .custom-select__trigger {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 22px;
    font-size: 20px;
    font-weight: 300;
    color: #3b3b3b;
    height: 60px;
    line-height: 60px;
    background: #ffffff;
    cursor: pointer;
    border-width: 2px 0 2px 0;
    border-style: solid;
    border-color: #394a6d;
  }
  & .custom-options {
    position: absolute;
    display: block;
    top: 100%;
    left: 0;
    right: 0;
    border: 2px solid #394a6d;
    border-top: 0;
    background: #fff;
    transition: all 0.5s;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    z-index: 2;
  }
  & .custom-select.open .custom-options {
    opacity: 1;
    visibility: visible;
    pointer-events: all;
  }
  & .custom-option {
    position: relative;
    display: block;
    padding: 0 22px 0 22px;
    font-size: 22px;
    font-weight: 300;
    color: #3b3b3b;
    line-height: 60px;
    cursor: pointer;
    transition: all 0.5s;
  }
  & .custom-option:hover {
    cursor: pointer;
    background-color: #b2b2b2;
  }
  & .custom-option.selected {
    color: #ffffff;
    background-color: #305c91;
  }
  `
}


