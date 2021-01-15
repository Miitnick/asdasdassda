function help() {
    return `
┏ ❣ *RORSCHACH BOT* ❣
╿
╿  *Prefix [!]*
╿
┷ ☾ Comandos de Admin ☽
   ╽
   ┠❥ *!add* 62858(numero)
Exemplo: !add 628585521992491007
   ┠❥ !kick @marcar alguém pra ser banido
   ┠❥ *!promote @marcar alguém pra virar adm
   ┠❥ *!demote @marcar alguém pra perder o adm
   ┠❥ *!mentionAll*
   ┠❥ *!adminList*
   ┠❥ *!ownerGroup*
   ┠❥ *!leave*
   ┠❥ *!linkGroup*
   ┠❥ *!delete [Marque uma mensagem do bot]*
Bot apaga uma mensagem
   ┠❥ *!kickAll*
   ┠❥ *!NSFW [enable|disable]*
   ┠❥ *!welcome [enable|disable]*
   ╿
┯┷ ☾ Downloader Commands ☽
╽
┠❥ *!ytmp3 [linkYt]*
┠❥ *!ytmp4 [linkYt]*
┠❥ *!ig [linkIg]*
┠❥ *!fb [linkFb]*
╿
┷┯ ☾ Others Commands ☽
   ╽
   ┠❥ *!sticker*
   ┠❥ *!stickerGif*
   ┠❥ *!creator*
   ┠❥ *!neko*
   ┠❥ *!inu*
   ┠❥ *!cuaca [lugar]*
    Mostra o clima se algum lugar
   ┠❥ *!tts [código da lingua] [texto]*
    Exemplo: !tts en boa noite
   ┠❥ *!igStalk [@username]*
   ┠❥ *!wiki [query]*
   ┠❥ *!anime [query]*
   ┠❥ *!brainly [questão] [.total]*
   ┠❥ *!loli*
   ┠❥ *!waifu*
   ┠❥ *!husbu*
   ┠❥ *!randomNekoNime*
   ┠❥ *!randomTrapNime*
   ┠❥ *!randomAnime*
   ┠❥ *!info*
   ┠❥ *!infoGempa*
   ┠❥ *!meme*
   ┠❥ *!join [linkGroup]*
   ┠❥ *!quotes*
   ┠❥ *!quotesnime*
   ┠❥ *!wait*
   ┠❥ *!nulis [Texto]*
   ┠❥ *!donasi*
   ┠❥ *!lirik [optional]*
   ┠❥ *!chord [query]*
   ╿
   ╿
   ╰╼❥ Envie o comando *! Readme * para descobrir a função e como usar o comando acima, DEVE LER !!`
}
exports.help = help()
function readme() {
    return `
*[linkYt]* Preencha com um link válido do YouTube sem os “[]”
Exemplo : *!ytmp3 https://youtu.be/Bskehapzke8*

*[linkYt]* Preencha com um link válido do YouTube sem os “[]”
Exemplo : *!ytmp4 https://youtu.be/Bskehapzke8*

*[linkIg]* Preencha com um link válido do Instagram sem os “[]”
Exemplo : *!ig https://www.instagram.com/p/CFqRZTlluAi/?igshid=1gtxkbdqhnbbe*

*[linkFb]* Preencha com um link válido do Facebook sem os “[]”
Exemplo : *!fb https://www.facebook.com/EpochTimesTrending/videos/310155606660409*

*[Clima]* Preencha com um lugar válido sem os “[]“
Exemplo : *!cuaca Rio de janeiro*

*[Texto falado]* Preencha o código do idioma, por exemplo  [en] para inglês. E o [texto]  Preencha o idioma e o texto que você deseja dizer, sem os "[]"
Exemplo : *!tts en Test*
Note : Max 250 huruf

*[@username]* Deve ser preenchido com um nome de usuário válido do Instagram, sem os "[]"
Exemplo : *!igStalk @neymarjr*


*[linkGroup]* Preencha com um link de grupo Whatsapp válido, sem os "[]".
Exemplo : *!join https://chat.whatsapp.com/Bhhw77d5t2gjao8*

*[optional]* Preencha com o texto / título da música, sem as marcas “[]”.
Exemplo : *!lirik Blinding lights*`
}
exports.readme = readme()
function info() {
    return `Este bot é feito em Node.js / JavaScript `
}
exports.info = info()
function snk() {
    return `Termos e Condições Bot * Shinomiya Kaguya * 
1. O texto e seu nome de usuário do WhatsApp serão armazenados no servidor enquanto o bot estiver ativo 
2. Seus dados serão excluídos quando o bot estiver offline 
3. Não armazenamos fotos, vídeos, arquivos, áudios e documentos que você envia 
4. Nunca pediremos que você forneça informações pessoais 
5. Se você encontrar um bug / erro, informe-o diretamente ao proprietário do bot 
6. O que quer que você peça neste bot, NÃO SEREMOS RESPONSÁVEIS! 

Obrigado !`
}
exports.snk = snk()
function donate() {
    return ` Quer doar?

Thanks !`
}
exports.donate = donate()
function listChannel() {
    return Lista de canais: 
1. ANTV
2. GTV
3. Indosiar
4. iNewsTV
5. KompasTV
6. MNCTV
7. METROTV
8. NETTV
9. RCTI
10. SCTV
11. RTV
12. Trans7
13. TransTV`
}
exports.listChannel = listChannel()
