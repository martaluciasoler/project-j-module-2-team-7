"use strict";let userData={name:"",job:"",email:"",phone:"",linkedin:"",github:"",photo:"",palette:""};const fr=new FileReader,uploadBtn=document.querySelector(".js__profile-trigger"),fileField=document.querySelector(".js__profile-upload-btn");let profileImage=document.querySelector(".js__profile-image");const profilePreview=document.querySelector(".js__profile-preview");function getImage(e){const t=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(t)}function writeImage(){profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`,userData.photo=fr.result,localStorage.setItem("photo",userData.photo)}function fakeFileClick(){fileField.click()}uploadBtn.addEventListener("click",fakeFileClick),fileField.addEventListener("change",getImage);const nameElement=document.querySelector(".js-input-name"),positionElement=document.querySelector(".js-input-job"),emailElement=document.querySelector(".js-input-email"),phoneElement=document.querySelector(".js-input-telephone"),linkedinElement=document.querySelector(".js-input-linkedin"),githubElement=document.querySelector(".js-input-github"),name=document.querySelector(".js-card-name"),job=document.querySelector(".js-card-job"),email=document.querySelector(".js-icon-email"),linkedin=document.querySelector(".js-icon-linkedin"),github=document.querySelector(".js-icon-github"),photo=document.querySelector(".js__profile-image"),responseURL=document.querySelector(".result-url"),palette=document.querySelectorAll(".js-palette"),bar=document.querySelector(".card__id"),iconSm=document.querySelectorAll(".contact__icon"),photoDefault=document.querySelector(".card__photo"),paletteCold=document.querySelector("#palette-1"),paletteWarm=document.querySelector("#palette-2"),paletteNeutral=document.querySelector("#palette-3");function addInputsListeners(){for(const e of palette)e.addEventListener("change",addPaletteClass)}function addPaletteClass(e){const t=e.currentTarget.value;console.log(t),name.classList.remove("card__id_name"),name.classList.remove("card__id_name2"),name.classList.remove("card__id_name3"),bar.classList.remove("card__id"),bar.classList.remove("card__id2"),bar.classList.remove("card__id3"),photoDefault.classList.remove("card__photo"),photoDefault.classList.remove("card__photo2"),photoDefault.classList.remove("card__photo3");for(const e of iconSm)e.classList.remove("contact__icon"),e.classList.remove("contact__icon2"),e.classList.remove("contact__icon3");if("1"===t){name.classList.add("card__id_name"),bar.classList.add("card__id"),photoDefault.classList.add("card__photo");for(const e of iconSm)e.classList.add("contact__icon")}else if("2"===t){name.classList.add("card__id_name2"),bar.classList.add("card__id2"),photoDefault.classList.add("card__photo2");for(const e of iconSm)e.classList.add("contact__icon2")}else{name.classList.add("card__id_name3"),bar.classList.add("card__id3"),photoDefault.classList.add("card__photo3");for(const e of iconSm)e.classList.add("contact__icon3")}}function getInputValues(){userData.name=nameElement.value,userData.job=positionElement.value,userData.email=emailElement.value,userData.phone=phoneElement.value,userData.linkedin=linkedinElement.value,userData.github=githubElement.value,userData.photo=fr.result;for(let e of palette)userData.palette=e.value;setInLocalStorage()}function setInLocalStorage(){localStorage.setItem("data",JSON.stringify(userData))}addInputsListeners(),userData={};const localImage=localStorage.getItem("photo");function getFromLocalStorage(){const e=JSON.parse(localStorage.getItem("data"));null!==e&&(nameElement.value=e.name||"",positionElement.value=e.job||"",emailElement.value=e.email||"",phoneElement.value=e.phone||"",linkedinElement.value=e.linkedin||"",githubElement.value=e.github||"")}function updateCard(e){name.innerHTML=e.name||"Nombre Apellido",job.innerHTML=e.job||"Puesto de trabajo",email.setAttribute("href","mailto:"+e.email),linkedin.setAttribute("href",e.linkedin),github.setAttribute("href","https://github.com/",e.github)}function result(){getInputValues(),updateCard(userData)}localImage&&(profileImage.style.backgroundImage=`url(${localImage})`,profilePreview.style.backgroundImage=`url(${localImage})`,userData.photo=localImage),console.log(email),nameElement.addEventListener("keyup",result),positionElement.addEventListener("keyup",result),emailElement.addEventListener("keyup",result),phoneElement.addEventListener("keyup",result),linkedinElement.addEventListener("keyup",result),githubElement.addEventListener("keyup",result);const iconTelephone=document.querySelector(".js-telephone"),iconEmail=document.querySelector(".js-email"),iconLinkedin=document.querySelector(".js-linkedin"),iconGithub=document.querySelector(".js-github");function showContactTelephone(){0!==phoneElement.value.length?iconTelephone.classList.remove("hidden"):iconTelephone.classList.add("hidden")}function showContactEmail(){0!==emailElement.value.length?iconEmail.classList.remove("hidden"):iconEmail.classList.add("hidden")}function showContactLinkedin(){0!==linkedinElement.value.length?iconLinkedin.classList.remove("hidden"):iconLinkedin.classList.add("hidden")}function showContactGithub(){0!==githubElement.value.length?iconGithub.classList.remove("hidden"):iconGithub.classList.add("hidden")}phoneElement.addEventListener("keyup",showContactTelephone),emailElement.addEventListener("keyup",showContactEmail),linkedinElement.addEventListener("keyup",showContactLinkedin),githubElement.addEventListener("keyup",showContactGithub);const collapsibleTriggers=document.querySelectorAll(".js-collapsible__trigger");function updateCollapsible(e){const t=e.currentTarget.parentElement;if(t.classList.contains("collapsable--open"))t.classList.remove("collapsable--open");else{for(const e of collapsibleTriggers)e.parentElement.classList.remove("collapsable--open");t.classList.add("collapsable--open")}}for(const e of collapsibleTriggers)e.addEventListener("click",updateCollapsible);const resetButton=document.querySelector(".js-button-reset"),photoPreviewElement=document.querySelector(".js__profile-preview"),contactList=document.querySelector(".js-contact__list");function resetForm(){nameElement.value="",positionElement.value="",emailElement.value="",phoneElement.value="",linkedinElement.value="",githubElement.value="",photoPreviewElement.style="",photo.style="",palette.value="1"}function resetCard(){name.innerHTML="Nombre Apellido",job.innerHTML="Puesto de trabajo",contactList.classList.add("hidden")}function resetData(){resetForm(),resetCard()}resetButton.addEventListener("click",resetData);const buttonShare=document.querySelector(".js-button__share");function handlerClick(e){e.preventDefault(),sendRequest(userData)}function sendRequest(e){fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/",{method:"POST",body:JSON.stringify(e),headers:{"content-type":"application/json"}}).then((function(e){return console.log(e),e.json()})).then((function(e){showURL(e)})).catch((function(e){console.log(e)}))}buttonShare.addEventListener("click",handlerClick);const twitterContainer=document.querySelector(".js-twitter"),twitterButton=document.querySelector(".js-twitter-button");function showURL(e){if(e.success){twitterContainer.classList.remove("hidden");const t="¡Mira mi tarjeta de visita de AdaVillana!";responseURL.innerHTML=`${e.cardURL}<a href="${e.cardURL}" target="_blank" ></a>`,twitterButton.setAttribute("href",`https://twitter.com/intent/tweet?text=${t}&url=${e.cardURL}`)}else responseURL.innerHTML="ERROR:"+e.error}getFromLocalStorage();