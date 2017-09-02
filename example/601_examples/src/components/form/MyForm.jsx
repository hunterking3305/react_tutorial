require('./myForm.scss');

var cities = require('./cities');

var MyForm = React.createClass({
  getInitialState: function() {
    return {
      name: '',
      tel: '',
      gender: 'male',
      time:{
        morning: false,
        afternoon: false,
        night: false
      },
      city: 1,
      comments:'',
      image:''
    };
  },
  setName:function(e){
    this.setState({name:e.target.value});
  },
  setTel:function(e){
    this.setState({tel:e.target.value});
  },
  setGender:function(e){
    this.setState({gender: e.target.value});
  },
  setTime:function(e){
    var key = e.target.value;
    var checked = e.target.checked;
    this.state.time[key] = checked;
    this.forceUpdate();
  },
  setCity:function(e){
    this.setState({city:e.target.value});
  },
  setComments:function(e){
    this.setState({comments:e.target.value});
  },
  setImage:function(e){
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = function(){
      this.setState({image:reader.result});
    }.bind(this);
    reader.readAsDataURL(file);
    // https://developer.mozilla.org/zh-TW/docs/Web/API/FileReader
  },
  submit:function(){
    alert(JSON.stringify(this.state, null, '  '));
  },
  render: function() {
    return (
      <div className='form'>
        <h1>聯絡我們</h1>
        <table>
          <tr>
            <th>您的大名</th>
            <td>
              <input
                type='text'
                placeholder='請輸入姓名'
                value={this.state.name}
                onChange={this.setName}
                />
            </td>
          </tr>

          <tr>
            <th>您的電話</th>
            <td>
              <input
                type='text'
                placeholder='請輸入電話'
                value={this.state.tel}
                onChange={this.setTel}
                />
            </td>
          </tr>

          <tr>
            <th>性別</th>
            <td>
              <input
                type='radio'
                id='radio-male'
                value='male'
                checked={this.state.gender==='male'}
                onChange={this.setGender}
                />
              <label htmlFor='radio-male'>男</label>
              <input
                type='radio'
                id='radio-female'
                value='female'
                checked={this.state.gender==='female'}
                onChange={this.setGender}
                />
              <label htmlFor='radio-female'>女</label>
              <input
                type='radio'
                id='radio-other'
                value='other'
                checked={this.state.gender==='other'}
                onChange={this.setGender}
                />
              <label htmlFor='radio-other'>其他</label>
            </td>
          </tr>

          <tr>
            <th>可聯絡時間</th>
            <td>
              <input
                type='checkbox'
                id='check1'
                checked={this.state.time.morning}
                value='morning'
                onChange={this.setTime}
                />
              <label htmlFor='check1'>上午</label>
              <input
                type='checkbox'
                id='check2'
                checked={this.state.time.afternoon}
                value='afternoon'
                onChange={this.setTime}
                />
              <label htmlFor='check2'>下午</label>
              <input
                type='checkbox'
                id='check3'
                checked={this.state.time.night}
                value='night'
                onChange={this.setTime}
                />
              <label htmlFor='check3'>晚上</label>
            </td>
          </tr>

          <tr>
            <th>居住地:</th>
            <td>
              <select value={this.state.city} onChange={this.setCity}>
                {cities.map(function(c){
                  return (
                    <option key={c.name} value={c.id}>{c.name}</option>
                  );
                })}
              </select>
            </td>
          </tr>

          <tr>
            <th>您的意見</th>
            <td>
              <textarea
                value={this.state.comments}
                onChange={this.setComments}
                />
            </td>
          </tr>

          <tr>
            <th>上傳圖片</th>
            <td>
              <input
                type='file'
                accept='image/*'
                onChange={this.setImage}
                />
              <img className='image' src={this.state.image}/>
            </td>
          </tr>
        </table>

        <button onClick={this.submit}>確認送出</button>
      </div>
    );
  }
});
module.exports = MyForm;
