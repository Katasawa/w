var listaArray = new Array;


   function adicionaTarefa(){
                         var lista = document.getElementById('lista');
                         var boxTarefa = document.getElementById('boxTarefa'); 
                         var option = document.createElement('option');
                         var tes = boxTarefa.value;   
                                  boxTarefa.focus();
                                  if(tes.length == 0){   
                                    alert("Digite a tarefa...");
                                   return;
                                   }
                           option.text = boxTarefa.value;
                          listaArray[listaArray.length] = boxTarefa.value;                  
                          lista.add(option);
                          boxTarefa.value="";
                          boxTarefa.focus();
                         }
                       
                           
    function removeTarefa(){ 
                        var l = document.getElementById('lista');
                        var apontador = l.selectedIndex;
                         if(apontador <= -1){   
                                    alert("Seleciona uma tarefa para remover.");
                                   return;
                                   }
                         if (confirm('Deseja remover ' + l.options[l.selectedIndex].text + ' ?' )){   
                          listaArray.splice(apontador,1);
                        var fim = listaArray.length-1;
                          alert(l.options[l.selectedIndex].text + ' foi removido com sucesso');
                          l.innerText = "";
                          l.innerHTML = "";
                        for(i=0;i<=fim;i++){
                                            var o = document.createElement('option');
                                            o.text = listaArray[i];
                                            l.add(o);          
                     }                    }                                                       }
                       
                       
                     function tarefaConcluida(){ 
                        var l = document.getElementById('lista');
                        var apontador = l.selectedIndex;
                         if(apontador <= -1){   
                                    alert("Seleciona a tarefa concluida.");
                                   
                        for(i=0;i<=fim;i++){
                                            var o = document.createElement('option');
                                            o.text = listaArray[i];
                                            l.add(o);          
                     }                    }                                                       }                   
