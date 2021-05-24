onresize = ()=>{
	document.querySelector(".landing").outerHTML = `<div class="landing" style="width: ${window.innerWidth}px; height: ${window.innerHeight}px">${document.querySelector(".landing").innerHTML}</div>`;
	if(document.querySelector(".nsfw")) document.querySelector(".nsfw").outerHTML = `<div class="nsfw" style="width: ${window.innerWidth}px; height: ${window.innerHeight}px">${document.querySelector(".nsfw").innerHTML}</div>`;
	document.querySelector(".modal").style.width = `${window.innerWidth}px`;
	document.querySelector(".modal").style.height = `${window.innerHeight}px`;
	document.querySelector(".image-modal").style.width = `${window.innerWidth}px`;
	document.querySelector(".image-modal").style.height = `${window.innerHeight}px`;
};
onresize();

let TSL = {
	entryHTML: entry => `<div class="entry" data-name="${entry.name}">${TSL.entryInnerHTML(entry)}</div>`,
	entryInnerHTML: entry => `<img src="https://api.snaz.in/v1/telegram/${entry.name}/${entry.files[0]}"><div><span class="name">${entry.title}${entry.official ? `<span class="official-tag">Official</span>` : ""}</span><span class="name small">${entry.name}</span><span class="name small">${entry.files.length} Stickers</span></div>`
}

const DomManager = {
	findEntryDom: e => {
		if(e.classList.contains("entry") && !e.classList.contains("in-entry-popout")) return e;
		const parents = DomManager.listParents(e);
		for(let i in parents){
			let p = parents[i];
			if(p instanceof HTMLDivElement && p.classList.contains("entry") && !p.classList.contains("in-entry-popout")) return p;
		}
		return null;
	},

	findReloadDom: e => {
		if(e.classList.contains("reload")) return e;
		const parents = DomManager.listParents(e);
		for(let i in parents){
			let p = parents[i];
			if(p instanceof HTMLElement && p.classList.contains("reload")) return p;
		}
		return null;
	},

	listParents: e => {
		let list = [];
		let iterate = parent => {
			if(parent !== null && parent.parentNode !== null){
				list.push(parent.parentNode);
				iterate(parent.parentNode);
			}
		}
		iterate(e);
		return list;
	},

	eventFire: (el, etype) => {
		if (el.fireEvent) el.fireEvent('on' + etype); else {
			var evObj = document.createEvent('Events');
			evObj.initEvent(etype, true, false);
			el.dispatchEvent(evObj);
		}
	}
}

onmousedown = e => {
	if(!e.target.classList) return;
	let entry = DomManager.findEntryDom(e.target);
	if(entry) {
		console.log(entry);
		document.querySelector("body").classList.add("fade");
		document.querySelector(".modal").style.display = "table";
		document.querySelector(".entry-popout").innerHTML = `<div class="entry in-entry-popout">${entry.innerHTML}</div>`;
		let set = TSL.json.find(s => s.name === entry.dataset.name)
		console.log(set);
		document.querySelector(".entry-popout-stickers").innerHTML = "";
		window.location.hash = set.name;
		set.files.forEach(f => {
			document.querySelector(".entry-popout-stickers").innerHTML += `<div class="sticker" style="background-image: url(https://api.snaz.in/v1/telegram/${set.name}/${f})">`;
		});
		document.querySelector(".modal .entry img+div").innerHTML += `<a class="big" target="_blank" href="https://t.me/addstickers/${set.name}">Add Stickers</a>`;
	}

	if(e.target.parentNode && e.target.parentNode.classList.contains("modal") && e.target.classList.contains("title")){
		document.querySelector("body").classList.remove("fade");
		document.querySelector(".modal").style.display = "none";
		window.location.hash = "_";
	}

	if(e.target.parentNode && e.target.parentNode.classList.contains("image-modal") && e.target.classList.contains("title")){
		document.querySelector(".modal").classList.remove("fade");
		document.querySelector(".image-modal").style.display = "none";
		window.location.hash = window.location.hash.split("/")[0];
	}

	if(e.target.classList.contains("sticker")){
		document.querySelector(".modal").classList.add("fade");
		document.querySelector(".image-modal").style.display = "table";
		document.querySelector(".image-modal img").src = e.target.style.backgroundImage.replace(/url\("(.+)"\)/, "$1");
		window.location.hash = window.location.hash+"/"+e.target.style.backgroundImage.replace(/url\("(.+)"\)/, "$1").split("/")[6];
	}

	let rel = DomManager.findReloadDom(e.target);
	if(rel){
		document.querySelector(".entry-list").innerHTML = `<h1>Loading...</h1>`;
		onload(false);
	}
}

onload = notforced => {
	if(notforced){
		document.querySelector(".nsfw a").onclick = () => {
			localStorage.setItem("tsl-nfsw-cont", "true");
			document.querySelector("body").removeChild(document.querySelector(".nsfw"));
		};
		if(localStorage.getItem("tsl-nfsw-cont") === "true"){
			document.querySelector("body").removeChild(document.querySelector(".nsfw"));
		}
	}
	fetch('https://api.snaz.in/v1/telegram/').then(res => res.json()).then(json => {
		console.log(json);
		TSL.json = json;
		document.querySelector(".entry-list").innerHTML = "";
		json.forEach(entry => document.querySelector(".entry-list").innerHTML += TSL.entryHTML(entry));
		if(!["_",""].includes(window.location.hash.slice(1))){
			let hash = window.location.hash.slice(1).split("/");
			let set = json.find(s => s.name === hash[0]);
			if(!set) return;
			document.querySelector("body").classList.add("fade");
			document.querySelector(".modal").style.display = "table";
			document.querySelector(".entry-popout").innerHTML = `<div class="entry in-entry-popout">${TSL.entryInnerHTML(set)}</div>`;
			document.querySelector(".entry-popout-stickers").innerHTML = "";
			set.files.forEach(f => {
				document.querySelector(".entry-popout-stickers").innerHTML += `<div class="sticker" style="background-image: url(https://api.snaz.in/v1/telegram/${set.name}/${f})">`;
				if(hash[1] === f){
					document.querySelector(".modal").classList.add("fade");
					document.querySelector(".image-modal").style.display = "table";
					document.querySelector(".image-modal img").src = `https://api.snaz.in/v1//telegram/${set.name}/${f}`;
				}
			});
			document.querySelector(".modal .entry img+div").innerHTML += `<a class="big" target="_blank" href="https://t.me/addstickers/${set.name}">Add Stickers</a>`;
		}
	});
};