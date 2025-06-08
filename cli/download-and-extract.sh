eval $(node args.js)

downloadUrl="http://localhost:3000/liturgia/${URL}/download"
outputDir="/mnt/c/Users/Usuario/Downloads" 

echo "Baixando arquivo ZIP..."
wget -O "${outputDir}/$ZIP_FILENAME" "$downloadUrl" || { echo "Erro ao baixar o arquivo!"; exit 1; }

echo "Extraindo arquivo ZIP..."
unzip "${outputDir}/$ZIP_FILENAME" -d "${outputDir}/$URL" || { echo "Erro ao extrair o arquivo!"; exit 1; }