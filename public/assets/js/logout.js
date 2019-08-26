$('#logout').on('click', function () {
    if (confirm('您真的要退出吗？')) {
        $.ajax({
            type: 'post',
            url: '/logout',
            success() {
                location.href = 'login.html';
            },
            error(data) {
                alert('退出失败！');
            }
        });
    }
});