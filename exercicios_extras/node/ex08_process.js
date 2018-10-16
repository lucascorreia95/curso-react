function temParam(param){
  return process.argv.indexOf(param) !== -1
}

if(temParam('--producao')){
  console.log('Atencao total!')
} else {
  console.log('Tranquilo!')
}
