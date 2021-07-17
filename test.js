/*
 *Created by hongyan on 2021/7/10
 */

var a = {
    id: 1,
    name: "hongyan",
    address: "china",
};
for (var i in a) {
    console.log(a[i])
}
// console.log(a);

var xhr = new XMLHttpRequest()
xhr.open("GET", "http://www.liulongbin.top:3006/api/getbooks")
xhr.send()
xhr.onreadystatechange(function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText)
    }
})
