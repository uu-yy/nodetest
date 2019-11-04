var a = -1
var aaa = document.getElementById("ul3")
var qwer = document.getElementsByClassName("cate")
var cateGroup = document.getElementsByClassName("cateGroup")
$.get("./json/header.json", function(data) {
	console.log(data)
	for (let i = 0; i < data.length; i++) {
		var list = document.createElement("li")
		list.className = "QWER"
		list.innerHTML = `
             <a href="" class="">${data[i].title}</a>
             <div class="dropdowm">
                  <ul class="cate"></ul>
             </div>
        `
		aaa.appendChild(list)
		console.log(ul3)

		$(".QWER").first().children().addClass("a1")
		if (i < 9 && i > 0) {
			for (let j = 0; j < data[i].fenlei.length; j++) {
				a++
				var odiv = document.createElement("div")
				odiv.className = "cateGroup"
				odiv.innerHTML = `
               <div class="group-name">${data[i].fenlei[j].fenlei1}</div>
               `

				qwer[i].appendChild(odiv)
				for (let x = 0; x < data[i].fenlei[j].fenlei2.length; x++) {
					var oDiv = document.createElement("div")
					oDiv.className = "colum"
					oDiv.innerHTML = `
               <div class="cateItem">
                                    <img src="${data[i].fenlei[j].image[x]}" alt="">
                                    <span>${data[i].fenlei[j].fenlei2[x]}</span>
                                </div>
               `
					cateGroup[a].appendChild(oDiv)
				}
			}
		}

	}
})