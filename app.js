var resumeInput = document.getElementById("resumeInput");
var resumeOutput = document.getElementById("resumeOutput");
function GenerateResume() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var degree = document.getElementById("degree").value;
    var institute = document.getElementById("institution").value;
    var year = document.getElementById("year").value;
    var job = document.getElementById("job").value;
    var company = document.getElementById("company").value;
    var yearsworked = document.getElementById("yearsworked").value;
    var skills = document.getElementById("skills").value.split(",").map(function (skill) { return skill.trim(); });
    var resumeHTML = "\n    <h3>Personal Information</h3>\n    <p> <strong>Name :</strong><span contenteditable=\"true\">".concat(name, "</span> </p>\n    <p> <strong>Email :</strong><span contenteditable=\"true\">").concat(email, "</span> </p>\n    <p> <strong>Phone :</strong><span contenteditable=\"true\">").concat(phone, "</span> </p>\n\n    <h3>Education</h3>\n    <p contenteditable=\"true\">").concat(degree, " from ").concat(institute, ",").concat(year, "</p>\n\n    <h3>Work Experince</h3>\n    <p contenteditable=\"true\">As ").concat(job, " at ").concat(company, " served (").concat(yearsworked, " years)</p>\n\n    <h3>Skills</h3>\n    <ul contenteditable=\"true\"x>").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(""), "</ul>\n    \n    ");
    resumeOutput.innerHTML = resumeHTML;
}
resumeInput.addEventListener("submit", function (e) { return e.preventDefault(); });
