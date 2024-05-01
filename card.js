//crerar tarjeta usuario 
const Anggie_container=document.querySelector("#card-container");
const USER={
id: 1,
    username:"User Name",
    desc:"sobre mi",
    age:26,
    fav_books:{
        books:[
            "Brida",
            "Ensayo sobre la ceqguera",
            "La mecanica del corazon",
            "Angeles y demonios",
            "El principito",

        ],
    },
};
//map siempre regresa algo 
const card=document.createElement("div");
const name_section=document.createElement("h3");
const desc_section=document.createElement("p");
const age_section=document.createElement("p");
const book_section=document.createElement("div");

const bookList=USER.fav_books.books.map((e)=>
{
    const item= document.createElement("ul");
    item.textContent=e;
    return item;
});
console.log(bookList);

name_section.textContent=USER.username;
desc_section.textContent=USER.desc;
age_section.textContent=USER.age;
book_section.append(...bookList);
card.append(name_section,desc_section,age_section,book_section);
Anggie_container.appendChild(card);