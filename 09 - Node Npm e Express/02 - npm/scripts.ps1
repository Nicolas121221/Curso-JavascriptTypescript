npm init -y # cria um arquivo package.json
npm install # instala alguma dependencia
npm i 

npm i express # instala o modulo na versão mais recente e vai atualizando
npm i express -E # instala o modulo na ultima versão

npm i express --save-dev # instala como dependencias de desenvolvimento
npm i express --save-d 

npm i express --save-prod # instala como dependencias de desenvolvimento

npm i express@2.1.0 # instala uma versão especifica
npm i express@2.x # instala uma versão com o patch e o minor mais atualizados

# 2.    1.    0
# Major Minor Patch

# ^2.1.0 muda o minor e patch
# ~2.1.0 muda somente o patch

npm update # atualiza a versão do pacote
npm uninstall # desinstala um pacote

npm ls # lista as dependencias
npm ls --depth=0 # ajusta a profundidade da pasta raiz dos modules

npm outdated # mostra os pacotes desatualizados


