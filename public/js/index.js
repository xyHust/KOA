setTimeout(()=>{
    $.ajax({
        url:"/Users.action",
        method:'get',
        success:(data)=>{
            let str = data.map((arr)=>{
                return `<li>${arr}</li>`;
            }).join('');
            $('#root').hide().html(str).show(500);
        },
         fail: function() {
             console.log(error);
         }
    });

    $.ajax({
            url: "/shop.action",
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            data: JSON.stringify([
                "name:", "Sheldon-Yee",
                "operation",'Tengxun'
            ]),
            success: function(data) {
                var str = data.map(function(arr) {
                    return '<li>' + arr + '</li>'
                }).join('');
                $('#shop').hide().html(str).show(1000);
            },
            fail: function() {
                console.log(error);
            }
        });
},1000)