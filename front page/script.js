const fullname = document.getElementById('full-name');
const studentId = document.getElementById('student-id');
const section = document.getElementById('section');
const submitBtn = document.getElementById('submit-btn');

const nameError = document.getElementById('name-error');
const studentidError = document.getElementById('studentid-error');
const sectionError = document.getElementById('section-error');

const okBtn = document.getElementById('okBtn')

fullname.addEventListener('keyup', validateName);
studentId.addEventListener('keyup', validateStudentId);
section.addEventListener('keyup', validateSection);
submitBtn.addEventListener('click', validateForm);

okBtn.addEventListener('click', closePopup);





function validateName(){

    fullnameValue = fullname.value.trim()

    if(fullnameValue.length == 0){
        nameError.innerHTML = '<p>fill up your fullname</p>'
        return false
    }

    if(!fullnameValue.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = '<p>fullname must be valid</p>'
        return false
    }

    nameError.innerHTML = '<p class="valid">valid fullname</p>'
    return true

}


function validateStudentId(){

    const idValue = studentId.value.trim();

    if(idValue.length == 0){
        studentidError.innerHTML = '<p>fill up your student id</p>'
        return false
    };

    if(idValue.length > 11){
        studentidError.innerHTML = '<p>student id must be valid</p>'
        return false
    };

    if(idValue === idValue.toLowerCase()){
        studentidError.innerHTML = '<p>student id must be valid</p>'
        return false
    };

    studentidError.innerHTML = '<p class="valid">valid student id</p>'
    return true

};

function validateSection() {

    const sectionValue = section.value.trim()

    if(sectionValue.length == 0){
        sectionError.innerHTML = '<p>fill up your section</p>'
        return false
    }

    if(sectionValue === sectionValue.toLowerCase()){
        sectionError.innerHTML = '<p>section must be valid</p>'
        return false
    }

    sectionError.innerHTML = '<p class="valid">valid section</p>'
    return true


}

function validateForm(e) {
    e.preventDefault()

    const isNameValidate = validateName()
    const isIdValidate = validateStudentId()
    const isSectionValidate = validateSection()

    if(isNameValidate && isIdValidate &&  isSectionValidate){
        successfulPopup()
    }else{
         nameError.style.display = "block"; 
         studentidError.style.display = "block";
         sectionError.style.display = "block";

         nameError.innerHTML = '<p>fill up your fullname</p>'
         studentidError.innerHTML = '<p>fill up your student id</p>'
         sectionError.innerHTML = '<p>fill up your section</p>'

         setTimeout(() => {
            nameError.style.display = "none"; 
            studentidError.style.display = "none";
            sectionError.style.display = "none";
         }, 3000)
         return false

         
    }
}


function successfulPopup() {
    const open = document.querySelector('.pop-up');
    open.classList.add('show');
}

function closePopup(){
    const open = document.querySelector('.pop-up');
    open.classList.remove('show');

    fullname.value = "";
    studentId.value = "";
    section.value = "";

    nameError.innerHTML = "";
    studentidError.innerHTML = "";
    sectionError.innerHTML = "";

};






