//declare book list

let book_list = JSON.parse(localStorage.getItem('book_list'))|| []

if(book_list!==[])
{
createBookGrid(book_list)
}
//functions

function saveToLocalStorage() 
{
localStorage.setItem('book_list', JSON.stringify(book_list));
}

function addBook(book_obj)
{
 book_list.push(book_obj) 

}


//form manipulation

const form = document.querySelector('.add-book-form')

form.addEventListener('submit', (e) =>
{
e.preventDefault()

const Name = document.getElementById('name').value.trim()
console.log(Name)
const Author = document.getElementById('author').value.trim()
const Publisher = document.getElementById('publisher').value.trim()
const Date = document.getElementById('bookdate').value
const Image = document.getElementById('image').value

    addBook({Name,Author,Publisher,Date,Image});
    saveToLocalStorage()
    createBookGrid(book_list);
 form.reset();
})


//process of adding book to grid ---------------------------------

function createBookGrid(book_arr)
{
//creating parent container
const parentDiv = document.createElement('div')
parentDiv.setAttribute('class','book-list-grid-wrapper-class')

//for each book we are creating grids and appending to parent
//|
//v 

book_arr.forEach(book_obj => {
//creating gridCardDiv
const gridCardDiv = document.createElement('div')
gridCardDiv.setAttribute('class','single-grid-card-wrapper-class')

//creating image element and assigning it atrributes
const imgElement = document.createElement('img')
imgElement.setAttribute('class','grid-image-wrapper-class')
imgElement.setAttribute('src',book_obj.Image)
imgElement.width = 80
imgElement.height = 60

//creating bookDetailsDiv
const bookDetailsDiv = document.createElement('div')
bookDetailsDiv.setAttribute('class','book-details-wrapper-class')

//creating p tags for publisher details
const bookName = document.createElement('p')
bookName.setAttribute('class','book-name-class')

const bookAuthor = document.createElement('p')
bookAuthor.setAttribute('class','book-author-class')

const bookPublisher = document.createElement('p')
bookPublisher.setAttribute('class','book-publisher-details-class')


// Set the text content for the <p> elements
bookName.textContent = book_obj.Name;
bookAuthor.textContent = "by " + book_obj.Author; 
bookPublisher.textContent = book_obj.Publisher + " . First published " + book_obj.Date;


//appending elements
bookDetailsDiv.appendChild(bookName)
bookDetailsDiv.appendChild(bookAuthor)
bookDetailsDiv.appendChild(bookPublisher)

gridCardDiv.appendChild(imgElement);
gridCardDiv.appendChild(bookDetailsDiv);

parentDiv.appendChild(gridCardDiv);
});

//^
//| 

//appending everything to body
const bodyElement = document.querySelector('body')
bodyElement.appendChild(parentDiv)
}


