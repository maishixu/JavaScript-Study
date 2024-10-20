const labels = document.querySelectorAll(".form-control label")

labels.forEach(function(item){
    //拆分字符
    let charArr = item.textContent.split('')
    //每个字符变为标签
    let spanArr = charArr.map(function(item,idx){
        return `<span style="transition-delay:${idx*50}ms">${item}</span>`
    })
    //将标签结合
    let tagArr = spanArr.join('')
    //将标签插入到lable中
    item.innerHTML = tagArr
})