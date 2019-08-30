$.ajax({
    type: 'get',
    url: '/posts/recommend',
    success(data) {
        let temp = `
        {{each data}}
        <li>
          <a href="detail.html?id={{$value._id}}">
            <img src="{{$value.thumbnail}}" alt="">
            <span>{{$value.title}}</span>
          </a>
        </li>
        {{/each}}
        `;
        let hots = template.render(temp, {data});
        $('#hotsBox').html(hots);
    }
});