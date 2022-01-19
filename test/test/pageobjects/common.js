import { expect } from "chai";

export function searchTable(value) {
  $(".treeview__search__input").addValue(value);
}

export function verifyElementValue(element, value) {
  $(element).getValue();
  let inputValue = $(element).getValue();
  expect(inputValue).to.equal(value);
}
export function verifyElementText(element, text) {
  $(element).getHTML(false);
  let inputValue = $(element).getHTML(false);
  expect(inputValue).to.equal(text);
}

export function waitForLoader(loader = ".k-loading-image") {
  $(loader).waitForDisplayed({ reverse: true });
}

export function verifyIsNotVisible(element) {
  element.waitForDisplayed({ reverse: true });
}

export function verifyIsVisible(element) {
  element.waitForDisplayed({ reverse: false });
}

export function randomStringNum() {
  return String(Math.random()).slice(2, -1);
}

export function randomShortStringNum() {
  return Math.random().toString(36).substr(4, 6);
}

export function randomInteger() {
  return Math.floor(10000000 + Math.random() * 90000000);
}



