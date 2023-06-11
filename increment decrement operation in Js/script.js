function totalClick(value) {
            const answer = document.getElementById("answer");
            const sum = parseInt(answer.innerText) + value; 
            answer.innerText = sum;   
            
            // if you want decrement value in minus format please comment the first if function
            if (sum < 0) {
            answer.innerText = 0;
            }

            if(value === 0) {
            answer.innerText = 0;
            }
        }
             
