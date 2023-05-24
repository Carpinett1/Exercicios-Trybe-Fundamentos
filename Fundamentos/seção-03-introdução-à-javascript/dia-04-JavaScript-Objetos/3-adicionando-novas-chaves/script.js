let student = {};

function addProperty(object, key, value) {
  object[key] = value;
};

addProperty(student, `nome`, `Thiago Almeida Carpinetti`);
addProperty(student, `email`, `thiac12@gmail.com`);
addProperty(student, `telefone`, `(12) 99108-1875`);
addProperty(student, `github`, `github.com/Carpinett1`);
addProperty(student, `linkedIn`, `linkedin.com/in/thiagocarpinetti`);

console.log(student);