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
      city: 0,
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
    // e.target.files 是一個 FileList 的類別,看似陣列
    const file = e.target.files.item(0);
    const reader = new FileReader();
    reader.onload = () => {
      this.setState({image : reader.result})
    };
    // base64 data url
    reader.readAsDataURL(file)
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
                onChange={this.setGender}
                checked={this.state.gender === 'male'}
                />
              <label htmlFor='radio-male'>男</label>
              <input
                type='radio'
                id='radio-female'
                value='female'
                onChange={this.setGender}
                checked={this.state.gender === 'female'}
                />
              <label htmlFor='radio-female'>女</label>
              <input
                type='radio'
                id='radio-other'
                value='other'
                onChange={this.setGender}
                checked={this.state.gender === 'other'}
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
                value='morning'
                onChange={this.setTime}
                checked={this.state.time.morning}
                />
              <label htmlFor='check1'>上午</label>
              <input
                type='checkbox'
                id='check2'
                value='afternoon'
                onChange={this.setTime}
                checked={this.state.time.afternoon}
                />
              <label htmlFor='check2'>下午</label>
              <input
                type='checkbox'
                id='check3'
                value='night'
                onChange={this.setTime}
                checked={this.state.time.night}
                />
              <label htmlFor='check3'>晚上</label>
            </td>
          </tr>

          <tr>
            <th>居住地:</th>
            <td>
              <select value={this.state.city} onChange={this.setCity}>
                <option value={0} disabled>Please Select City</option>
                {cities.map(city => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
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
                multiple
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
