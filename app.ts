

const resumeInput=document.getElementById("resumeInput")as HTMLFormElement;
const resumeOutput=document.getElementById("resumeOutput")as HTMLDivElement;

function GenerateResume():void {
    const name=(document.getElementById("name")as HTMLInputElement).value
    const email=(document.getElementById("email")as HTMLInputElement).value
    const phone=(document.getElementById("phone")as HTMLInputElement).value

    const degree=(document.getElementById("degree")as HTMLInputElement).value
    const institute=(document.getElementById("institution")as HTMLInputElement).value
    const year=(document.getElementById("year")as HTMLInputElement).value

    const job=(document.getElementById("job")as HTMLInputElement).value
    const company=(document.getElementById("company")as HTMLInputElement).value
    const yearsworked=(document.getElementById("yearsworked")as HTMLInputElement).value

    const skills=(document.getElementById("skills")as HTMLInputElement).value.split(",").map(skill => skill.trim());

    const resumeHTML=`
    <h3>Personal Information</h3>
    <p> <strong>Name :</strong><span contenteditable="true">${name}</span> </p>
    <p> <strong>Email :</strong><span contenteditable="true">${email}</span> </p>
    <p> <strong>Phone :</strong><span contenteditable="true">${phone}</span> </p>

    <h3>Education</h3>
    <p contenteditable="true">${degree} from ${institute},${year}</p>

    <h3>Work Experince</h3>
    <p contenteditable="true">As ${job} at ${company} served (${yearsworked} years)</p>

    <h3>Skills</h3>
    <ul contenteditable="true"x>${skills.map(skill => `<li>${skill}</li>`).join("")}</ul>
    
    `
    resumeOutput.innerHTML=resumeHTML;
}


resumeInput.addEventListener("submit",(e) => e.preventDefault());

