const prevbtn = document.querySelector("#prev-btn");
const nextbtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");

let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers + 1;


//Event Listener

prevbtn.addEventListener("click", goPrevPage)
nextbtn.addEventListener("click", goNextPage)


// Business Logic
function openBook() {
    book.style.transform = "translateX(50%)";
    prevbtn.style.transform = "translateX(-180px)";
    nextbtn.style.transform = "translateX(180px)";

}
function closeBook(isAtBeginning) {
    if(isAtBeginning){
        book.style.transform = "translateX(0%)";

    }else{book.style.transform = "translateX(100%)";
        
    }
    
   
    prevbtn.style.transform = "translateX(0px)";
nextbtn.style.transform = "translateX(0px)";

}
function goNextPage() {
    if (currentLocation < maxLocation) {
        switch (currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped")
                paper1.getElementsByClassName.zIndex = 1;
                break;

            case 2:

                paper2.classList.add("flipped")
                paper2.getElementsByClassName.zIndex = 2;
                break;

            case 3:

                paper3.classList.add("flipped")
                paper3.getElementsByClassName.zIndex = 3;
                closeBook();
                break;
            default:
                throw new Error("unkown state")
        }
        currentLocation++;
    }

}
function goPrevPage() {
    if (currentLocation > 1) {
        switch (currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 3;
                break;
            case 3:
                closeBook();
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 2;
                break;
            case 4:
                openBook();
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 1;
                break;
            default:
                throw new Error("unkown state")
        }
        currentLocation--;
    }


}
console.log(goNextPage)