
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
        let eData = e.target.dataset.tool;
        if(isNumeric(eData)) {
            if(InputUser.textContent.length != 70) {
                InputUser.innerText+=eData;

                outputResult.classList.remove("show");
                InputUser.classList.remove("hide");
            }
        }else if(isNaN(eData) && eData != '='){
            outputResult.classList.remove("show");
            InputUser.classList.remove("hide");

            if(eData == 'c') {
                InputUser.textContent = '';
                outputResult.textContent = '';
            } else if(eData == 'd') {
                if(InputUser.textContent.length != 0){
                    let res = InputUser.textContent.substring(0, InputUser.textContent.length-1);
                    InputUser.textContent = InputUser.textContent.length != 1 ? res : '';
                }
            } else if(eData == 'X2') {
                if(InputUser.textContent.length != 0 && InputUser.textContent[InputUser.textContent.length -1] != eData){
                    if(isNumeric(InputUser.textContent)) {
                        outputResult.textContent = numberWithCommas(eval(InputUser.textContent.toString() + '*' + InputUser.textContent.toString()));
                        outputResult.classList.add("show");
                        InputUser.classList.add("hide");
                    } else {
                        try {
                            outputResult.textContent = numberWithCommas(eval(InputUser.textContent));

                            outputResult.classList.add("show");
                            InputUser.classList.add("hide");
                            outputResult.textContent = numberWithCommas(eval(outputResult.textContent.toString() + '*' + outputResult.textContent.toString()));
                        } catch(err) {
                            console.log(err.message);
                        }
                    }
                }
            }else {
                if(InputUser.textContent.length != 70) {
                    if(InputUser.textContent[InputUser.textContent.length -1] != eData) {
                        InputUser.innerText+=eData;
                    }
                }
            }
        } else if(isNaN(eData) && eData == '='){
            try {
                outputResult.textContent = numberWithCommas(eval(InputUser.textContent));

                outputResult.classList.add("show");
                InputUser.classList.add("hide");
            } catch(err) {
                console.log(err.message);
            }
        }
    })
})



// Functions
// Function To Check If This Input Is Number Or Not
function isNumeric(num){
    return !isNaN(num)
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}