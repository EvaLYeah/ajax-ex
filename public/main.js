getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/js1.js')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const script = document.createElement('script')
            script.innerHTML = request.response
            document.body.appendChild(script)
        }
    }
    request.send()
}

getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const style = document.createElement('style')
            style.innerHTML = request.response
            document.head.appendChild(style)
        }
    }
    request.send()
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/index2.html')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const span = document.createElement('span')
            span.innerHTML = request.response
            document.body.appendChild(span)
        }
    }
    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/xml1.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0]
            document.body.appendChild(text)
        }
    }
    request.send()
}

getJSON.onclick = () => {
    getPage.style = 'display: default'
    getJSON.style = 'display: none'
    const request = new XMLHttpRequest()
    request.open('GET', '/page.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.response)
            const ul = document.createElement('ul')
            document.body.appendChild(ul)
            data.forEach(item => {
                const li = document.createElement('li')
                li.innerHTML = item.id
                ul.appendChild(li)
            })

        }
    }
    request.send()
}

let n = 0
getPage.onclick = () => {
    if (n < 3) {
        const request = new XMLHttpRequest()
        request.open('GET', `/page${n + 1}.json`)
        request.onreadystatechange = () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.response)
                const ul = document.getElementsByTagName('ul')[0]
                data.forEach(item => {
                    const li = document.createElement('li')
                    li.innerHTML = item.id
                    ul.appendChild(li)
                })
                n += 1
            }
        }
        request.send()
    } else {
        const div = document.createElement('div')
        div.textContent = '没有下一页啦，别点啦'
        document.body.appendChild(div)
    }
}
