const regExps = [];

// Encontra todas as palavras
regExps.push(/([\wÀ-ú]+)/gi);

// Não números
regExps.push(/\D/g);

// Valida IP
regExps.push(
  /((25[0-5]|2[0-4][0-9]|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4][0-9]|1\d{2}|\d{2}|\d)/g
);

// Valida CPF
regExps.push(/(\d{3}\.){2}\d{3}-\d{2}/g)

// Valida telefones
regExps.push(/^(\(\d{2}\)\s*)?(9\s*)?(\d{4}-\d{4}))$/gm)

// Validar senhas forte
regExps.push(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/g)

// Validar emails
regExps.push(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

console.log(regExps);

