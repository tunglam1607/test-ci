"use strict";

let books = [
  {
    name: "Harry Potter I",
    author: "J.K. Rowling",
    year: 1990,
    origin: "England",
  },
  {
    name: "Chi Pheo",
    author: "Nam Cao",
    year: 1945,
    origin: "Vietnam",
  },
];
let editMode = false;
let bookIdTmp;
document.addEventListener("DOMContentLoaded", function () {
  renderBooks();

  validation.init([
    {
      selector: ".name",
      name: "name",
      type: "text",
      min: 1,
      max: 32,
    },
    {
      selector: ".author",
      name: "author",
      type: "text",
      min: 1,
      max: 255,
    },
    {
      selector: ".year",
      name: "year",
      type: "number",
    },

    {
      selector: ".origin",
      name: "origin",
      type: "text",
      min: 1,
      max: 255,
    },
  ]);
});
function submitClickHandle() {
  if (!validation.noError()) return;

  if (isEditMode()) {
    editBookHandle();
  } else {
    let book = getBookInfoFromInputs();
    addBook(book);
    renderBooks();
    bookFormReset();
  }
}

function enableEditMode() {
  editMode = true;
}

function disableEditMode() {
  editMode = false;
}

function isEditMode() {
  return editMode == true;
}

function renderBooks() {
  let html = "";
  for (let i = 0; i < books.length; i++) {
    let book = books[i];
    html += '<li class="book">';
    html += "<p><span>Name:</span>" + book.name + "</p>";
    html += "<p><span>Author:</span> " + book.author + "</p>";
    html += "<p><span>Year:</span> " + book.year + "</p>";
    html += "<p><span>Origin:</span> " + book.origin + "</p>";
    html += '<i class="book-delete" onclick="onDeleteBook(' + i + ')">X</i>';
    html += '<i class="book-edit" onclick="onEditBook(' + i + ')">Edit</i>';
    html += "</li>";
  }

  setHTML("#books-list", html);
}
function onEditBook(index) {
  bookIdTmp = index;
  let book = getBook(index);
  setInputValue(".book-form .name", book.name);
  setInputValue(".book-form .author", book.author);
  setInputValue(".book-form .year", book.year);
  setInputValue(".book-form .origin", student.origin);

  validation.checkAllError();
  enableEditMode();

  setHTML(".createBook", "Save");
}

function getBook(index) {
  return books[index];
}

function setHTML(selector, html) {
  let element = document.querySelector(selector);
  element.innerHTML = html;
}

function bookDelete(index) {
  books.splice(index, 1);
}

function getInputValue(selector) {
  let inputElement = document.querySelector(selector);
  return inputElement.value;
}

function setInputValue(selector, value) {
  let element = document.querySelector(selector);
  element.value = value;
}

function onDeleteBook(index) {
  if (confirm("Are you sure???")) {
    bookDelete(index);
    renderBooks();
  }
}

function editBookHandle() {
  let book = getBookInfoFromInputs();

  editBook(bookIdTmp, book);

  renderBooks();

  disableEditMode();

  setHTML(".createBook", "Create");

  bookFormReset();
}

function bookFormReset() {
  setInputValue(".book-form .name", "");
  setInputValue(".book-form .author", "");
  setInputValue(".book-form .year", "");
  setInputValue(".book-form .origin", "");
}

function editBook(index, book) {
  books[index] = book;
}

function getBookInfoFromInputs() {
  let name = getInputValue(".book-form .name");
  let author = getInputValue(".book-form .auhtor");
  let year = getInputValue(".book-form .year");
  let origin = getInputValue(".book-form .origin");

  return {
    name: name,
    author: author,
    year: year,
    origin: origin,
  };
}

function getElement(selector) {
  let element = document.querySelector(selector);
  return element;
}

function addBook(book) {
  books.push(book);
}
