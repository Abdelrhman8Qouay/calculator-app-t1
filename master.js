
// All Variables
const app = document.getElementById("app");

const pMoreBtn = document.getElementById("MoreInfoP");

const allToolBtns = document.querySelectorAll(".card_phone .btns_part .tool");

const InputUser = document.querySelector(".card_phone .output_part .top");
const outputResult = document.querySelector(".card_phone .output_part .down");


// options variables



// All Changes To Show Weather Result On Page
// To Open And Close Modal
pMoreBtn.onclick = ()=> {
	let ModalDiv = document.querySelector('.'+pMoreBtn.dataset.class);
	ModalDiv.classList.add("show");
	ModalDiv.addEventListener("click", (e)=> {
		if(e.target == ModalDiv){
			ModalDiv.classList.remove("show");
		}
	})
}


// Get Work On All Buttons
allToolBtns.forEach(btn=>  {
    btn.addEventListener('click', (e)=> {
        let dataB = e.target.dataset.tool;
        if(isNumeric(dataB)) {
            InputUser.innerText+=dataB;

            outputResult.classList.remove("show");
            InputUser.classList.remove("hide");
        }else if(isNaN(dataB) && dataB != '='){
            outputResult.classList.remove("show");
            InputUser.classList.remove("hide");

            if(dataB == 'c') {
                InputUser.textContent = '';
            } else if(dataB == 'd') {
                if(InputUser.textContent.length != 0){
                    let res = InputUser.textContent.substring(0, InputUser.textContent.length-1);
                    InputUser.textContent = InputUser.textContent.length != 1 ? res : '';
                }
            }
        } else if(isNaN(dataB) && dataB == '='){
            outputResult.textContent = eval(InputUser.textContent);

            outputResult.classList.add("show");
            InputUser.classList.add("hide");
        }
    })
})



// Functions
// Function To Check If This Input Is Number Or Not
function isNumeric(num){
    return !isNaN(num)
}